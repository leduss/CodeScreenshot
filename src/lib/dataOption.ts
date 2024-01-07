
export const languages = {
  bash: 'Bash',
  c: 'C',
  'c++': 'C++',
  'c#': 'C#',
  clojure: 'Clojure',
  crystal: 'Crystal',
  css: 'CSS',
  diff: 'Diff',
  dockerfile: 'Docker',
  elm: 'Elm',
  elixir: 'Elixir',
  erlang: 'Erlang',
  graphql: 'GraphQL',
  go: 'Go',
  haskell: 'Haskell',
  html: 'HTML',
  java: 'Java',
  javascript: 'JavaScript/JSX',
  json: 'JSON',
  kotlin: 'Kotlin',
  lisp: 'Lisp',
  lua: 'Lua',
  markdown: 'Markdown',
  matlab: 'MATLAB/Octave',
  pascal: 'Pascal',
  plaintext: 'Plaintext',
  powershell: 'Powershell',
  objectivec: 'Objective C',
  php: 'PHP',
  python: 'Python',
  ruby: 'Ruby',
  rust: 'Rust',
  scala: 'Scala',
  scss: 'SCSS',
  sql: 'SQL',
  swift: 'Swift',
  toml: 'TOML',
  typescript: 'TypeScript/TSX',
  xml: 'XML',
  yaml: 'YAML',
};



export const fonts = {
  jetBrainsMono: {
    name: 'JetBrains Mono',
    src: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap',
  },
  inconsolata: {
    name: 'Inconsolata',
    src: 'https://fonts.googleapis.com/css2?family=Inconsolata&display=swap',
  },
  firaCode: {
    name: 'Fira Code',
    src: 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap',
  },
  cascadiaCode: {
    name: 'Cascadia Code',
    src: 'https://cdn.jsdelivr.net/npm/@fontsource/cascadia-code@4.2.1/index.min.css',
  },
  victorMono: {
    name: 'Victor Mono',
    src: 'https://fonts.googleapis.com/css2?family=Victor+Mono&display=swap',
  },
  sourceCodePro: {
    name: 'Source Code Pro',
    src: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap',
  },
  ibmPlexMono: {
    name: 'IBM Plex Mono',
    src: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap',
  },
  robotoMono: {
    name: 'Roboto Mono',
    src: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap',
  },
  ubuntuMono: {
    name: 'Ubuntu Mono',
    src: 'https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap',
  },
  spaceMono: {
    name: 'Space Mono',
    src: 'https://fonts.googleapis.com/css2?family=Space+Mono&display=swap',
  },
  courierPrime: {
    name: 'Courier Prime',
    src: 'https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap',
  },
  anonymousPro: {
    name: 'Anonymous Pro',
    src: 'https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap',
  },
  oxygenMono: {
    name: 'Oxygen Mono',
    src: 'https://fonts.googleapis.com/css2?family=Oxygen+Mono&display=swap',
  },
  redHatMono: {
    name: 'Red Hat Mono',
    src: 'https://fonts.googleapis.com/css2?family=Red+Hat+Mono&display=swap',
  },
};

export const codeSnippets = [
  {
    language: 'python',
    code: 'def is_prime(n):\n  if n <= 1:\n    return False\n  for i in range(2, int(n ** 0.5) + 1):\n    if n % i == 0:\n      return False\n  return True',
  },
  {
    language: 'javascript',
    code: 'const fibonacci = (n) => {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n};\nconsole.log(fibonacci(10));',
  },
  {
    language: 'java',
    code: 'import java.util.stream.IntStream;\n\nclass StreamExample {\n  public static void main(String[] args) {\n    IntStream.rangeClosed(1, 5).forEach(System.out::println);\n  }\n}',
  },
  {
    language: 'c',
    code: '#include <stdio.h>\n\nint main() {\n  for (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) {\n      printf("%d\\n", i);\n    }\n  }\n  return 0;\n}',
  },
  {
    language: 'ruby',
    code: 'class Animal\n  attr_reader :name\n\n  def initialize(name)\n    @name = name\n  end\n\n  def speak\n    raise NotImplementedError, "Subclasses must implement this method"\n  end\nend',
  },
  {
    language: 'swift',
    code: 'enum Compass {\n  case north, south, east, west\n}\nlet currentDirection = Compass.east\nprint(currentDirection)',
  },
  {
    language: 'c#',
    code: 'using System;\nusing System.Linq;\n\nclass LINQExample {\n  static void Main() {\n    int[] numbers = { 3, 9, 2, 8, 6 };\n    var evenNumbers = numbers.Where(n => n % 2 == 0);\n    foreach (var num in evenNumbers) {\n      Console.WriteLine(num);\n    }\n  }\n}',
  },
  {
    language: 'php',
    code: "<?php\n$fruits = ['apple', 'banana', 'cherry'];\n$uppercased = array_map('strtoupper', $fruits);\nprint_r($uppercased);\n?>",
  },
  {
    language: 'go',
    code: 'package main\n\nimport (\n  "fmt"\n  "math"\n)\n\nfunc main() {\n  x := 4.0\n  y := math.Sqrt(x)\n  fmt.Printf("Square root of %.2f is %.2f\\n", x, y)\n}',
  },
  {
    language: 'rust',
    code: 'fn main() {\n  let mut count = 0;\n  loop {\n    println!("Count: {}", count);\n    count += 1;\n    if count > 5 {\n      break;\n    }\n  }\n}',
  },
];
