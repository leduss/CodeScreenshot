import { CircleHelp } from 'lucide-react';
import { useLandingTranslation } from '@/hooks';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionBadge from './section-badge';

const FAQ = () => {
  const t = useLandingTranslation();

  return (
    <section id="faq" className="relative px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <SectionBadge label={t.faq.badge} icon={CircleHelp} />
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {t.faq.titlePrefix}{' '}
            <span className="text-gradient">{t.faq.titleGradient}</span>
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-4xl rounded-2xl border border-border/60 bg-gradient-card px-5 shadow-card"
        >
          {t.faq.items.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-base font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
