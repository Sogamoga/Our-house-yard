import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import { setRequestLocale } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Our House Yard',
  description: 'A community for garden enthusiasts',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params: { locale } }: Props) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={inter.className}>
        <main className="min-h-screen bg-white dark:bg-gray-900">
          {children}
        </main>
      </body>
    </html>
  );
} 