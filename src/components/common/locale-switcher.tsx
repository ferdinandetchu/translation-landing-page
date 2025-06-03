
'use client';
import { usePathname, useRouter } from 'next/navigation';
import { i18n, type Locale } from '@/lib/i18n-config';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';
import type { LocaleDictionary } from '@/dictionaries/types';

export default function LocaleSwitcher({ dictionary }: { dictionary: LocaleDictionary }) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (locale: Locale) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = locale; // Assuming locale is always the first segment after domain
    router.push(segments.join('/'));
  };

  const currentLocale = pathname.split('/')[1] as Locale;


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-5 w-5" />
          <span className="sr-only">{dictionary.changeLanguageSr}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem 
            key={locale} 
            onClick={() => changeLocale(locale)}
            disabled={currentLocale === locale}
          >
            {locale.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
