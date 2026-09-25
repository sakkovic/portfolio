'use client';
import { useLang } from '@/lib/i18n';

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer
      className="py-8 text-center border-t"
      style={{ background: 'var(--bg-2)', borderColor: 'var(--border)' }}
    >
      <p className="text-lg font-mono font-medium mb-1">
        <span style={{ color: 'var(--accent)' }}>&lt;</span>
        SMA
        <span style={{ color: 'var(--accent)' }}>/&gt;</span>
      </p>
      <p className="text-xs" style={{ color: 'var(--muted)' }}>
        {lang === 'fr' ? 'Conçu et développé par Anis Sakka · Montréal, Canada' : 'Designed & built by Anis Sakka · Montréal, Canada'}
      </p>
      <p className="text-xs mt-1 font-mono" style={{ color: 'var(--accent)', opacity: 0.6 }}>
        {lang === 'fr' ? 'IA · Sécurité · Réseaux' : 'AI · Security · Networks'}
      </p>
    </footer>
  );
}
