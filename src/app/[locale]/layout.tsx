import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { notFound } from 'next/navigation';
import { locales, getLocaleDirection } from '@/i18n/config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Our House Yard',
  description: 'A community for garden enthusiasts',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale} dir={getLocaleDirection(locale as any)}>
      <body className={inter.className}>
        <main className="min-h-screen bg-white dark:bg-gray-900">
          {children}
        </main>
      </body>
    </html>
  );
} 