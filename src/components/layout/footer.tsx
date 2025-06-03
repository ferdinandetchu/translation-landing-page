
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';
import { MessageSquareText } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8 text-center md:text-left">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <MessageSquareText className="h-7 w-7 text-primary" />
              <span className="font-headline text-xl font-semibold">HAPPY TRANSLATION SERVICES</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Providing quality language services and training programs.
            </p>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary">About Hapi</Link></li>
              <li><Link href="#booking" className="text-sm text-muted-foreground hover:text-primary">Book Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold mb-3">Connect</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.label}</span>
                </Link>
              ))}
            </div>
             <p className="text-sm text-muted-foreground mt-4">
              Email: <a href="mailto:info@hapitranslation.com" className="hover:text-primary">info@hapitranslation.com</a>
            </p>
            <p className="text-sm text-muted-foreground">
              Phone: <a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} HAPPY TRANSLATION SERVICES. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
