
export type NavLinkData = { href: string; label: string };
export type ServiceData = { id: string; title: string; description: string; };
export type TestimonialData = { id: string; quote: string; name: string; company: string; avatar?: string; aiHint?: string; };
export type ToneOfVoiceData = { value: string; label: string };

export interface LocaleDictionary {
  // Common
  hapiTranslation: string;
  happyTranslationServices: string;
  changeLanguageSr: string;

  // Nav Links
  navLinks: NavLinkData[];

  // Hero Section
  heroTitlePart1: string;
  heroTitlePart2: string;
  heroSubtitle: string;
  heroButtonBook: string;
  heroButtonExplore: string;
  heroImageAlt: string;

  // Services Section
  servicesTitle: string;
  servicesTitleAccent: string;
  servicesSubtitle: string;
  servicesData: ServiceData[];

  // AI Sampler Section
  aiSamplerExperience: string;
  aiSamplerTitleAccent: string;
  aiSamplerSubtitle: string;
  aiSamplerCardTitle: string;
  aiSamplerCardDescription: string;
  aiSamplerSourceTextLabel: string;
  aiSamplerSourceTextPlaceholder: string;
  aiSamplerSelectToneLabel: string;
  aiSamplerSelectTonePlaceholder: string;
  aiSamplerTranslateButton: string;
  aiSamplerResultTitle: string;
  aiSamplerToneNotApplicableTitle: string;
  aiSamplerToneNotApplicableDescription: string; // expects {selectedToneLabel}
  aiSamplerErrorToastTitle: string;
  aiSamplerErrorToastDescription: string;
  aiSamplerInputMissingToastTitle: string;
  aiSamplerInputMissingToastDescription: string;
  aiSamplerGenericErrorToastTitle: string;
  tonesOfVoice: ToneOfVoiceData[];

  // Testimonials Section
  testimonialsTitle: string;
  testimonialsTitleAccent: string;
  testimonialsSubtitle: string;
  testimonialsData: TestimonialData[];
  testimonialAvatarAlt: string; // expects {name}

  // About Section
  aboutMeet: string;
  aboutHapiKellyAccent: string;
  aboutHapiBio1: string;
  aboutHapiBio2: string;
  aboutHapiBio3: string;
  aboutHapiFounderTitle: string;
  aboutHapiKelly: string;
  aboutImageAlt: string;

  // Booking Form Section
  bookingFormReady: string;
  bookingFormStartedAccent: string;
  bookingFormSubtitle: string;
  bookingFormFullNameLabel: string;
  bookingFormFullNamePlaceholder: string;
  bookingFormEmailLabel: string;
  bookingFormEmailPlaceholder: string;
  bookingFormPhoneLabel: string;
  bookingFormPhonePlaceholder: string;
  bookingFormServiceLabel: string;
  bookingFormServicePlaceholder: string;
  bookingFormDateLabel: string;
  bookingFormDatePlaceholder: string;
  bookingFormMessageLabel: string;
  bookingFormMessagePlaceholder: string;
  bookingFormMessageDescription: string;
  bookingFormSubmitButton: string;
  bookingFormSubmitting: string;
  bookingFormSuccessToastTitle: string;
  bookingFormSuccessToastDescription: string;
  bookingFormNameMinError: string;
  bookingFormEmailError: string;
  bookingFormServiceError: string;
  bookingFormMessageMaxError: string;
  
  // Footer
  footerSlogan: string;
  footerQuickLinks: string;
  footerConnect: string;
  footerEmailLabel: string;
  footerEmailLink: string;
  footerPhoneLabel: string;
  footerPhoneLink: string;
  footerCopyright: string; // expects {year}

  // Metadata
  metadataTitle: string;
  metadataDescription: string;

  // Header
  mobileMenuToggle: string;
}
