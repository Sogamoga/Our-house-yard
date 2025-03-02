import {
  GlobeAsiaAustraliaIcon,
  BeakerIcon,
  SparklesIcon,
  TrashIcon,
  ArrowPathIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const sections = [
  { id: 'plants', icon: GlobeAsiaAustraliaIcon },
  { id: 'soil', icon: BeakerIcon },
  { id: 'fertilizer', icon: SparklesIcon },
  { id: 'kitchen', icon: TrashIcon },
  { id: 'seedlings', icon: ArrowPathIcon },
  { id: 'community', icon: UserGroupIcon },
];

export default async function Home() {
  const t = await getTranslations('navigation');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('welcome')}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.id}
                href={`/${section.id}`}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-800/10 dark:from-green-600/20 dark:to-green-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <Icon className="h-12 w-12 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      {t(section.id)}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t(`${section.id}Description`)}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
} 