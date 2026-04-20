'use client';
import { useState, useEffect } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 border-b transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,12,20,0.97)' : 'rgba(8,12,20,0.85)',
        backdropFilter: 'blur(12px)',
        borderColor: 'var(--border)',
      }}
    >
      {/* Logo */}
      <a href="#hero" className="font-mono text-lg font-medium" style={{ color: 'var(--text)' }}>
        <span style={{ color: 'var(--accent)' }}>&lt;</span>
        SMA
        <span style={{ color: 'var(--accent)' }}>/&gt;</span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 items-center">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-[var(--accent)]"
              style={{ color: 'var(--muted)' }}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="text-sm font-semibold px-4 py-2 rounded-md transition-opacity hover:opacity-85"
            style={{ background: 'var(--accent)', color: 'var(--bg)' }}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block w-6 h-0.5 transition-all duration-300"
            style={{ background: 'var(--text)' }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-6 p-8 md:hidden border-b"
          style={{ background: 'var(--bg-2)', borderColor: 'var(--border)' }}
        >
          {[...links, { label: 'Contact', href: '#contact' }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium"
              style={{ color: 'var(--muted)' }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
