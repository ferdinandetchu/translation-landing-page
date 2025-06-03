
import { SectionWrapper } from '@/components/shared/section-wrapper';
import Image from 'next/image';

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-background">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative aspect-[4/5] max-w-md mx-auto md:max-w-none rounded-xl shadow-2xl overflow-hidden group">
          <Image
            src="https://placehold.co/400x500.png"
            alt="Hapi Kelly - Founder of HAPPY TRANSLATION SERVICES"
            width={400}
            height={500}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="professional woman"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
           <div className="absolute bottom-6 left-6 text-white">
             <h3 className="font-headline text-2xl font-semibold">Hapi Kelly</h3>
             <p className="text-sm">Founder & Lead Translator</p>
           </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">
            Meet <span className="text-primary">Hapi Kelly</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My name is Hapi Kelly, and I am a dedicated translator and language services provider with extensive experience in the public sector. As an aspiring entrepreneur, I am passionate about leveraging technology to bridge communication gaps and foster understanding across cultures.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founding HAPPY TRANSLATION SERVICES is the culmination of my professional journey and entrepreneurial spirit. My mission is to provide exceptional language services and innovative training programs that empower individuals and organizations to thrive in a globalized world.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I believe in building strong client relationships based on trust, quality, and a shared commitment to excellence. Let&apos;s work together to achieve your communication goals.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
