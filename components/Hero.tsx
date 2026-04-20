'use client';
import { motion } from 'framer-motion';
import { FaPython, FaBrain, FaShieldAlt, FaNetworkWired, FaFlask, FaPaperPlane, FaChevronDown } from 'react-icons/fa';

const orbitDots = [
  { icon: <FaPython />, color: '#3776ab', pos: 'top-0 left-1/2 -translate-x-1/2', delay: 0 },
  { icon: <FaBrain />, color: '#a78bfa', pos: 'top-1/2 right-0 -translate-y-1/2', delay: 0.2 },
  { icon: <FaShieldAlt />, color: '#34d399', pos: 'bottom-0 left-1/2 -translate-x-1/2', delay: 0.4 },
  { icon: <FaNetworkWired />, color: '#f59e0b', pos: 'top-1/2 left-0 -translate-y-1/2', delay: 0.6 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-between gap-16 px-6 md:px-16 pt-24 pb-16 max-w-6xl mx-auto"
    >
      {/* Text */}
      <motion.div
        className="flex-1 max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-mono text-sm mb-3" style={{ color: 'var(--accent)' }}>
          Hello, World! I&apos;m
        </p>
        <h1
          className="font-bold leading-tight mb-4"
          style={{
            fontSize: 'clamp(2.4rem,5vw,4rem)',
            background: 'linear-gradient(135deg,#fff 0%,#63b3ed 55%,#7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Sakka Mohamed Anis
        </h1>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          {['AI Researcher', 'Security Engineer', 'Developer'].map((r) => (
            <span
              key={r}
              className="font-mono text-xs px-3 py-1 rounded-full border"
              style={{ color: 'var(--accent)', borderColor: 'var(--border)', background: 'rgba(99,179,237,0.08)' }}
            >
              {r}
            </span>
          ))}
        </div>

        <p className="mb-8 leading-8" style={{ color: 'var(--muted)', fontSize: '1.02rem' }}>
          Predicting cyber-attacks in 5G networks with deep learning.<br />
          Building the intersection of{' '}
          <span style={{ color: 'var(--accent)', fontWeight: 500 }}>AI</span>,{' '}
          <span style={{ color: 'var(--accent)', fontWeight: 500 }}>Security</span> &amp;{' '}
          <span style={{ color: 'var(--accent)', fontWeight: 500 }}>Networks</span>.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#research"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'var(--accent)', color: 'var(--bg)' }}
          >
            <FaFlask /> View Research
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border transition-all duration-200 hover:-translate-y-0.5"
            style={{ color: 'var(--accent)', borderColor: 'var(--accent)', background: 'transparent' }}
          >
            <FaPaperPlane /> Get in Touch
          </a>
        </div>

        <div className="flex gap-10">
          {[['2', 'Publications'], ['5G', 'Research Focus'], ['50+', 'Students Taught']].map(([num, label]) => (
            <div key={label} className="text-center">
              <span className="block font-mono font-bold text-3xl" style={{ color: 'var(--accent)' }}>{num}</span>
              <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Avatar */}
      <motion.div
        className="hidden lg:flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="relative w-64 h-64">
          {/* Rings */}
          <div
            className="spin-slow absolute inset-0 rounded-full border-2"
            style={{ borderColor: 'rgba(99,179,237,0.3)' }}
          />
          <div
            className="spin-slow-rev absolute inset-5 rounded-full border-2"
            style={{ borderColor: 'rgba(124,58,237,0.3)' }}
          />

          {/* Core */}
          <div
            className="pulse-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center text-5xl border-2"
            style={{
              background: 'linear-gradient(135deg,var(--bg-card),#1a2340)',
              borderColor: 'var(--accent)',
              color: 'var(--accent)',
            }}
          >
            <FaShieldAlt />
          </div>

          {/* Orbit dots */}
          {orbitDots.map((d, i) => (
            <motion.div
              key={i}
              className={`absolute ${d.pos} w-11 h-11 rounded-full flex items-center justify-center text-lg border`}
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: d.color }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: d.delay }}
            >
              {d.icon}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="scroll-bounce absolute bottom-8 left-1/2 text-xl"
        style={{ color: 'var(--muted)' }}
      >
        <FaChevronDown />
      </a>
    </section>
  );
}
