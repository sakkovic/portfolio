'use client';
import { motion } from 'framer-motion';
import { FaVirus, FaBrain, FaUtensils } from 'react-icons/fa';

const projects = [
  {
    icon: <FaVirus className="text-3xl" style={{ color: 'var(--accent)' }} />,
    title: 'COVID-19 Detection from Speech',
    desc: 'Processed patients\' speech signals by extracting acoustic features. Classified COVID-19 infection using a deep learning model from vocal recordings.',
    tags: ['Signal Processing', 'Librosa', 'Deep Learning'],
  },
  {
    icon: <FaBrain className="text-3xl" style={{ color: 'var(--accent)' }} />,
    title: 'Stroke Diagnosis & Outcome Prediction',
    desc: 'Dual deep learning system: stroke detection from MRI images + future risk prediction from diagnostic inputs. Deployed as a full web application. Collaboration with Al-Faisal University.',
    tags: ['Computer Vision', 'MRI', 'PyTorch', 'Web App'],
  },
  {
    icon: <FaUtensils className="text-3xl" style={{ color: 'var(--accent)' }} />,
    title: 'Restaurant Chain Management Platform',
    desc: 'Full-stack platform aggregating all restaurant chains in Tunisia with descriptions and online ordering on a unified interface.',
    tags: ['Full-Stack', 'Web Dev', 'E-Commerce'],
  },
];

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="rounded-xl border p-6 flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ borderColor: 'rgba(99,179,237,0.45)', boxShadow: '0 8px 30px rgba(99,179,237,0.08)' }}
            >
              <div className="mb-4">{p.icon}</div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
