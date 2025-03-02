export const defaultLocale = 'en';
export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const localePrefix = 'always'; // Default

export function getLocaleDirection(locale: Locale) {
  return locale === 'ar' ? 'rtl' : 'ltr';
} 