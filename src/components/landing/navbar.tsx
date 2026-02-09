import { Camera } from 'lucide-react';
import Link from 'next/link';
import { useLandingTranslation } from '@/hooks';
import { Button } from '../ui';
import { LanguageToggle } from '@/components/controls';

const Navbar = () => {
  const t = useLandingTranslation();

  return (
    <nav className="glass-strong fixed inset-x-0 top-0 z-50">
      <div className="container relative mx-auto grid h-16 grid-cols-[1fr_auto_1fr] items-center px-6">
        <div className="absolute -right-16">
          <LanguageToggle />
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-gradient-primary flex size-8 items-center justify-center rounded-lg">
            <Camera className="size-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Snap<span className="text-gradient">Code</span>
          </span>
        </div>

        <div className="hidden items-center justify-center gap-6 md:flex">
          <a
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.navbar.features}
          </a>
          <a
            href="#preview"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.navbar.preview}
          </a>
          <a
            href="#social-publishing"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.navbar.social}
          </a>
          <a
            href="#faq"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.navbar.faq}
          </a>
          <a
            href="#pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.navbar.pricing}
          </a>
        </div>

        <div className="flex items-center justify-end gap-3">
          <div className="md:hidden">
            <LanguageToggle />
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            {t.navbar.login}
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link href="/snapcode">{t.navbar.tryFree}</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
