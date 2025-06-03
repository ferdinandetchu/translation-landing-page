
import type { LocaleDictionary } from './types';

const dictionary: LocaleDictionary = {
  // Common
  hapiTranslation: "Hapi Translation",
  happyTranslationServices: "HAPPY TRANSLATION SERVICES",
  changeLanguageSr: "Change language",

  // Nav Links
  navLinks: [
    { href: '#services', label: 'Services' },
    { href: '#ai-sampler', label: 'AI Sampler' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#about', label: 'About Hapi' },
    { href: '#booking', label: 'Book Service' },
  ],

  // Hero Section
  heroTitlePart1: "Bridging Languages,",
  heroTitlePart2: "Connecting Worlds",
  heroSubtitle: "Hapi Kelly, founder of HAPPY TRANSLATION SERVICES, offers expert language solutions and training to empower your global communication.",
  heroButtonBook: "Book a Service",
  heroButtonExplore: "Explore Services",
  heroImageAlt: "Professional diverse team in an office, collaborating",

  // Services Section
  servicesTitle: "Our Language",
  servicesTitleAccent: "Solutions",
  servicesSubtitle: "HAPPY TRANSLATION SERVICES provides a comprehensive suite of language services and training programs tailored to your needs.",
  servicesData: [
    { id: 'translation', title: 'Language Translation', description: 'High-quality, culturally nuanced translations for documents, websites, and marketing materials across various industries.' },
    { id: 'training', title: 'Customized Training Programs', description: 'Tailored language training programs for individuals and corporate teams, focusing on practical communication skills.' },
    { id: 'interpretation', title: 'Professional Interpretation', description: 'Reliable consecutive and simultaneous interpretation services for meetings, conferences, and public sector engagements.' },
    { id: 'proofreading', title: 'Editing & Proofreading', description: 'Meticulous editing and proofreading services to ensure your content is polished, accurate, and error-free.' },
  ],

  // AI Sampler Section
  aiSamplerExperience: "Experience Our",
  aiSamplerTitleAccent: "AI Tone Sampler",
  aiSamplerSubtitle: "See how our AI can adapt text to various tones. Enter your text, choose a tone, and witness the transformation!",
  aiSamplerCardTitle: "Tone of Voice Translator",
  aiSamplerCardDescription: "Enter text and select a target tone to see a sample translation.",
  aiSamplerSourceTextLabel: "Source Text",
  aiSamplerSourceTextPlaceholder: "Enter your text here...",
  aiSamplerSelectToneLabel: "Select Tone",
  aiSamplerSelectTonePlaceholder: "Choose a tone",
  aiSamplerTranslateButton: "Translate with AI",
  aiSamplerResultTitle: "Translation Result:",
  aiSamplerToneNotApplicableTitle: "Tone Not Applicable",
  aiSamplerToneNotApplicableDescription: "The selected tone ({selectedToneLabel}) might not be suitable for typical business communication.",
  aiSamplerErrorToastTitle: "AI Error",
  aiSamplerErrorToastDescription: "The AI could not process this request. Please try again.",
  aiSamplerInputMissingToastTitle: "Input missing",
  aiSamplerInputMissingToastDescription: "Please provide text and select a tone.",
  aiSamplerGenericErrorToastTitle: "Error",
  tonesOfVoice: [
    { value: 'Professional', label: 'Professional' },
    { value: 'Casual', label: 'Casual' },
    { value: 'Humorous', label: 'Humorous' },
    { value: 'Formal', label: 'Formal' },
    { value: 'Persuasive', label: 'Persuasive' },
  ],
  
  // Testimonials Section
  testimonialsTitle: "What Our",
  testimonialsTitleAccent: "Clients Say",
  testimonialsSubtitle: "Hear from satisfied clients who have experienced the quality and professionalism of HAPPY TRANSLATION SERVICES.",
  testimonialsData: [
    { id: 't1', quote: "Hapi's translation services exceeded our expectations. The attention to detail and cultural sensitivity were remarkable.", name: 'Jane Doe', company: 'Public Sector Department A', avatar: 'https://placehold.co/100x100.png?text=JD', aiHint: 'person avatar' },
    { id: 't2', quote: 'The language training program Hapi developed for our team was incredibly effective and engaging. Highly recommended!', name: 'John Smith', company: 'Tech Solutions Ltd.', avatar: 'https://placehold.co/100x100.png?text=JS', aiHint: 'person avatar' },
    { id: 't3', quote: 'Professional, punctual, and precise. HAPPY TRANSLATION SERVICES is our go-to for all interpretation needs.', name: 'Alice Brown', company: 'International NGO', avatar: 'https://placehold.co/100x100.png?text=AB', aiHint: 'person avatar' },
  ],
  testimonialAvatarAlt: "Avatar of {name}",

  // About Section
  aboutMeet: "Meet",
  aboutHapiKellyAccent: "Hapi Kelly",
  aboutHapiBio1: "My name is Hapi Kelly, and I am a dedicated translator and language services provider with extensive experience in the public sector. As an aspiring entrepreneur, I am passionate about leveraging technology to bridge communication gaps and foster understanding across cultures.",
  aboutHapiBio2: "Founding HAPPY TRANSLATION SERVICES is the culmination of my professional journey and entrepreneurial spirit. My mission is to provide exceptional language services and innovative training programs that empower individuals and organizations to thrive in a globalized world.",
  aboutHapiBio3: "I believe in building strong client relationships based on trust, quality, and a shared commitment to excellence. Let's work together to achieve your communication goals.",
  aboutHapiFounderTitle: "Founder & Lead Translator",
  aboutHapiKelly: "Hapi Kelly",
  aboutImageAlt: "Hapi Kelly - Founder of HAPPY TRANSLATION SERVICES",

  // Booking Form Section
  bookingFormReady: "Ready to Get",
  bookingFormStartedAccent: "Started?",
  bookingFormSubtitle: "Fill out the form below to book a service or inquire about our offerings. We're excited to help you with your language needs!",
  bookingFormFullNameLabel: "Full Name",
  bookingFormFullNamePlaceholder: "Hapi Kelly",
  bookingFormEmailLabel: "Email Address",
  bookingFormEmailPlaceholder: "hapi@example.com",
  bookingFormPhoneLabel: "Phone Number (Optional)",
  bookingFormPhonePlaceholder: "+1 (234) 567-890",
  bookingFormServiceLabel: "Service Required",
  bookingFormServicePlaceholder: "Select a service",
  bookingFormDateLabel: "Preferred Date (Optional)",
  bookingFormDatePlaceholder: "Pick a date",
  bookingFormMessageLabel: "Additional Message (Optional)",
  bookingFormMessagePlaceholder: "Tell us more about your project or requirements...",
  bookingFormMessageDescription: "Max 500 characters.",
  bookingFormSubmitButton: "Send Booking Request",
  bookingFormSubmitting: "Sending...",
  bookingFormSuccessToastTitle: "Booking Request Sent!",
  bookingFormSuccessToastDescription: "Thank you for your request. We will get back to you shortly.",
  bookingFormNameMinError: "Name must be at least 2 characters.",
  bookingFormEmailError: "Please enter a valid email address.",
  bookingFormServiceError: "Please select a service.",
  bookingFormMessageMaxError: "Message cannot exceed 500 characters.",
  
  // Footer
  footerSlogan: "Providing quality language services and training programs.",
  footerQuickLinks: "Quick Links",
  footerConnect: "Connect",
  footerEmailLabel: "Email:",
  footerEmailLink: "info@hapitranslation.com",
  footerPhoneLabel: "Phone:",
  footerPhoneLink: "+1 (234) 567-890",
  footerCopyright: "© {year} HAPPY TRANSLATION SERVICES. All rights reserved.",

  // Metadata
  metadataTitle: "Hapi Landing - HAPPY TRANSLATION SERVICES",
  metadataDescription: "Quality language services and training programs by Hapi Kelly.",

  // Header
  mobileMenuToggle: "Toggle Menu",
};
export default dictionary;
