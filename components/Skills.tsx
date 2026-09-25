'use client';
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaNetworkWired, FaGlobe, FaTools, FaDatabase } from 'react-icons/fa';
import { useLang } from '@/lib/i18n';

const programmingSkills = [
  { name: 'Python', pct: 95 },
  { name: 'Java', pct: 80 },
  { name: 'C / C++', pct: 75 },
];

const aiSkills = [
  'Deep Learning', 'PyTorch', 'TensorFlow', 'Hugging Face', 'Scikit-learn', 'OpenAI Gym',
  'StableBaselines', 'Librosa', 'Transformers', 'Federated Learning', 'Reinforcement Learning (RL)',
  'Generative AI', 'Agentic AI', 'LLMs', 'RAG', 'Computer Vision', 'N8N', 'Agents & Automation',
  'Time-Series & Sequence Modeling', 'Classification · Regression · Clustering',
  'Supervised & Unsupervised Learning', 'Meta-Learning',
  'Data Preprocessing & Feature Engineering', 'Handling Imbalanced Datasets',
  'Model Deployment (Docker, APIs)', 'Experiment Tracking & Reproducibility',
];

const networkSkills = [
  'Network Security', '5G / OAI', 'OpenAirInterface', 'Open5GS', 'O-RAN', 'SDN / NDN', 'Cisco Packet Tracer',
  'Wireshark', 'Nmap', 'Burp Suite', 'Mininet', 'Attack Detection & Mitigation', 'DDoS Mitigation',
  'Network Slicing', 'V2X', 'IDS using ML/DL', 'SOC', 'Vulnerability Assessment', 'Risk Assessment',
  'Traffic Analysis', 'Security in 5G / O-RAN',
];

const devSkills = [
  'React', 'Next.js', 'Flask', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Supabase', 'Firebase',
  'Git', 'GitHub', 'Docker', 'Kubernetes', 'CI/CD', 'Databricks',
];

const dataSkills = [
  'Data Modeling', 'ETL / ELT', 'Data Pipelines', 'Data Integration', 'Data Transformation',
  'Data Quality', 'Data Visualization', 'Feature Engineering',
];

const languages = {
  en: [
    { flag: '🇫🇷', lang: 'French', level: 'Fluent' },
    { flag: '🇬🇧', lang: 'English', level: 'Fluent' },
    { flag: '🇹🇳', lang: 'Arabic', level: 'Native' },
  ],
  fr: [
    { flag: '🇫🇷', lang: 'Français', level: 'Courant' },
    { flag: '🇬🇧', lang: 'Anglais', level: 'Courant' },
    { flag: '🇹🇳', lang: 'Arabe', level: 'Langue maternelle' },
  ],
};

const labels = {
  en: {
    heading: 'Skills',
    programming: 'Programming',
    ai: 'AI / ML',
    network: 'Cybersecurity & Networks',
    dev: 'Development & Tools',
    data: 'Data',
    languages: 'Languages',
  },
  fr: {
    heading: 'Compétences',
    programming: 'Programmation',
    ai: 'IA / ML',
    network: 'Cybersécurité & réseaux',
    dev: 'Développement & outils',
    data: 'Données',
    languages: 'Langues',
  },
};

function SkillCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      className="rounded-xl border p-6 transition-colors duration-300"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -6, borderColor: 'rgba(99,179,237,0.45)', boxShadow: '0 12px 40px rgba(99,179,237,0.1)' }}
    >
      {children}
    </motion.div>
  );
}

function GroupTitle({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <h3 className="flex items-center gap-2 text-sm font-semibold mb-5" style={{ color: 'var(--accent)' }}>
      {icon} {label}
    </h3>
  );
}

function SkillTags({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((s) => (
        <span
          key={s}
          className="font-mono text-xs px-3 py-1 rounded-md border cursor-default transition-all duration-200"
          style={{
            color: 'var(--accent)',
            borderColor: 'rgba(99,179,237,0.2)',
            background: 'rgba(99,179,237,0.06)',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = 'var(--accent)';
            (e.target as HTMLElement).style.color = 'var(--bg)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = 'rgba(99,179,237,0.06)';
            (e.target as HTMLElement).style.color = 'var(--accent)';
          }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

export default function Skills() {
  const { lang } = useLang();
  const t = labels[lang];
  return (
    <motion.section id="skills" className="py-24" style={{ background: 'var(--bg)' }}
      initial={{ opacity: 0, scale: 0.96, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="font-bold mb-14 flex items-center gap-3"
          style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}
        >
          {t.heading}
          <span className="flex-1 h-px max-w-xs" style={{ background: 'var(--border)' }} />
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Programming */}
          <SkillCard delay={0}>
            <GroupTitle icon={<FaCode />} label={t.programming} />
            <div className="space-y-4">
              {programmingSkills.map((s) => (
                <div key={s.name} className="flex items-center gap-4">
                  <span className="w-16 text-sm flex-shrink-0" style={{ color: 'var(--muted)' }}>{s.name}</span>
                  <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(99,179,237,0.1)' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg,var(--accent),var(--accent-2))' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="font-mono text-xs w-8 text-right" style={{ color: 'var(--accent)' }}>{s.pct}%</span>
                </div>
              ))}
            </div>
          </SkillCard>

          {/* Languages */}
          <SkillCard delay={0.1}>
            <GroupTitle icon={<FaGlobe />} label={t.languages} />
            <div className="flex flex-col gap-3">
              {languages[lang].map((l) => (
                <div
                  key={l.lang}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm"
                  style={{ background: 'rgba(99,179,237,0.04)' }}
                >
                  <span className="text-xl">{l.flag}</span>
                  <span>{l.lang}</span>
                  <span
                    className="ml-auto font-mono text-xs px-2 py-0.5 rounded"
                    style={{ color: 'var(--accent)', background: 'rgba(99,179,237,0.1)' }}
                  >
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </SkillCard>

          {/* AI / ML */}
          <SkillCard delay={0.1}>
            <GroupTitle icon={<FaRobot />} label={t.ai} />
            <SkillTags skills={aiSkills} />
          </SkillCard>

          {/* Networks */}
          <SkillCard delay={0.2}>
            <GroupTitle icon={<FaNetworkWired />} label={t.network} />
            <SkillTags skills={networkSkills} />
          </SkillCard>

          {/* Development & Tools */}
          <SkillCard delay={0.2}>
            <GroupTitle icon={<FaTools />} label={t.dev} />
            <SkillTags skills={devSkills} />
          </SkillCard>

          {/* Data */}
          <SkillCard delay={0.3}>
            <GroupTitle icon={<FaDatabase />} label={t.data} />
            <SkillTags skills={dataSkills} />
          </SkillCard>
        </div>
      </div>
    </motion.section>
  );
}
