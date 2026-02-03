import React from 'react';

const ICON_SIZE = 'text-xl';

/**
 * Règle claire :
 * - React / TSX / JSX en priorité
 * - puis langages
 * - puis outils / formats
 */
const iconMap: Record<string, string> = {
  // ===== React =====
  tsx: 'devicon-react-original colored',
  jsx: 'devicon-react-original colored',
  typescriptreact: 'devicon-react-original colored',
  javascriptreact: 'devicon-react-original colored',

  // ===== Langages =====
  typescript: 'devicon-typescript-plain colored',
  javascript: 'devicon-javascript-plain colored',
  python: 'devicon-python-plain colored',
  rust: 'devicon-rust-plain colored',
  go: 'devicon-go-plain colored',
  golang: 'devicon-go-plain colored',
  java: 'devicon-java-plain colored',
  c: 'devicon-c-plain colored',
  cpp: 'devicon-cplusplus-plain colored',
  'c++': 'devicon-cplusplus-plain colored',
  csharp: 'devicon-csharp-plain colored',
  ruby: 'devicon-ruby-plain colored',
  php: 'devicon-php-plain colored',
  swift: 'devicon-swift-plain colored',
  kotlin: 'devicon-kotlin-plain colored',
  scala: 'devicon-scala-plain colored',
  dart: 'devicon-dart-plain colored',

  // ===== Web =====
  html: 'devicon-html5-plain colored',
  css: 'devicon-css3-plain colored',
  sass: 'devicon-sass-original colored',
  scss: 'devicon-sass-original colored',
  less: 'devicon-less-plain-wordmark colored',

  // ===== Frameworks =====
  next: 'devicon-nextjs-original colored',
  vue: 'devicon-vuejs-plain colored',
  angular: 'devicon-angularjs-plain colored',
  svelte: 'devicon-svelte-plain colored',

  // ===== Backend =====
  node: 'devicon-nodejs-plain colored',
  express: 'devicon-express-original colored',
  nest: 'devicon-nestjs-plain colored',
  spring: 'devicon-spring-plain colored',
  django: 'devicon-django-plain colored',
  flask: 'devicon-flask-original colored',

  // ===== Database =====
  sql: 'devicon-mysql-plain colored',
  mysql: 'devicon-mysql-plain colored',
  postgresql: 'devicon-postgresql-plain colored',
  postgres: 'devicon-postgresql-plain colored',
  mongodb: 'devicon-mongodb-plain colored',
  redis: 'devicon-redis-plain colored',
  sqlite: 'devicon-sqlite-plain colored',

  // ===== DevOps / Config =====
  docker: 'devicon-docker-plain colored',
  kubernetes: 'devicon-kubernetes-plain colored',
  nginx: 'devicon-nginx-original colored',
  apache: 'devicon-apache-plain colored',
  bash: 'devicon-bash-plain colored',
  shell: 'devicon-bash-plain colored',
  yaml: 'devicon-yaml-plain colored',
  yml: 'devicon-yaml-plain colored',
  json: 'devicon-json-plain colored',
  toml: 'devicon-toml-plain colored',

  // ===== Formats =====
  xml: 'devicon-xml-plain colored',
  txt: 'devicon-file-text-plain',
  text: 'devicon-file-text-plain',
};

export const getLanguageIcon = (language: string): React.ReactNode => {
  const lang = language.toLowerCase();

  const key = Object.keys(iconMap).find((k) => lang.includes(k));
  const className = key ? iconMap[key] : 'devicon-file-plain';

  return <i className={`${className} ${ICON_SIZE}`} />;
};

export const getLanguageName = (language: string): string => {
  const lang = language.toLowerCase();

  if (lang.includes('tsx') || lang.includes('typescriptreact')) return 'TSX';
  if (lang.includes('jsx') || lang.includes('javascriptreact')) return 'JSX';
  if (lang.includes('typescript')) return 'TS';
  if (lang.includes('javascript')) return 'JS';
  if (lang.includes('python')) return 'PY';
  if (lang.includes('rust')) return 'RS';
  if (lang.includes('go')) return 'GO';
  if (lang.includes('java')) return 'JAVA';
  if (lang.includes('csharp')) return 'C#';
  if (lang.includes('c++') || lang.includes('cpp')) return 'C++';
  if (lang === 'c') return 'C';
  if (lang.includes('ruby')) return 'RB';
  if (lang.includes('php')) return 'PHP';
  if (lang.includes('swift')) return 'SWIFT';
  if (lang.includes('kotlin')) return 'KT';
  if (lang.includes('scala')) return 'SCALA';
  if (lang.includes('dart')) return 'DART';
  if (lang.includes('html')) return 'HTML';
  if (lang.includes('css')) return 'CSS';
  if (lang.includes('xml')) return 'XML';
  if (lang.includes('txt') || lang.includes('text')) return 'TXT';

  return language.toUpperCase().slice(0, 6);
};

export const getLanguageExtension = (language: string): string => {
  const lang = language.toLowerCase();

  if (lang.includes('tsx')) return '.tsx';
  if (lang.includes('jsx')) return '.jsx';
  if (lang.includes('typescript')) return '.ts';
  if (lang.includes('javascript')) return '.js';
  if (lang.includes('python') || lang.includes('py')) return '.py';
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Returns the extension of a language file.
 *
 * For example, getLanguageExtension('TypeScript') returns '.tsx'.
 *
 * @param {string} language - The language to get the extension for.
 * @returns {string} - The extension of the language file.
 */
/*******  449c1ebb-cc9d-49ae-a64e-d8525f021b35  *******/  if (lang.includes('rust')) return '.rs';
  if (lang.includes('go')) return '.go';
  if (lang.includes('java')) return '.java';
  if (lang.includes('csharp')) return '.cs';
  if (lang.includes('c++') || lang.includes('cpp')) return '.cpp';
  if (lang === 'c') return '.c';
  if (lang.includes('ruby')) return '.rb';
  if (lang.includes('php')) return '.php';
  if (lang.includes('swift')) return '.swift';
  if (lang.includes('kotlin')) return '.kt';
  if (lang.includes('scala')) return '.scala';
  if (lang.includes('dart')) return '.dart';
  if (lang.includes('html')) return '.html';
  if (lang.includes('css')) return '.css';
  if (lang.includes('json')) return '.json';
  if (lang.includes('yaml') || lang.includes('yml')) return '.yml';
  if (lang.includes('xml')) return '.xml';
  if (lang.includes('txt') || lang.includes('text')) return '.txt';
  if (lang.includes('bash') || lang.includes('shell')) return '.sh';

  return '.' + lang;
};
