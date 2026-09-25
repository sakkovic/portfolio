'use client';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { useLang } from '@/lib/i18n';

type Degree = { date: string; degree: string; school: string; detailLabel: string; detail: string; tags: string[] };

const degrees: Record<'en' | 'fr', Degree[]> = {
  en: [
    {
      date: 'Jan 2024 – May 2026',
      degree: 'M.Sc.A. in Information Technology Engineering (Thesis-based)',
      school: 'ÉTS — École de technologie supérieure, Montréal',
      detailLabel: 'Thesis',
      detail: 'AI-Driven Security for 5G/6G Networks: Predicting Attack Duration for Intelligent Mitigation.',
      tags: ['5G/6G Security', 'Deep Learning', 'Federated Learning', 'O-RAN'],
    },
    {
      date: 'Sept 2020 – Sept 2023',
      degree: 'National Engineering Degree in Telecommunications',
      school: "SUP'COM — Higher School of Communications of Tunis",
      detailLabel: 'Main courses',
      detail: 'Network/Cloud/Web Security, AI, IoT, Cloud Computing, Big Data, Data Structures and Algorithms, Entrepreneurship.',
      tags: ['Network Security', 'AI', 'IoT', 'Cloud', 'Big Data'],
    },
  ],
  fr: [
    {
      date: 'Janv. 2024 – Mai 2026',
      degree: 'Maîtrise avec mémoire en génie des technologies de l’information (M. Sc. A.)',
      school: 'ÉTS — École de technologie supérieure, Montréal',
      detailLabel: 'Mémoire',
      detail: 'Sécurité des réseaux 5G/6G par l’IA : Prédiction de la durée des attaques pour une mitigation intelligente.',
      tags: ['Sécurité 5G/6G', 'Deep Learning', 'Federated Learning', 'O-RAN'],
    },
    {
      date: 'Sept. 2020 – Sept. 2023',
      degree: 'Diplôme national d’ingénieur en télécommunications',
      school: "SUP'COM — École supérieure des communications de Tunis",
      detailLabel: 'Cours principaux',
      detail: 'Sécurité des réseaux, du cloud et du Web, IA, IoT, Cloud Computing, Big Data, structures de données et algorithmes, entrepreneuriat.',
      tags: ['Sécurité réseau', 'IA', 'IoT', 'Cloud', 'Big Data'],
    },
  ],
};

export default function Education() {
  const { lang } = useLang();
  return (
    <motion.section id="education" className="py-24" style={{ background: 'var(--bg-2)' }}
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
          {lang === 'fr' ? 'Formation' : 'Education'}
          <span className="flex-1 h-px max-w-xs" style={{ background: 'var(--border)' }} />
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {degrees[lang].map((d, i) => (
            <motion.div
              key={i}
              className="rounded-xl border p-7 flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ borderColor: 'rgba(99,179,237,0.5)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaGraduationCap className="text-2xl" style={{ color: 'var(--accent)' }} />
                <p className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                  {d.date}
                </p>
              </div>
              <h3 className="font-semibold text-base mb-1 leading-snug">{d.degree}</h3>
              <p className="text-sm mb-4 font-medium" style={{ color: 'var(--accent)' }}>{d.school}</p>
              <p className="text-sm leading-7 mb-5 flex-1" style={{ color: 'var(--muted)' }}>
                <span className="font-semibold" style={{ color: 'var(--text)' }}>{d.detailLabel}: </span>
                {d.detail}
              </p>
              <div className="flex flex-wrap gap-2">
                {d.tags.map((t) => (
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
    </motion.section>
  );
}
