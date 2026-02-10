import { Camera } from 'lucide-react';
import { cn } from '@/utils';

interface LogoProps {
  className?: string;
  textClassName?: string;
}

const Logo = ({ className, textClassName }: LogoProps) => {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="bg-gradient-primary flex size-8 items-center justify-center rounded-lg">
        <Camera className="size-4 text-primary-foreground" />
      </div>
      <span className={cn('text-lg font-bold tracking-tight', textClassName)}>
        Snip<span className="text-gradient">forge</span>
      </span>
    </div>
  );
};

export default Logo;

