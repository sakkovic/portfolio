'use client';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaUniversity, FaEnvelope, FaBrain, FaShieldVirus, FaCode, FaRobot } from 'react-icons/fa';
import { useLang } from '@/lib/i18n';

const text = {
  en: {
    heading: 'About Me',
    passions: 'Passions',
    meta: ['Montréal, QC, Canada', 'ÉTS — M.Sc.A. in IT Engineering (Thesis)', 'anis.federe@gmail.com'],
    interests: [
      { title: 'Artificial Intelligence', desc: 'Deep learning, LLMs, RAG, transformers, federated and reinforcement learning for real-world problems' },
      { title: 'AI for Cyber Security', desc: 'Intrusion detection, DDoS & jamming mitigation, privacy-preserving federated learning in 5G/O-RAN environments' },
      { title: 'Agents & Automation', desc: 'Building agentic AI, LLM pipelines and workflow automation with tools like n8n' },
      { title: 'Development', desc: 'Full-stack web apps, data pipelines, ML model deployment, scalable network simulations' },
    ],
  },
  fr: {
    heading: 'À propos',
    passions: 'Passions',
    meta: ['Montréal, QC, Canada', 'ÉTS — Maîtrise avec mémoire (M. Sc. A.) en génie des TI', 'anis.federe@gmail.com'],
    interests: [
      { title: 'Intelligence artificielle', desc: 'Deep learning, LLMs, RAG, Transformers, federated et reinforcement learning appliqués à des problèmes concrets' },
      { title: 'IA pour la cybersécurité', desc: 'Détection d’intrusions, mitigation DDoS et brouillage, federated learning respectueux de la vie privée en environnement 5G/O-RAN' },
      { title: 'Agents & automatisation', desc: 'Conception d’agents IA, de pipelines LLM et d’automatisation de workflows avec des outils comme n8n' },
      { title: 'Développement', desc: 'Applications web full-stack, pipelines de données, déploiement de modèles ML, simulations réseau évolutives' },
    ],
  },
};

const interestIcons = [
  <FaBrain key="ai" className="text-2xl mb-3" style={{ color: 'var(--accent)' }} />,
  <FaShieldVirus key="sec" className="text-2xl mb-3" style={{ color: '#34d399' }} />,
  <FaRobot key="agents" className="text-2xl mb-3" style={{ color: '#a78bfa' }} />,
  <FaCode key="dev" className="text-2xl mb-3" style={{ color: '#f59e0b' }} />,
];

const metaIcons = [<FaMapMarkerAlt key="loc" />, <FaUniversity key="uni" />, <FaEnvelope key="mail" />];

const paragraphs = {
  en: [
    <>I&apos;m an <strong className="text-white">ICT engineer specializing in AI and cybersecurity</strong>, with a thesis-based M.Sc.A. in Information Technology Engineering from École de technologie supérieure (ÉTS), Montréal. I design and improve technology solutions at the frontier of <span style={{ color: 'var(--accent)' }}>cybersecurity</span>, <span style={{ color: 'var(--accent)' }}>5G/6G networks</span>, and <span style={{ color: 'var(--accent)' }}>deep learning</span>.</>,
    <>My research focuses on predicting and mitigating cyberattacks in next-generation networks using Transformer-based models, federated learning and reinforcement learning — validated on real 5G platforms (OpenAirInterface, O-RAN).</>,
    <>Outside the lab, I taught IP Communication Networks labs at ÉTS, and I&apos;m a CP1-certified tennis coach and international player. I value practical, scalable, high-impact solutions — and good teamwork.</>,
  ],
  fr: [
    <>Je suis <strong className="text-white">ingénieur TIC spécialisé en IA et en cybersécurité</strong>, titulaire d&apos;une maîtrise avec mémoire (M. Sc. A.) en génie des technologies de l&apos;information de l&apos;École de technologie supérieure (ÉTS), Montréal. Je conçois et améliore des solutions technologiques à la croisée de la <span style={{ color: 'var(--accent)' }}>cybersécurité</span>, des <span style={{ color: 'var(--accent)' }}>réseaux 5G/6G</span> et du <span style={{ color: 'var(--accent)' }}>deep learning</span>.</>,
    <>Mes recherches portent sur la prédiction et la mitigation des cyberattaques dans les réseaux de nouvelle génération à l&apos;aide de modèles Transformer, du federated learning et du reinforcement learning — validés sur de vraies plateformes 5G (OpenAirInterface, O-RAN).</>,
    <>En dehors du labo, j&apos;ai encadré les laboratoires de Réseaux de communication IP à l&apos;ÉTS, et je suis entraîneur de tennis certifié CP1 et joueur international. Je privilégie des solutions pratiques, évolutives et à fort impact — et le travail d&apos;équipe.</>,
  ],
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.55 } }),
};

export default function About() {
  const { lang } = useLang();
  const t = text[lang];
  return (
    <motion.section id="about" className="py-24" style={{ background: 'var(--bg-2)' }}
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="font-bold mb-14 flex items-center gap-3"
          style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}
        >
          {t.heading}
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
            {paragraphs[lang].map((p, i) => (
              <p key={i} className="mb-5 leading-8" style={{ color: 'var(--muted)', fontSize: '0.97rem' }}>{p}</p>
            ))}

            <div className="mt-6 flex flex-col gap-3">
              {t.meta.map((m, i) => (
                <div key={i} className="flex items-center gap-3 text-sm" style={{ color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--accent)', width: 16 }}>{metaIcons[i]}</span>
                  {m}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interest cards */}
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: 'var(--muted)' }}>{t.passions}</p>
            {t.interests.map((item, i) => (
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
                {interestIcons[i]}
                <h4 className="font-semibold mb-1 text-sm">{item.title}</h4>
                <p className="text-xs leading-6" style={{ color: 'var(--muted)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
