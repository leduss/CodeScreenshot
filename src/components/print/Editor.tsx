'use client';

import { useMyContext } from 'app/context';
import flourite from 'flourite';
import hljs from 'highlight.js';
import React, { useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';

const CodeEditor = () => {
  const { fontSize } = useMyContext();
  const [code, setCode] = useState<string>('const a = 100;');
  const [language, setLanguage] = useState<string>('');
  useEffect(() => {
    const { language } = flourite(code, { noUnknown: true });
    setLanguage(language);
  }, [code]);
  return (
    <>
      <Editor
        className="transition-all duration-500"
        value={code}
        onValueChange={(value) => setCode(value)}
        highlight={(value) =>
          hljs.highlight(value, { language: language || 'typescript' }).value
        }
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: fontSize?.px,
        }}
      />
    </>
  );
};

export default CodeEditor;
