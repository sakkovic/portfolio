'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research',   href: '#research' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
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
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 border-b transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,12,20,0.97)' : 'rgba(8,12,20,0.85)',
        backdropFilter: 'blur(12px)',
        borderColor: 'var(--border)',
      }}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Logo */}
      <motion.a
        href="#hero"
        className="font-mono text-lg font-medium"
        style={{ color: 'var(--text)' }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        <span style={{ color: 'var(--accent)' }}>&lt;</span>
        SMA
        <span style={{ color: 'var(--accent)' }}>/&gt;</span>
      </motion.a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 items-center">
        {links.map((l, i) => (
          <motion.li
            key={l.href}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
          >
            <a
              href={l.href}
              className="relative text-sm font-medium group flex flex-col items-center gap-0.5 py-1"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}
            >
              {l.label}
              <motion.span
                className="h-0.5 rounded-full w-full"
                style={{ background: 'var(--accent)', originX: 0 }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              />
            </a>
          </motion.li>
        ))}

        <motion.li
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}
        >
          <motion.a
            href="#contact"
            className="text-sm font-semibold px-4 py-2 rounded-md inline-block"
            style={{ background: 'var(--accent)', color: 'var(--bg)' }}
            whileHover={{
              scale: 1.06,
              boxShadow: '0 0 20px rgba(99,179,237,0.5)',
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 350, damping: 18 }}
          >
            Contact
          </motion.a>
        </motion.li>
      </ul>

      {/* Hamburger */}
      <motion.button
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        whileTap={{ scale: 0.9 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block w-6 h-0.5 rounded-full"
            style={{ background: 'var(--text)' }}
            animate={
              open
                ? i === 0 ? { rotate: 45, y: 8 }
                : i === 1 ? { opacity: 0 }
                : { rotate: -45, y: -8 }
                : { rotate: 0, y: 0, opacity: 1 }
            }
            transition={{ duration: 0.25 }}
          />
        ))}
      </motion.button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-full left-0 right-0 flex flex-col gap-6 p-8 md:hidden border-b"
            style={{ background: 'var(--bg-2)', borderColor: 'var(--border)' }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {[...links, { label: 'Contact', href: '#contact' }].map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="text-sm font-medium"
                style={{ color: 'var(--muted)' }}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
                whileHover={{ color: 'var(--accent)', x: 4 }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
