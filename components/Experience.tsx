'use client';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';

type Job = { date: string; title: string; company: string; bullets: string[]; tags: string[] };

const jobs: Record<'en' | 'fr', Job[]> = {
  en: [
    {
      date: 'Jan 2024 – May 2026',
      title: 'Research Assistant — Applied AI for 5G Network Cybersecurity',
      company: 'ÉTS — École de technologie supérieure',
      bullets: [
        'Developed and validated AI-driven cybersecurity solutions for 5G/6G networks, including a Transformer-based cyberattack-duration prediction model (up to 60% MAE reduction vs. LSTM)',
        'Designed an adaptive, resource-efficient Federated Learning approach with dynamic client selection, reducing training time by ~70% versus centralized training while maintaining strong predictive performance',
        'Integrated an XGBoost-based refinement layer for 5G O-RAN environments to correct errors caused by the gap between training and deployment domains, significantly improving prediction reliability',
        'Published at IEEE ICC 2025 and IEEE TNSM 2026',
      ],
      tags: ['Transformers', 'Federated Learning', 'XGBoost', 'O-RAN', '5G/6G', 'PyTorch'],
    },
    {
      date: 'Sept 2024 – May 2026',
      title: 'Teaching Assistant — IP Communication Networks',
      company: 'ÉTS — École de technologie supérieure',
      bullets: [
        'Supervised hands-on IP networking labs covering packet analysis, network simulation, SDN/NDN concepts, and troubleshooting',
        'Used Cisco Packet Tracer, Wireshark, Mininet, and CloudSim with 50+ students',
      ],
      tags: ['Cisco', 'Wireshark', 'SDN/NDN', 'Mininet', 'CloudSim'],
    },
    {
      date: 'Feb 2023 – Oct 2023',
      title: 'Cybersecurity Intern — Applied AI for 5G-V2X Networks',
      company: 'ÉTS — École de technologie supérieure',
      bullets: [
        'Developed and deployed a Reinforcement Learning model for intelligent DDoS detection and mitigation in 5G-V2X networks with sinkhole slicing',
        'Achieved an average error below 3.2% in attack-duration estimation on a real OpenAirInterface 5G platform, simulating DDoS and jamming attacks',
        'Published at IFIP/IEEE CNSM 2023 — DOI: 10.23919/CNSM59352.2023.10327917',
      ],
      tags: ['Reinforcement Learning', 'OpenAI Gym', '5G/OAI', 'V2X', 'DDoS'],
    },
    {
      date: 'Jul 2022 – Aug 2022',
      title: 'Software Engineering Intern',
      company: 'HRDatabank — Monastir, Tunisia',
      bullets: [
        'Developed backend services, a PostgreSQL database schema, and REST APIs for a Next.js platform aggregating multiple restaurant chains and their menus, enabling online ordering and real-time menu updates',
        'Implemented CI/CD pipelines to automate testing and deployment, improving team efficiency and collaboration',
        'Optimized frontend data loading and API response times (UI/UX), then performed penetration testing to identify and fix vulnerabilities before launch',
      ],
      tags: ['Next.js', 'PostgreSQL', 'REST APIs', 'CI/CD', 'Pentesting'],
    },
    {
      date: 'Jul 2021 – Aug 2021',
      title: 'Telecommunications Engineering Intern',
      company: 'Tunisie Télécom — Monastir, Tunisia',
      bullets: [
        'Analyzed base-station components and network architecture while assisting with diagnostics and troubleshooting',
      ],
      tags: ['Telecom', 'Base Stations', 'Networking'],
    },
    {
      date: '2018 – Present',
      title: 'Professional Tennis Coach',
      company: 'Other experience',
      bullets: [
        'Certified CP1 tennis coach and international player, delivering private and group lessons focused on technical and tactical development',
      ],
      tags: ['Coaching', 'Leadership', 'Communication'],
    },
  ],
  fr: [
    {
      date: 'Janv. 2024 – Mai 2026',
      title: 'Assistant de recherche — IA appliquée à la cybersécurité des réseaux 5G',
      company: 'ÉTS — École de technologie supérieure',
      bullets: [
        'Développé et validé des solutions de cybersécurité pilotées par l’IA pour les réseaux 5G/6G, incluant un modèle Transformer de prédiction de durée des cyberattaques (jusqu’à 60 % de réduction du MAE vs LSTM)',
        'Conçu une approche de Federated Learning adaptative et économe en ressources avec sélection dynamique des clients, réduisant le temps d’entraînement d’environ 70 % par rapport à l’approche centralisée tout en maintenant de solides performances prédictives',
        'Intégré une couche de raffinement basée sur XGBoost afin de corriger les erreurs liées au décalage entre le domaine d’entraînement et le domaine de déploiement en environnement 5G O-RAN, améliorant significativement la fiabilité des prédictions',
        'Publications à IEEE ICC 2025 et IEEE TNSM 2026',
      ],
      tags: ['Transformers', 'Federated Learning', 'XGBoost', 'O-RAN', '5G/6G', 'PyTorch'],
    },
    {
      date: 'Sept. 2024 – Mai 2026',
      title: 'Assistant d’enseignement — Réseaux de communication IP',
      company: 'ÉTS — École de technologie supérieure',
      bullets: [
        'Encadré des laboratoires pratiques en réseaux IP portant sur l’analyse de paquets, la simulation réseau, les concepts SDN/NDN et le dépannage',
        'Utilisation de Cisco Packet Tracer, Wireshark, Mininet et CloudSim avec plus de 50 étudiants',
      ],
      tags: ['Cisco', 'Wireshark', 'SDN/NDN', 'Mininet', 'CloudSim'],
    },
    {
      date: 'Févr. 2023 – Oct. 2023',
      title: 'Stagiaire en cybersécurité — IA appliquée aux réseaux 5G-V2X',
      company: 'ÉTS — École de technologie supérieure',
      bullets: [
        'Développé et déployé un modèle de Reinforcement Learning pour la détection et la mitigation intelligente des attaques DDoS dans les réseaux 5G-V2X avec sinkhole slicing',
        'Atteint une erreur moyenne inférieure à 3,2 % dans l’estimation de la durée des attaques sur une plateforme 5G OpenAirInterface réelle, avec simulation d’attaques DDoS et de brouillage',
        'Publication à IFIP/IEEE CNSM 2023 — DOI : 10.23919/CNSM59352.2023.10327917',
      ],
      tags: ['Reinforcement Learning', 'OpenAI Gym', '5G/OAI', 'V2X', 'DDoS'],
    },
    {
      date: 'Juil. 2022 – Août 2022',
      title: 'Stagiaire en génie logiciel',
      company: 'HRDatabank — Monastir, Tunisie',
      bullets: [
        'Développé des services backend, un schéma de base de données PostgreSQL et des API REST pour une plateforme Next.js regroupant plusieurs chaînes de restaurants et leurs menus, permettant la commande en ligne et la mise à jour des menus en temps réel',
        'Mis en place des pipelines CI/CD pour automatiser les tests et le déploiement, améliorant l’efficacité et la collaboration de l’équipe',
        'Optimisé le chargement des données frontend et les temps de réponse des API (UI/UX), puis réalisé des tests de pénétration pour identifier et corriger les vulnérabilités avant le lancement',
      ],
      tags: ['Next.js', 'PostgreSQL', 'API REST', 'CI/CD', 'Pentesting'],
    },
    {
      date: 'Juil. 2021 – Août 2021',
      title: 'Stagiaire en génie des télécommunications',
      company: 'Tunisie Télécom — Monastir, Tunisie',
      bullets: [
        'Analysé les composants des stations de base et l’architecture réseau tout en participant aux activités de diagnostic et de dépannage',
      ],
      tags: ['Télécom', 'Stations de base', 'Réseaux'],
    },
    {
      date: '2018 – Aujourd’hui',
      title: 'Entraîneur de tennis professionnel',
      company: 'Autre expérience',
      bullets: [
        'Entraîneur de tennis certifié CP1 et joueur international, offrant des cours privés et de groupe axés sur le développement technique et tactique',
      ],
      tags: ['Coaching', 'Leadership', 'Communication'],
    },
  ],
};

export default function Experience() {
  const { lang } = useLang();
  return (
    <motion.section id="experience" className="py-24" style={{ background: 'var(--bg)' }}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="font-bold mb-14 flex items-center gap-3"
          style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}
        >
          {lang === 'fr' ? 'Expérience' : 'Experience'}
          <span className="flex-1 h-px max-w-xs" style={{ background: 'var(--border)' }} />
        </h2>

        <div className="relative pl-8">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(to bottom,var(--accent),var(--accent-2))', opacity: 0.3 }}
          />

          {jobs[lang].map((job, i) => (
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
    </motion.section>
  );
}
