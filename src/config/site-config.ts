export const SiteConfig = {
  title: 'SnapCode',
  description:
    "Créez de superbes captures d'écran de code avec SnapCode. Personnalisez les thèmes, polices, arrière-plans et plus encore. Exportez en PNG ou JPG. Gratuit et sans inscription.",
  iconHeader: '/icon.png',
  siteName: 'SnapCode',
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
    'https://snapcode-one.vercel.app',
  keywords: [
    // Français
    'capture de code',
    'screenshot code',
    'capture écran code',
    'partager code',
    'image code',
    'code en image',
    // English
    'code screenshot',
    'code to image',
    'code snippet image',
    'code beautifier',
    'syntax highlighting',
    'code export',
    'code capture',
    'share code',
    // Technical
    'highlight.js',
    'developer tools',
    'programming screenshot',
    'code presentation',
    'code snippet',
    // Features
    'export PNG',
    'code themes',
    'dracula theme',
    'github theme',
    // Comparisons
    'carbon alternative',
    'ray.so alternative',
  ],
  author: {
    name: 'Julien Dussart',
    url: 'https://juliendussart.fr',
  },
  ogImage: '/og-image.png',
  twitterHandle: '@leduss_',
} as const;
