
import { SectionWrapper } from '@/components/shared/section-wrapper';
import Image from 'next/image';
import type { LocaleDictionary } from '@/dictionaries/types';

export function AboutSection({ dictionary }: { dictionary: LocaleDictionary }) {
  return (
    <SectionWrapper id="about" className="bg-background">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative aspect-[4/5] max-w-md mx-auto md:max-w-none rounded-xl shadow-2xl overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1623113611964-19795ff965bb?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={dictionary.aboutImageAlt}
            width={400}
            height={500}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="professional woman"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
           <div className="absolute bottom-6 left-6 text-white">
             <h3 className="font-headline text-2xl font-semibold">{dictionary.aboutHapiKelly}</h3>
             <p className="text-sm">{dictionary.aboutHapiFounderTitle}</p>
           </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">
            {dictionary.aboutMeet} <span className="text-primary">{dictionary.aboutHapiKellyAccent}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {dictionary.aboutHapiBio1}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {dictionary.aboutHapiBio2}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {dictionary.aboutHapiBio3}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
