import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './i18n/config';

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  localePrefix
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 