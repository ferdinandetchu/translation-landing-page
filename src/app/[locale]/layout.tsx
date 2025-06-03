
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '../globals.css'; // Ensure global styles are imported here
import { Toaster } from "@/components/ui/toaster"; // Toaster should be here
import { i18n, type Locale } from '@/lib/i18n-config';
import { getDictionary } from '@/lib/get-dictionary';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.locale);
  return {
    title: dictionary.metadataTitle,
    description: dictionary.metadataDescription,
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: { locale: Locale };
};

export default function LocaleLayout({ children, params }: LocaleLayoutProps): JSX.Element {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
