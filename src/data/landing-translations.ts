import type { Locale } from './translations';

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
};

type FooterLink = {
  label: string;
  href: string;
};

export type LandingTranslation = {
  navbar: {
    features: string;
    preview: string;
    social: string;
    faq: string;
    pricing: string;
    login: string;
    tryFree: string;
    languageLabel: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleGradient: string;
    titleLine2: string;
    subtitle: string;
    cta: string;
  };
  features: {
    badge: string;
    titlePrefix: string;
    titleGradient: string;
    subtitle: string;
    items: Array<{ title: string; description: string }>;
  };
  howItWorks: {
    badge: string;
    titlePrefix: string;
    titleGradient: string;
    steps: Array<{ number: string; title: string; description: string }>;
  };
  freeVsPro: {
    badge: string;
    title: string;
    subtitle: string;
    freeTitle: string;
    proTitle: string;
    freeItems: string[];
    proItems: string[];
  };
  socialPublishing: {
    badge: string;
    titlePrefix: string;
    titleGradient: string;
    subtitle: string;
    microLine: string;
    workflowLabel: string;
    highlights: string[];
    xTitle: string;
    xDescription: string;
    linkedInTitle: string;
    linkedInDescription: string;
    comingSoon: string;
  };
  pricing: {
    badge: string;
    titlePrefix: string;
    titleGradient: string;
    subtitle: string;
    comingSoon: string;
    plans: Plan[];
  };
  faq: {
    badge: string;
    titlePrefix: string;
    titleGradient: string;
    items: Array<{ question: string; answer: string }>;
  };
  cta: {
    titlePrefix: string;
    titleGradient: string;
    titleSuffix: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    footnote: string;
  };
  footer: {
    rights: string;
    madeIn: string;
    versionLabel: string;
    productTitle: string;
    productItems: FooterLink[];
    legalTitle: string;
    legalItems: string[];
    supportTitle: string;
    supportItems: string[];
    trustTitle: string;
    trustItems: string[];
  };
};

const fr: LandingTranslation = {
  navbar: {
    features: 'Fonctionnalités',
    preview: 'Aperçu',
    social: 'Réseaux',
    faq: 'FAQ',
    pricing: 'Tarifs',
    login: 'Connexion',
    tryFree: 'Essayer gratuitement',
    languageLabel: 'Langue',
  },
  hero: {
    badge: 'L’outil tout-en-un pour créer et publier vos captures',
    titleLine1: 'Capturez votre',
    titleGradient: 'code',
    titleLine2: 'en beauté',
    subtitle: 'Créez et partagez des captures de code en quelques secondes.',
    cta: 'Commencer gratuitement',
  },
  features: {
    badge: 'Fonctionnalités',
    titlePrefix: 'Tout ce dont vous avez',
    titleGradient: 'besoin',
    subtitle:
      'Un outil complet pour créer des captures de code professionnelles en quelques secondes.',
    items: [
      {
        title: 'Export PNG & JPEG limitée',
        description:
          '5 exports PNG gratuits, puis Pro pour débloquer JPEG, qualité adaptative et tailles personnalisées.',
      },
      {
        title: 'Partage instantané',
        description:
          "Générez et copiez un lien sécurisé en un clic pour envoyer vos captures à l'équipe.",
      },
      {
        title: 'Thèmes & polices',
        description:
          'Console Dark, Console Light et Dracula gratuits, les autres thèmes et polices affichent une étiquette Pro avant déblocage.',
      },
      {
        title: 'Fonctionnalités Pro',
        description:
          'Recherche, surlignage, Zen, watermark et métadonnées sont visibles en Free et activables via upgrade.',
      },
      {
        title: 'Résolution 2x/4x',
        description:
          'Des exports nets pour les présentations ou réseaux : tout est rendu côté client, sans installation.',
      },
      {
        title: '100% privé',
        description:
          'Votre code ne quitte jamais votre navigateur : export, preview et rendu restent locaux.',
      },
      {
        title: 'Presets ratio + crop intelligent',
        description:
          'Exports 1:1, 4:5, 16:9 avec cadrage propre pour éviter les étirements.',
      },
      {
        title: 'Export long + pagination',
        description:
          'Capture du scroll complet avec découpage en pages pour les longs snippets.',
      },
      {
        title: 'Multi-panes (split)',
        description:
          'Comparez deux versions côte à côte ou en lignes avec surlignage des différences.',
      },
    ],
  },
  howItWorks: {
    badge: 'Comment ça marche',
    titlePrefix: 'Trois étapes,',
    titleGradient: 'zéro friction',
    steps: [
      {
        number: '01',
        title: 'Collez votre code',
        description:
          'Collez votre snippet ou importez directement depuis GitHub, VS Code ou votre clipboard.',
      },
      {
        number: '02',
        title: 'Personnalisez',
        description:
          'Choisissez le thème, la police, les couleurs de fond, les ombres et la taille de votre capture.',
      },
      {
        number: '03',
        title: 'Exportez & partagez',
        description:
          'Téléchargez en PNG ou JPEG haute résolution, ou partagez instantanément via un lien unique.',
      },
    ],
  },
  freeVsPro: {
    badge: 'Gratis vs Pro',
    title: 'Ce dont la version Free te laisse voir vs ce que Pro débloque',
    subtitle:
      'Commence gratuitement, puis passe à Pro quand tu veux plus de contrôle et plus de liberté.',
    freeTitle: 'Free',
    proTitle: 'Pro',
    freeItems: [
      'Commence immédiatement avec une expérience complète, sans compte.',
      '5 exports PNG gratuits pour tester ton workflow réel.',
      '3 thèmes inclus (Console Dark, Console Light, Dracula) + police Input.',
      'Personnalise ton rendu et visualise les options avancées avant de décider.',
      'Idéal pour créer et partager tes premières captures rapidement.',
    ],
    proItems: [
      'Exports PNG/JPEG illimités avec tailles personnalisées et qualité réglable.',
      'Presets ratio 1:1, 4:5, 16:9 avec recadrage propre pour les réseaux.',
      'Export long avec pagination pour les snippets volumineux.',
      'Multi-panes pour comparer deux versions et repérer les différences.',
      'Contrôle complet: recherche, numéros de ligne, pliage, ligne active, zen, watermark, métadonnées et signature.',
    ],
  },
  socialPublishing: {
    badge: 'Publication sociale',
    titlePrefix: 'Publiez vos captures',
    titleGradient: 'plus vite',
    subtitle:
      'Préparez vos visuels et votre texte sans quitter SnapCode, puis publiez sur vos réseaux préférés.',
    microLine: 'Sans IA pour le moment: 3 textes prêts à adapter.',
    workflowLabel: 'Workflow',
    highlights: [
      '3 suggestions de texte (sans IA), adaptées au snippet',
      'Format optimisé selon la plateforme',
      'Texte modifiable librement avant publication',
    ],
    xTitle: 'Publication sur X',
    xDescription:
      'Choisissez une suggestion courte cohérente avec votre code, puis publiez rapidement.',
    linkedInTitle: 'Publication sur LinkedIn',
    linkedInDescription:
      'Sélectionnez une suggestion orientée contexte projet, puis ajustez le ton avant publication.',
    comingSoon: 'Bientôt',
  },
  pricing: {
    badge: 'Tarifs',
    titlePrefix: 'Un plan pour chaque',
    titleGradient: 'développeur',
    subtitle:
      'Commencez gratuitement, évoluez selon vos besoins. Sans engagement, annulable à tout moment.',
    comingSoon: 'Coming soon',
    plans: [
      {
        name: 'Gratuit',
        price: '0€',
        period: 'pour toujours',
        description:
          'Expérimentez SnapCode avec 5 exports PNG gratuits, puis débloquez la suite.',
        features: [
          '5 exports PNG gratuits',
          '3 thèmes inclus + 1 police',
          "Accès à l’éditeur complet pour tester le rendu",
          'Prévisualisation des options Pro (verrouillées)',
        ],
        cta: 'Commencer gratuitement',
        highlighted: false,
      },
      {
        name: 'Pro',
        price: '6.99€',
        period: 'offre lancement 2 mois, puis 14.99€ a vie',
        description:
          'Accès illimité aux exports, aux thèmes et aux fonctionnalités avancées (recherche, watermark, métadonnées...).',
        features: [
          'Inclut toutes les fonctionnalités Free',
          'Publication directe sur les réseaux (X, LinkedIn) [soon]',
          'Exports PNG/JPEG illimités + tailles personnalisées',
          'Qualité réglable + presets ratio (1:1, 4:5, 16:9)',
          'Crop intelligent pour ratios fixes',
          'Export long (scroll complet) + pagination',
          'Multi-panes pour comparer deux versions',
          'Tous les thèmes & polices premium',
          'Recherche, surlignage, line numbers, pliage, ligne active, Zen',
          'Watermark, metasnippet et signature discrète',
          'Pas de filigrane',
          'Rendu Pro fidèle aux réglages sidebar',
        ],
        cta: 'Débloquer Pro',
        highlighted: true,
      },
    ],
  },
  faq: {
    badge: 'FAQ',
    titlePrefix: 'Questions',
    titleGradient: 'fréquentes',
    items: [
      {
        question: 'Comment fonctionne la limite Free ?',
        answer:
          'La version Free inclut 5 exports PNG. Une fois atteinte, vous pouvez passer à Pro pour exporter sans limite.',
      },
      {
        question: 'Mon code est-il envoyé à un serveur ?',
        answer:
          'Non. Le rendu et l’export se font côté navigateur pour préserver la confidentialité de votre code.',
      },
      {
        question: 'Que débloque la version Pro ?',
        answer:
          'Pro débloque les exports illimités, les options avancées de personnalisation et les fonctionnalités premium de l’éditeur.',
      },
      {
        question: 'Le partage vers X / LinkedIn est-il disponible ?',
        answer:
          'La publication directe est prévue prochainement. Elle est visible dans l’interface comme fonctionnalité à venir.',
      },
    ],
  },
  cta: {
    titlePrefix: 'Prêt à capturer votre',
    titleGradient: 'plus beau code',
    titleSuffix: '?',
    subtitle:
      '5 exports PNG gratuits pour commencer, puis passez Pro pour une expérience illimitée et toutes les options avancées.',
    primaryCta: 'Créer ma première capture',
    secondaryCta: 'Passer Pro',
    footnote: 'Gratuit · Sans inscription · 5 exports PNG inclus',
  },
  footer: {
    rights: '© {year} SnapCode. Tous droits réservés.',
    madeIn: 'Fait en France',
    versionLabel: 'Version',
    productTitle: 'Produit',
    productItems: [
      { label: 'Fonctionnalités', href: '#features' },
      { label: 'Aperçu', href: '#preview' },
      { label: 'Réseaux', href: '#social-publishing' },
      { label: 'Tarifs', href: '#pricing' },
    ],
    legalTitle: 'Légal',
    legalItems: ['CGU', 'Confidentialité', 'Mentions légales'],
    supportTitle: 'Support',
    supportItems: ['FAQ', 'Contact: hello@snapcode.app', 'Signaler un bug'],
    trustTitle: 'Confiance',
    trustItems: [
      '100% côté client',
      'Votre code ne quitte pas votre navigateur',
      'Mises à jour régulières',
    ],
  },
};

const en: LandingTranslation = {
  ...fr,
  navbar: {
    features: 'Features',
    preview: 'Preview',
    social: 'Social',
    faq: 'FAQ',
    pricing: 'Pricing',
    login: 'Login',
    tryFree: 'Try for free',
    languageLabel: 'Language',
  },
  hero: {
    badge: 'The all-in-one tool to create and publish your captures',
    titleLine1: 'Capture your',
    titleGradient: 'code',
    titleLine2: 'beautifully',
    subtitle:
      'Turn snippets into polished visuals with 5 free PNG exports, then unlock Pro in one click. Export, share and premium rendering without installation.',
    cta: 'Start for free',
  },
  features: {
    badge: 'Features',
    titlePrefix: 'Everything you',
    titleGradient: 'need',
    subtitle:
      'A complete tool to create professional code screenshots in seconds.',
    items: [
      {
        title: 'Limited PNG & JPEG export',
        description:
          '5 free PNG exports, then Pro unlocks JPEG, adaptive quality and custom sizes.',
      },
      {
        title: 'Instant sharing',
        description:
          'Generate and copy a secure link in one click to share captures with your team.',
      },
      {
        title: 'Themes & fonts',
        description:
          'Console Dark, Console Light and Dracula are free; other themes and fonts are visible with a Pro badge.',
      },
      {
        title: 'Pro features',
        description:
          'Search, line highlighting, Zen mode, watermark and metadata are visible in Free and unlock with Pro.',
      },
      {
        title: '2x/4x quality',
        description:
          'Crisp exports for presentations and social media, fully rendered client-side.',
      },
      {
        title: '100% private',
        description:
          'Your code never leaves your browser: export, preview and rendering stay local.',
      },
      {
        title: 'Ratio presets + smart crop',
        description: 'Export in 1:1, 4:5 and 16:9 with clean framing.',
      },
      {
        title: 'Long export + pagination',
        description:
          'Capture full scroll and split into pages for long snippets.',
      },
      {
        title: 'Multi-pane split',
        description:
          'Compare two versions side by side or stacked with diff highlighting.',
      },
    ],
  },
  howItWorks: {
    badge: 'How it works',
    titlePrefix: 'Three steps,',
    titleGradient: 'zero friction',
    steps: [
      {
        number: '01',
        title: 'Paste your code',
        description:
          'Paste your snippet or import directly from GitHub, VS Code or clipboard.',
      },
      {
        number: '02',
        title: 'Customize',
        description:
          'Choose theme, font, background, shadows and capture size.',
      },
      {
        number: '03',
        title: 'Export & share',
        description:
          'Download high-resolution PNG or JPEG, or share instantly with a unique link.',
      },
    ],
  },
  freeVsPro: {
    badge: 'Free vs Pro',
    title: 'What Free shows vs what Pro unlocks',
    subtitle:
      'Start free, then upgrade to Pro when you want more control and flexibility.',
    freeTitle: 'Free',
    proTitle: 'Pro',
    freeItems: [
      'Start instantly with a complete experience, no account required.',
      '5 free PNG exports to validate your real workflow.',
      '3 included themes (Console Dark, Console Light, Dracula) + Input font.',
      'Customize your render and preview advanced options before deciding.',
      'Perfect to create and share your first captures quickly.',
    ],
    proItems: [
      'Unlimited PNG/JPEG exports with custom sizes and adjustable quality.',
      '1:1, 4:5 and 16:9 ratio presets with clean social-ready framing.',
      'Long export with pagination for larger snippets.',
      'Multi-pane comparison to spot code differences faster.',
      'Full control: search, line numbers, folding, active line, zen mode, watermark, metadata and signature.',
    ],
  },
  socialPublishing: {
    badge: 'Social publishing',
    titlePrefix: 'Publish your captures',
    titleGradient: 'faster',
    subtitle:
      'Prepare your visuals and caption inside SnapCode, then publish to your favorite platforms.',
    microLine: 'No AI for now: 3 ready-to-edit text suggestions.',
    workflowLabel: 'Workflow',
    highlights: [
      '3 no-AI text suggestions matched to the snippet',
      'Platform-optimized output format',
      'Fully editable text before publishing',
    ],
    xTitle: 'Publish on X',
    xDescription:
      'Pick a concise suggestion aligned with your code and publish fast.',
    linkedInTitle: 'Publish on LinkedIn',
    linkedInDescription:
      'Choose a project-context suggestion, then fine-tune tone before posting.',
    comingSoon: 'Coming soon',
  },
  pricing: {
    badge: 'Pricing',
    titlePrefix: 'A plan for every',
    titleGradient: 'developer',
    subtitle:
      'Start free and upgrade when you need more. No commitment.',
    comingSoon: 'Coming soon',
    plans: [
      {
        name: 'Free',
        price: '0€',
        period: 'forever',
        description:
          'Try SnapCode with 5 free PNG exports, then unlock the rest.',
        features: [
          '5 free PNG exports',
          '3 included themes + 1 font',
          'Full editor access to test your rendering',
          'Preview Pro options (locked)',
        ],
        cta: 'Start for free',
        highlighted: false,
      },
      {
        name: 'Pro',
        price: '6.99€',
        period: 'launch offer 2 months, then 14.99€ lifetime',
        description:
          'Unlimited exports, premium themes and advanced features.',
        features: [
          'Includes every Free feature',
          'Direct publishing to social networks (X, LinkedIn) [soon]',
          'Unlimited PNG/JPEG exports + custom sizes',
          'Adjustable quality + ratio presets (1:1, 4:5, 16:9)',
          'Smart crop for fixed ratios',
          'Long export + pagination',
          'Multi-pane comparison',
          'All premium themes & fonts',
          'Search, line highlighting, line numbers, folding, active line, Zen',
          'Watermark, metasnippet and subtle signature',
          'No free watermark',
          'Pro-accurate rendering from sidebar settings',
        ],
        cta: 'Unlock Pro',
        highlighted: true,
      },
    ],
  },
  faq: {
    badge: 'FAQ',
    titlePrefix: 'Frequently asked',
    titleGradient: 'questions',
    items: [
      {
        question: 'How does the Free limit work?',
        answer:
          'The Free plan includes 5 PNG exports. Once reached, you can upgrade to Pro for unlimited exports.',
      },
      {
        question: 'Is my code sent to a server?',
        answer:
          'No. Rendering and exports run in your browser to keep your code private.',
      },
      {
        question: 'What does Pro unlock?',
        answer:
          'Pro unlocks unlimited exports, advanced customization options and premium editor features.',
      },
      {
        question: 'Is sharing to X / LinkedIn available yet?',
        answer:
          'Direct publishing is coming soon. It is already visible in the interface as an upcoming feature.',
      },
    ],
  },
  cta: {
    titlePrefix: 'Ready to capture your',
    titleGradient: 'best code',
    titleSuffix: '?',
    subtitle:
      'Start with 5 free PNG exports, then upgrade to Pro for unlimited usage.',
    primaryCta: 'Create my first capture',
    secondaryCta: 'Upgrade to Pro',
    footnote: 'Free · No signup · 5 PNG exports included',
  },
  footer: {
    rights: '© {year} SnapCode. All rights reserved.',
    madeIn: 'Made in France',
    versionLabel: 'Version',
    productTitle: 'Product',
    productItems: [
      { label: 'Features', href: '#features' },
      { label: 'Preview', href: '#preview' },
      { label: 'Social', href: '#social-publishing' },
      { label: 'Pricing', href: '#pricing' },
    ],
    legalTitle: 'Legal',
    legalItems: ['Terms', 'Privacy', 'Legal notice'],
    supportTitle: 'Support',
    supportItems: ['FAQ', 'Contact: hello@snapcode.app', 'Report a bug'],
    trustTitle: 'Trust',
    trustItems: [
      '100% client-side',
      'Your code never leaves your browser',
      'Regular updates',
    ],
  },
};

const es: LandingTranslation = {
  ...en,
  navbar: {
    features: 'Funciones',
    preview: 'Vista previa',
    social: 'Social',
    faq: 'FAQ',
    pricing: 'Precios',
    login: 'Iniciar sesion',
    tryFree: 'Probar gratis',
    languageLabel: 'Idioma',
  },
  hero: {
    badge: 'La herramienta todo-en-uno para crear y publicar tus capturas',
    titleLine1: 'Captura tu',
    titleGradient: 'codigo',
    titleLine2: 'con estilo',
    subtitle:
      'Convierte snippets en imagenes elegantes con 5 exports PNG gratis y luego activa Pro en un clic.',
    cta: 'Empezar gratis',
  },
  features: {
    badge: 'Funciones',
    titlePrefix: 'Todo lo que',
    titleGradient: 'necesitas',
    subtitle:
      'Una herramienta completa para crear capturas de codigo profesionales en segundos.',
    items: [
      {
        title: 'Export PNG y JPEG limitado',
        description:
          '5 exports PNG gratis, luego Pro desbloquea JPEG, calidad adaptativa y tamanos personalizados.',
      },
      {
        title: 'Compartir al instante',
        description:
          'Genera y copia un enlace seguro en un clic para compartir capturas con tu equipo.',
      },
      {
        title: 'Temas y fuentes',
        description:
          'Console Dark, Console Light y Dracula son gratis; los demas temas y fuentes se muestran con badge Pro.',
      },
      {
        title: 'Funciones Pro',
        description:
          'Busqueda, resaltado, modo Zen, watermark y metadatos visibles en Free y activables con Pro.',
      },
      {
        title: 'Calidad 2x/4x',
        description:
          'Exports nitidos para presentaciones y redes, renderizados completamente en cliente.',
      },
      {
        title: '100% privado',
        description:
          'Tu codigo nunca sale del navegador: export, preview y render permanecen locales.',
      },
      {
        title: 'Presets de ratio + recorte inteligente',
        description: 'Exporta en 1:1, 4:5 y 16:9 con encuadre limpio.',
      },
      {
        title: 'Export largo + paginacion',
        description:
          'Captura el scroll completo y divide en paginas para snippets largos.',
      },
      {
        title: 'Multi-panel (split)',
        description:
          'Compara dos versiones en paralelo o apiladas con resaltado de diferencias.',
      },
    ],
  },
  howItWorks: {
    badge: 'Como funciona',
    titlePrefix: 'Tres pasos,',
    titleGradient: 'cero friccion',
    steps: [
      {
        number: '01',
        title: 'Pega tu codigo',
        description:
          'Pega tu snippet o importa directamente desde GitHub, VS Code o el portapapeles.',
      },
      {
        number: '02',
        title: 'Personaliza',
        description:
          'Elige tema, fuente, fondo, sombras y tamano de captura.',
      },
      {
        number: '03',
        title: 'Exporta y comparte',
        description:
          'Descarga PNG o JPEG en alta resolucion, o comparte al instante con un enlace unico.',
      },
    ],
  },
  freeVsPro: {
    badge: 'Gratis vs Pro',
    title: 'Lo que Free muestra vs lo que Pro desbloquea',
    subtitle:
      'Empieza gratis y pasa a Pro cuando quieras mas control y libertad.',
    freeTitle: 'Free',
    proTitle: 'Pro',
    freeItems: [
      'Empieza al instante con una experiencia completa, sin cuenta.',
      '5 exports PNG gratis para validar tu flujo de trabajo real.',
      '3 temas incluidos (Console Dark, Console Light, Dracula) + fuente Input.',
      'Personaliza el render y visualiza opciones avanzadas antes de decidir.',
      'Ideal para crear y compartir tus primeras capturas rapidamente.',
    ],
    proItems: [
      'Exports PNG/JPEG ilimitados con tamanos personalizados y calidad ajustable.',
      'Presets 1:1, 4:5 y 16:9 con encuadre limpio para redes.',
      'Export largo con paginacion para snippets extensos.',
      'Comparacion multi-panel para detectar diferencias mas rapido.',
      'Control total: busqueda, numeros de linea, plegado, linea activa, modo Zen, marca de agua, metadatos y firma.',
    ],
  },
  socialPublishing: {
    badge: 'Publicacion social',
    titlePrefix: 'Publica tus capturas',
    titleGradient: 'mas rapido',
    subtitle:
      'Prepara imagen y texto en SnapCode y publica en tus plataformas favoritas.',
    microLine: 'Sin IA por ahora: 3 textos listos para adaptar.',
    workflowLabel: 'Flujo',
    highlights: [
      '3 sugerencias de texto (sin IA) segun el snippet',
      'Formato optimizado por plataforma',
      'Texto editable libremente antes de publicar',
    ],
    xTitle: 'Publicar en X',
    xDescription:
      'Elige una sugerencia corta y coherente con tu codigo, y publica rapido.',
    linkedInTitle: 'Publicar en LinkedIn',
    linkedInDescription:
      'Selecciona una sugerencia orientada a proyecto y ajusta el tono antes de publicar.',
    comingSoon: 'Proximamente',
  },
  pricing: {
    badge: 'Precios',
    titlePrefix: 'Un plan para cada',
    titleGradient: 'desarrollador',
    subtitle:
      'Empieza gratis y mejora cuando lo necesites. Sin compromiso.',
    comingSoon: 'Proximamente',
    plans: [
      {
        name: 'Gratis',
        price: '0€',
        period: 'para siempre',
        description:
          'Prueba SnapCode con 5 exports PNG gratis y desbloquea el resto despues.',
        features: [
          '5 exports PNG gratis',
          '3 temas incluidos + 1 fuente',
          'Acceso completo al editor para probar el resultado',
          'Vista previa de opciones Pro (bloqueadas)',
        ],
        cta: 'Empezar gratis',
        highlighted: false,
      },
      {
        name: 'Pro',
        price: '6.99€',
        period: 'oferta de lanzamiento 2 meses, luego 14.99€ de por vida',
        description:
          'Exports ilimitados, temas premium y funciones avanzadas.',
        features: [
          'Incluye todas las funciones del plan Free',
          'Publicacion directa en redes sociales (X, LinkedIn) [soon]',
          'Exports PNG/JPEG ilimitados + tamanos personalizados',
          'Calidad ajustable + presets de ratio (1:1, 4:5, 16:9)',
          'Recorte inteligente para ratios fijos',
          'Export largo + paginacion',
          'Comparacion multi-panel',
          'Todos los temas y fuentes premium',
          'Busqueda, resaltado de linea, numeros de linea, plegado, linea activa y modo Zen',
          'Marca de agua, metadatos y firma discreta',
          'Sin marca de agua de la version gratis',
          'Render Pro fiel a los ajustes de la sidebar',
        ],
        cta: 'Desbloquear Pro',
        highlighted: true,
      },
    ],
  },
  cta: {
    titlePrefix: 'Listo para capturar tu',
    titleGradient: 'mejor codigo',
    titleSuffix: '?',
    subtitle:
      'Empieza con 5 exports PNG gratis y pasa a Pro para uso ilimitado.',
    primaryCta: 'Crear mi primera captura',
    secondaryCta: 'Pasar a Pro',
    footnote: 'Gratis · Sin registro · 5 exports PNG incluidos',
  },
  footer: {
    rights: '© {year} SnapCode. Todos los derechos reservados.',
    madeIn: 'Hecho en Francia',
    versionLabel: 'Version',
    productTitle: 'Producto',
    productItems: [
      { label: 'Funciones', href: '#features' },
      { label: 'Vista previa', href: '#preview' },
      { label: 'Social', href: '#social-publishing' },
      { label: 'Precios', href: '#pricing' },
    ],
    legalTitle: 'Legal',
    legalItems: ['Terminos', 'Privacidad', 'Aviso legal'],
    supportTitle: 'Soporte',
    supportItems: ['FAQ', 'Contacto: hello@snapcode.app', 'Reportar un bug'],
    trustTitle: 'Confianza',
    trustItems: [
      '100% del lado del cliente',
      'Tu codigo nunca sale del navegador',
      'Actualizaciones regulares',
    ],
  },
};

const de: LandingTranslation = {
  ...en,
  navbar: {
    features: 'Funktionen',
    preview: 'Vorschau',
    social: 'Social',
    faq: 'FAQ',
    pricing: 'Preise',
    login: 'Anmelden',
    tryFree: 'Kostenlos testen',
    languageLabel: 'Sprache',
  },
  hero: {
    badge: 'Das All-in-One-Tool zum Erstellen und Veröffentlichen deiner Captures',
    titleLine1: 'Erfasse deinen',
    titleGradient: 'Code',
    titleLine2: 'stilvoll',
    subtitle:
      'Verwandle Snippets in starke Visuals mit 5 kostenlosen PNG-Exporten und schalte Pro mit einem Klick frei.',
    cta: 'Kostenlos starten',
  },
  features: {
    badge: 'Funktionen',
    titlePrefix: 'Alles, was du',
    titleGradient: 'brauchst',
    subtitle:
      'Ein komplettes Tool fur professionelle Code-Screenshots in Sekunden.',
    items: [
      {
        title: 'Begrenzter PNG- und JPEG-Export',
        description:
          '5 kostenlose PNG-Exporte, danach schaltet Pro JPEG, adaptive Qualitat und eigene Groessen frei.',
      },
      {
        title: 'Sofort teilen',
        description:
          'Erzeuge und kopiere einen sicheren Link mit einem Klick fur dein Team.',
      },
      {
        title: 'Themes und Fonts',
        description:
          'Console Dark, Console Light und Dracula sind kostenlos; weitere Themes und Fonts sind sichtbar, aber mit Pro-Badge.',
      },
      {
        title: 'Pro-Funktionen',
        description:
          'Suche, Hervorhebung, Zen-Modus, Watermark und Metadaten sind in Free sichtbar und mit Pro aktivierbar.',
      },
      {
        title: '2x/4x Qualitat',
        description:
          'Scharfe Exporte fur Praesentationen und Social Media, komplett clientseitig gerendert.',
      },
      {
        title: '100% privat',
        description:
          'Dein Code verlasst den Browser nie: Export, Vorschau und Rendering bleiben lokal.',
      },
      {
        title: 'Ratio-Presets + Smart Crop',
        description: 'Export in 1:1, 4:5 und 16:9 mit sauberem Zuschnitt.',
      },
      {
        title: 'Langer Export + Paginierung',
        description:
          'Erfasst komplettes Scrollen und teilt lange Snippets in Seiten.',
      },
      {
        title: 'Multi-Pane Split',
        description:
          'Vergleiche zwei Versionen nebeneinander oder gestapelt mit Diff-Hervorhebung.',
      },
    ],
  },
  howItWorks: {
    badge: 'So funktioniert es',
    titlePrefix: 'Drei Schritte,',
    titleGradient: 'null Reibung',
    steps: [
      {
        number: '01',
        title: 'Code einfugen',
        description:
          'Snippet einfugen oder direkt aus GitHub, VS Code oder Zwischenablage importieren.',
      },
      {
        number: '02',
        title: 'Anpassen',
        description:
          'Theme, Font, Hintergrund, Schatten und Exportgroesse festlegen.',
      },
      {
        number: '03',
        title: 'Exportieren und teilen',
        description:
          'PNG oder JPEG in hoher Auflosung laden oder per einzigartigem Link teilen.',
      },
    ],
  },
  freeVsPro: {
    badge: 'Gratis vs Pro',
    title: 'Was Free zeigt vs was Pro freischaltet',
    subtitle:
      'Starte kostenlos und wechsle zu Pro, wenn du mehr Kontrolle und Freiheit willst.',
    freeTitle: 'Free',
    proTitle: 'Pro',
    freeItems: [
      'Sofort starten mit kompletter Erfahrung, ganz ohne Konto.',
      '5 kostenlose PNG-Exporte fur deinen echten Workflow.',
      '3 enthaltene Themes (Console Dark, Console Light, Dracula) + Input-Schrift.',
      'Passe dein Rendering an und sieh dir erweiterte Optionen vorab an.',
      'Perfekt, um schnell erste Captures zu erstellen und zu teilen.',
    ],
    proItems: [
      'Unbegrenzte PNG/JPEG-Exporte mit eigenen Groessen und anpassbarer Qualitat.',
      '1:1, 4:5 und 16:9 Presets mit sauberem Zuschnitt fur Social Media.',
      'Langer Export mit Paginierung fur grosse Snippets.',
      'Multi-Pane Vergleich, um Unterschiede schneller zu erkennen.',
      'Volle Kontrolle: Suche, Zeilennummern, Faltfunktion, aktive Zeile, Zen-Modus, Wasserzeichen, Metadaten und Signatur.',
    ],
  },
  socialPublishing: {
    badge: 'Social Publishing',
    titlePrefix: 'Veroffentliche deine Captures',
    titleGradient: 'schneller',
    subtitle:
      'Bereite Bild und Text in SnapCode vor und veroffentliche auf deinen bevorzugten Netzwerken.',
    microLine: 'Ohne KI vorerst: 3 vorbereitete Textvorschlage.',
    workflowLabel: 'Ablauf',
    highlights: [
      '3 Textvorschlage (ohne KI), passend zum Snippet',
      'Plattform-optimiertes Format',
      'Text vor der Veroffentlichung frei bearbeitbar',
    ],
    xTitle: 'Auf X veroffentlichen',
    xDescription:
      'Wahle einen kurzen Vorschlag passend zu deinem Code und veroffentliche schnell.',
    linkedInTitle: 'Auf LinkedIn veroffentlichen',
    linkedInDescription:
      'Wahle einen projektorientierten Vorschlag und passe den Ton vor dem Posten an.',
    comingSoon: 'Demnachst',
  },
  pricing: {
    badge: 'Preise',
    titlePrefix: 'Ein Plan fur jeden',
    titleGradient: 'Entwickler',
    subtitle:
      'Starte kostenlos und wechsle zu Pro, sobald du mehr brauchst. Ohne Abo.',
    comingSoon: 'Demnachst',
    plans: [
      {
        name: 'Free',
        price: '0€',
        period: 'fur immer',
        description:
          'Teste SnapCode mit 5 kostenlosen PNG-Exporten und schalte dann alles frei.',
        features: [
          '5 kostenlose PNG-Exporte',
          '3 enthaltene Themes + 1 Schriftart',
          'Voller Editor-Zugriff zum Testen des Renderings',
          'Vorschau auf Pro-Optionen (gesperrt)',
        ],
        cta: 'Kostenlos starten',
        highlighted: false,
      },
      {
        name: 'Pro',
        price: '6.99€',
        period: 'Launch-Angebot 2 Monate, dann 14.99€ lebenslang',
        description:
          'Unbegrenzte Exporte, Premium-Themes und erweiterte Funktionen.',
        features: [
          'Enthalt alle Funktionen aus Free',
          'Direktes Veroffentlichen in soziale Netzwerke (X, LinkedIn) [soon]',
          'Unbegrenzte PNG/JPEG-Exporte + eigene Groessen',
          'Anpassbare Qualitat + Ratio-Presets (1:1, 4:5, 16:9)',
          'Smart Crop fur feste Ratios',
          'Langer Export + Paginierung',
          'Multi-Pane Vergleich',
          'Alle Premium-Themes und Fonts',
          'Suche, Zeilenhervorhebung, Zeilennummern, Faltfunktion, aktive Zeile und Zen-Modus',
          'Wasserzeichen, Metadaten und dezente Signatur',
          'Kein Wasserzeichen der Gratis-Version',
          'Pro-genaues Rendering aus Sidebar-Einstellungen',
        ],
        cta: 'Pro freischalten',
        highlighted: true,
      },
    ],
  },
  cta: {
    titlePrefix: 'Bereit, deinen',
    titleGradient: 'besten Code',
    titleSuffix: 'zu capturen?',
    subtitle:
      'Starte mit 5 kostenlosen PNG-Exporten und upgrade fur unbegrenzte Nutzung auf Pro.',
    primaryCta: 'Meine erste Capture erstellen',
    secondaryCta: 'Zu Pro wechseln',
    footnote: 'Kostenlos · Ohne Registrierung · 5 PNG-Exporte inklusive',
  },
  footer: {
    rights: '© {year} SnapCode. Alle Rechte vorbehalten.',
    madeIn: 'Hergestellt in Frankreich',
    versionLabel: 'Version',
    productTitle: 'Produkt',
    productItems: [
      { label: 'Funktionen', href: '#features' },
      { label: 'Vorschau', href: '#preview' },
      { label: 'Social', href: '#social-publishing' },
      { label: 'Preise', href: '#pricing' },
    ],
    legalTitle: 'Rechtliches',
    legalItems: ['AGB', 'Datenschutz', 'Impressum'],
    supportTitle: 'Support',
    supportItems: [
      'FAQ',
      'Kontakt: hello@snapcode.app',
      'Fehler melden',
    ],
    trustTitle: 'Vertrauen',
    trustItems: [
      '100% client-seitig',
      'Dein Code bleibt im Browser',
      'Regelmässige Updates',
    ],
  },
};

const it: LandingTranslation = {
  ...en,
  navbar: {
    features: 'Funzionalita',
    preview: 'Anteprima',
    social: 'Social',
    faq: 'FAQ',
    pricing: 'Prezzi',
    login: 'Accedi',
    tryFree: 'Prova gratis',
    languageLabel: 'Lingua',
  },
  hero: {
    badge: 'Lo strumento tutto-in-uno per creare e pubblicare le tue catture',
    titleLine1: 'Cattura il tuo',
    titleGradient: 'codice',
    titleLine2: 'al meglio',
    subtitle:
      'Trasforma snippet in immagini curate con 5 export PNG gratuiti e passa a Pro con un clic.',
    cta: 'Inizia gratis',
  },
  features: {
    badge: 'Funzionalita',
    titlePrefix: 'Tutto cio che',
    titleGradient: 'ti serve',
    subtitle:
      'Uno strumento completo per creare screenshot di codice professionali in pochi secondi.',
    items: [
      {
        title: 'Export PNG e JPEG limitato',
        description:
          '5 export PNG gratuiti, poi Pro sblocca JPEG, qualita adattiva e dimensioni personalizzate.',
      },
      {
        title: 'Condivisione immediata',
        description:
          'Genera e copia un link sicuro con un clic per condividere le catture con il team.',
      },
      {
        title: 'Temi e font',
        description:
          'Console Dark, Console Light e Dracula sono gratis; gli altri temi e font sono visibili con badge Pro.',
      },
      {
        title: 'Funzioni Pro',
        description:
          'Ricerca, evidenziazione, modalita Zen, watermark e metadati visibili in Free e attivabili con Pro.',
      },
      {
        title: 'Qualita 2x/4x',
        description:
          'Export nitidi per presentazioni e social, con rendering completamente client-side.',
      },
      {
        title: '100% privato',
        description:
          'Il tuo codice non lascia mai il browser: export, preview e rendering restano locali.',
      },
      {
        title: 'Preset ratio + crop intelligente',
        description: 'Export 1:1, 4:5 e 16:9 con inquadratura pulita.',
      },
      {
        title: 'Export lungo + paginazione',
        description:
          'Cattura lo scroll completo e suddividi in pagine gli snippet lunghi.',
      },
      {
        title: 'Multi-pane (split)',
        description:
          'Confronta due versioni affiancate o in pila con evidenziazione diff.',
      },
    ],
  },
  howItWorks: {
    badge: 'Come funziona',
    titlePrefix: 'Tre passaggi,',
    titleGradient: 'zero attrito',
    steps: [
      {
        number: '01',
        title: 'Incolla il codice',
        description:
          'Incolla lo snippet o importa direttamente da GitHub, VS Code o clipboard.',
      },
      {
        number: '02',
        title: 'Personalizza',
        description:
          'Scegli tema, font, sfondo, ombre e dimensione della cattura.',
      },
      {
        number: '03',
        title: 'Esporta e condividi',
        description:
          'Scarica PNG o JPEG ad alta risoluzione oppure condividi subito con un link unico.',
      },
    ],
  },
  freeVsPro: {
    badge: 'Gratis vs Pro',
    title: 'Cosa mostra Free vs cosa sblocca Pro',
    subtitle:
      'Inizia gratis e passa a Pro quando vuoi piu controllo e piu liberta.',
    freeTitle: 'Free',
    proTitle: 'Pro',
    freeItems: [
      'Parti subito con un’esperienza completa, senza account.',
      '5 export PNG gratuiti per validare il tuo workflow reale.',
      '3 temi inclusi (Console Dark, Console Light, Dracula) + font Input.',
      'Personalizza il render e visualizza le opzioni avanzate prima di decidere.',
      'Ideale per creare e condividere rapidamente le prime catture.',
    ],
    proItems: [
      'Export PNG/JPEG illimitati con dimensioni personalizzate e qualita regolabile.',
      'Preset 1:1, 4:5 e 16:9 con inquadratura pulita per i social.',
      'Export lungo con paginazione per snippet piu estesi.',
      'Confronto multi-pane per individuare differenze piu in fretta.',
      'Controllo completo: ricerca, numeri di riga, piegatura, linea attiva, modalita zen, watermark, metadati e firma.',
    ],
  },
  socialPublishing: {
    badge: 'Pubblicazione social',
    titlePrefix: 'Pubblica le tue catture',
    titleGradient: 'piu velocemente',
    subtitle:
      'Prepara immagine e testo in SnapCode e pubblica sulle piattaforme che usi di piu.',
    microLine: 'Niente IA per ora: 3 testi pronti da adattare.',
    workflowLabel: 'Workflow',
    highlights: [
      '3 suggerimenti di testo (senza IA) coerenti con lo snippet',
      'Formato ottimizzato per piattaforma',
      'Testo modificabile liberamente prima della pubblicazione',
    ],
    xTitle: 'Pubblica su X',
    xDescription:
      'Scegli un suggerimento breve coerente con il codice e pubblica rapidamente.',
    linkedInTitle: 'Pubblica su LinkedIn',
    linkedInDescription:
      'Seleziona un suggerimento orientato al progetto e adatta il tono prima di pubblicare.',
    comingSoon: 'In arrivo',
  },
  pricing: {
    badge: 'Prezzi',
    titlePrefix: 'Un piano per ogni',
    titleGradient: 'sviluppatore',
    subtitle: 'Inizia gratis e passa a Pro quando ti serve. Nessun vincolo.',
    comingSoon: 'In arrivo',
    plans: [
      {
        name: 'Gratis',
        price: '0€',
        period: 'per sempre',
        description:
          'Prova SnapCode con 5 export PNG gratuiti e sblocca il resto quando vuoi.',
        features: [
          '5 export PNG gratuiti',
          '3 temi inclusi + 1 font',
          'Accesso completo all’editor per testare il rendering',
          'Anteprima delle opzioni Pro (bloccate)',
        ],
        cta: 'Inizia gratis',
        highlighted: false,
      },
      {
        name: 'Pro',
        price: '6.99€',
        period: 'offerta lancio 2 mesi, poi 14.99€ a vita',
        description:
          'Export illimitati, temi premium e funzionalita avanzate.',
        features: [
          'Include tutte le funzionalita del piano Free',
          'Pubblicazione diretta sui social network (X, LinkedIn) [soon]',
          'Export PNG/JPEG illimitati + dimensioni personalizzate',
          'Qualita regolabile + preset ratio (1:1, 4:5, 16:9)',
          'Crop intelligente per ratio fissi',
          'Export lungo + paginazione',
          'Confronto multi-pane',
          'Tutti i temi e font premium',
          'Ricerca, evidenziazione linea, numeri di riga, piegatura, linea attiva e modalita Zen',
          'Watermark, metadati e firma discreta',
          'Nessun watermark della versione gratis',
          'Rendering Pro fedele alle impostazioni sidebar',
        ],
        cta: 'Sblocca Pro',
        highlighted: true,
      },
    ],
  },
  cta: {
    titlePrefix: 'Pronto a catturare il tuo',
    titleGradient: 'miglior codice',
    titleSuffix: '?',
    subtitle:
      'Inizia con 5 export PNG gratuiti, poi passa a Pro per uso illimitato.',
    primaryCta: 'Crea la mia prima cattura',
    secondaryCta: 'Passa a Pro',
    footnote: 'Gratis · Senza registrazione · 5 export PNG inclusi',
  },
  footer: {
    rights: '© {year} SnapCode. Tutti i diritti riservati.',
    madeIn: 'Creato in Francia',
    versionLabel: 'Versione',
    productTitle: 'Prodotto',
    productItems: [
      { label: 'Funzionalita', href: '#features' },
      { label: 'Anteprima', href: '#preview' },
      { label: 'Social', href: '#social-publishing' },
      { label: 'Prezzi', href: '#pricing' },
    ],
    legalTitle: 'Legale',
    legalItems: ['Termini', 'Privacy', 'Note legali'],
    supportTitle: 'Supporto',
    supportItems: ['FAQ', 'Contatto: hello@snapcode.app', 'Segnala un bug'],
    trustTitle: 'Affidabilita',
    trustItems: [
      '100% lato client',
      'Il tuo codice non lascia mai il browser',
      'Aggiornamenti regolari',
    ],
  },
};

const pt: LandingTranslation = {
  ...en,
  navbar: {
    features: 'Funcionalidades',
    preview: 'Preview',
    social: 'Social',
    faq: 'FAQ',
    pricing: 'Precos',
    login: 'Entrar',
    tryFree: 'Testar gratis',
    languageLabel: 'Idioma',
  },
  hero: {
    badge: 'A ferramenta tudo-em-um para criar e publicar as suas capturas',
    titleLine1: 'Capture o seu',
    titleGradient: 'codigo',
    titleLine2: 'com estilo',
    subtitle:
      'Transforme snippets em imagens elegantes com 5 exports PNG gratis e desbloqueie o Pro com um clique.',
    cta: 'Comecar gratis',
  },
  features: {
    badge: 'Funcionalidades',
    titlePrefix: 'Tudo o que',
    titleGradient: 'precisa',
    subtitle:
      'Uma ferramenta completa para criar capturas de codigo profissionais em segundos.',
    items: [
      {
        title: 'Export PNG e JPEG limitado',
        description:
          '5 exports PNG gratis, depois o Pro desbloqueia JPEG, qualidade adaptativa e tamanhos personalizados.',
      },
      {
        title: 'Partilha instantanea',
        description:
          'Gere e copie um link seguro com um clique para partilhar capturas com a equipa.',
      },
      {
        title: 'Temas e fontes',
        description:
          'Console Dark, Console Light e Dracula gratis; outros temas e fontes visiveis com badge Pro.',
      },
      {
        title: 'Funcionalidades Pro',
        description:
          'Pesquisa, destaque, modo Zen, watermark e metadados visiveis no Free e ativaveis com Pro.',
      },
      {
        title: 'Qualidade 2x/4x',
        description:
          'Exports nitidos para apresentacoes e redes sociais, com render client-side.',
      },
      {
        title: '100% privado',
        description:
          'O seu codigo nunca sai do navegador: export, preview e render ficam locais.',
      },
      {
        title: 'Presets de ratio + crop inteligente',
        description: 'Exporta em 1:1, 4:5 e 16:9 com enquadramento limpo.',
      },
      {
        title: 'Export longo + paginacao',
        description:
          'Captura o scroll completo e divide em paginas para snippets longos.',
      },
      {
        title: 'Multi-panes (split)',
        description:
          'Compare duas versoes lado a lado ou empilhadas com destaque de diferencas.',
      },
    ],
  },
  howItWorks: {
    badge: 'Como funciona',
    titlePrefix: 'Tres passos,',
    titleGradient: 'zero friccao',
    steps: [
      {
        number: '01',
        title: 'Cole o seu codigo',
        description:
          'Cole o snippet ou importe diretamente do GitHub, VS Code ou area de transferencia.',
      },
      {
        number: '02',
        title: 'Personalize',
        description:
          'Escolha tema, fonte, fundo, sombras e tamanho da captura.',
      },
      {
        number: '03',
        title: 'Exporte e partilhe',
        description:
          'Descarregue PNG ou JPEG em alta resolucao, ou partilhe de imediato com link unico.',
      },
    ],
  },
  freeVsPro: {
    badge: 'Gratis vs Pro',
    title: 'O que o Free mostra vs o que o Pro desbloqueia',
    subtitle:
      'Comece gratis e passe para Pro quando quiser mais controlo e mais liberdade.',
    freeTitle: 'Free',
    proTitle: 'Pro',
    freeItems: [
      'Comece de imediato com uma experiencia completa, sem conta.',
      '5 exports PNG gratis para validar o seu fluxo de trabalho real.',
      '3 temas incluidos (Console Dark, Console Light, Dracula) + fonte Input.',
      'Personalize o render e veja opcoes avancadas antes de decidir.',
      'Ideal para criar e partilhar as primeiras capturas rapidamente.',
    ],
    proItems: [
      'Exports PNG/JPEG ilimitados com tamanhos personalizados e qualidade ajustavel.',
      'Presets 1:1, 4:5 e 16:9 com enquadramento limpo para redes sociais.',
      'Export longo com paginacao para snippets maiores.',
      'Comparacao multi-panes para identificar diferencas mais rapido.',
      'Controlo total: pesquisa, numeros de linha, dobragem, linha ativa, modo zen, marca de agua, metadados e assinatura.',
    ],
  },
  socialPublishing: {
    badge: 'Publicacao social',
    titlePrefix: 'Publique as suas capturas',
    titleGradient: 'mais rapido',
    subtitle:
      'Prepare imagem e texto dentro do SnapCode e publique nas redes que mais usa.',
    microLine: 'Sem IA por enquanto: 3 textos prontos para adaptar.',
    workflowLabel: 'Fluxo',
    highlights: [
      '3 sugestoes de texto (sem IA) coerentes com o snippet',
      'Formato otimizado por plataforma',
      'Texto totalmente editavel antes de publicar',
    ],
    xTitle: 'Publicar no X',
    xDescription:
      'Escolha uma sugestao curta coerente com o codigo e publique rapido.',
    linkedInTitle: 'Publicar no LinkedIn',
    linkedInDescription:
      'Selecione uma sugestao orientada ao projeto e ajuste o tom antes de publicar.',
    comingSoon: 'Em breve',
  },
  pricing: {
    badge: 'Precos',
    titlePrefix: 'Um plano para cada',
    titleGradient: 'programador',
    subtitle: 'Comece gratis e evolua quando precisar. Sem compromisso.',
    comingSoon: 'Em breve',
    plans: [
      {
        name: 'Gratis',
        price: '0€',
        period: 'para sempre',
        description:
          'Experimente o SnapCode com 5 exports PNG gratis e desbloqueie o resto depois.',
        features: [
          '5 exports PNG gratis',
          '3 temas incluidos + 1 fonte',
          'Acesso completo ao editor para testar o resultado',
          'Pre-visualizacao das opcoes Pro (bloqueadas)',
        ],
        cta: 'Comecar gratis',
        highlighted: false,
      },
      {
        name: 'Pro',
        price: '6.99€',
        period: 'oferta de lancamento 2 meses, depois 14.99€ vitalicio',
        description:
          'Exports ilimitados, temas premium e funcionalidades avancadas.',
        features: [
          'Inclui todas as funcionalidades do plano Free',
          'Publicacao direta nas redes sociais (X, LinkedIn) [soon]',
          'Exports PNG/JPEG ilimitados + tamanhos personalizados',
          'Qualidade ajustavel + presets de ratio (1:1, 4:5, 16:9)',
          'Crop inteligente para ratios fixos',
          'Export longo + paginacao',
          'Comparacao multi-panes',
          'Todos os temas e fontes premium',
          'Pesquisa, destaque de linha, numeros de linha, dobragem, linha ativa e modo Zen',
          'Marca de agua, metadados e assinatura discreta',
          'Sem marca de agua da versao gratis',
          'Render Pro fiel aos ajustes da sidebar',
        ],
        cta: 'Desbloquear Pro',
        highlighted: true,
      },
    ],
  },
  cta: {
    titlePrefix: 'Pronto para capturar o seu',
    titleGradient: 'melhor codigo',
    titleSuffix: '?',
    subtitle:
      'Comece com 5 exports PNG gratis e passe para Pro para uso ilimitado.',
    primaryCta: 'Criar a minha primeira captura',
    secondaryCta: 'Passar para Pro',
    footnote: 'Gratis · Sem registo · 5 exports PNG incluidos',
  },
  footer: {
    rights: '© {year} SnapCode. Todos os direitos reservados.',
    madeIn: 'Feito em Franca',
    versionLabel: 'Versao',
    productTitle: 'Produto',
    productItems: [
      { label: 'Funcionalidades', href: '#features' },
      { label: 'Preview', href: '#preview' },
      { label: 'Social', href: '#social-publishing' },
      { label: 'Precos', href: '#pricing' },
    ],
    legalTitle: 'Legal',
    legalItems: ['Termos', 'Privacidade', 'Aviso legal'],
    supportTitle: 'Suporte',
    supportItems: ['FAQ', 'Contacto: hello@snapcode.app', 'Reportar bug'],
    trustTitle: 'Confianca',
    trustItems: [
      '100% client-side',
      'O seu codigo nao sai do navegador',
      'Atualizacoes regulares',
    ],
  },
};

export const landingTranslations: Record<Locale, LandingTranslation> = {
  fr,
  en,
  es,
  de,
  it,
  pt,
};
