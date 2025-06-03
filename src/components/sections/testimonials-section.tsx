
import { Card, CardContent } from '@/components/ui/card';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { TESTIMONIALS_DATA } from '@/lib/constants';
import Image from 'next/image';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" className="bg-secondary/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">
          What Our <span className="text-primary">Clients Say</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Hear from satisfied clients who have experienced the quality and professionalism of HAPPY TRANSLATION SERVICES.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS_DATA.map((testimonial) => (
          <Card key={testimonial.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col p-6 bg-card">
            <CardContent className="flex flex-col flex-grow items-center text-center space-y-4">
              {testimonial.avatar && (
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-primary/50 shadow-md"
                  data-ai-hint="person avatar"
                />
              )}
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <blockquote className="text-muted-foreground italic leading-relaxed flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
