// Tous les textes du site, dans les 3 langues.
// Pour modifier un texte : change-le ici dans chaque langue.

export const languages = { en: 'EN', fr: 'FR', es: 'ES' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export function path(lang: Lang, p = '') {
  const clean = p.replace(/^\/+/, '');
  const base = lang === defaultLang ? '/' : `/${lang}/`;
  return clean ? base + clean : base;
}

export const ui = {
  en: {
    meta: {
      title: 'Alma Blaise — UX/UI & graphic designer in Barcelona',
      description:
        'Freelance UX/UI and graphic designer based in Barcelona, working on impact-driven projects in English, French and Spanish.',
    },
    nav: { work: 'Portfolio', about: 'About me', contact: 'Contact' },
    hero: {
      kicker: 'Freelance designer for impact-driven projects · Barcelona',
      title: 'Step into my UX/UI & graphic design portfolio!',
      text: 'I design digital products, services and visual identities for projects that make things better — for people, communities and the planet. I sketch by hand, think with post-its, and use the latest AI tools to go further, faster. Always with a personal, human touch.',
      cta1: 'See my work',
      cta2: 'Get in touch',
    },
    why: {
      kicker: 'Why work with me',
      title: 'A pencil in one hand, AI in the other.',
      pillars: [
        {
          title: 'Impact first',
          text: 'I mostly work with organisations that want to change things: social innovation, ecological transition, child protection, recycling, new ways of working together. I like projects where good design has a real effect on people’s lives.',
        },
        {
          title: 'Handmade at heart',
          text: 'Everything starts on paper. I draw, sketch, illustrate and run workshops with post-its — it’s how I think, and what gives each project its own, authentic personality.',
        },
        {
          title: 'Always up to date',
          text: 'I use AI tools every day to research, explore, prototype and produce faster — and I keep learning as they evolve. Less time on repetitive tasks, more time for ideas and people.',
        },
      ],
      hand: ['Drawing', 'Sketching', 'Illustration', 'Workshops', 'Paper prototyping'],
      ai: ['Claude AI', 'ChatGPT', 'AI research', 'AI prototyping', 'Automation'],
    },
    services: {
      title: 'What I do',
      items: [
        { title: 'UX design', text: 'Research, interviews, personas, user journeys, service design and workshops to understand real needs before designing.' },
        { title: 'UI design', text: 'Interfaces for apps and websites, prototypes and design systems — built in Figma, shipped in Webflow or with developers.' },
        { title: 'Graphic design', text: 'Visual identities, posters, print and social media visuals that give a brand its own voice.' },
      ],
    },
    work: { title: 'Selected work', all: 'See all projects →', view: 'View case →' },
    testimonials: { title: 'What my clients say' },
    intl: {
      title: 'Working across borders',
      text: 'French, raised between cultures and based in Barcelona, I work with clients in Spain, France and English-speaking countries — in their language.',
      langs: [
        { name: 'French', level: 'Native' },
        { name: 'Hungarian', level: 'Native' },
        { name: 'English', level: 'Fluent' },
        { name: 'Spanish', level: 'Fluent' },
        { name: 'Catalan', level: 'A2' },
      ],
    },
    aboutTeaser: {
      title: 'Hey, I’m Alma!',
      text: 'I’m a French UX/UI and graphic designer based in Barcelona, working as a freelancer with several clients at once. My path through France, Hungary, Denmark and Spain made me curious about people and the way they live — and that curiosity drives my work: understanding first, then designing things that make everyday life a little easier.',
      more: 'More about me →',
    },
    how: {
      title: 'Creative journey: how I work',
      text: 'I start with paper, post-its and sketches to explore and refine ideas, then move to digital tools — including AI — once the foundations are solid. So every design has a reason behind it.',
      steps: ['Listening and observing', 'Researching and discovering', 'Brainstorming and conceptualising', 'Sketching and designing'],
      milestones: ['Context', 'Problem', 'Solution'],
    },
    contact: {
      title: 'Let’s work together!',
      text: 'A product to design, a service to rethink or a brand to bring to life? Tell me about your project — in English, French or Spanish.',
      mail: 'Mail',
      based: 'Based in',
      cta: 'Contact me!',
    },
    projects: {
      title: 'My projects',
      intro: 'A selection of UX, UI and graphic design projects — client work as a freelancer, and research projects from my studies in Paris and Barcelona.',
      all: 'All',
      filters: { ux: 'UX design', ui: 'UI design', graphic: 'Graphic design', branding: 'Branding' },
      back: '← All projects',
      role: 'My role',
      client: 'Client',
      year: 'Year',
      tools: 'Tools',
      soon: 'The full case study is coming soon. Want to know more about this project? Write to me!',
      next: 'Next project',
    },
    about: {
      kicker: 'About me',
      title: 'Designer by hand, curious by nature, up to date by choice.',
      intro: [
        'I grew up between French and Hungarian cultures, studied in Paris, lived in Denmark and settled in Barcelona. Moving around taught me to listen, adapt and look at things from different angles — the basis of my work as a designer.',
        'Today I work as a freelancer on projects with an impact: services that bring people together, tools for the ecological transition, campaigns for child protection. I love drawing, building things by hand and running workshops — and I love learning just as much, which is why AI tools are part of my daily toolbox.',
      ],
      photosTitle: 'Me at work',
      photos: [
        'User interviews for the Allride research project',
        'Structuring insights with post-its',
        '[Caption to add — May 2026]',
      ],
      storyTitle: 'My story so far',
      handTitle: 'By hand',
      handText: 'Drawing, sketching, illustration, collages, paper prototypes and post-it workshops. It’s where ideas are born, and what keeps my work personal.',
      aiTitle: 'With AI',
      aiText: 'I use AI to synthesise research, explore directions, prototype and automate repetitive tasks — and I keep learning as the tools evolve. It gives me more time for what matters: people and ideas.',
      skillsTitle: 'Skills & tools',
      hard: 'Hard skills',
      soft: 'Soft skills',
      beyondTitle: 'Beyond design',
      beyond: ['Cultural centres', 'Hiking & nature', 'Social events', 'Drawing'],
      cv: 'Download my CV (PDF)',
    },
    footer: {
      line1: 'Based in Barcelona since 2022.',
      line2: 'Designing for impact, by hand and with AI.',
      rights: 'All rights reserved.',
      legal: 'Legal notice',
      links: 'Quick links',
      cities: 'Barcelona · Paris · Budapest',
      follow: 'Follow me',
    },
    placeholder: 'Visual to add',
    extra: {
      servicesKicker: 'What I do',
      workKicker: 'Projects',
      logos: 'Brands I worked with',
      refsKicker: 'Who I work with',
      refsTitle: 'My references',
      refsText: 'Some of the people and organisations I have worked with recently.',
      faqKicker: 'FAQs',
      faqTitle: 'How do I work?',
      faqText: 'I am often asked…',
      faq: [
        { q: 'What’s your design process?', a: 'Every project starts with listening. Before opening any tool, the focus is on understanding the problem, the users and the context. From there, the process moves through research, wireframes and iterations — always keeping the end user at the centre.' },
        { q: 'Do you work with impact-driven organisations?', a: 'Absolutely — it’s actually a preference. Working with start-ups and organisations that care about social or environmental impact brings real meaning to the work. Good design and positive change go hand in hand.' },
        { q: 'How do you approach collaboration?', a: 'Open communication is everything. You’ll always know where things stand, why decisions were made and what comes next. Design is a dialogue, not a delivery.' },
        { q: 'What tools do you use?', a: 'Figma for UI/UX design, along with a mix of research methods, hand-drawn sketches and AI tools such as Claude and ChatGPT when relevant. The right tool depends on the project — what matters is the thinking behind it.' },
        { q: 'In which languages can we work together?', a: 'English, French and Spanish — and I also speak Hungarian. I work with clients in Spain, France and English-speaking countries.' },
      ],
      faqMore: 'Still have questions?',
      faqMoreText: 'Write to me and let’s talk about your project.',
    },
  },

  fr: {
    meta: {
      title: 'Alma Blaise — Designer UX/UI & graphiste à Barcelone',
      description:
        'Designer UX/UI et graphiste freelance basée à Barcelone, sur des projets à impact, en français, anglais et espagnol.',
    },
    nav: { work: 'Portfolio', about: 'À propos', contact: 'Contact' },
    hero: {
      kicker: 'Designer freelance pour des projets à impact · Barcelone',
      title: 'Bienvenue dans mon portfolio UX/UI & graphisme !',
      text: 'Je conçois des produits numériques, des services et des identités visuelles pour des projets qui font bouger les choses — pour les gens, les territoires et la planète. Je dessine à la main, je réfléchis en post-its, et j’utilise les derniers outils d’IA pour aller plus loin, plus vite. Toujours avec une touche personnelle et humaine.',
      cta1: 'Voir mes projets',
      cta2: 'Me contacter',
    },
    why: {
      kicker: 'Pourquoi travailler avec moi',
      title: 'Un crayon dans une main, l’IA dans l’autre.',
      pillars: [
        {
          title: 'L’impact d’abord',
          text: 'Je travaille surtout avec des structures qui veulent changer les choses : innovation sociale, transition écologique, protection de l’enfance, recyclage, nouvelles façons de travailler ensemble. J’aime les projets où le design a un vrai effet sur la vie des gens.',
        },
        {
          title: 'Fait main, avant tout',
          text: 'Tout commence sur papier. Je dessine, je fais des croquis, des illustrations et des ateliers en post-its — c’est ma façon de penser, et ce qui donne à chaque projet une personnalité authentique.',
        },
        {
          title: 'Toujours à jour',
          text: 'J’utilise les outils d’IA au quotidien pour rechercher, explorer, prototyper et produire plus vite — et je continue d’apprendre à mesure qu’ils évoluent. Moins de temps sur les tâches répétitives, plus de temps pour les idées et les gens.',
        },
      ],
      hand: ['Dessin', 'Croquis', 'Illustration', 'Ateliers', 'Prototypes papier'],
      ai: ['Claude AI', 'ChatGPT', 'Recherche IA', 'Prototypage IA', 'Automatisation'],
    },
    services: {
      title: 'Ce que je fais',
      items: [
        { title: 'UX design', text: 'Recherche, entretiens, personas, parcours utilisateurs, design de services et ateliers pour comprendre les vrais besoins avant de concevoir.' },
        { title: 'UI design', text: 'Interfaces d’applications et de sites, prototypes et design systems — conçus dans Figma, livrés dans Webflow ou avec des développeurs.' },
        { title: 'Graphisme', text: 'Identités visuelles, affiches, print et visuels pour les réseaux sociaux qui donnent à une marque sa propre voix.' },
      ],
    },
    work: { title: 'Projets choisis', all: 'Voir tous les projets →', view: 'Voir le projet →' },
    testimonials: { title: 'Ce que disent mes clients' },
    intl: {
      title: 'Sans frontières',
      text: 'Française, entre plusieurs cultures et installée à Barcelone, je travaille avec des clients en Espagne, en France et dans les pays anglophones — dans leur langue.',
      langs: [
        { name: 'Français', level: 'Natif' },
        { name: 'Hongrois', level: 'Natif' },
        { name: 'Anglais', level: 'Courant' },
        { name: 'Espagnol', level: 'Courant' },
        { name: 'Catalan', level: 'A2' },
      ],
    },
    aboutTeaser: {
      title: 'Hello, moi c’est Alma !',
      text: 'Je suis designer UX/UI et graphiste française, installée à Barcelone, et je travaille en freelance avec plusieurs clients en parallèle. Mon parcours entre la France, la Hongrie, le Danemark et l’Espagne m’a rendue curieuse des gens et de leur façon de vivre — et cette curiosité guide mon travail : comprendre d’abord, puis concevoir des choses qui rendent le quotidien un peu plus simple.',
      more: 'En savoir plus sur moi →',
    },
    how: {
      title: 'Mon processus créatif',
      text: 'Je commence par le papier, les post-its et les croquis pour explorer et affiner les idées, puis je passe aux outils numériques — IA comprise — une fois les bases solides. Chaque choix de design a donc une raison d’être.',
      steps: ['Écouter et observer', 'Rechercher et découvrir', 'Imaginer et conceptualiser', 'Esquisser et designer'],
      milestones: ['Contexte', 'Problème', 'Solution'],
    },
    contact: {
      title: 'Travaillons ensemble !',
      text: 'Un produit à concevoir, un service à repenser ou une marque à faire vivre ? Parlez-moi de votre projet — en français, en anglais ou en espagnol.',
      mail: 'Mail',
      based: 'Basée à',
      cta: 'Me contacter !',
    },
    projects: {
      title: 'Mes projets',
      intro: 'Une sélection de projets UX, UI et graphisme — missions en freelance et projets de recherche réalisés pendant mes études à Paris et à Barcelone.',
      all: 'Tous',
      filters: { ux: 'UX design', ui: 'UI design', graphic: 'Graphisme', branding: 'Identité' },
      back: '← Tous les projets',
      role: 'Mon rôle',
      client: 'Client',
      year: 'Année',
      tools: 'Outils',
      soon: 'L’étude de cas complète arrive bientôt. Envie d’en savoir plus sur ce projet ? Écrivez-moi !',
      next: 'Projet suivant',
    },
    about: {
      kicker: 'À propos',
      title: 'Designer à la main, curieuse par nature, à jour par choix.',
      intro: [
        'J’ai grandi entre les cultures française et hongroise, étudié à Paris, vécu au Danemark et posé mes valises à Barcelone. Bouger m’a appris à écouter, à m’adapter et à regarder les choses sous plusieurs angles — la base de mon travail de designer.',
        'Aujourd’hui, je travaille en freelance sur des projets à impact : des services qui rassemblent les gens, des outils pour la transition écologique, des campagnes pour la protection de l’enfance. J’adore dessiner, fabriquer à la main et animer des ateliers — et j’aime tout autant apprendre, c’est pourquoi les outils d’IA font partie de ma boîte à outils au quotidien.',
      ],
      photosTitle: 'En action',
      photos: [
        'Entretiens utilisateurs pour la recherche Allride',
        'Structurer les enseignements en post-its',
        '[Légende à ajouter — mai 2026]',
      ],
      storyTitle: 'Mon parcours',
      handTitle: 'À la main',
      handText: 'Dessin, croquis, illustration, collages, prototypes papier et ateliers post-its. C’est là que naissent les idées, et ce qui garde mon travail personnel.',
      aiTitle: 'Avec l’IA',
      aiText: 'J’utilise l’IA pour synthétiser la recherche, explorer des pistes, prototyper et automatiser les tâches répétitives — et je continue d’apprendre à mesure que les outils évoluent. Ça me laisse plus de temps pour l’essentiel : les gens et les idées.',
      skillsTitle: 'Compétences & outils',
      hard: 'Compétences techniques',
      soft: 'Qualités humaines',
      beyondTitle: 'En dehors du design',
      beyond: ['Lieux culturels', 'Randonnée & nature', 'Événements', 'Dessin'],
      cv: 'Télécharger mon CV (PDF)',
    },
    footer: {
      line1: 'Basée à Barcelone depuis 2022.',
      line2: 'Du design à impact, à la main et avec l’IA.',
      rights: 'Tous droits réservés.',
      legal: 'Mentions légales',
      links: 'Liens rapides',
      cities: 'Barcelone · Paris · Budapest',
      follow: 'Me suivre',
    },
    placeholder: 'Visuel à ajouter',
    extra: {
      servicesKicker: 'Ce que je fais',
      workKicker: 'Projets',
      logos: 'Ils m’ont fait confiance',
      refsKicker: 'Avec qui je travaille',
      refsTitle: 'Mes références',
      refsText: 'Quelques personnes et structures avec qui j’ai travaillé récemment.',
      faqKicker: 'FAQ',
      faqTitle: 'Comment je travaille ?',
      faqText: 'On me demande souvent…',
      faq: [
        { q: 'Quel est ton processus de design ?', a: 'Chaque projet commence par l’écoute. Avant d’ouvrir le moindre outil, je cherche à comprendre le problème, les utilisateurs et le contexte. Viennent ensuite la recherche, les wireframes et les itérations — toujours en gardant l’utilisateur final au centre.' },
        { q: 'Travailles-tu avec des structures à impact ?', a: 'Absolument — c’est même une préférence. Travailler avec des start-ups et des organisations engagées sur des enjeux sociaux ou environnementaux donne tout son sens au travail. Bon design et changement positif vont de pair.' },
        { q: 'Comment se passe la collaboration ?', a: 'La communication est essentielle. Vous savez toujours où en est le projet, pourquoi chaque décision a été prise et quelle est la suite. Le design est un dialogue, pas une livraison.' },
        { q: 'Quels outils utilises-tu ?', a: 'Figma pour l’UI/UX, avec un mélange de méthodes de recherche, de croquis à la main et d’outils d’IA comme Claude ou ChatGPT quand c’est pertinent. Le bon outil dépend du projet — ce qui compte, c’est la réflexion derrière.' },
        { q: 'Dans quelles langues peut-on travailler ?', a: 'Français, anglais et espagnol — et je parle aussi hongrois. Je travaille avec des clients en Espagne, en France et dans les pays anglophones.' },
      ],
      faqMore: 'D’autres questions ?',
      faqMoreText: 'Écrivez-moi et parlons de votre projet.',
    },
  },

  es: {
    meta: {
      title: 'Alma Blaise — Diseñadora UX/UI y gráfica en Barcelona',
      description:
        'Diseñadora UX/UI y gráfica freelance en Barcelona, en proyectos de impacto, en español, francés e inglés.',
    },
    nav: { work: 'Portfolio', about: 'Sobre mí', contact: 'Contacto' },
    hero: {
      kicker: 'Diseñadora freelance para proyectos de impacto · Barcelona',
      title: '¡Te doy la bienvenida a mi portfolio de diseño UX/UI y gráfico!',
      text: 'Diseño productos digitales, servicios e identidades visuales para proyectos que mejoran las cosas: para las personas, las comunidades y el planeta. Dibujo a mano, pienso con post-its y uso las últimas herramientas de IA para llegar más lejos y más rápido. Siempre con un toque personal y humano.',
      cta1: 'Ver mis proyectos',
      cta2: 'Contactar',
    },
    why: {
      kicker: 'Por qué trabajar conmigo',
      title: 'Un lápiz en una mano, la IA en la otra.',
      pillars: [
        {
          title: 'El impacto primero',
          text: 'Trabajo sobre todo con organizaciones que quieren cambiar las cosas: innovación social, transición ecológica, protección de la infancia, reciclaje, nuevas formas de trabajar juntos. Me gustan los proyectos en los que el diseño tiene un efecto real en la vida de las personas.',
        },
        {
          title: 'Hecho a mano',
          text: 'Todo empieza en papel. Dibujo, hago bocetos, ilustraciones y talleres con post-its: es mi manera de pensar y lo que da a cada proyecto una personalidad auténtica.',
        },
        {
          title: 'Siempre al día',
          text: 'Uso herramientas de IA a diario para investigar, explorar, prototipar y producir más rápido, y sigo aprendiendo a medida que evolucionan. Menos tiempo en tareas repetitivas, más tiempo para las ideas y las personas.',
        },
      ],
      hand: ['Dibujo', 'Bocetos', 'Ilustración', 'Talleres', 'Prototipos en papel'],
      ai: ['Claude AI', 'ChatGPT', 'Investigación con IA', 'Prototipado con IA', 'Automatización'],
    },
    services: {
      title: 'Lo que hago',
      items: [
        { title: 'Diseño UX', text: 'Investigación, entrevistas, personas, recorridos de usuario, diseño de servicios y talleres para entender las necesidades reales antes de diseñar.' },
        { title: 'Diseño UI', text: 'Interfaces para apps y webs, prototipos y design systems: creados en Figma y publicados en Webflow o con desarrolladores.' },
        { title: 'Diseño gráfico', text: 'Identidades visuales, carteles, impresos y visuales para redes sociales que dan a una marca su propia voz.' },
      ],
    },
    work: { title: 'Proyectos destacados', all: 'Ver todos los proyectos →', view: 'Ver proyecto →' },
    testimonials: { title: 'Lo que dicen mis clientes' },
    intl: {
      title: 'Sin fronteras',
      text: 'Francesa, entre varias culturas e instalada en Barcelona, trabajo con clientes en España, Francia y países de habla inglesa, en su idioma.',
      langs: [
        { name: 'Francés', level: 'Nativo' },
        { name: 'Húngaro', level: 'Nativo' },
        { name: 'Inglés', level: 'Fluido' },
        { name: 'Español', level: 'Fluido' },
        { name: 'Catalán', level: 'A2' },
      ],
    },
    aboutTeaser: {
      title: '¡Hola, soy Alma!',
      text: 'Soy diseñadora UX/UI y gráfica francesa, vivo en Barcelona y trabajo como freelance con varios clientes a la vez. Mi recorrido entre Francia, Hungría, Dinamarca y España me ha hecho curiosa por las personas y su forma de vivir, y esa curiosidad guía mi trabajo: primero entender, luego diseñar cosas que hagan el día a día un poco más fácil.',
      more: 'Más sobre mí →',
    },
    how: {
      title: 'Mi proceso creativo',
      text: 'Empiezo con papel, post-its y bocetos para explorar y afinar ideas, y paso a las herramientas digitales, IA incluida, cuando las bases son sólidas. Así, cada decisión de diseño tiene un porqué.',
      steps: ['Escuchar y observar', 'Investigar y descubrir', 'Idear y conceptualizar', 'Bocetar y diseñar'],
      milestones: ['Contexto', 'Problema', 'Solución'],
    },
    contact: {
      title: '¡Trabajemos juntos!',
      text: '¿Un producto que diseñar, un servicio que repensar o una marca a la que dar vida? Cuéntame tu proyecto, en español, francés o inglés.',
      mail: 'Mail',
      based: 'Ubicación',
      cta: '¡Contáctame!',
    },
    projects: {
      title: 'Mis proyectos',
      intro: 'Una selección de proyectos de UX, UI y diseño gráfico: trabajos como freelance y proyectos de investigación de mis estudios en París y Barcelona.',
      all: 'Todos',
      filters: { ux: 'Diseño UX', ui: 'Diseño UI', graphic: 'Diseño gráfico', branding: 'Branding' },
      back: '← Todos los proyectos',
      role: 'Mi rol',
      client: 'Cliente',
      year: 'Año',
      tools: 'Herramientas',
      soon: 'El caso de estudio completo llegará pronto. ¿Quieres saber más sobre este proyecto? ¡Escríbeme!',
      next: 'Siguiente proyecto',
    },
    about: {
      kicker: 'Sobre mí',
      title: 'Diseñadora a mano, curiosa por naturaleza, al día por elección.',
      intro: [
        'Crecí entre las culturas francesa y húngara, estudié en París, viví en Dinamarca y me instalé en Barcelona. Moverme me enseñó a escuchar, adaptarme y mirar las cosas desde distintos ángulos: la base de mi trabajo como diseñadora.',
        'Hoy trabajo como freelance en proyectos de impacto: servicios que unen a las personas, herramientas para la transición ecológica, campañas de protección de la infancia. Me encanta dibujar, crear con las manos y dinamizar talleres, y me encanta igual de aprender: por eso las herramientas de IA forman parte de mi día a día.',
      ],
      photosTitle: 'En acción',
      photos: [
        'Entrevistas con usuarios para la investigación de Allride',
        'Ordenando aprendizajes con post-its',
        '[Pie de foto pendiente — mayo 2026]',
      ],
      storyTitle: 'Mi trayectoria',
      handTitle: 'A mano',
      handText: 'Dibujo, bocetos, ilustración, collages, prototipos en papel y talleres con post-its. Ahí nacen las ideas, y es lo que mantiene mi trabajo personal.',
      aiTitle: 'Con IA',
      aiText: 'Uso la IA para sintetizar investigaciones, explorar caminos, prototipar y automatizar tareas repetitivas, y sigo aprendiendo a medida que evolucionan las herramientas. Así tengo más tiempo para lo importante: las personas y las ideas.',
      skillsTitle: 'Habilidades y herramientas',
      hard: 'Habilidades técnicas',
      soft: 'Habilidades personales',
      beyondTitle: 'Más allá del diseño',
      beyond: ['Centros culturales', 'Senderismo y naturaleza', 'Eventos sociales', 'Dibujo'],
      cv: 'Descargar mi CV (PDF)',
    },
    footer: {
      line1: 'En Barcelona desde 2022.',
      line2: 'Diseño de impacto, a mano y con IA.',
      rights: 'Todos los derechos reservados.',
      legal: 'Aviso legal',
      links: 'Enlaces',
      cities: 'Barcelona · París · Budapest',
      follow: 'Sígueme',
    },
    placeholder: 'Visual pendiente',
    extra: {
      servicesKicker: 'Lo que hago',
      workKicker: 'Proyectos',
      logos: 'Marcas con las que he trabajado',
      refsKicker: 'Con quién trabajo',
      refsTitle: 'Mis referencias',
      refsText: 'Algunas de las personas y organizaciones con las que he trabajado recientemente.',
      faqKicker: 'FAQ',
      faqTitle: '¿Cómo trabajo?',
      faqText: 'Me suelen preguntar…',
      faq: [
        { q: '¿Cuál es tu proceso de diseño?', a: 'Cada proyecto empieza escuchando. Antes de abrir cualquier herramienta, me centro en entender el problema, a los usuarios y el contexto. Después vienen la investigación, los wireframes y las iteraciones, siempre con el usuario final en el centro.' },
        { q: '¿Trabajas con organizaciones de impacto?', a: '¡Por supuesto! De hecho, es mi preferencia. Trabajar con startups y organizaciones comprometidas con el impacto social o medioambiental da sentido al trabajo. Buen diseño y cambio positivo van de la mano.' },
        { q: '¿Cómo es la colaboración?', a: 'La comunicación lo es todo. Siempre sabrás en qué punto está el proyecto, por qué se tomó cada decisión y cuál es el siguiente paso. El diseño es un diálogo, no una entrega.' },
        { q: '¿Qué herramientas usas?', a: 'Figma para UI/UX, junto con distintos métodos de investigación, bocetos a mano y herramientas de IA como Claude o ChatGPT cuando tiene sentido. La herramienta depende del proyecto: lo importante es la reflexión que hay detrás.' },
        { q: '¿En qué idiomas podemos trabajar?', a: 'Español, francés e inglés, y también hablo húngaro. Trabajo con clientes en España, Francia y países de habla inglesa.' },
      ],
      faqMore: '¿Más preguntas?',
      faqMoreText: 'Escríbeme y hablemos de tu proyecto.',
    },
  },
} as const;

export type UI = (typeof ui)['en'];
export function t(lang: Lang) {
  return ui[lang] as unknown as UI;
}
