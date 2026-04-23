'use client';
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaNetworkWired, FaGlobe } from 'react-icons/fa';

const programmingSkills = [
  { name: 'Python', pct: 95 },
  { name: 'Java', pct: 80 },
  { name: 'C / C++', pct: 75 },
];

const aiSkills = [
  'PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenAI Gym',
  'StableBaselines', 'Librosa', 'Transformers', 'Federated Learning', 'RL',
];

const networkSkills = [
  '5G / OAI', 'SDN / NDN', 'Cisco Packet Tracer',
  'Wireshark', 'Mininet', 'DDoS Mitigation', 'Network Slicing', 'V2X',
];

const languages = [
  { flag: '🇫🇷', lang: 'French', level: 'Fluent' },
  { flag: '🇬🇧', lang: 'English', level: 'Fluent' },
  { flag: '🇹🇳', lang: 'Arabic', level: 'Native' },
];

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

export default function Skills() {
  return (
    <motion.section id="skills" className="py-24" style={{ background: 'var(--bg-2)' }}
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
          Skills
          <span className="flex-1 h-px max-w-xs" style={{ background: 'var(--border)' }} />
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Programming */}
          <SkillCard delay={0}>
            <GroupTitle icon={<FaCode />} label="Programming" />
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

          {/* AI / ML */}
          <SkillCard delay={0.1}>
            <GroupTitle icon={<FaRobot />} label="AI / ML" />
            <div className="flex flex-wrap gap-2">
              {aiSkills.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-3 py-1 rounded-md border cursor-default transition-all duration-200 hover:text-[var(--bg)]"
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
          </SkillCard>

          {/* Networks */}
          <SkillCard delay={0.2}>
            <GroupTitle icon={<FaNetworkWired />} label="Networks & Security" />
            <div className="flex flex-wrap gap-2">
              {networkSkills.map((s) => (
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
          </SkillCard>

          {/* Languages */}
          <SkillCard delay={0.3}>
            <GroupTitle icon={<FaGlobe />} label="Languages" />
            <div className="flex flex-col gap-3">
              {languages.map((l) => (
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
        </div>
      </div>
    </motion.section>
  );
}
