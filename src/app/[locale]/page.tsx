
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { AiSamplerSection } from '@/components/sections/ai-sampler-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { AboutSection } from '@/components/sections/about-section';
import { BookingFormSection } from '@/components/sections/booking-form-section';
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/lib/i18n-config';

export default async function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
  const dictionary = await getDictionary(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <Header dictionary={dictionary} />
      <main className="flex-grow">
        <HeroSection dictionary={dictionary} />
        <ServicesSection dictionary={dictionary} />
        <AiSamplerSection dictionary={dictionary} />
        <TestimonialsSection dictionary={dictionary} />
        <AboutSection dictionary={dictionary} />
        <BookingFormSection dictionary={dictionary} />
      </main>
      <Footer dictionary={dictionary} />
    </div>
  );
}
