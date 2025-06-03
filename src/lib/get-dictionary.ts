
import 'server-only';
import type { Locale } from './i18n-config';
import type { LocaleDictionary } from '@/dictionaries/types';

const dictionaries: Record<Locale, () => Promise<LocaleDictionary>> = {
  en: () => import('@/dictionaries/en').then((module) => module.default),
  fr: () => import('@/dictionaries/fr').then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<LocaleDictionary> => {
  const loadDictionary = dictionaries[locale] || dictionaries.en;
  return loadDictionary();
};
