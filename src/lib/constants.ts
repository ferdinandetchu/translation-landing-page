
import type { LucideIcon } from 'lucide-react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

// NavLink, Service, Testimonial, ToneOfVoice types are now in src/dictionaries/types.ts
// The actual data for these will come from the dictionary files (en.ts, fr.ts)

export type SocialLink = {
  href: string;
  icon: LucideIcon;
  label: string; // Label might be useful for accessibility if not directly translated
};

export const SOCIAL_LINKS: SocialLink[] = [
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Facebook, label: 'Facebook' },
];

// TONES_OF_VOICE data is moved to dictionary files.
// SERVICES_DATA data is moved to dictionary files.
// TESTIMONIALS_DATA data is moved to dictionary files.
// NAV_LINKS data is moved to dictionary files.
