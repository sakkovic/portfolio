'use client';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaUniversity, FaEnvelope, FaBrain, FaShieldVirus, FaCode } from 'react-icons/fa';

const interests = [
  {
    icon: <FaBrain className="text-2xl mb-3" style={{ color: 'var(--accent)' }} />,
    title: 'Artificial Intelligence',
    desc: 'Deep learning, transformers, reinforcement learning for real-world network problems',
  },
  {
    icon: <FaShieldVirus className="text-2xl mb-3" style={{ color: 'var(--accent)' }} />,
    title: 'Cybersecurity',
    desc: 'Attack detection, DDoS mitigation, privacy-preserving federated learning in 5G',
  },
  {
    icon: <FaCode className="text-2xl mb-3" style={{ color: 'var(--accent)' }} />,
    title: 'Development',
    desc: 'Full-stack web apps, ML model deployment, scalable network simulations',
  },
];

const meta = [
  { icon: <FaMapMarkerAlt />, text: 'Montréal, Canada' },
  { icon: <FaUniversity />, text: 'ÉTS — M.Sc. in IT (Thesis)' },
  { icon: <FaEnvelope />, text: 'anis.federe@gmail.com' },
];

const card = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.55 } }),
};

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="font-bold mb-14 flex items-center gap-3"
          style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}
        >
          <span className="font-mono" style={{ color: 'var(--accent)', fontSize: '0.85em' }}>01.</span>
          About Me
          <span className="flex-1 h-px max-w-xs" style={{ background: 'var(--border)' }} />
        </h2>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              <>I&apos;m a <strong className="text-white">Master&apos;s researcher in Information Technology</strong> at École de technologie supérieure (ÉTS), Montréal, working at the frontier of <span style={{ color: 'var(--accent)' }}>cybersecurity</span>, <span style={{ color: 'var(--accent)' }}>5G networks</span>, and <span style={{ color: 'var(--accent)' }}>deep learning</span>.</>,
              <>My research focuses on predicting and mitigating cyber-attacks in next-generation networks using Transformer-based models and reinforcement learning — with real-world deployment on 5G platforms.</>,
              <>When I&apos;m not in the lab, I teach IP Communication Networks labs to graduate students, coach tennis (former professional player), and explore the world one city at a time.</>,
            ].map((p, i) => (
              <p key={i} className="mb-5 leading-8" style={{ color: 'var(--muted)', fontSize: '0.97rem' }}>{p}</p>
            ))}

            <div className="mt-6 flex flex-col gap-3">
              {meta.map((m, i) => (
                <div key={i} className="flex items-center gap-3 text-sm" style={{ color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--accent)', width: 16 }}>{m.icon}</span>
                  {m.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interest cards */}
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: 'var(--muted)' }}>Passions</p>
            {interests.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="p-5 rounded-xl border transition-all duration-300 hover:translate-x-1"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                whileHover={{ borderColor: 'var(--accent)' }}
              >
                {item.icon}
                <h4 className="font-semibold mb-1 text-sm">{item.title}</h4>
                <p className="text-xs leading-6" style={{ color: 'var(--muted)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
