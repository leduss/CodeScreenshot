import { Camera } from 'lucide-react';
import { Button } from '../ui';

const Navbar = () => {
  return (
    <nav className="glass-strong fixed inset-x-0 top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-primary flex size-8 items-center justify-center rounded-lg">
            <Camera className="size-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Snap<span className="text-gradient">Code</span>
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Fonctionnalités
          </a>
          <a
            href="#preview"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Aperçu
          </a>
          <a
            href="#pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Tarifs
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            Connexion
          </Button>
          <Button variant="hero" size="sm">
            Essayer gratuitement
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
