/**
 * i18n configuration for Ultimate Beauty Spa
 * Supports English (default) and French
 */

export const defaultLocale = 'en' as const;
export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  fr: '🇫🇷',
};

/**
 * Get the locale from a URL pathname.
 * If the path starts with /fr/, return 'fr', otherwise 'en'.
 */
export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/fr/') || pathname === '/fr') {
    return 'fr';
  }
  return 'en';
}

/**
 * Build a localized path. English paths have no prefix, French paths get /fr/.
 */
export function localizedPath(path: string, locale: Locale): string {
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  if (locale === 'en') {
    // Remove /fr/ prefix if present
    return cleanPath.replace(/^\/fr(\/|$)/, '/');
  }
  // Add /fr/ prefix, avoid double prefix
  const pathWithoutLocale = cleanPath.replace(/^\/fr(\/|$)/, '/');
  return `/fr${pathWithoutLocale === '/' ? '' : pathWithoutLocale}` || '/fr';
}

/**
 * Get the alternate locale path (for language switcher)
 */
export function getAlternatePath(pathname: string): { locale: Locale; path: string } {
  const currentLocale = getLocaleFromPath(pathname);
  const targetLocale: Locale = currentLocale === 'en' ? 'fr' : 'en';
  
  let basePath: string;
  if (currentLocale === 'fr') {
    basePath = pathname.replace(/^\/fr(\/|$)/, '/') || '/';
  } else {
    basePath = pathname;
  }
  
  return {
    locale: targetLocale,
    path: localizedPath(basePath, targetLocale),
  };
}
