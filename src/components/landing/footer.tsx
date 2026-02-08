import { Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 px-6 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-primary flex size-7 items-center justify-center rounded-lg">
              <Camera className="size-3.5 text-primary-foreground" />
            </div>
            <span className="font-bold tracking-tight">
              Snap<span className="text-gradient">Code</span>
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Twitter
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              GitHub
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Discord
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 SnapCode. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
