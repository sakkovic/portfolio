'use client';
import { motion } from 'framer-motion';

const jobs = [
  {
    date: 'Jan 2024 – Present',
    title: 'Research Master\'s Student',
    company: 'ÉTS — École de technologie supérieure',
    bullets: [
      'Developed a Transformer-based model to predict cyber-attack duration in 5G networks from UNSW-NB15 traffic data',
      'Published at IEEE ICC 2025 — DOI: 10.1109/ICC52391.2025.11161837',
      'Working toward adaptive federated learning with dynamic client selection for privacy-preserving distributed training',
    ],
    tags: ['Transformers', '5G', 'PyTorch', 'Federated Learning'],
  },
  {
    date: 'Sept 2024 – Present',
    title: 'Teaching Assistant — IP Communication Networks',
    company: 'ÉTS — École de technologie supérieure',
    bullets: [
      'Conduct IP networking labs using Cisco Packet Tracer, Wireshark, and Mininet/CloudSim',
      'Designed SDN/NDN practicals including packet analysis and network simulations for 50+ students',
    ],
    tags: ['Cisco', 'Wireshark', 'SDN', 'Mininet'],
  },
  {
    date: 'Feb – Oct 2023',
    title: 'Engineering Final Internship',
    company: 'ÉTS — École de technologie supérieure',
    bullets: [
      'Implemented an RL model for DDoS detection and prevention in 5G networks with sinkhole slicing',
      'Deployed on a real OAI-based 5G platform, simulating DDoS and Jamming attacks',
      'Published at IEEE CNSM 2023 — DOI: 10.23919/CNSM59352.2023.10327917',
    ],
    tags: ['Reinforcement Learning', 'OpenAI Gym', '5G/OAI', 'DDoS'],
  },
  {
    date: 'Jul – Aug 2022',
    title: 'Web Development Intern',
    company: 'HRDatabank — Monastir, Tunisia',
    bullets: [
      'Built a restaurant chain management platform covering all chains in Tunisia with online ordering',
    ],
    tags: ['Web Dev', 'Full-Stack'],
  },
  {
    date: 'Jul – Aug 2021',
    title: 'Technical Intern',
    company: 'Tunisie Télécom — Monastir, Tunisia',
    bullets: [
      'Analysis of communication base station components, network structure, and troubleshooting',
    ],
    tags: ['Telecom', 'Base Stations', 'Networking'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="font-bold mb-14 flex items-center gap-3"
          style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}
        >
          <span className="font-mono" style={{ color: 'var(--accent)', fontSize: '0.85em' }}>02.</span>
          Experience
          <span className="flex-1 h-px max-w-xs" style={{ background: 'var(--border)' }} />
        </h2>

        <div className="relative pl-8">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(to bottom,var(--accent),var(--accent-2))', opacity: 0.3 }}
          />

          {jobs.map((job, i) => (
            <motion.div
              key={i}
              className="relative mb-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Dot */}
              <div
                className="absolute -left-10 top-6 w-3 h-3 rounded-full"
                style={{ background: 'var(--accent)', boxShadow: '0 0 12px var(--accent-glow)' }}
              />

              <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--accent)' }}>
                {job.date}
              </p>

              <div
                className="rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <h3 className="font-semibold text-base mb-0.5">{job.title}</h3>
                <p className="text-sm mb-4 font-medium" style={{ color: 'var(--accent)' }}>{job.company}</p>

                <ul className="mb-4 space-y-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-0.5 rounded border"
                      style={{ color: 'var(--accent)', borderColor: 'rgba(99,179,237,0.2)', background: 'rgba(99,179,237,0.06)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
