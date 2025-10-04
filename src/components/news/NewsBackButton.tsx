// components/buttons/ArticleBackButton.tsx

import Link from 'next/link';

// Definiujemy propsy komponentu
type ArticleBackButtonProps = {
  href: string; // Dokąd ma prowadzić link
  text: string; // Jaki tekst ma być wyświetlany
  className?: string; // Opcjonalne dodatkowe klasy CSS
};

/**
 * =================================================================
 *  Komponent Przycisku Powrotu
 * =================================================================
 * Służy do tworzenia spójnych wizualnie linków powrotnych, 
 * np. ze strony artykułu do głównej listy aktualności.
 * Przyjmuje docelowy URL (href) i tekst jako propsy.
 * =================================================================
 */
const ArticleBackButton = ({ href, text, className = '' }: ArticleBackButtonProps) => {
  return (
    <div className={`text-center ${className}`}>
      <Link
        href={href}
        className={`
          bg-transparent border-2 border-philippineSilver rounded-full px-8 py-3 text-sm font-montserrat font-bold tracking-wider hover:bg-philippineSilver hover:text-raisinBlack transition-all duration-250
        `}
      >
        {text}
      </Link>
    </div>
  );
};

export default ArticleBackButton;