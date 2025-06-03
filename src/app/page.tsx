
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { AiSamplerSection } from '@/components/sections/ai-sampler-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { AboutSection } from '@/components/sections/about-section';
import { BookingFormSection } from '@/components/sections/booking-form-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AiSamplerSection />
        <TestimonialsSection />
        <AboutSection />
        <BookingFormSection />
      </main>
      <Footer />
    </div>
  );
}
