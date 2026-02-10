import Link from 'next/link';
import { useLandingTranslation } from '@/hooks';
import { Button } from '../ui';
import { LanguageToggle } from '@/components/controls';
import Logo from '@/components/logo';

const Navbar = () => {
  const t = useLandingTranslation();

  return (
    <nav className="glass-strong fixed inset-x-0 top-0 z-50">
      <div className="container relative mx-auto grid h-16 grid-cols-[1fr_auto_1fr] items-center px-6">
        <Logo />

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
          <div className="hidden md:block">
            <LanguageToggle />
          </div>
          <div className="md:hidden">
            <LanguageToggle />
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
            <Link href="/snipforge">{t.navbar.login}</Link>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link href="/snipforge">{t.navbar.tryFree}</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
