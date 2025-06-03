
import type { LucideIcon } from 'lucide-react';
import { Languages, UsersRound, Mic2, FilePenLine, GraduationCap, MessageSquareQuote, Linkedin, Twitter, Facebook } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: '#services', label: 'Services' },
  { href: '#ai-sampler', label: 'AI Sampler' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#about', label: 'About Hapi' },
  { href: '#booking', label: 'Book Service' },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'translation',
    title: 'Language Translation',
    description: 'High-quality, culturally nuanced translations for documents, websites, and marketing materials across various industries.',
    icon: Languages,
  },
  {
    id: 'training',
    title: 'Customized Training Programs',
    description: 'Tailored language training programs for individuals and corporate teams, focusing on practical communication skills.',
    icon: GraduationCap,
  },
  {
    id: 'interpretation',
    title: 'Professional Interpretation',
    description: 'Reliable consecutive and simultaneous interpretation services for meetings, conferences, and public sector engagements.',
    icon: Mic2,
  },
  {
    id: 'proofreading',
    title: 'Editing & Proofreading',
    description: 'Meticulous editing and proofreading services to ensure your content is polished, accurate, and error-free.',
    icon: FilePenLine,
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  company: string;
  avatar?: string;
};

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: "Hapi's translation services exceeded our expectations. The attention to detail and cultural sensitivity were remarkable.",
    name: 'Jane Doe',
    company: 'Public Sector Department A',
    avatar: 'https://placehold.co/100x100.png?text=JD',
  },
  {
    id: 't2',
    quote: 'The language training program Hapi developed for our team was incredibly effective and engaging. Highly recommended!',
    name: 'John Smith',
    company: 'Tech Solutions Ltd.',
    avatar: 'https://placehold.co/100x100.png?text=JS',
  },
  {
    id: 't3',
    quote: 'Professional, punctual, and precise. HAPPY TRANSLATION SERVICES is our go-to for all interpretation needs.',
    name: 'Alice Brown',
    company: 'International NGO',
    avatar: 'https://placehold.co/100x100.png?text=AB',
  },
];

export type SocialLink = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Facebook, label: 'Facebook' },
];

export const TONES_OF_VOICE = [
  { value: 'Professional', label: 'Professional' },
  { value: 'Casual', label: 'Casual' },
  { value: 'Humorous', label: 'Humorous' },
  { value: 'Formal', label: 'Formal' },
  { value: 'Persuasive', label: 'Persuasive' },
];
