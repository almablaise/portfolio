// Infos générales, parcours et avis clients.
import type { Lang } from '../i18n/ui';

export const site = {
  name: 'Alma Blaise',
  email: 'almablaise.9@gmail.com', // À CONFIRMER
  city: 'Barcelona, Spain',
  linkedin: '', // TODO : colle ici le lien de ton profil LinkedIn (il s'affichera automatiquement)
  behance: 'https://www.behance.net/pommeblais430c',
  instagram: '', // optionnel
  cv: '/cv-alma-blaise.pdf', // dépose ton CV dans /public avec ce nom
};

type L = Record<Lang, string>;

// Parcours (page À propos). Le plus récent en premier.
export const timeline: { period: string; title: L; place: string; text: L; current?: boolean }[] = [
  {
    period: '2024 →',
    current: true,
    title: { en: 'UX/UI designer', fr: 'Designer UX/UI', es: 'Diseñadora UX/UI' },
    place: 'Jumanji Studio, Barcelona',
    text: {
      en: 'An impact-driven studio: prototypes and design systems, user interviews and usability testing, website design.',
      fr: 'Un studio engagé sur des projets à impact : prototypes et design systems, entretiens utilisateurs et tests d’utilisabilité, design de sites web.',
      es: 'Un estudio orientado al impacto: prototipos y design systems, entrevistas con usuarios y tests de usabilidad, diseño web.',
    },
  },
  {
    period: '2023 →',
    current: true,
    title: { en: 'Freelance UX/UI & graphic designer', fr: 'Designer UX/UI & graphiste freelance', es: 'Diseñadora UX/UI y gráfica freelance' },
    place: 'Paris · Barcelona',
    text: {
      en: 'UX/UI design, graphic design and content creation for Beyond Growth and other clients.',
      fr: 'UX/UI design, graphisme et création de contenu pour Beyond Growth et d’autres clients.',
      es: 'Diseño UX/UI, diseño gráfico y creación de contenido para Beyond Growth y otros clientes.',
    },
  },
  {
    period: '2024',
    title: { en: 'Communication Manager', fr: 'Communication Manager', es: 'Communication Manager' },
    place: 'brain.storm, Barcelona',
    text: {
      en: 'UX/UI design and visual identity creation.',
      fr: 'UX/UI design et création d’identité visuelle.',
      es: 'Diseño UX/UI y creación de identidad visual.',
    },
  },
  {
    period: '2023 – 2024',
    title: { en: 'Master in Digital Experience Design', fr: 'Master en Digital Experience Design', es: 'Máster en Diseño de Experiencias Digitales' },
    place: 'BAU, Barcelona',
    text: {
      en: 'UX research and digital product design, taught in Spanish.',
      fr: 'Recherche UX et design de produits numériques, en espagnol.',
      es: 'Investigación UX y diseño de productos digitales, en español.',
    },
  },
  {
    period: '2022 – 2023',
    title: { en: 'Spanish & Catalan courses', fr: 'Cours d’espagnol et de catalan', es: 'Cursos de español y catalán' },
    place: 'Expanish, World Class & CPNL, Barcelona',
    text: { en: 'Settling in Barcelona.', fr: 'Installation à Barcelone.', es: 'Llegada a Barcelona.' },
  },
  {
    period: '2022',
    title: { en: 'Digital & graphic designer', fr: 'Designer digital & graphiste', es: 'Diseñadora digital y gráfica' },
    place: 'Artex – The Alchemy of Art & Finance, Paris',
    text: {
      en: 'Concept, production and visual creation, web design and print for internal and external use.',
      fr: 'Conception, réalisation et création visuelle, webdesign et print pour la communication interne et externe.',
      es: 'Concepción, producción y creación visual, diseño web e impresos para uso interno y externo.',
    },
  },
  {
    period: '2022',
    title: { en: 'Graphic designer', fr: 'Graphiste', es: 'Diseñadora gráfica' },
    place: 'Minuit 12, Paris',
    text: {
      en: 'For an artistic and activist collective, winner of the Créart’UP programme supported by the City of Paris.',
      fr: 'Pour un collectif artistique et militant, lauréat du programme Créart’UP soutenu par la Ville de Paris.',
      es: 'Para un colectivo artístico y activista, ganador del programa Créart’UP apoyado por la ciudad de París.',
    },
  },
  {
    period: '2021 – 2022',
    title: { en: 'Junior experience designer & graphic designer', fr: 'Designer d’expérience junior & graphiste', es: 'Diseñadora de experiencias junior y gráfica' },
    place: 'Choregraphy – we design experience, Paris',
    text: {
      en: 'Experience design and graphic design for brand events.',
      fr: 'Design d’expérience et graphisme pour des événements de marque.',
      es: 'Diseño de experiencias y diseño gráfico para eventos de marca.',
    },
  },
  {
    period: '2016 – 2021',
    title: { en: 'Master’s in Digital & Graphic Design — Junior Art Director', fr: 'Master Design digital & graphique — Directrice artistique junior', es: 'Máster en Diseño Digital y Gráfico — Directora de arte junior' },
    place: 'ECV, Paris',
    text: {
      en: 'Five years of graphic and digital design, including an exchange semester in Denmark.',
      fr: 'Cinq ans de design graphique et digital, dont un semestre d’échange au Danemark.',
      es: 'Cinco años de diseño gráfico y digital, con un semestre de intercambio en Dinamarca.',
    },
  },
  {
    period: '2019',
    title: { en: 'Exchange semester — Digital & Graphic Design', fr: 'Semestre d’échange — Design digital & graphique', es: 'Semestre de intercambio — Diseño Digital y Gráfico' },
    place: 'Design School Kolding, Denmark',
    text: { en: 'Taught in English.', fr: 'En anglais.', es: 'En inglés.' },
  },
  {
    period: '2015 – 2019',
    title: { en: 'Activity leader, children’s camps', fr: 'Animatrice de colonies de vacances', es: 'Monitora de campamentos infantiles' },
    place: 'France',
    text: {
      en: 'Where I learned to run a group, adapt on the spot and make things fun.',
      fr: 'Là où j’ai appris à animer un groupe, à m’adapter sur le moment et à rendre les choses ludiques.',
      es: 'Donde aprendí a dinamizar grupos, adaptarme sobre la marcha y hacer las cosas divertidas.',
    },
  },
];

export const hardSkills = ['Figma', 'Adobe Ps, Id, Ai, Pr, Ae', 'Webflow', 'HTML/CSS', 'Miro', 'Notion', 'Claude AI', 'ChatGPT', 'Agile / Scrum'];
export const softSkills: Record<Lang, string[]> = {
  en: ['Empathy', 'Curiosity', 'Communication', 'Adaptability', 'Multicultural'],
  fr: ['Empathie', 'Curiosité', 'Communication', 'Adaptabilité', 'Multiculturelle'],
  es: ['Empatía', 'Curiosidad', 'Comunicación', 'Adaptabilidad', 'Multicultural'],
};

// AVIS CLIENTS
// Uniquement de vrais avis, avec l'accord du client.
// Tant que "placeholder: true", la carte est affichée en gris (version de travail).
// Mets "show: false" pour masquer un avis.
export const testimonials: { quote: L; name: string; role: string; placeholder?: boolean; show?: boolean }[] = [
  {
    placeholder: true,
    show: false,
    quote: {
      en: '[Client quote — 2 to 4 sentences about working with Alma, what she brought and the result.]',
      fr: '[Avis client — 2 à 4 phrases sur la collaboration, ce qu’Alma a apporté et le résultat.]',
      es: '[Opinión del cliente — 2 a 4 frases sobre la colaboración, lo que aportó Alma y el resultado.]',
    },
    name: '[Name Surname]',
    role: '[Role], Capsule Club',
  },
  {
    placeholder: true,
    show: false,
    quote: {
      en: '[Client quote — 2 to 4 sentences about working with Alma, what she brought and the result.]',
      fr: '[Avis client — 2 à 4 phrases sur la collaboration, ce qu’Alma a apporté et le résultat.]',
      es: '[Opinión del cliente — 2 a 4 frases sobre la colaboración, lo que aportó Alma y el resultado.]',
    },
    name: '[Name Surname]',
    role: '[Role], Jumanji Studio',
  },
  {
    placeholder: true,
    show: false,
    quote: {
      en: '[Client quote — 2 to 4 sentences about working with Alma, what she brought and the result.]',
      fr: '[Avis client — 2 à 4 phrases sur la collaboration, ce qu’Alma a apporté et le résultat.]',
      es: '[Opinión del cliente — 2 a 4 frases sobre la colaboración, lo que aportó Alma y el resultado.]',
    },
    name: '[Name Surname]',
    role: '[Role], HomeCycle',
  },
];

// Clients (bandeau « Ils m'ont fait confiance ») — remplacer par les logos dans /public/images/logos/ quand ils sont disponibles
export const clients = ['Jumanji Studio', 'HomeCycle', 'le·tournant', 'GaiaConnect', 'The Spaceship', 'Beyond Growth'];

// Références (repris du site Webflow)
export const references: { name: string; org: string; text: L }[] = [
  { name: 'Valentin Lheureux', org: 'HomeCycle', text: {
    en: 'Art direction, photo shoot direction, visual identity and logo, website mockups, wireframes and user flows, social media visuals.',
    fr: 'Direction artistique, direction de shooting photo, identité visuelle et logo, maquettes du site, wireframes et parcours utilisateurs, visuels pour les réseaux sociaux.',
    es: 'Dirección de arte, dirección de sesión de fotos, identidad visual y logo, maquetas web, wireframes y flujos de usuario, visuales para redes sociales.' } },
  { name: 'Yohan Lafon', org: 'Jumanji Studio', text: {
    en: 'User interviews, rebranding, website updates and visual content creation.',
    fr: 'Entretiens utilisateurs, refonte de marque, mises à jour du site et création de contenus visuels.',
    es: 'Entrevistas con usuarios, rebranding, actualizaciones de la web y creación de contenido visual.' } },
  { name: 'Benjamin Mercier', org: 'GaiaConnect', text: {
    en: 'Visual identity, social media development and web design mockups.',
    fr: 'Identité visuelle, développement des réseaux sociaux et maquettes web.',
    es: 'Identidad visual, desarrollo de redes sociales y maquetas web.' } },
  { name: 'Marion Cas', org: 'Consultant', text: {
    en: 'Social media visuals (banners, LinkedIn posts) and a full website, from mockup to publication in Webflow.',
    fr: 'Visuels pour les réseaux sociaux (bannières, posts LinkedIn) et un site complet, de la maquette à la mise en ligne sur Webflow.',
    es: 'Visuales para redes sociales (banners, posts de LinkedIn) y una web completa, de la maqueta a la publicación en Webflow.' } },
];
