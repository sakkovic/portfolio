'use client';
import { motion } from 'framer-motion';
import { FaVirus, FaBrain, FaUtensils, FaTableTennis, FaStore, FaFileMedical, FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
  icon: React.ReactNode;
  category: string;
  title: string;
  desc: string;
  tags: string[];
  link?: string;
  accentColor?: string;
};

const academic: Project[] = [
  {
    icon: <FaFileMedical className="text-3xl" style={{ color: '#34d399' }} />,
    accentColor: '#34d399',
    category: 'Academic',
    title: 'Medical Document Summarization with LLMs',
    desc: 'Developed an NLP pipeline for automated summarization of clinical and medical documents, leveraging large language models combined with expert annotation workflows on the INCEPTION platform. Generates accurate, structured summaries from complex medical reports.',
    tags: ['NLP', 'LLMs', 'INCEPTION', 'Annotation', 'Medical AI', 'Summarization'],
  },
  {
    icon: <FaVirus className="text-3xl" style={{ color: '#63b3ed' }} />,
    accentColor: '#63b3ed',
    category: 'Academic',
    title: 'COVID-19 Detection from Speech',
    desc: 'Processed patients\' speech signals by extracting relevant acoustic features. Classified COVID-19 infection using a deep learning model trained on vocal recordings, enabling non-invasive preliminary screening.',
    tags: ['Signal Processing', 'Librosa', 'Deep Learning', 'Healthcare AI'],
  },
  {
    icon: <FaBrain className="text-3xl" style={{ color: '#a78bfa' }} />,
    accentColor: '#a78bfa',
    category: 'Academic · Al-Faisal University Collaboration',
    title: 'Stroke Diagnosis & Outcome Prediction',
    desc: 'Dual deep learning system combining MRI-based stroke detection with a risk prediction model driven by patient diagnostic inputs. Both models were deployed within a unified web application for clinical use.',
    tags: ['Computer Vision', 'MRI', 'PyTorch', 'Web App', 'Healthcare AI'],
  },
  {
    icon: <FaUtensils className="text-3xl" style={{ color: '#fb923c' }} />,
    accentColor: '#fb923c',
    category: 'Internship Project',
    title: 'Restaurant Chain Management Platform',
    desc: 'Full-stack platform aggregating all restaurant chains in Tunisia with detailed descriptions and a centralized online ordering interface, simplifying discovery and improving customer experience.',
    tags: ['Full-Stack', 'Web Dev', 'E-Commerce'],
  },
];

const freelance: Project[] = [
  {
    icon: <FaTableTennis className="text-3xl" style={{ color: '#f59e0b' }} />,
    accentColor: '#f59e0b',
    category: 'Personal Project',
    title: 'Tennis Community Platform',
    desc: 'Full-featured tennis club web application built with React.js and Firebase, featuring a player portal with profile management, a court booking system with real-time availability, and a live chat interface supporting both group channels and direct messaging.',
    tags: ['React.js', 'Firebase', 'Real-time Chat', 'Booking System', 'Player Portal'],
    link: 'https://www.tennissakkamtl.com/',
  },
  {
    icon: <FaStore className="text-3xl" style={{ color: '#f472b6' }} />,
    accentColor: '#f472b6',
    category: 'Freelance',
    title: 'Nails Studio Digital Catalogue',
    desc: 'Designed and developed a visually engaging digital catalog for a nail studio to enhance online visibility and client acquisition. Features a curated service showcase with an intuitive UX and an integrated AI-powered chatbot capable of answering client inquiries and streamlining appointment requests.',
    tags: ['Web Design', 'UX/UI', 'AI Chatbot', 'Freelance', 'Client Catalogue'],
    link: 'https://nails-catalog.vercel.app/',
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const accent = p.accentColor ?? 'rgba(99,179,237,0.7)';
  return (
    <motion.div
      className="rounded-xl border p-6 flex flex-col relative overflow-hidden group"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: i * 0.1, duration: 0.55 }}
      whileHover={{
        y: -8,
        borderColor: `${accent}66`,
        boxShadow: `0 20px 50px ${accent}18`,
        transition: { duration: 0.25 },
      }}
    >
      {/* Top accent glow line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="mb-4 w-fit"
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        {p.icon}
      </motion.div>

      <p className="font-mono text-xs mb-1" style={{ color: 'var(--muted)' }}>{p.category}</p>
      <h3 className="font-semibold text-sm mb-3 leading-snug">{p.title}</h3>
      <p className="text-xs leading-6 mb-5 flex-1" style={{ color: 'var(--muted)' }}>{p.desc}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {p.tags.map((t) => (
          <motion.span
            key={t}
            className="font-mono text-xs px-2.5 py-0.5 rounded border"
            style={{ color: accent, borderColor: `${accent}33`, background: `${accent}0f` }}
            whileHover={{ background: `${accent}22`, scale: 1.05 }}
            transition={{ duration: 0.15 }}
          >
            {t}
          </motion.span>
        ))}
      </div>

      {p.link && (
        <motion.a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono mt-auto pt-3 border-t"
          style={{ color: accent, borderColor: `${accent}33` }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          <FaExternalLinkAlt style={{ fontSize: '0.6rem', flexShrink: 0 }} />
          <span className="font-semibold">Live Demo</span>
          <span style={{ color: 'var(--muted)', fontWeight: 400 }}>→ {p.link}</span>
        </motion.a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <motion.section id="projects" className="py-24" style={{ background: 'var(--bg)' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="font-bold mb-14 flex items-center gap-4"
          style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
          <span className="flex-1 h-px max-w-xs" style={{ background: 'var(--border)' }} />
        </motion.h2>

        {/* Academic first */}
        <div className="mb-12">
          <motion.p
            className="text-xs uppercase tracking-widest font-semibold mb-6"
            style={{ color: 'var(--muted)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Academic &amp; Research
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-6">
            {academic.map((p, i) => <ProjectCard key={i} p={p} i={i} />)}
          </div>
        </div>

        {/* Freelance & Personal at end */}
        <div>
          <motion.p
            className="text-xs uppercase tracking-widest font-semibold mb-6"
            style={{ color: 'var(--muted)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Personal &amp; Freelance
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-6">
            {freelance.map((p, i) => <ProjectCard key={i} p={p} i={i} />)}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
