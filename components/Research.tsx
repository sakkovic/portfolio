'use client';
import { motion } from 'framer-motion';
import { FaBookOpen, FaRocket, FaProjectDiagram } from 'react-icons/fa';

const papers = [
  {
    badge: 'IEEE ICC 2025',
    featured: true,
    title: 'Predicting Cyberattack Duration in Next Generation Networks',
    subtitle: 'A Novel Transformer-based Approach',
    desc: 'Developed a Transformer-based deep learning model to predict the duration of common cyber-attacks on 5G networks from network traffic data (UNSW-NB15). Enables improved mitigation strategies and decision-making by understanding attacker behavior.',
    tags: ['Transformer', '5G', 'UNSW-NB15', 'Deep Learning'],
    doi: '10.1109/ICC52391.2025.11161837',
  },
  {
    badge: 'IEEE CNSM 2023',
    featured: false,
    title: 'DDoS Attacks Mitigation in 5G-V2X Networks',
    subtitle: 'A Reinforcement Learning-Based Approach',
    desc: 'Implemented an RL-based framework to detect and prevent DDoS attacks in 5G-V2X networks, leveraging sinkhole slicing. Validated on a real OAI-based 5G platform with live attack simulations.',
    tags: ['Reinforcement Learning', '5G-V2X', 'DDoS', 'OAI'],
    doi: '10.23919/CNSM59352.2023.10327917',
  },
];

const future = [
  { icon: <FaRocket />, text: 'Model deployment on the 5G platform for real-world testing' },
  { icon: <FaProjectDiagram />, text: 'Adaptive federated learning with dynamic client selection for privacy-preserving distributed training across 5G network nodes' },
];

export default function Research() {
  return (
    <section id="research" className="py-24" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="font-bold mb-14 flex items-center gap-3"
          style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}
        >
          <span className="font-mono" style={{ color: 'var(--accent)', fontSize: '0.85em' }}>03.</span>
          Research
          <span className="flex-1 h-px max-w-xs" style={{ background: 'var(--border)' }} />
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {papers.map((p, i) => (
            <motion.div
              key={i}
              className="rounded-xl border p-7 relative transition-all duration-300 hover:-translate-y-1"
              style={{
                background: p.featured
                  ? 'linear-gradient(135deg,var(--bg-card) 0%,#0f1929 100%)'
                  : 'var(--bg-card)',
                borderColor: p.featured ? 'rgba(99,179,237,0.3)' : 'var(--border)',
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ borderColor: 'rgba(99,179,237,0.5)' }}
            >
              <span
                className="inline-block font-mono text-xs font-semibold px-3 py-1 rounded-full text-white mb-4"
                style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent-2))' }}
              >
                {p.badge}
              </span>

              <h3 className="font-semibold text-base mb-1 leading-snug">{p.title}</h3>
              <p className="text-xs italic mb-4" style={{ color: 'var(--accent)' }}>{p.subtitle}</p>
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

              <p className="font-mono text-xs flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                <FaBookOpen style={{ color: 'var(--accent)' }} />
                DOI: {p.doi}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Future directions */}
        <motion.div
          className="rounded-xl border p-6"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-sm flex items-center gap-2 mb-5" style={{ color: 'var(--accent)' }}>
            🧭 Future Research Directions
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {future.map((f, i) => (
              <div key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--muted)' }}>
                <span className="mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }}>{f.icon}</span>
                {f.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
