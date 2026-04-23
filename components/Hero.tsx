'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPython, FaBrain, FaShieldAlt, FaNetworkWired, FaFlask, FaPaperPlane, FaChevronDown } from 'react-icons/fa';

const orbitDots = [
  { icon: <FaPython />, color: '#3776ab', label: 'Python', angle: 270 }, // top
  { icon: <FaBrain />, color: '#a78bfa', label: 'AI', angle: 0 }, // right
  { icon: <FaShieldAlt />, color: '#34d399', label: 'Security', angle: 90 }, // bottom  ← hand
  { icon: <FaNetworkWired />, color: '#f59e0b', label: 'Networks', angle: 180 }, // left
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-between gap-10 px-6 md:px-16 pt-24 pb-16 max-w-6xl mx-auto"
    >
      {/* ── Left: text ── */}
      <motion.div
        className="flex-1 max-w-xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-mono text-sm mb-3" style={{ color: 'var(--accent)' }}>
          Hello, World! I&apos;m
        </p>
        <h1
          className="font-bold leading-tight mb-2"
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
        <p className="font-semibold mb-4" style={{ color: 'var(--accent)', fontSize: '1.05rem' }}>
          IT Engineer
        </p>
        <p className="mb-5 leading-7 text-sm" style={{ color: 'var(--muted)' }}>
          AI for network security and decision-making in 5G/cloud systems.
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          {['AI Researcher', 'Security Engineer', 'Developer'].map((r, i) => (
            <motion.span
              key={r}
              className="font-mono text-xs px-3 py-1 rounded-full border cursor-default"
              style={{ color: 'var(--accent)', borderColor: 'var(--border)', background: 'rgba(99,179,237,0.08)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.4, type: 'spring', stiffness: 300 }}
              whileHover={{ scale: 1.1, background: 'rgba(99,179,237,0.18)', borderColor: 'var(--accent)' }}
            >
              {r}
            </motion.span>
          ))}
        </div>

        <p className="mb-8 leading-8" style={{ color: 'var(--muted)', fontSize: '1.02rem' }}>
          Predicting cyber-attacks in 5G networks with deep learning.<br />
          Building the intersection of{' '}
          <span style={{ color: 'var(--accent)', fontWeight: 500 }}>AI</span>,{' '}
          <span style={{ color: 'var(--accent)', fontWeight: 500 }}>Security</span> &amp;{' '}
          <span style={{ color: 'var(--accent)', fontWeight: 500 }}>Cloud</span>.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#research"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
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
          {[['3', 'Publications'], ['AI for 5G Security', 'Research Focus'], ['50+', 'Students Taught']].map(([num, label], i) => (
            <motion.div
              key={label}
              className="text-center cursor-default"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.12, duration: 0.5 }}
              whileHover={{ scale: 1.12 }}
            >
              <motion.span
                className="block font-mono font-bold text-3xl"
                style={{ color: 'var(--accent)' }}
                whileHover={{ textShadow: '0 0 20px rgba(99,179,237,0.8)' }}
              >{num}</motion.span>
              <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Right: photo + animated orbital overlay ── */}
      <motion.div
        className="hidden lg:flex relative items-end justify-center flex-shrink-0"
        style={{ width: 420, height: 520 }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Photo */}
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            width: 400,
            height: 500,
            boxShadow: '0 0 60px rgba(99,179,237,0.15), 0 0 0 1px rgba(99,179,237,0.1)',
          }}
        >
          <Image
            src="/hero2.png"
            alt="Sakka Mohamed Anis"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
          {/* bottom gradient fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 100%)' }}
          />
        </div>

        {/* ── Orbital ring system — client-only to avoid SSR/hydration mismatch ── */}
        {mounted && <div
          className="absolute"
          style={{ bottom: 100, left: 20, width: 220, height: 220 }}
        >
          {/* Outer spinning ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: 'rgba(99,179,237,0.35)', borderStyle: 'dashed' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />

          {/* Inner spinning ring */}
          <motion.div
            className="absolute rounded-full border"
            style={{
              inset: 22,
              borderColor: 'rgba(124,58,237,0.4)',
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
          />

          {/* Glowing centre core */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
            style={{
              width: 64, height: 64,
              background: 'radial-gradient(circle, rgba(99,179,237,0.25) 0%, rgba(8,12,20,0.9) 70%)',
              border: '1.5px solid rgba(99,179,237,0.6)',
              boxShadow: '0 0 24px rgba(99,179,237,0.5), inset 0 0 12px rgba(99,179,237,0.15)',
              color: 'var(--accent)',
              fontSize: '1.6rem',
            }}
            animate={{ boxShadow: ['0 0 20px rgba(99,179,237,0.4)', '0 0 40px rgba(99,179,237,0.75)', '0 0 20px rgba(99,179,237,0.4)'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaShieldAlt />
          </motion.div>

          {/* Orbit dots — they rotate around the ring */}
          {orbitDots.map((dot, i) => {
            const rad = (dot.angle * Math.PI) / 180;
            const r = 88; // orbit radius
            const x = Math.cos(rad) * r + 110 - 20; // 110 = center, 20 = half dot size
            const y = Math.sin(rad) * r + 110 - 20;
            return (
              <motion.div
                key={i}
                className="absolute w-10 h-10 rounded-full flex items-center justify-center text-base"
                style={{
                  left: x,
                  top: y,
                  background: 'rgba(13,17,32,0.92)',
                  border: `1.5px solid ${dot.color}44`,
                  color: dot.color,
                  boxShadow: `0 0 10px ${dot.color}66`,
                  backdropFilter: 'blur(4px)',
                }}
                animate={{ scale: [1, 1.18, 1], boxShadow: [`0 0 8px ${dot.color}44`, `0 0 18px ${dot.color}99`, `0 0 8px ${dot.color}44`] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
                title={dot.label}
              >
                {dot.icon}
              </motion.div>
            );
          })}

          {/* Particle dots on the outer ring */}
          {[0, 72, 144, 216, 288].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const r = 107;
            const x = Math.cos(rad) * r + 110 - 3;
            const y = Math.sin(rad) * r + 110 - 3;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{ left: x, top: y, width: 6, height: 6, background: 'var(--accent)' }}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.4, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
              />
            );
          })}
        </div>}

        {/* Subtle glow beneath the orbital */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            bottom: 40, left: -10,
            width: 260, height: 260,
            background: 'radial-gradient(circle, rgba(99,179,237,0.08) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
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
