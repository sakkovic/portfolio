'use client';
import { createContext, useContext, useEffect, useSyncExternalStore } from 'react';

export type Lang = 'en' | 'fr';

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'en',
  setLang: () => {},
});

const listeners = new Set<() => void>();
let current: Lang | null = null;

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

// Saved choice first, otherwise follow the browser language
function getSnapshot(): Lang {
  if (current) return current;
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'fr') return saved;
  } catch {}
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

const getServerSnapshot = (): Lang => 'en';

function setLang(l: Lang) {
  current = l;
  try {
    localStorage.setItem('lang', l);
  } catch {}
  listeners.forEach((cb) => cb());
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
