import { useLandingTranslation } from '@/hooks';
import { Globe, Linkedin, MessageSquareText } from 'lucide-react';
import SectionBadge from './section-badge';

const SocialPublishing = () => {
  const t = useLandingTranslation();

  return (
    <section id="social-publishing" className="relative px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <SectionBadge label={t.socialPublishing.badge} icon={Globe} />
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {t.socialPublishing.titlePrefix}{' '}
            <span className="text-gradient">{t.socialPublishing.titleGradient}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t.socialPublishing.subtitle}
          </p>
          <p className="mt-3 text-sm font-medium text-primary/80">
            {t.socialPublishing.microLine}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-card">
            <div className="mb-4 flex items-center justify-between">
              <div className="inline-flex items-center gap-2">
                <MessageSquareText className="size-5 text-primary" />
                <h3 className="text-xl font-semibold">{t.socialPublishing.xTitle}</h3>
              </div>
              <span className="bg-gradient-primary whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                {t.socialPublishing.comingSoon}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.socialPublishing.xDescription}
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-card">
            <div className="mb-4 flex items-center justify-between">
              <div className="inline-flex items-center gap-2">
                <Linkedin className="size-5 text-primary" />
                <h3 className="text-xl font-semibold">{t.socialPublishing.linkedInTitle}</h3>
              </div>
              <span className="bg-gradient-primary whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                {t.socialPublishing.comingSoon}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.socialPublishing.linkedInDescription}
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-border/60 bg-white/5 p-6">
          <div className="mb-3 inline-flex items-center gap-2 text-primary">
            <Globe className="size-4" />
            <span className="text-xs font-semibold uppercase tracking-wide">
              {t.socialPublishing.workflowLabel}
            </span>
          </div>
          <ul className="grid grid-cols-1 gap-3 text-sm text-muted-foreground md:grid-cols-3">
            {t.socialPublishing.highlights.map((item) => (
              <li key={item} className="rounded-md border border-border/50 bg-card/60 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SocialPublishing;
