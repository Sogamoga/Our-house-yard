'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import Navigation from '@/components/Navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Navigation />
      {children}
    </ThemeProvider>
  );
} 