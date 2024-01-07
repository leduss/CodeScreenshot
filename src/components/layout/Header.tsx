import { SiteConfig } from '@/lib/site-config';
import Link from 'next/link';
import { Typography } from '../ui/Typography';
import { ThemeToggle } from '../theme/ThemeToggle';
import { AuthButton } from '../feature/auth/AuthButton';
import Image from 'next/image';
import TransitionLink from '../ui/TransitionLink';

export function Header() {
  return (
    <header className="h-screen w-1/6 border-r bg-background py-4">
      <div className="flex h-full flex-col items-center ">
        <div className="flex flex-col items-center justify-center">
          <Image src={SiteConfig.Image} width={50} height={35} alt="app-logo" />
          <Typography variant="h3" as={Link} href="/">
            {SiteConfig.title}
          </Typography>
        </div>
        <div className="flex w-full flex-1 flex-col gap-2 pt-10">
          <TransitionLink label="dashboard" href="/dashboard" />

          <TransitionLink label="dashboard" href="/dashboard/custom" />
        </div>
        <div className="flex items-center space-x-4">
          <nav className="flex items-center justify-center gap-4">
            <AuthButton />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
