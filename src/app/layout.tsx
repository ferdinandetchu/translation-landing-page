import type { ReactNode } from 'react';
import './globals.css'; // Import global styles here as it's the true root
import { Toaster } from "@/components/ui/toaster"; // Toaster can also be here

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  // This RootLayout defines the main HTML shell.
  // The [locale] layout will be nested within its children.
  // The `lang` attribute will be set by the [locale] layout on its own <html> tag.
  // This means the [locale] layout should render its own <html> tag.
  // To avoid nested <html> tags, this RootLayout should be extremely minimal
  // if the [locale] layout is rendering the full <html>...</html>.

  // If src/app/[locale]/layout.tsx renders <html> and <body>,
  // then this RootLayout should just pass children through.
  // Let's make this RootLayout just pass children, and LocaleLayout handle HTML shell.
  return <>{children}</>;
}
