import React from 'react';
import { Button } from '../ui/button';
import { toPng, toSvg } from 'html-to-image';

interface FooterProps {
  editorRef: React.RefObject<HTMLDivElement>;
  title: string;
}

const Footer = (props: FooterProps) => {
  const { editorRef, title } = props;
  const handleClick = async (name: string, format: string) => {
    let imgUrl, filename;

    switch (format) {
      case 'PNG':
        if (editorRef.current) {
          imgUrl = await toPng(editorRef.current, { pixelRatio: 2 });
        }
        filename = `${name}.png`;
        break;
      case 'SVG':
        if (editorRef.current) {
          imgUrl = await toSvg(editorRef.current, { pixelRatio: 2 });
        }
        filename = `${name}.svg`;
        break;

      default:
        return;
    }

    const a = document.createElement('a');
    a.href = imgUrl ?? '';
    a.download = filename;
    a.click();
  };
  return (
    <div className="m-auto mt-2 flex w-3/6 justify-center gap-2">
      <Button variant="default" onClick={() => handleClick(title, 'PNG')}>
        PNG
      </Button>
      <Button variant="default" onClick={() => handleClick(title, 'SVG')}>
        SVG
      </Button>
    </div>
  );
};

export default Footer;
