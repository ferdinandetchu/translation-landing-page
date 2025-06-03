
import type { LocaleDictionary } from './types';

const dictionary: LocaleDictionary = {
  // Common
  hapiTranslation: "Hapi Traduction",
  happyTranslationServices: "SERVICES DE TRADUCTION HAPPY",
  changeLanguageSr: "Changer de langue",

  // Nav Links
  navLinks: [
    { href: '#services', label: 'Services' },
    { href: '#ai-sampler', label: 'Échantillon IA' },
    { href: '#testimonials', label: 'Témoignages' },
    { href: '#about', label: 'À propos de Hapi' },
    { href: '#booking', label: 'Réserver un service' },
  ],

  // Hero Section
  heroTitlePart1: "Rapprocher les langues,",
  heroTitlePart2: "Connecter les mondes",
  heroSubtitle: "Hapi Kelly, fondatrice de SERVICES DE TRADUCTION HAPPY, offre des solutions linguistiques expertes et des formations pour renforcer votre communication globale.",
  heroButtonBook: "Réserver un service",
  heroButtonExplore: "Explorer les services",
  heroImageAlt: "Équipe professionnelle diversifiée dans un bureau, collaborant",

  // Services Section
  servicesTitle: "Nos solutions",
  servicesTitleAccent: "linguistiques",
  servicesSubtitle: "SERVICES DE TRADUCTION HAPPY propose une gamme complète de services linguistiques et de programmes de formation adaptés à vos besoins.",
  servicesData: [
    { id: 'translation', title: 'Traduction linguistique', description: 'Traductions de haute qualité, culturellement nuancées pour documents, sites web et supports marketing dans divers secteurs.' },
    { id: 'training', title: 'Programmes de formation personnalisés', description: 'Programmes de formation linguistique sur mesure pour particuliers et équipes d\'entreprise, axés sur les compétences pratiques en communication.' },
    { id: 'interpretation', title: 'Interprétation professionnelle', description: 'Services d\'interprétation consécutive et simultanée fiables pour réunions, conférences et engagements du secteur public.' },
    { id: 'proofreading', title: 'Relecture et correction', description: 'Services de relecture et de correction méticuleux pour garantir que votre contenu soit peaufiné, précis et sans erreur.' },
  ],

  // AI Sampler Section
  aiSamplerExperience: "Découvrez notre",
  aiSamplerTitleAccent: "Échantillon de Ton IA",
  aiSamplerSubtitle: "Voyez comment notre IA peut adapter le texte à différents tons. Entrez votre texte, choisissez un ton et assistez à la transformation !",
  aiSamplerCardTitle: "Traducteur de ton",
  aiSamplerCardDescription: "Entrez du texte et sélectionnez un ton cible pour voir un exemple de traduction.",
  aiSamplerSourceTextLabel: "Texte source",
  aiSamplerSourceTextPlaceholder: "Entrez votre texte ici...",
  aiSamplerSelectToneLabel: "Sélectionner le ton",
  aiSamplerSelectTonePlaceholder: "Choisissez un ton",
  aiSamplerTranslateButton: "Traduire avec l'IA",
  aiSamplerResultTitle: "Résultat de la traduction :",
  aiSamplerToneNotApplicableTitle: "Ton non applicable",
  aiSamplerToneNotApplicableDescription: "Le ton sélectionné ({selectedToneLabel}) pourrait ne pas convenir à une communication professionnelle typique.",
  aiSamplerErrorToastTitle: "Erreur IA",
  aiSamplerErrorToastDescription: "L'IA n'a pas pu traiter cette demande. Veuillez réessayer.",
  aiSamplerInputMissingToastTitle: "Entrée manquante",
  aiSamplerInputMissingToastDescription: "Veuillez fournir du texte et sélectionner un ton.",
  aiSamplerGenericErrorToastTitle: "Erreur",
  tonesOfVoice: [
    { value: 'Professional', label: 'Professionnel' },
    { value: 'Casual', label: 'Décontracté' },
    { value: 'Humorous', label: 'Humoristique' },
    { value: 'Formal', label: 'Formel' },
    { value: 'Persuasive', label: 'Persuasif' },
  ],

  // Testimonials Section
  testimonialsTitle: "Ce que disent",
  testimonialsTitleAccent: "nos clients",
  testimonialsSubtitle: "Découvrez les témoignages de clients satisfaits qui ont expérimenté la qualité et le professionnalisme de SERVICES DE TRADUCTION HAPPY.",
  testimonialsData: [
    { id: 't1', quote: "Les services de traduction de Hapi ont dépassé nos attentes. L'attention portée aux détails et la sensibilité culturelle étaient remarquables.", name: 'Jeanne Dupont', company: 'Secteur Public Département A', avatar: 'https://placehold.co/100x100.png?text=JD', aiHint: 'avatar personne' },
    { id: 't2', quote: "Le programme de formation linguistique que Hapi a développé pour notre équipe était incroyablement efficace et engageant. Fortement recommandé !", name: 'Jean Martin', company: 'Solutions Tech Ltée.', avatar: 'https://placehold.co/100x100.png?text=JS', aiHint: 'avatar personne' },
    { id: 't3', quote: "Professionnel, ponctuel et précis. SERVICES DE TRADUCTION HAPPY est notre référence pour tous nos besoins d'interprétation.", name: 'Alice Brun', company: 'ONG Internationale', avatar: 'https://placehold.co/100x100.png?text=AB', aiHint: 'avatar personne' },
  ],
  testimonialAvatarAlt: "Avatar de {name}",

  // About Section
  aboutMeet: "Rencontrez",
  aboutHapiKellyAccent: "Hapi Kelly",
  aboutHapiBio1: "Je m'appelle Hapi Kelly, et je suis une traductrice et prestataire de services linguistiques dévouée, avec une vaste expérience dans le secteur public. En tant qu'entrepreneure en herbe, je suis passionnée par l'utilisation de la technologie pour combler les fossés de communication et favoriser la compréhension entre les cultures.",
  aboutHapiBio2: "La création de SERVICES DE TRADUCTION HAPPY est l'aboutissement de mon parcours professionnel et de mon esprit d'entreprise. Ma mission est de fournir des services linguistiques exceptionnels et des programmes de formation innovants qui permettent aux individus et aux organisations de prospérer dans un monde globalisé.",
  aboutHapiBio3: "Je crois en la construction de relations clients solides basées sur la confiance, la qualité et un engagement commun envers l'excellence. Travaillons ensemble pour atteindre vos objectifs de communication.",
  aboutHapiFounderTitle: "Fondatrice & Traductrice Principale",
  aboutHapiKelly: "Hapi Kelly",
  aboutImageAlt: "Hapi Kelly - Fondatrice de SERVICES DE TRADUCTION HAPPY",
  
  // Booking Form Section
  bookingFormReady: "Prêt à",
  bookingFormStartedAccent: "Commencer ?",
  bookingFormSubtitle: "Remplissez le formulaire ci-dessous pour réserver un service ou vous renseigner sur nos offres. Nous sommes ravis de vous aider avec vos besoins linguistiques !",
  bookingFormFullNameLabel: "Nom complet",
  bookingFormFullNamePlaceholder: "Hapi Kelly",
  bookingFormEmailLabel: "Adresse e-mail",
  bookingFormEmailPlaceholder: "hapi@example.com",
  bookingFormPhoneLabel: "Numéro de téléphone (Facultatif)",
  bookingFormPhonePlaceholder: "+1 (234) 567-890",
  bookingFormServiceLabel: "Service requis",
  bookingFormServicePlaceholder: "Sélectionnez un service",
  bookingFormDateLabel: "Date préférée (Facultatif)",
  bookingFormDatePlaceholder: "Choisissez une date",
  bookingFormMessageLabel: "Message supplémentaire (Facultatif)",
  bookingFormMessagePlaceholder: "Dites-nous en plus sur votre projet ou vos exigences...",
  bookingFormMessageDescription: "Max 500 caractères.",
  bookingFormSubmitButton: "Envoyer la demande de réservation",
  bookingFormSubmitting: "Envoi en cours...",
  bookingFormSuccessToastTitle: "Demande de réservation envoyée !",
  bookingFormSuccessToastDescription: "Merci pour votre demande. Nous vous recontacterons sous peu.",
  bookingFormNameMinError: "Le nom doit comporter au moins 2 caractères.",
  bookingFormEmailError: "Veuillez entrer une adresse e-mail valide.",
  bookingFormServiceError: "Veuillez sélectionner un service.",
  bookingFormMessageMaxError: "Le message ne peut pas dépasser 500 caractères.",

  // Footer
  footerSlogan: "Fournir des services linguistiques de qualité et des programmes de formation.",
  footerQuickLinks: "Liens rapides",
  footerConnect: "Connecter",
  footerEmailLabel: "Email :",
  footerEmailLink: "info@hapitranslation.com",
  footerPhoneLabel: "Téléphone :",
  footerPhoneLink: "+1 (234) 567-890",
  footerCopyright: "© {year} SERVICES DE TRADUCTION HAPPY. Tous droits réservés.",

  // Metadata
  metadataTitle: "Hapi Landing - SERVICES DE TRADUCTION HAPPY",
  metadataDescription: "Services linguistiques de qualité et programmes de formation par Hapi Kelly.",
  
  // Header
  mobileMenuToggle: "Basculer le menu",
};
export default dictionary;
