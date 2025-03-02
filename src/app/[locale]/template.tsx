'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import Navigation from '@/components/Navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:bg-[url('/grid-dark.svg')] pointer-events-none" />
        <Navigation />
        <div className="relative">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
} 