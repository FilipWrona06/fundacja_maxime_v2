// components/hero/HeroContent.tsx

/**
 * =================================================================
 *  Komponent Treści Sekcji Powitalnej
 * =================================================================
 * Wyświetla główny nagłówek oraz podtytuł na stronie głównej.
 * =================================================================
 */
const HomeContent = () => {
  return (
    // Kontener na treść tekstową, wyśrodkowany i z odpowiednimi stylami
    <div className="relative z-30 px-4">
      <h1 className="text-5xl md:text-7xl p-2.5 font-youngest tracking-wide mb-4">
        Z pasji do muzyki
      </h1>
      <p className="text-lg md:text-2xl font-montserrat font-bold mb-8">
        Poznaj historię i brzmienie naszej orkiestry.
      </p>
    </div>
  );
};

export default HomeContent;