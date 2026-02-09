import { Camera } from 'lucide-react';
import { useLandingTranslation } from '@/hooks';

const Footer = () => {
  const t = useLandingTranslation();
  const appVersion = process.env.NEXT_PUBLIC_APP_VERSION ?? '1.0.0';
  const rights = t.footer.rights.replace(
    '{year}',
    new Date().getFullYear().toString()
  );

  return (
    <footer className="border-t border-border/50 px-6 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          <div className="flex-col items-start">
            <div className=" mb-4 flex items-center gap-2 rounded-lg">
              <div className="bg-gradient-primary flex size-8 items-center justify-center rounded-lg">
                <Camera className="size-4 text-primary-foreground" />
              </div>
              <span className="font-bold tracking-tight">
                Snap<span className="text-gradient">Code</span>
              </span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{rights}</p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/90">
              {t.footer.productTitle}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {t.footer.productItems.map((item) => (
                <li key={item.label} >
                  <a
                    href={item.href}
                    className="transition-colors hover:text-foreground "
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/90">
              {t.footer.legalTitle}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {t.footer.legalItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/90">
              {t.footer.supportTitle}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {t.footer.supportItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/90">
              {t.footer.trustTitle}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {t.footer.trustItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-4">
          <p className="text-center text-sm text-muted-foreground">
            {t.footer.madeIn} · {t.footer.versionLabel} v{appVersion}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
