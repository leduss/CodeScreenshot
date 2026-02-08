import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Separator, Popover, PopoverContent, PopoverTrigger, Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui';
import { toPng, toBlob, toJpeg } from 'html-to-image';
import { toast } from 'sonner';
import { ThemeToggle } from '@/components/theme';
import Link from 'next/link';
import { useStore } from '@/store/useStore';
import { LanguageToggle } from '@/components/controls';
import { useTranslation } from '@/hooks/useTranslation';
import { Expand, Shrink } from 'lucide-react';

interface FooterProps {
  editorRef: React.RefObject<HTMLDivElement | null>;
  title: string;
}

const Footer = (props: FooterProps) => {
  const { editorRef, title } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  const { setIsLoader, isFullscreen, toggleFullscreen, isPro, exportsUsed, incrementExportsUsed } = useStore();
  const { t } = useTranslation();

  // Toggle fullscreen with F key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleFullscreen]);

  // Apply fullscreen to document
  useEffect(() => {
    if (isFullscreen) {
      document.documentElement.requestFullscreen?.();
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen?.();
      }
    }
  }, [isFullscreen]);

  const handleClick = async (name: string, format: string) => {
    setLoading(true);
    try {
      let image;
      let filename;

      if (!isPro && exportsUsed >= 5) {
        setUpgradeOpen(true);
        return;
      }
      if (!isPro && format !== 'PNG') {
        toast.error(t.error);
        return;
      }

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
        default:
          return;
      }
      const a = document.createElement('a');
      a.href = image ?? '';
      a.download = filename;
      a.click();
      toast.success(t.downloadSuccess);
      if (!isPro) {
        incrementExportsUsed();
      }
    } catch (error) {
      toast.error(t.error);
    } finally {
      setLoading(false);
    }
  };

  const copyLink = async () => {
    setLoading(true);
    try {
      await navigator.clipboard.writeText(`${location.href}`);
      toast.success(t.linkCopied);
    } catch (error) {
      toast.error(t.error);
    } finally {
      setLoading(false);
    }
  };

  const copyImage = async () => {
    setLoading(true);
    try {
      const imgBlob = await toBlob(editorRef.current!, {
        pixelRatio: 2,
      });
      const img = new ClipboardItem({ 'image/png': imgBlob as Blob });
      navigator.clipboard.write([img]);
      toast.success(t.imageCopied);
    } catch (error) {
      toast.error(t.somethingWrong);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="flex shrink-0 flex-col gap-4 pb-2">
      <Card className="flex h-14 items-center p-3">
        <CardContent className="flex items-center gap-4 p-0">
          <nav className="flex gap-2" aria-label="Export actions">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="default" disabled={loading}>
                  {t.export}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-40 flex-col gap-3">
                <Button variant="default" onClick={() => handleClick(title, 'PNG')} disabled={loading}>
                  {t.png}
                </Button>
                {isPro && (
                  <Button variant="default" onClick={() => handleClick(title, 'JPG')} disabled={loading}>
                    {t.jpg}
                  </Button>
                )}
              </PopoverContent>
            </Popover>
            <Button variant="default" onClick={copyLink} disabled={loading}>
              {t.copyLink}
            </Button>
            <Button variant="default" onClick={copyImage} disabled={loading}>
              {t.copyImage}
            </Button>
            <Button variant="default" onClick={toggleFullscreen} disabled={loading} aria-label={t.fullscreen}>
              {isFullscreen ? <Shrink className="size-4" /> : <Expand className="size-4" />}
            </Button>
          </nav>

          <Separator orientation="vertical" className="h-9" />
          <LanguageToggle />
          <ThemeToggle />
        </CardContent>
      </Card>

      <Dialog open={upgradeOpen} onOpenChange={setUpgradeOpen}>
        <DialogContent className="border-white/10 bg-[#121316] text-white">
          <DialogHeader className="text-left">
            <DialogTitle>{t.limitReachedTitle}</DialogTitle>
            <DialogDescription className="text-white/60">
              {t.limitReachedDescription}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <button
                type="button"
                className="inline-flex h-9 items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 text-sm font-medium text-white/80 transition hover:bg-white/10"
              >
                {t.none}
              </button>
            </DialogClose>
            <button
              type="button"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition"
            >
              {t.upgradeCta}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <nav className="flex justify-center gap-4 text-sm dark:text-white" aria-label="Footer links">
        <Link href="https://github.com/leduss/scrennshot-code" target="_blank" rel="noopener noreferrer">
          {t.github}
        </Link>
        <Link href="/terms" onClick={() => setIsLoader(true)}>
          {t.terms}
        </Link>
      </nav>

      <p className="text-center text-sm dark:text-white">
        {t.copyright} {new Date().getFullYear()} · {t.createdBy}{' '}
        <Link href="https://juliendussart.fr" target="_blank" rel="noopener noreferrer" className="font-bold text-primary">
          @Julien
        </Link>{' '}
        · {t.version}
      </p>
    </footer>
  );
};

export default Footer;
