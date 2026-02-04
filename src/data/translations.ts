export type Locale = 'fr' | 'en' | 'es' | 'de' | 'it' | 'pt';

export type TranslationKeys = {
  // Footer
  export: string;
  copyLink: string;
  copyImage: string;
  png: string;
  svg: string;
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
};

export const translations: Record<Locale, TranslationKeys> = {
  fr: {
    // Footer
    export: 'Exporter',
    copyLink: 'Copier le lien',
    copyImage: 'Copier image',
    png: 'PNG',
    svg: 'SVG',
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
    svg: 'SVG',
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
    svg: 'SVG',
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
    svg: 'SVG',
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
    svg: 'SVG',
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
    svg: 'SVG',
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
