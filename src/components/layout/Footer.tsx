import { SiteConfig } from '@/lib/site-config';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '../ui/Typography';

export const Footer = () => {
  return (
    <footer className="w-full border-t">
      <div className="m-auto w-full max-w-3xl px-2 py-4">
        <div className="flex items-center lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={SiteConfig.Image}
              width={40}
              height={30}
              alt="app logo"
            />
            <Typography variant="base" as={Link} href="/">
              {SiteConfig.title}
            </Typography>
          </div>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Typography variant="base">{SiteConfig.description}</Typography>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <Typography variant="base" className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {SiteConfig.title}
          </Typography>
        </div>
      </div>
    </footer>
  );
};
