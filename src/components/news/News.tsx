// components/NewsList.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { newsData } from '@/data/news/newsItems';

const NewsList: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Aktualności
          </h1>
          <p className="mt-4 text-lg">
            Bądź na bieżąco z życiem naszej fundacji.
          </p>
          <div className="w-3/4 h-0.5 bg-philippineSilver mx-auto mt-8"></div>
        </header>
        <main className="max-w-4xl mx-auto">
          <div className="space-y-12 ">
            {newsData.map((article) => (
              <Link
                href={`/news/${article.slug}`}
                key={article.id}
                className=" block group bg-transparent border-2 border-philippineSilver hover:font-semibold shadow-lg hover:shadow-2xl hover:scale-105 rounded-3xl overflow-hidden hover:bg-philippineSilver hover:text-raisinBlack transition-all duration-250"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-5/12">
                    <div className="relative h-48 md:h-full w-full">
                      <Image
                        src={article.imageSrc}
                        alt={article.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-8 md:w-7/12">
                    <p className="text-sm font-bold uppercase tracking-wide">{article.date}</p>
                    <h2 className="mt-2 text-2xl font-bold transition-colors">{article.title}</h2>
                    <p className="mt-4">{article.excerpt}</p>
                    <p className="mt-6 font-bold">Czytaj dalej →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewsList;