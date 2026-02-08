export type Locale = 'fr' | 'en' | 'es' | 'de' | 'it' | 'pt';

export type TranslationKeys = {
  // Footer
  export: string;
  copyLink: string;
  copyImage: string;
  png: string;
  jpg: string;
  downloadSuccess: string;
  linkCopied: string;
  imageCopied: string;
  error: string;
  somethingWrong: string;
  github: string;
  terms: string;
  copyright: string;
  createdBy: string;
  version: string;
  limitReachedTitle: string;
  limitReachedDescription: string;
  upgradeCta: string;
  limitResetMessage: string;
  // Sidebar
  add: string;
  clearAll: string;
  background: string;
  padding: string;
  rounded: string;
  code: string;
  syntaxTheme: string;
  windows: string;
  mac: string;
  none: string;
  lineNumbers: string;
  zebraStripes: string;
  foldGutter: string;
  activeLine: string;
  selectionMatches: string;
  trailingWhitespace: string;
  search: string;
  zenMode: string;
  codeStyle: string;
  lineHeight: string;
  letterSpacing: string;
  watermark: string;
  watermarkPlaceholder: string;
  watermarkPosition: string;
  snippetMeta: string;
  snippetTitle: string;
  snippetDescription: string;
  language: string;
  exportSettings: string;
  exportFormat: string;
  exportQuality: string;
  exportWidth: string;
  exportHeight: string;
  exportLockRatio: string;
  highlightLines: string;
  linesHash: string;
  font: string;
  fontSize: string;
  fontWeight: string;
  light: string;
  dark: string;
  system: string;
  gradient: string;
  color: string;
  fullscreen: string;
  customThemes: string;
  createTheme: string;
  exportFeaturesTitle: string;
  freeExportsRemaining: string;
  exportGuideTitle: string;
  exportGuideDescription: string;
  exportGuideLink: string;
  exportName: string;
  exportNamePlaceholder: string;
  sidebarHelpTitle: string;
  sidebarHelpDescription: string;
  layoutTitle: string;
  layoutCentered: string;
  layoutFull: string;
  layoutRatio: string;
  proPresetTitle: string;
  proPresetDescription: string;
  proPresetButton: string;
};

export const translations: Record<Locale, TranslationKeys> = {
  fr: {
    // Footer
    export: 'Exporter',
    copyLink: 'Copier le lien',
    copyImage: 'Copier image',
    png: 'PNG',
    jpg: 'JPG',
    downloadSuccess: 'Image téléchargée avec succès!',
    linkCopied: 'Lien copié dans le presse-papier!',
    imageCopied: 'Image copiée dans le presse-papier!',
    error: 'Une erreur est survenue, veuillez réessayer!',
    somethingWrong: 'Une erreur est survenue!',
    github: 'Github',
    terms: 'Conditions',
    copyright: '©',
    createdBy: 'Créé par',
    version: 'v 1.0.0',
    limitReachedTitle: 'Limite gratuite atteinte',
    limitReachedDescription:
      'Vous avez atteint la limite de 5 exports. Passez à la version Pro pour exporter sans limite.',
    upgradeCta: 'Passer Pro',
    limitResetMessage: 'Limite réinitialisée, tu peux repartir de zéro.',
    // Sidebar
    add: 'Ajouter',
    clearAll: 'Tout effacer',
    background: 'Arrière-plan',
    padding: 'Marge',
    rounded: 'Arrondi',
    code: 'Code',
    syntaxTheme: 'Thème',
    windows: 'Système',
    mac: 'Mac',
    none: 'Aucun',
    lineNumbers: 'Numéros de ligne',
    zebraStripes: 'Zébrage',
    foldGutter: 'Pliage',
    activeLine: 'Ligne active',
    selectionMatches: 'Occurrences',
    trailingWhitespace: 'Espaces fin de ligne',
    search: 'Recherche',
    zenMode: 'Mode zen',
    codeStyle: 'Style du code',
    lineHeight: 'Interligne',
    letterSpacing: 'Espacement',
    watermark: 'Watermark',
    watermarkPlaceholder: 'Texte du watermark',
    watermarkPosition: 'Position',
    snippetMeta: 'Meta snippet',
    snippetTitle: 'Titre',
    snippetDescription: 'Description',
    language: 'Langue',
    exportSettings: 'Export',
    exportFormat: 'Format',
    exportQuality: 'Qualité',
    exportWidth: 'Largeur',
    exportHeight: 'Hauteur',
    exportLockRatio: 'Ratio verrouillé',
    exportFeaturesTitle: 'Fonctionnalités',
    freeExportsRemaining: 'Exports gratuits restants : {count}/5',
    exportGuideTitle: 'Besoin d’un peu plus ?',
    exportGuideDescription:
      'Passe à Pro et débloque les formats, la qualité et les tailles illimitées.',
    exportGuideLink: 'Voir les options Pro',
    exportName: 'Nom du fichier',
    exportNamePlaceholder: 'ma-capture',
    sidebarHelpTitle: 'Personnalise ta capture',
    sidebarHelpDescription:
      'Utilise la sidebar pour régler thèmes, recherche, watermark et layout avant export.',
    layoutTitle: 'Disposition',
    layoutCentered: 'Centré',
    layoutFull: 'Plein',
    layoutRatio: 'Ratio 4:3',
    proPresetTitle: 'Preset Pro',
    proPresetDescription:
      'Active instantanément zen, watermark et recherche pour comparer.',
    proPresetButton: 'Activer le preset Pro',
    highlightLines: 'Surligner les lignes',
    linesHash: 'Lignes #',
    font: 'Police',
    fontSize: 'Taille de police',
    fontWeight: 'Graisse de police',
    light: 'Clair',
    dark: 'Sombre',
    system: 'Système',
    gradient: 'Gradient',
    color: 'Couleur',
    fullscreen: 'Plein écran',
    customThemes: 'Thèmes personnalisés',
    createTheme: 'Créer un thème',
  },
  en: {
    // Footer
    export: 'Export',
    copyLink: 'Copy Link',
    copyImage: 'Copy image',
    png: 'PNG',
    jpg: 'JPG',
    downloadSuccess: 'Image downloaded with success!',
    linkCopied: 'Link copied to clipboard!',
    imageCopied: 'Image copied to clipboard!',
    error: 'An error has occurred, please try again!',
    somethingWrong: 'Something went wrong!',
    github: 'Github',
    terms: 'Terms',
    copyright: '©',
    createdBy: 'Created by',
    version: 'v 1.0.0',
    limitReachedTitle: 'Free limit reached',
    limitReachedDescription:
      'You reached the 5 exports limit. Upgrade to Pro for unlimited exports.',
    upgradeCta: 'Upgrade to Pro',
    limitResetMessage: 'Free exports counter reset; the limit starts back at 0.',
    // Sidebar
    add: 'Add',
    clearAll: 'Clear All',
    background: 'Background',
    padding: 'Padding',
    rounded: 'Rounded',
    code: 'Code',
    syntaxTheme: 'Theme',
    windows: 'System',
    mac: 'Mac',
    none: 'None',
    lineNumbers: 'Line numbers',
    zebraStripes: 'Zebra stripes',
    foldGutter: 'Folding',
    activeLine: 'Active line',
    selectionMatches: 'Selection matches',
    trailingWhitespace: 'Trailing spaces',
    search: 'Search',
    zenMode: 'Zen mode',
    codeStyle: 'Code style',
    lineHeight: 'Line height',
    letterSpacing: 'Letter spacing',
    watermark: 'Watermark',
    watermarkPlaceholder: 'Watermark text',
    watermarkPosition: 'Position',
    snippetMeta: 'Snippet metadata',
    snippetTitle: 'Title',
    snippetDescription: 'Description',
    language: 'Language',
    exportSettings: 'Export',
    exportFormat: 'Format',
    exportQuality: 'Quality',
    exportWidth: 'Width',
    exportHeight: 'Height',
    exportLockRatio: 'Lock ratio',
    exportFeaturesTitle: 'Features',
    freeExportsRemaining: 'Free exports remaining : {count}/5',
    exportGuideTitle: 'Need more exports?',
    exportGuideDescription:
      'Upgrade to Pro for unlimited formats, quality control and sizes.',
    exportGuideLink: 'See Pro plans',
    exportName: 'File name',
    exportNamePlaceholder: 'my-capture',
    sidebarHelpTitle: 'Customize your capture',
    sidebarHelpDescription:
      'Use the sidebar to tweak themes, search, watermark and layout before export.',
    layoutTitle: 'Layout',
    layoutCentered: 'Centered',
    layoutFull: 'Full width',
    layoutRatio: '4:3 ratio',
    proPresetTitle: 'Pro preset',
    proPresetDescription:
      'Enable zen, watermark and search to preview the Pro state.',
    proPresetButton: 'Activate Pro preset',
    highlightLines: 'Highlight lines',
    linesHash: 'Lines #',
    font: 'Font',
    fontSize: 'Font size',
    fontWeight: 'Font weight',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
    gradient: 'Gradient',
    color: 'Color',
    fullscreen: 'Fullscreen',
    customThemes: 'Custom Themes',
    createTheme: 'Create a theme',
  },
  es: {
    // Footer
    export: 'Exportar',
    copyLink: 'Copiar enlace',
    copyImage: 'Copiar imagen',
    png: 'PNG',
    jpg: 'JPG',
    downloadSuccess: '¡Imagen descargada con éxito!',
    linkCopied: '¡Enlace copiado al portapapeles!',
    imageCopied: '¡Imagen copiada al portapapeles!',
    error: 'Se ha producido un error, ¡por favor inténtalo de nuevo!',
    somethingWrong: '¡Algo salió mal!',
    github: 'Github',
    terms: 'Términos',
    copyright: '©',
    createdBy: 'Creado por',
    version: 'v 1.0.0',
    limitReachedTitle: 'Límite gratuita alcanzada',
    limitReachedDescription:
      'Has alcanzado el límite de 5 exportaciones. Actualiza a Pro para exportar sin límites.',
    upgradeCta: 'Actualizar a Pro',
    limitResetMessage: 'El contador se ha reiniciado; vuelve a empezar desde cero.',
    // Sidebar
    add: 'Añadir',
    clearAll: 'Borrar todo',
    background: 'Fondo',
    padding: 'Márgen',
    rounded: 'Redondeado',
    code: 'Código',
    syntaxTheme: 'Tema',
    windows: 'Sistema',
    mac: 'Mac',
    none: 'Ninguno',
    lineNumbers: 'Números de línea',
    zebraStripes: 'Rayas cebra',
    foldGutter: 'Plegado',
    activeLine: 'Línea activa',
    selectionMatches: 'Coincidencias',
    trailingWhitespace: 'Espacios finales',
    search: 'Buscar',
    zenMode: 'Modo zen',
    codeStyle: 'Estilo de código',
    lineHeight: 'Interlineado',
    letterSpacing: 'Espaciado',
    watermark: 'Marca de agua',
    watermarkPlaceholder: 'Texto de marca de agua',
    watermarkPosition: 'Posición',
    snippetMeta: 'Metadata del snippet',
    snippetTitle: 'Título',
    snippetDescription: 'Descripción',
    language: 'Idioma',
    exportSettings: 'Exportar',
    exportFormat: 'Formato',
    exportQuality: 'Calidad',
    exportWidth: 'Ancho',
    exportHeight: 'Alto',
    exportLockRatio: 'Bloquear ratio',
    exportFeaturesTitle: 'Características',
    freeExportsRemaining: 'Exportaciones gratuitas restantes : {count}/5',
    exportGuideTitle: '¿Necesitas más exports?',
    exportGuideDescription:
      'Actualiza a Pro para formatos ilimitados, control de calidad y tamaños.',
    exportGuideLink: 'Ver planes Pro',
    exportName: 'Nombre del archivo',
    exportNamePlaceholder: 'mi-captura',
    sidebarHelpTitle: 'Personaliza tu captura',
    sidebarHelpDescription:
      'Ajusta temas, búsqueda, watermark y disposición directamente desde la sidebar.',
    layoutTitle: 'Diseño',
    layoutCentered: 'Centrado',
    layoutFull: 'Ancho completo',
    layoutRatio: 'Ratio 4:3',
    proPresetTitle: 'Preset Pro',
    proPresetDescription:
      'Activa zen, watermark y búsqueda para comparar con la versión Pro.',
    proPresetButton: 'Activar preset Pro',
    highlightLines: 'Resaltar líneas',
    linesHash: 'Líneas #',
    font: 'Fuente',
    fontSize: 'Tamaño de fuente',
    fontWeight: 'Grosor de fuente',
    light: 'Claro',
    dark: 'Oscuro',
    system: 'Sistema',
    gradient: 'Gradiente',
    color: 'Color',
    fullscreen: 'Pantalla completa',
    customThemes: 'Temas personalizados',
    createTheme: 'Crear un tema',
  },
  de: {
    // Footer
    export: 'Exportieren',
    copyLink: 'Link kopieren',
    copyImage: 'Bild kopieren',
    png: 'PNG',
    jpg: 'JPG',
    downloadSuccess: 'Bild erfolgreich heruntergeladen!',
    linkCopied: 'Link in die Zwischenablage kopiert!',
    imageCopied: 'Bild in die Zwischenablage kopiert!',
    error: 'Ein Fehler ist aufgetreten, bitte versuchen Sie es erneut!',
    somethingWrong: 'Etwas ist schiefgelaufen!',
    github: 'Github',
    terms: 'Bedingungen',
    copyright: '©',
    createdBy: 'Erstellt von',
    version: 'v 1.0.0',
    limitReachedTitle: 'Kostenloses Limit erreicht',
    limitReachedDescription:
      'Du hast das Limit von 5 Exporten erreicht. Wechsle zu Pro für unbegrenzte Exporte.',
    upgradeCta: 'Auf Pro upgraden',
    limitResetMessage: 'Gratis-Exportzähler zurückgesetzt; du kannst wieder von vorn anfangen.',
    // Sidebar
    add: 'Hinzufügen',
    clearAll: 'Alles löschen',
    background: 'Hintergrund',
    padding: 'Rand',
    rounded: 'Abgerundet',
    code: 'Code',
    syntaxTheme: 'Thema',
    windows: 'System',
    mac: 'Mac',
    none: 'Keiner',
    lineNumbers: 'Zeilennummern',
    zebraStripes: 'Zebrastreifen',
    foldGutter: 'Falten',
    activeLine: 'Aktive Zeile',
    selectionMatches: 'Vorkommen',
    trailingWhitespace: 'Leerzeichen am Zeilenende',
    search: 'Suche',
    zenMode: 'Zen-Modus',
    codeStyle: 'Code-Stil',
    lineHeight: 'Zeilenhöhe',
    letterSpacing: 'Buchstabenabstand',
    watermark: 'Wasserzeichen',
    watermarkPlaceholder: 'Wasserzeichen-Text',
    watermarkPosition: 'Position',
    snippetMeta: 'Snippet-Metadaten',
    snippetTitle: 'Titel',
    snippetDescription: 'Beschreibung',
    language: 'Sprache',
    exportSettings: 'Export',
    exportFormat: 'Format',
    exportQuality: 'Qualität',
    exportWidth: 'Breite',
    exportHeight: 'Höhe',
    exportLockRatio: 'Seitenverhältnis',
    exportFeaturesTitle: 'Funktionen',
    freeExportsRemaining: 'Verbleibende Gratis-Exporte : {count}/5',
    exportGuideTitle: 'Braucht du mehr Exporte?',
    exportGuideDescription:
      'Upgrade auf Pro für unbegrenzte Formate, Qualitätskontrolle und Größen.',
    exportGuideLink: 'Pro-Pläne ansehen',
    exportName: 'Dateiname',
    exportNamePlaceholder: 'meine-capture',
    sidebarHelpTitle: 'Passe deine Aufnahme an',
    sidebarHelpDescription:
      'Stelle Themen, Suche, Wasserzeichen und Layout direkt in der Sidebar ein.',
    layoutTitle: 'Layout',
    layoutCentered: 'Zentriert',
    layoutFull: 'Volle Breite',
    layoutRatio: 'Seitenverhältnis 4:3',
    proPresetTitle: 'Pro Preset',
    proPresetDescription:
      'Aktiviere Zen, Wasserzeichen und Suche, um die Pro-Ansicht zu zeigen.',
    proPresetButton: 'Pro Preset aktivieren',
    highlightLines: 'Zeilen hervorheben',
    linesHash: 'Zeilen #',
    font: 'Schriftart',
    fontSize: 'Schriftgröße',
    fontWeight: 'Schriftgewicht',
    light: 'Hell',
    dark: 'Dunkel',
    system: 'System',
    gradient: 'Verlauf',
    color: 'Farbe',
    fullscreen: 'Vollbild',
    customThemes: 'Benutzerdefinierte Themen',
    createTheme: 'Thema erstellen',
  },
  it: {
    // Footer
    export: 'Esporta',
    copyLink: 'Copia link',
    copyImage: 'Copia immagine',
    png: 'PNG',
    jpg: 'JPG',
    downloadSuccess: 'Immagine scaricata con successo!',
    linkCopied: 'Link copiato negli appunti!',
    imageCopied: 'Immagine copiata negli appunti!',
    error: 'Si è verificato un errore, per favore riprova!',
    somethingWrong: 'Qualcosa è andato storto!',
    github: 'Github',
    terms: 'Termini',
    copyright: '©',
    createdBy: 'Creato da',
    version: 'v 1.0.0',
    limitReachedTitle: 'Limite gratuita raggiunta',
    limitReachedDescription:
      'Hai raggiunto il limite di 5 esportazioni. Passa a Pro per esportare senza limiti.',
    upgradeCta: 'Passa a Pro',
    limitResetMessage: 'Il contatore degli export gratuiti è stato azzerato; puoi ricominciare da capo.',
    // Sidebar
    add: 'Aggiungi',
    clearAll: 'Cancella tutto',
    background: 'Sfondo',
    padding: 'Margine',
    rounded: 'Arrotondato',
    code: 'Codice',
    syntaxTheme: 'Tema',
    windows: 'Sistema',
    mac: 'Mac',
    none: 'Nessuno',
    lineNumbers: 'Numeri di riga',
    zebraStripes: 'Strisce zebrate',
    foldGutter: 'Piegatura',
    activeLine: 'Riga attiva',
    selectionMatches: 'Occorrenze',
    trailingWhitespace: 'Spazi finali',
    search: 'Ricerca',
    zenMode: 'Modalità zen',
    codeStyle: 'Stile codice',
    lineHeight: 'Interlinea',
    letterSpacing: 'Spaziatura',
    watermark: 'Filigrana',
    watermarkPlaceholder: 'Testo filigrana',
    watermarkPosition: 'Posizione',
    snippetMeta: 'Metadata snippet',
    snippetTitle: 'Titolo',
    snippetDescription: 'Descrizione',
    language: 'Lingua',
    exportSettings: 'Esporta',
    exportFormat: 'Formato',
    exportQuality: 'Qualità',
    exportWidth: 'Larghezza',
    exportHeight: 'Altezza',
    exportLockRatio: 'Blocca ratio',
    exportFeaturesTitle: 'Funzionalità',
    freeExportsRemaining: 'Esportazioni gratuite rimanenti : {count}/5',
    exportGuideTitle: 'Hai bisogno di più esportazioni?',
    exportGuideDescription:
      'Passa a Pro per formati, qualità e dimensioni illimitate.',
    exportGuideLink: 'Vedi i piani Pro',
    exportName: 'Nome file',
    exportNamePlaceholder: 'mia-cattura',
    sidebarHelpTitle: 'Personalizza la tua cattura',
    sidebarHelpDescription:
      'Modifica temi, ricerca, watermark e layout direttamente dalla sidebar.',
    layoutTitle: 'Layout',
    layoutCentered: 'Centrato',
    layoutFull: 'Larghezza piena',
    layoutRatio: 'Rapporto 4:3',
    proPresetTitle: 'Preset Pro',
    proPresetDescription:
      'Attiva Zen, watermark e ricerca per vedere cosa offre la versione Pro.',
    proPresetButton: 'Attiva preset Pro',
    highlightLines: 'Evidenzia righe',
    linesHash: 'Righe #',
    font: 'Font',
    fontSize: 'Dimensione font',
    fontWeight: 'Peso font',
    light: 'Chiaro',
    dark: 'Scuro',
    system: 'Sistema',
    gradient: 'Sfumatura',
    color: 'Colore',
    fullscreen: 'Schermo intero',
    customThemes: 'Temi personalizzati',
    createTheme: 'Crea un tema',
  },
  pt: {
    // Footer
    export: 'Exportar',
    copyLink: 'Copiar ligação',
    copyImage: 'Copiar imagem',
    png: 'PNG',
    jpg: 'JPG',
    downloadSuccess: 'Imagem descarregada com sucesso!',
    linkCopied: 'Ligação copiada para a área de transferência!',
    imageCopied: 'Imagem copiada para a área de transferência!',
    error: 'Ocorreu um erro, por favor tente novamente!',
    somethingWrong: 'Algo correu mal!',
    github: 'Github',
    terms: 'Termos',
    copyright: '©',
    createdBy: 'Criado por',
    version: 'v 1.0.0',
    limitReachedTitle: 'Limite gratuita atingida',
    limitReachedDescription:
      'Atingiste o limite de 5 exportações. Faz upgrade para Pro para exportar sem limites.',
    upgradeCta: 'Upgrade para Pro',
    limitResetMessage: 'O contador de exports gratuitos foi reiniciado; podes começar de novo.',
    // Sidebar
    add: 'Adicionar',
    clearAll: 'Limpar tudo',
    background: 'Fundo',
    padding: 'Margem',
    rounded: 'Arredondado',
    code: 'Código',
    syntaxTheme: 'Tema',
    windows: 'Sistema',
    mac: 'Mac',
    none: 'Nenhum',
    lineNumbers: 'Números de linha',
    zebraStripes: 'Listras zebradas',
    foldGutter: 'Dobrar',
    activeLine: 'Linha ativa',
    selectionMatches: 'Ocorrências',
    trailingWhitespace: 'Espaços no fim',
    search: 'Pesquisa',
    zenMode: 'Modo zen',
    codeStyle: 'Estilo do código',
    lineHeight: 'Altura da linha',
    letterSpacing: 'Espaçamento',
    watermark: "Marca d'água",
    watermarkPlaceholder: "Texto da marca d'água",
    watermarkPosition: 'Posição',
    snippetMeta: 'Metadados do snippet',
    snippetTitle: 'Título',
    snippetDescription: 'Descrição',
    language: 'Idioma',
    exportSettings: 'Exportar',
    exportFormat: 'Formato',
    exportQuality: 'Qualidade',
    exportWidth: 'Largura',
    exportHeight: 'Altura',
    exportLockRatio: 'Bloquear proporção',
    exportFeaturesTitle: 'Funcionalidades',
    freeExportsRemaining: 'Exportações gratuitas restantes : {count}/5',
    exportGuideTitle: 'Precisas de mais exports?',
    exportGuideDescription:
      'Faz upgrade para Pro e habilita formatos, qualidade e tamanhos ilimitados.',
    exportGuideLink: 'Ver planos Pro',
    exportName: 'Nome do arquivo',
    exportNamePlaceholder: 'minha-captura',
    sidebarHelpTitle: 'Personaliza a tua captura',
    sidebarHelpDescription:
      'Ajusta temas, pesquisa, watermark e layout diretamente na sidebar.',
    layoutTitle: 'Layout',
    layoutCentered: 'Centralizado',
    layoutFull: 'Largura total',
    layoutRatio: 'Proporção 4:3',
    proPresetTitle: 'Preset Pro',
    proPresetDescription:
      'Liga Zen, watermark e pesquisa para mostrar o estado Pro.',
    proPresetButton: 'Ativar preset Pro',
    highlightLines: 'Realçar linhas',
    linesHash: 'Linhas #',
    font: 'Tipo de letra',
    fontSize: 'Tamanho do tipo de letra',
    fontWeight: 'Peso do tipo de letra',
    light: 'Claro',
    dark: 'Escuro',
    system: 'Sistema',
    gradient: 'Gradiente',
    color: 'Cor',
    fullscreen: 'Ecrã completo',
    customThemes: 'Temas personalizados',
    createTheme: 'Criar um tema',
  },
};

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale];
}
