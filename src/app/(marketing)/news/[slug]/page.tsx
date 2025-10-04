// app/aktualnosci/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { newsData } from '@/data/news/newsItems';

// Ta funkcja generuje statyczne strony dla każdego slugu podczas budowania aplikacji
// Jest to dobra praktyka dla wydajności i SEO
export async function generateStaticParams() {
  return newsData.map((article) => ({
    slug: article.slug,
  }));
}

// Funkcja pomocnicza do znalezienia artykułu po slugu
function getArticleBySlug(slug: string) {
  return newsData.find((article) => article.slug === slug);
}

// Komponent strony, który otrzymuje 'params' z URL
export default function ArticlePage({ params }: { params: { slug: string } }) {
     console.log("Próbuję renderować artykuł ze slugiem:", params.slug);
  const article = getArticleBySlug(params.slug);

  // Jeśli artykuł nie istnieje, pokaż stronę 404
  if (!article) {
    notFound();
  }

  return (
      <div className="container mx-auto px-4 py-12 md:py-20">
        <main className="max-w-3xl mx-auto">
          <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-8 shadow-2xl">
            <Image
              src={article.imageSrc}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <header>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {article.title}
            </h1>
            <p className="mt-4 text-lg">
              Opublikowano: {article.date}
            </p>
          </header>

          <hr className="my-8 border-philippineSilver" />

          {/* Renderowanie treści HTML z danych */}
          <article 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-12 text-center">
            <Link 
              href="/news"
              className="inline-block px-6 py-3 text-lg font-bold bg-oxfordBlue shadow-lg hover:scale-105 hover:shadow-2xl rounded-3xl transition-colors"
            >
              ← Wróć do aktualności
            </Link>
          </div>
        </main>
      </div>
  );
}