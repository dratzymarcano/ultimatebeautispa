/**
 * Translation utility for Ultimate Beauty Spa
 */
import { defaultLocale, type Locale } from './config';
import { en } from './en';
import { fr } from './fr';

const translations: Record<Locale, typeof en> = { en, fr };

/**
 * Get full translation dictionary for a locale
 */
export function t(locale: Locale = defaultLocale) {
  return translations[locale] ?? translations[defaultLocale];
}

/**
 * Get a nested translation value by dot-path
 */
export function tKey(locale: Locale, key: string): string {
  const dict = translations[locale] ?? translations[defaultLocale];
  const keys = key.split('.');
  let result: any = dict;
  for (const k of keys) {
    result = result?.[k];
    if (result === undefined) return key;
  }
  return typeof result === 'string' ? result : key;
}

export type Translations = typeof en;
