'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, LanguageIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-xl font-bold text-green-600 dark:text-green-400">
                Our House Yard
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            <Menu as="div" className="relative ml-3">
              <Menu.Button className="rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                <LanguageIcon className="h-5 w-5" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={pathname.replace(/^\/[^\/]+/, '/en')}
                        className={classNames(
                          active ? 'bg-gray-100 dark:bg-gray-600' : '',
                          'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200'
                        )}
                      >
                        English
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={pathname.replace(/^\/[^\/]+/, '/ar')}
                        className={classNames(
                          active ? 'bg-gray-100 dark:bg-gray-600' : '',
                          'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200'
                        )}
                      >
                        العربية
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
} 