'use client';
import { motion } from 'framer-motion';
import { FaVirus, FaBrain, FaUtensils, FaTableTennis, FaStore, FaFileMedical } from 'react-icons/fa';

type Project = {
  icon: React.ReactNode;
  category: string;
  title: string;
  desc: string;
  tags: string[];
};

const freelance: Project[] = [
  {
    icon: <FaTableTennis className="text-3xl" style={{ color: '#f59e0b' }} />,
    category: 'Personal Project',
    title: 'Tennis Community Platform',
    desc: 'Full-featured tennis club web application built with React.js and Firebase, featuring a player portal with profile management, a court booking system with real-time availability, and a live chat interface supporting both group channels and direct player-to-player messaging.',
    tags: ['React.js', 'Firebase', 'Real-time Chat', 'Booking System', 'Player Portal'],
  },
  {
    icon: <FaStore className="text-3xl" style={{ color: '#f472b6' }} />,
    category: 'Freelance',
    title: 'Nails Studio Digital Catalogue',
    desc: 'Designed and developed a visually engaging digital catalogue for a nail studio to enhance online visibility and client acquisition. Features a curated service showcase with an intuitive UX and an integrated AI-powered chatbot capable of answering client inquiries, recommending services, and streamlining appointment requests.',
    tags: ['Web Design', 'UX/UI', 'AI Chatbot', 'Freelance', 'Client Catalogue'],
  },
];

const academic: Project[] = [
  {
    icon: <FaFileMedical className="text-3xl" style={{ color: '#34d399' }} />,
    category: 'Academic',
    title: 'Medical Document Summarisation with LLMs',
    desc: 'Developed an NLP pipeline for automated summarisation of clinical and medical documents, leveraging large language models (LLMs) combined with expert annotation workflows. The system reduces information overload for healthcare professionals by generating accurate, structured summaries from complex medical reports.',
    tags: ['NLP', 'LLMs', 'Annotation', 'Medical AI', 'Summarisation'],
  },
  {
    icon: <FaVirus className="text-3xl" style={{ color: 'var(--accent)' }} />,
    category: 'Academic',
    title: 'COVID-19 Detection from Speech',
    desc: 'Processed patients\' speech signals by extracting relevant acoustic features. Classified COVID-19 infection using a deep learning model trained on vocal recordings, enabling non-invasive preliminary screening.',
    tags: ['Signal Processing', 'Librosa', 'Deep Learning', 'Healthcare AI'],
  },
  {
    icon: <FaBrain className="text-3xl" style={{ color: 'var(--accent)' }} />,
    category: 'Academic · Al-Faisal University Collaboration',
    title: 'Stroke Diagnosis & Outcome Prediction',
    desc: 'Dual deep learning system combining MRI-based stroke detection with a risk prediction model driven by patient diagnostic inputs. Both models were deployed within a unified web application for clinical use.',
    tags: ['Computer Vision', 'MRI', 'PyTorch', 'Web App', 'Healthcare AI'],
  },
  {
    icon: <FaUtensils className="text-3xl" style={{ color: 'var(--accent)' }} />,
    category: 'Internship Project',
    title: 'Restaurant Chain Management Platform',
    desc: 'Full-stack platform aggregating all restaurant chains in Tunisia with detailed descriptions and a centralised online ordering interface, simplifying discovery and improving customer experience.',
    tags: ['Full-Stack', 'Web Dev', 'E-Commerce'],
  },
];

function ProjectCard({ p, i, accent }: { p: Project; i: number; accent?: string }) {
  return (
    <motion.div
      className="rounded-xl border p-6 flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      whileHover={{ borderColor: accent ?? 'rgba(99,179,237,0.45)', boxShadow: '0 8px 30px rgba(99,179,237,0.08)' }}
    >
      <div className="mb-4">{p.icon}</div>
      <p className="font-mono text-xs mb-1" style={{ color: 'var(--muted)' }}>{p.category}</p>
      <h3 className="font-semibold text-sm mb-3 leading-snug">{p.title}</h3>
      <p className="text-xs leading-6 mb-5 flex-1" style={{ color: 'var(--muted)' }}>{p.desc}</p>
      <div className="flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-2.5 py-0.5 rounded border"
            style={{ color: 'var(--accent)', borderColor: 'rgba(99,179,237,0.2)', background: 'rgba(99,179,237,0.06)' }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="font-bold mb-14 flex items-center gap-3"
          style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}
        >
          <span className="font-mono" style={{ color: 'var(--accent)', fontSize: '0.85em' }}>04.</span>
          Projects
          <span className="flex-1 h-px max-w-xs" style={{ background: 'var(--border)' }} />
        </h2>

        {/* Personal & Freelance */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: 'var(--muted)' }}>
            Personal &amp; Freelance
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {freelance.map((p, i) => <ProjectCard key={i} p={p} i={i} />)}
          </div>
        </div>

        {/* Academic */}
        <div>
          <p className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: 'var(--muted)' }}>
            Academic &amp; Research Projects
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {academic.map((p, i) => <ProjectCard key={i} p={p} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
