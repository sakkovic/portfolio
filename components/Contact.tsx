'use client';
import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUniversity, FaLinkedin, FaPhone, FaPaperPlane, FaCheck } from 'react-icons/fa';

const contactLinks = [
  { icon: <FaEnvelope />, label: 'anis.federe@gmail.com', href: 'mailto:anis.federe@gmail.com' },
  { icon: <FaUniversity />, label: 'mohamed-anis.sakka.1@ens.etsmtl.ca', href: 'mailto:mohamed-anis.sakka.1@ens.etsmtl.ca' },
  { icon: <FaLinkedin />, label: 'linkedin.com/in/mohamed-anis-sakka', href: 'https://www.linkedin.com/in/mohamed-anis-sakka/' },
  { icon: <FaPhone />, label: '+1 (514) 812 0621', href: 'tel:+15148120621' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="font-bold mb-14 flex items-center gap-3"
          style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}
        >
          <span className="font-mono" style={{ color: 'var(--accent)', fontSize: '0.85em' }}>06.</span>
          Contact
          <span className="flex-1 h-px max-w-xs" style={{ background: 'var(--border)' }} />
        </h2>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-3">Let&apos;s Connect</h3>
            <p className="mb-8 leading-7" style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
              Whether you&apos;re interested in research collaboration, have a project idea, or just want to say
              hi — my inbox is always open.
            </p>

            <div className="flex flex-col gap-3">
              {contactLinks.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border text-sm transition-all duration-200 hover:translate-x-1"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--muted)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--text)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                  }}
                >
                  <span style={{ color: 'var(--accent)', width: 16 }}>{l.icon}</span>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {(['Name', 'Email'] as const).map((field) => (
              <input
                key={field}
                type={field === 'Email' ? 'email' : 'text'}
                placeholder={field === 'Email' ? 'your@email.com' : 'Your Name'}
                required
                className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all duration-200 focus:ring-2"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent)';
                  e.target.style.boxShadow = '0 0 0 3px rgba(99,179,237,0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            ))}

            <textarea
              rows={5}
              placeholder="Your message..."
              required
              className="w-full px-4 py-3 rounded-lg border text-sm outline-none resize-none transition-all duration-200"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                color: 'var(--text)',
                fontFamily: 'inherit',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--accent)';
                e.target.style.boxShadow = '0 0 0 3px rgba(99,179,237,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--border)';
                e.target.style.boxShadow = 'none';
              }}
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
              style={{
                background: sent ? '#34d399' : 'var(--accent)',
                color: 'var(--bg)',
              }}
            >
              {sent ? <><FaCheck /> Message Sent!</> : <><FaPaperPlane /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
