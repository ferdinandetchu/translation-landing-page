
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';
import { MessageSquareText } from 'lucide-react';
import type { LocaleDictionary } from '@/dictionaries/types';

export function Footer({ dictionary }: { dictionary: LocaleDictionary }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-card">
      <div className="container py-8 text-center md:text-left">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <MessageSquareText className="h-7 w-7 text-primary" />
              <span className="font-headline text-xl font-semibold">{dictionary.happyTranslationServices}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {dictionary.footerSlogan}
            </p>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold mb-3">{dictionary.footerQuickLinks}</h4>
            <ul className="space-y-2">
              {dictionary.navLinks.map(link => (
                 <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold mb-3">{dictionary.footerConnect}</h4>
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
              {dictionary.footerEmailLabel} <a href={`mailto:${dictionary.footerEmailLink}`} className="hover:text-primary">{dictionary.footerEmailLink}</a>
            </p>
            <p className="text-sm text-muted-foreground">
              {dictionary.footerPhoneLabel} <a href={`tel:${dictionary.footerPhoneLink.replace(/\s|\(|\)/g, '')}`} className="hover:text-primary">{dictionary.footerPhoneLink}</a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          {dictionary.footerCopyright.replace('{year}', currentYear.toString())}
        </div>
      </div>
    </footer>
  );
}
