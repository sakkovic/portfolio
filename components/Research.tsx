'use client';
import { motion } from 'framer-motion';
import { FaBookOpen, FaRocket, FaSpinner } from 'react-icons/fa';

const papers = [
  {
    badge: 'IEEE ICC 2025',
    status: 'published',
    featured: true,
    title: 'Predicting Cyberattack Duration in Next Generation Networks',
    subtitle: 'A Novel Transformer-based Approach',
    desc: 'Developed a Transformer-based deep learning model to predict the duration of common cyber-attacks on 5G networks from network traffic data (UNSW-NB15). Enables improved mitigation strategies and decision-making by understanding attacker behavior.',
    tags: ['Transformer', '5G', 'UNSW-NB15', 'Deep Learning'],
    doi: '10.1109/ICC52391.2025.11161837',
  },
  {
    badge: 'IEEE CNSM 2023',
    status: 'published',
    featured: false,
    title: 'DDoS Attacks Mitigation in 5G-V2X Networks',
    subtitle: 'A Reinforcement Learning-Based Approach',
    desc: 'Implemented an RL-based framework to detect and prevent DDoS attacks in 5G-V2X networks, leveraging sinkhole slicing. Validated on a real OAI-based 5G platform with live attack simulations.',
    tags: ['Reinforcement Learning', '5G-V2X', 'DDoS', 'OAI'],
    doi: '10.23919/CNSM59352.2023.10327917',
  },
  {
    badge: 'TSNM 2026',
    status: 'submitted',
    featured: false,
    title: 'Adaptive Federated Learning with Dynamic Client Selection for Privacy-Preserving Distributed Training in 5G Networks',
    subtitle: 'Submitted — Under Review',
    desc: 'Proposes an adaptive federated learning framework leveraging dynamic client selection strategies to enable privacy-preserving distributed model training across heterogeneous 5G network nodes, improving convergence efficiency while minimising communication overhead.',
    tags: ['Federated Learning', '5G', 'Privacy', 'Distributed Training', 'Dynamic Selection'],
    doi: null,
  },
];

export default function Research() {
  return (
    <motion.section id="research" className="py-24" style={{ background: 'var(--bg-2)' }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="font-bold mb-14 flex items-center gap-3"
          style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}
        >
          Research
          <span className="flex-1 h-px max-w-xs" style={{ background: 'var(--border)' }} />
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {papers.map((p, i) => (
            <motion.div
              key={i}
              className={`rounded-xl border p-7 relative transition-all duration-300 hover:-translate-y-1 ${i === 2 ? 'md:col-span-2' : ''}`}
              style={{
                background: p.featured
                  ? 'linear-gradient(135deg,var(--bg-card) 0%,#0f1929 100%)'
                  : 'var(--bg-card)',
                borderColor: p.status === 'submitted'
                  ? 'rgba(245,158,11,0.3)'
                  : p.featured ? 'rgba(99,179,237,0.3)' : 'var(--border)',
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{
                borderColor: p.status === 'submitted'
                  ? 'rgba(245,158,11,0.55)'
                  : 'rgba(99,179,237,0.5)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block font-mono text-xs font-semibold px-3 py-1 rounded-full text-white"
                  style={{
                    background: p.status === 'submitted'
                      ? 'linear-gradient(135deg,#f59e0b,#d97706)'
                      : 'linear-gradient(135deg,var(--accent),var(--accent-2))',
                  }}
                >
                  {p.badge}
                </span>
                {p.status === 'submitted' && (
                  <span
                    className="inline-flex items-center gap-1 font-mono text-xs px-2.5 py-0.5 rounded-full border"
                    style={{ color: '#f59e0b', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.06)' }}
                  >
                    <FaSpinner className="animate-spin" style={{ fontSize: '0.6rem' }} />
                    Under Review
                  </span>
                )}
              </div>

              <h3 className="font-semibold text-base mb-1 leading-snug">{p.title}</h3>
              <p className="text-xs italic mb-4" style={{ color: p.status === 'submitted' ? '#f59e0b' : 'var(--accent)' }}>
                {p.subtitle}
              </p>
              <p className="text-sm leading-7 mb-5" style={{ color: 'var(--muted)' }}>{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
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

              {p.doi ? (
                <p className="font-mono text-xs flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                  <FaBookOpen style={{ color: 'var(--accent)' }} />
                  DOI: {p.doi}
                </p>
              ) : (
                <p className="font-mono text-xs flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                  <FaRocket style={{ color: '#f59e0b' }} />
                  DOI pending publication
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
