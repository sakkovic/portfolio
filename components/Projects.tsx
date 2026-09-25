'use client';
import { motion } from 'framer-motion';
import {
  FaVirus, FaBrain, FaUtensils, FaTableTennis, FaStore, FaFileMedical, FaExternalLinkAlt,
  FaBroadcastTower, FaXRay, FaCalendarCheck,
} from 'react-icons/fa';
import { useLang, type Lang } from '@/lib/i18n';

type Localized = { en: string; fr: string };

type Project = {
  icon: React.ReactNode;
  category: Localized;
  title: Localized;
  desc: Localized;
  tags: string[];
  link?: string;
  accentColor?: string;
};

const academic: Project[] = [
  {
    icon: <FaBroadcastTower className="text-3xl" style={{ color: '#22d3ee' }} />,
    accentColor: '#22d3ee',
    category: { en: 'Academic · 5G Security', fr: 'Académique · Sécurité 5G' },
    title: { en: '5G Jamming Attack Detection Using Autoencoders', fr: 'Détection d’attaques de brouillage 5G par autoencodeurs' },
    desc: {
      en: 'Developed an unsupervised autoencoder trained only on legitimate physical-layer (PHY) traffic to detect 5G jamming attacks, achieving 97% accuracy by optimizing reconstruction-error thresholds.',
      fr: 'Développé un autoencodeur non supervisé entraîné uniquement sur du trafic légitime de couche physique (PHY) afin de détecter les attaques de brouillage 5G, atteignant 97 % de précision grâce à l’optimisation des seuils d’erreur de reconstruction.',
    },
    tags: ['Autoencoders', 'Unsupervised Learning', '5G PHY', 'Anomaly Detection', 'Jamming'],
  },
  {
    icon: <FaFileMedical className="text-3xl" style={{ color: '#34d399' }} />,
    accentColor: '#34d399',
    category: { en: 'Academic', fr: 'Académique' },
    title: { en: 'Medical Document Summarization with LLMs', fr: 'Résumé de documents médicaux avec des LLMs' },
    desc: {
      en: 'Developed an NLP pipeline for automated summarization of clinical and medical documents, leveraging large language models combined with expert annotation workflows on the INCEPTION platform. Generates accurate, structured summaries from complex medical reports.',
      fr: 'Développé un pipeline NLP de résumé automatique de documents cliniques et médicaux, combinant des grands modèles de langage (LLMs) et des workflows d’annotation experte sur la plateforme INCEPTION. Génère des résumés précis et structurés à partir de rapports médicaux complexes.',
    },
    tags: ['NLP', 'LLMs', 'INCEPTION', 'Annotation', 'Medical AI', 'Summarization'],
  },
  {
    icon: <FaVirus className="text-3xl" style={{ color: '#63b3ed' }} />,
    accentColor: '#63b3ed',
    category: { en: 'Academic', fr: 'Académique' },
    title: { en: 'COVID-19 Detection from Speech', fr: 'Détection de la COVID-19 à partir de signaux vocaux' },
    desc: {
      en: 'Developed a deep learning model from patients\' voice recordings, using Librosa for acoustic feature extraction, PyTorch for training, and Flask for deployment — enabling non-invasive preliminary screening.',
      fr: 'Développé un modèle de deep learning à partir d’enregistrements vocaux de patients, utilisant Librosa pour l’extraction de caractéristiques acoustiques, PyTorch pour l’entraînement et Flask pour le déploiement — permettant un dépistage préliminaire non invasif.',
    },
    tags: ['Signal Processing', 'Librosa', 'PyTorch', 'Flask', 'Healthcare AI'],
  },
  {
    icon: <FaBrain className="text-3xl" style={{ color: '#a78bfa' }} />,
    accentColor: '#a78bfa',
    category: { en: 'Academic · Al-Faisal University Collaboration', fr: 'Académique · Collaboration avec Al-Faisal University' },
    title: { en: 'Stroke Diagnosis & Risk Prediction', fr: 'Diagnostic et prédiction du risque d’AVC' },
    desc: {
      en: 'Developed two deep learning models: one for stroke detection from MRI scans and another for risk prediction from clinical data. Both models were integrated into a unified web application for clinical use.',
      fr: 'Développé deux modèles de deep learning : l’un pour la détection d’AVC à partir d’IRM et l’autre pour la prédiction du risque à partir de données cliniques. Les deux modèles sont intégrés dans une application Web unifiée à usage clinique.',
    },
    tags: ['Computer Vision', 'MRI', 'PyTorch', 'Web App', 'Healthcare AI'],
  },
  {
    icon: <FaXRay className="text-3xl" style={{ color: '#f87171' }} />,
    accentColor: '#f87171',
    category: { en: 'Academic', fr: 'Académique' },
    title: { en: 'Unsupervised Tumor Segmentation via Teacher–Student Learning', fr: 'Segmentation non supervisée de tumeurs par Teacher–Student Learning' },
    desc: {
      en: 'Developed a Teacher–Student architecture for MRI tumor segmentation and diagnosis using pseudo-labels, consistency regularization, and EMA updates to reduce dependence on expert annotations.',
      fr: 'Développé une architecture Teacher–Student pour la segmentation et le diagnostic de tumeurs à partir d’IRM, utilisant des pseudo-labels, la régularisation de cohérence (consistency regularization) et des mises à jour EMA afin de réduire la dépendance aux annotations expertes.',
    },
    tags: ['Computer Vision', 'Segmentation', 'Teacher–Student', 'Pseudo-labels', 'MRI'],
  },
  {
    icon: <FaCalendarCheck className="text-3xl" style={{ color: '#facc15' }} />,
    accentColor: '#facc15',
    category: { en: 'Academic · Automation', fr: 'Académique · Automatisation' },
    title: { en: 'Automated Booking System', fr: 'Système automatisé de réservation' },
    desc: {
      en: 'Designed an automated system using n8n, Python web scraping, and a Telegram bot to make reservations, create calendar events, and send email notifications — all from a single message.',
      fr: 'Conçu un système automatisé utilisant n8n, le web scraping en Python et un bot Telegram pour effectuer des réservations, créer des événements dans le calendrier et envoyer des notifications par courriel — à partir d’un seul message.',
    },
    tags: ['n8n', 'Python', 'Web Scraping', 'Telegram Bot', 'Automation'],
  },
  {
    icon: <FaUtensils className="text-3xl" style={{ color: '#fb923c' }} />,
    accentColor: '#fb923c',
    category: { en: 'Internship Project · HRDatabank', fr: 'Projet de stage · HRDatabank' },
    title: { en: 'Restaurant Chain Management Platform', fr: 'Plateforme de gestion de chaînes de restaurants' },
    desc: {
      en: 'Next.js platform aggregating multiple restaurant chains in Tunisia and their menus, with online ordering and real-time menu updates. Built the backend services, PostgreSQL schema and REST APIs, set up CI/CD, and pentested before launch.',
      fr: 'Plateforme Next.js regroupant plusieurs chaînes de restaurants en Tunisie et leurs menus, avec commande en ligne et mise à jour des menus en temps réel. Développement des services backend, du schéma PostgreSQL et des API REST, mise en place du CI/CD et tests de pénétration avant le lancement.',
    },
    tags: ['Next.js', 'PostgreSQL', 'REST APIs', 'CI/CD', 'Full-Stack'],
  },
];

const freelance: Project[] = [
  {
    icon: <FaTableTennis className="text-3xl" style={{ color: '#f59e0b' }} />,
    accentColor: '#f59e0b',
    category: { en: 'Personal Project', fr: 'Projet personnel' },
    title: { en: 'Tennis Community Platform', fr: 'Plateforme communautaire de tennis' },
    desc: {
      en: 'Full-featured tennis club web application built with React.js and Firebase, featuring a player portal with profile management, a court booking system with real-time availability, and a live chat interface supporting both group channels and direct messaging.',
      fr: 'Application Web complète de club de tennis développée avec React.js et Firebase : portail joueur avec gestion de profil, système de réservation de terrains avec disponibilités en temps réel et messagerie instantanée (canaux de groupe et messages directs).',
    },
    tags: ['React.js', 'Firebase', 'Real-time Chat', 'Booking System', 'Player Portal'],
    link: 'https://www.tennissakkamtl.com/',
  },
  {
    icon: <FaStore className="text-3xl" style={{ color: '#f472b6' }} />,
    accentColor: '#f472b6',
    category: { en: 'Freelance', fr: 'Freelance' },
    title: { en: 'Nails Studio Digital Catalogue', fr: 'Catalogue numérique pour un studio d’ongles' },
    desc: {
      en: 'Designed and developed a visually engaging digital catalog for a nail studio to enhance online visibility and client acquisition. Features a curated service showcase with an intuitive UX and an integrated AI-powered chatbot capable of answering client inquiries and streamlining appointment requests.',
      fr: 'Conçu et développé un catalogue numérique attrayant pour un studio d’ongles afin d’améliorer sa visibilité en ligne et l’acquisition de clients. Vitrine de services soignée, UX intuitive et chatbot IA intégré capable de répondre aux questions des clients et de simplifier les demandes de rendez-vous.',
    },
    tags: ['Web Design', 'UX/UI', 'AI Chatbot', 'Freelance', 'Client Catalogue'],
    link: 'https://nails-catalog.vercel.app/',
  },
];

function ProjectCard({ p, i, lang }: { p: Project; i: number; lang: Lang }) {
  const accent = p.accentColor ?? 'rgba(99,179,237,0.7)';
  return (
    <motion.div
      className="rounded-xl border p-6 flex flex-col relative overflow-hidden group"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: i * 0.1, duration: 0.55 }}
      whileHover={{
        y: -8,
        borderColor: `${accent}66`,
        boxShadow: `0 20px 50px ${accent}18`,
        transition: { duration: 0.25 },
      }}
    >
      {/* Top accent glow line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="mb-4 w-fit"
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        {p.icon}
      </motion.div>

      <p className="font-mono text-xs mb-1" style={{ color: 'var(--muted)' }}>{p.category[lang]}</p>
      <h3 className="font-semibold text-sm mb-3 leading-snug">{p.title[lang]}</h3>
      <p className="text-xs leading-6 mb-5 flex-1" style={{ color: 'var(--muted)' }}>{p.desc[lang]}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {p.tags.map((t) => (
          <motion.span
            key={t}
            className="font-mono text-xs px-2.5 py-0.5 rounded border"
            style={{ color: accent, borderColor: `${accent}33`, background: `${accent}0f` }}
            whileHover={{ background: `${accent}22`, scale: 1.05 }}
            transition={{ duration: 0.15 }}
          >
            {t}
          </motion.span>
        ))}
      </div>

      {p.link && (
        <motion.a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono mt-auto pt-3 border-t"
          style={{ color: accent, borderColor: `${accent}33` }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          <FaExternalLinkAlt style={{ fontSize: '0.6rem', flexShrink: 0 }} />
          <span className="font-semibold">{lang === 'fr' ? 'Démo en ligne' : 'Live Demo'}</span>
          <span style={{ color: 'var(--muted)', fontWeight: 400 }}>→ {p.link}</span>
        </motion.a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const { lang } = useLang();
  return (
    <motion.section id="projects" className="py-24" style={{ background: 'var(--bg-2)' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="font-bold mb-14 flex items-center gap-4"
          style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {lang === 'fr' ? 'Projets' : 'Projects'}
          <span className="flex-1 h-px max-w-xs" style={{ background: 'var(--border)' }} />
        </motion.h2>

        {/* Academic first */}
        <div className="mb-12">
          <motion.p
            className="text-xs uppercase tracking-widest font-semibold mb-6"
            style={{ color: 'var(--muted)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {lang === 'fr' ? 'Académique & recherche' : 'Academic & Research'}
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-6">
            {academic.map((p, i) => <ProjectCard key={i} p={p} i={i} lang={lang} />)}
          </div>
        </div>

        {/* Freelance & Personal at end */}
        <div>
          <motion.p
            className="text-xs uppercase tracking-widest font-semibold mb-6"
            style={{ color: 'var(--muted)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {lang === 'fr' ? 'Personnel & freelance' : 'Personal & Freelance'}
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-6">
            {freelance.map((p, i) => <ProjectCard key={i} p={p} i={i} lang={lang} />)}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
