'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { SunIcon, MoonIcon, LanguageIcon, HomeIcon } from '@heroicons/react/24/outline';
import { Menu } from '@headlessui/react';

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations('common');

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-800 dark:from-gray-800 dark:to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <HomeIcon className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">
                Garden Community
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Menu as="div" className="relative">
              <Menu.Button className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200">
                <LanguageIcon className="h-6 w-6 text-white" />
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-600">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/en"
                        className={`${
                          active ? 'bg-gray-100 dark:bg-gray-600' : ''
                        } block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400`}
                      >
                        English
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/ar"
                        className={`${
                          active ? 'bg-gray-100 dark:bg-gray-600' : ''
                        } block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400`}
                      >
                        العربية
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-6 w-6 text-white" />
              ) : (
                <MoonIcon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 