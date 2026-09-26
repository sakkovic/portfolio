'use client';
import { motion } from 'framer-motion';
import { FaBookOpen, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { useLang } from '@/lib/i18n';

type Paper = {
  badge: string;
  status: 'published' | 'accepted';
  featured: boolean;
  title: string;
  desc: { en: string; fr: string };
  tags: string[];
  doi: string | null;
  link: string;
};

const papers: Paper[] = [
  {
    badge: 'IEEE TNSM 2026',
    status: 'accepted',
    featured: true,
    title: 'FML-AD: A Federated Learning Framework with Meta-Model Refinement for Cyberattack Duration Prediction in 5G O-RAN',
    desc: {
      en: 'Proposes an adaptive, resource-efficient federated learning framework with dynamic client selection for privacy-preserving cyberattack-duration prediction across distributed 5G O-RAN nodes. An XGBoost-based meta-model refinement layer corrects errors caused by the gap between training and deployment domains, while cutting training time by ~70% versus centralized training.',
      fr: 'Propose un framework de federated learning adaptatif et économe en ressources, avec sélection dynamique des clients, pour prédire la durée des cyberattaques sur des nœuds 5G O-RAN distribués tout en préservant la confidentialité. Une couche de raffinement par méta-modèle XGBoost corrige les erreurs dues au décalage entre les domaines d’entraînement et de déploiement, et le temps d’entraînement est réduit d’environ 70 % par rapport à l’approche centralisée.',
    },
    tags: ['Federated Learning', 'Meta-Model', 'XGBoost', '5G O-RAN', 'Privacy', 'Dynamic Client Selection'],
    doi: null,
    link: 'https://ieeexplore.ieee.org/document/11683275',
  },
  {
    badge: 'IEEE ICC 2025',
    status: 'published',
    featured: false,
    title: 'Predicting Cyberattack Duration in Next Generation Networks: A Novel Transformer-based Approach',
    desc: {
      en: 'Developed a Transformer-based deep learning model to predict the duration of common cyberattacks on 5G networks from network traffic data (UNSW-NB15), achieving up to 60% MAE reduction vs. LSTM. Enables improved mitigation strategies and decision-making by understanding attacker behavior.',
      fr: 'Développement d’un modèle de deep learning basé sur les Transformers pour prédire la durée des cyberattaques courantes dans les réseaux 5G à partir de données de trafic (UNSW-NB15), avec jusqu’à 60 % de réduction du MAE par rapport au LSTM. Permet d’améliorer les stratégies de mitigation et la prise de décision en comprenant le comportement des attaquants.',
    },
    tags: ['Transformer', '5G', 'UNSW-NB15', 'Deep Learning'],
    doi: '10.1109/ICC52391.2025.11161837',
    link: 'https://doi.org/10.1109/ICC52391.2025.11161837',
  },
  {
    badge: 'IFIP/IEEE CNSM 2023',
    status: 'published',
    featured: false,
    title: 'DDoS Attacks Mitigation in 5G-V2X Networks: A Reinforcement Learning-Based Approach',
    desc: {
      en: 'Implemented an RL-based framework to detect and mitigate DDoS attacks in 5G-V2X networks, leveraging sinkhole slicing. Validated on a real OpenAirInterface 5G platform with live attack simulations, with an average attack-duration estimation error below 3.2%.',
      fr: 'Mise en œuvre d’un framework de reinforcement learning pour détecter et atténuer les attaques DDoS dans les réseaux 5G-V2X grâce au sinkhole slicing. Validé sur une plateforme 5G OpenAirInterface réelle avec simulations d’attaques, avec une erreur moyenne d’estimation de la durée des attaques inférieure à 3,2 %.',
    },
    tags: ['Reinforcement Learning', '5G-V2X', 'DDoS', 'OAI'],
    doi: '10.23919/CNSM59352.2023.10327917',
    link: 'https://doi.org/10.23919/CNSM59352.2023.10327917',
  },
];

export default function Research() {
  const { lang } = useLang();
  return (
    <motion.section id="research" className="py-24" style={{ background: 'var(--bg)' }}
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
          {lang === 'fr' ? 'Recherche & publications' : 'Research & Publications'}
          <span className="flex-1 h-px max-w-xs" style={{ background: 'var(--border)' }} />
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {papers.map((p, i) => (
            <motion.div
              key={i}
              className={`rounded-xl border p-7 relative flex flex-col transition-all duration-300 hover:-translate-y-1 ${p.featured ? 'md:col-span-2' : ''}`}
              style={{
                background: p.featured
                  ? 'linear-gradient(135deg,var(--bg-card) 0%,#0f1929 100%)'
                  : 'var(--bg-card)',
                borderColor: p.status === 'accepted'
                  ? 'rgba(52,211,153,0.35)'
                  : p.featured ? 'rgba(99,179,237,0.3)' : 'var(--border)',
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{
                borderColor: p.status === 'accepted'
                  ? 'rgba(52,211,153,0.6)'
                  : 'rgba(99,179,237,0.5)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block font-mono text-xs font-semibold px-3 py-1 rounded-full text-white"
                  style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent-2))' }}
                >
                  {p.badge}
                </span>
                {p.status === 'accepted' && (
                  <span
                    className="inline-flex items-center gap-1 font-mono text-xs px-2.5 py-0.5 rounded-full border"
                    style={{ color: '#34d399', borderColor: 'rgba(52,211,153,0.35)', background: 'rgba(52,211,153,0.08)' }}
                  >
                    <FaCheckCircle style={{ fontSize: '0.65rem' }} />
                    {lang === 'fr' ? 'Accepté' : 'Accepted'}
                  </span>
                )}
              </div>

              <h3 className="font-semibold text-base mb-4 leading-snug">{p.title}</h3>
              <p className="text-sm leading-7 mb-5 flex-1" style={{ color: 'var(--muted)' }}>{p.desc[lang]}</p>

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

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {p.doi && (
                  <p className="font-mono text-xs flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                    <FaBookOpen style={{ color: 'var(--accent)' }} />
                    DOI: {p.doi}
                  </p>
                )}
                <motion.a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs font-semibold"
                  style={{ color: p.status === 'accepted' ? '#34d399' : 'var(--accent)' }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaExternalLinkAlt style={{ fontSize: '0.6rem' }} />
                  {p.status === 'accepted'
                    ? (lang === 'fr' ? 'Lire sur IEEE Xplore' : 'Read on IEEE Xplore')
                    : (lang === 'fr' ? 'Lire l’article' : 'Read paper')}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
