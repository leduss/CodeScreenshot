import React, { useState } from 'react';
import { Button } from '../ui/button';
import { toPng, toSvg, toBlob, toJpeg } from 'html-to-image';
import { Card, CardContent, CardDescription } from '../ui/card';
import { toast } from 'sonner';
import { Separator } from '../ui/separator';
import { ThemeToggle } from '../theme/ThemeToggle';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface FooterProps {
  editorRef: React.RefObject<HTMLDivElement>;
  title: string;
  loading: boolean;
}

const Footer = (props: FooterProps) => {
  const { editorRef, title, loading } = props;
  const [loadingSave, setLoadingSave] = useState<boolean>(false);
  const [loadingCopy, setLoadingCopy] = useState<boolean>(false);
  const handleClick = async (name: string, format: string) => {
    setLoadingSave(true);
    try {
      let image;
      let filename;

      switch (format) {
        case 'JPG':
          if (editorRef.current) {
            image = await toJpeg(editorRef.current, { pixelRatio: 2 });
          }
          filename = `${name}.jpg`;
          break;
        case 'PNG':
          if (editorRef.current) {
            image = await toPng(editorRef.current, { pixelRatio: 2 });
          }
          filename = `${name}.png`;
          break;
        case 'SVG':
          if (editorRef.current) {
            image = await toSvg(editorRef.current, { pixelRatio: 2 });
          }
          filename = `${name}.svg`;
          break;
        default:
          return;
      }
      const a = document.createElement('a');
      a.href = image ?? '';
      a.download = filename;
      a.click();
      toast.success(`Image downloaded with success!`);
    } catch (error) {
      toast.error(`An error has occurred, please try again!`);
    } finally {
      setLoadingSave(false);
    }
  };

  const copyLink = async () => {
    setLoadingCopy(true);
    try {
      await navigator.clipboard.writeText(`${location.href}`);
      toast.success('Link copied to clipboard!');
    } catch (error) {
      toast.error(`An error has occurred, please try again!`);
    } finally {
      setLoadingCopy(false);
    }
  };

  const copyImage = async () => {
    try {
      const imgBlob = await toBlob(editorRef.current!, {
        pixelRatio: 2,
      });
      const img = new ClipboardItem({ 'image/png': imgBlob as Blob });
      navigator.clipboard.write([img]);
      toast.success('Image copied to clipboard!');
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className={cn('flex flex-1 flex-col justify-between')}>
      <Card className="flex h-14 items-center justify-between p-3">
        <CardContent className="flex  gap-4 p-0">
          <div className="flex gap-2 p-0">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="default">Export</Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-40 flex-col gap-3">
                <Button
                  variant="default"
                  onClick={() => handleClick(title, 'PNG')}
                  disabled={loadingCopy || loadingSave}
                >
                  PNG
                </Button>
                <Button
                  variant="default"
                  onClick={() => handleClick(title, 'SVG')}
                  disabled={loadingCopy || loadingSave}
                >
                  SVG
                </Button>
                <Button
                  variant="default"
                  onClick={() => handleClick(title, 'JPG')}
                  disabled={loadingCopy || loadingSave}
                >
                  JPG
                </Button>
              </PopoverContent>
            </Popover>

            <Button
              variant="default"
              onClick={copyLink}
              disabled={loadingCopy || loadingSave}
            >
              Copy Link
            </Button>
            <Button
              variant="default"
              onClick={copyImage}
              disabled={loadingCopy || loadingSave}
            >
              Copy image
            </Button>
          </div>
          <Separator orientation="vertical" className="h-9" />
          <ThemeToggle />
        </CardContent>
      </Card>
      <div className="flex w-full flex-col items-center pb-1 text-white">
        <div className="flex gap-4">
          <Link
            className="cursor-pointer p-0 text-base text-white"
            href="https://github.com/leduss/scrennshot-code"
            target="_blank"
          >
            Github
          </Link>
          <Link className="p-0 text-base text-white" href="">
            Terms
          </Link>
        </div>
        <div className="flex items-center gap-2 text-base">
          <p>© {new Date().getFullYear()}</p>
          <p>Created by</p>
          <Link className="p-0 text-base font-bold text-primary" href="https://juliendussart.fr" target="_blank">@Julien</Link>
          <p>v 1.0.0</p>
        </div>
        <div className="boxShadow absolute bottom-[-43rem] left-1/2 -z-10 h-[40rem] w-[40rem] translate-x-[-27%] rounded-full" />
      </div>
    </div>
  );
};

export default Footer;
