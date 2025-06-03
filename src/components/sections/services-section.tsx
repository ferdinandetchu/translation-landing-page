
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import type { LocaleDictionary } from '@/dictionaries/types';
import { Languages, GraduationCap, Mic2, FilePenLine, MessageSquareQuote, type LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  translation: Languages,
  training: GraduationCap,
  interpretation: Mic2,
  proofreading: FilePenLine,
};

export function ServicesSection({ dictionary }: { dictionary: LocaleDictionary }) {
  return (
    <SectionWrapper id="services" className="bg-secondary/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">
          {dictionary.servicesTitle} <span className="text-primary">{dictionary.servicesTitleAccent}</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {dictionary.servicesSubtitle}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {dictionary.servicesData.map((service) => {
          const IconComponent = ICONS[service.id] || MessageSquareQuote;
          return (
            <Card key={service.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base text-muted-foreground leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
