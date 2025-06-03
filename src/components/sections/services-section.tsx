
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { SERVICES_DATA } from '@/lib/constants';

export function ServicesSection() {
  return (
    <SectionWrapper id="services" className="bg-secondary/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">
          Our Language <span className="text-primary">Solutions</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          HAPPY TRANSLATION SERVICES provides a comprehensive suite of language services and training programs tailored to your needs.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {SERVICES_DATA.map((service) => (
          <Card key={service.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="bg-primary/10 p-3 rounded-full">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-headline">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-base text-muted-foreground leading-relaxed">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
