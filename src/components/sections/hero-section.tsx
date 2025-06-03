
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <SectionWrapper id="hero" className="bg-gradient-to-br from-primary/10 via-background to-background pt-20 md:pt-24 lg:pt-32">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl font-headline">
            Bridging Languages, <span className="text-primary">Connecting Worlds</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Hapi Kelly, founder of HAPPY TRANSLATION SERVICES, offers expert language solutions and training to empower your global communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" variant="default" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="#booking">Book a Service</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto md:max-w-none">
          <Image
            src="https://placehold.co/600x600.png"
            alt="Hapi Kelly - Professional Translator"
            width={600}
            height={600}
            priority
            className="rounded-xl shadow-2xl object-cover"
            data-ai-hint="professional diverse team"
          />
           <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent rounded-full opacity-50 blur-2xl -z-10"></div>
           <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary rounded-full opacity-30 blur-2xl -z-10"></div>
        </div>
      </div>
    </SectionWrapper>
  );
}
