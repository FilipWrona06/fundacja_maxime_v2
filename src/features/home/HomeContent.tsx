/**
 * =================================================================
 *  Komponent Sekcji Powitalnej (Hero) dla Strony Głównej
 * =================================================================
 * Ten komponent jest w pełni samodzielny i definiuje całą sekcję
 * powitalną, łącznie z jej specyficzną treścią.
 * Używa mniejszych komponentów, takich jak BackgroundVideo i ButtonLink,
 * aby zachować czystość i reużywalność kodu.
 * =================================================================
 */

// Importujemy nasze mniejsze "klocki LEGO"
import BackgroundVideo from './BackgroundVideo';
import ButtonLink from '../../components/ui/ButtonLink';

const Hero = () => {
  return (
    // Główny kontener sekcji, który zajmuje cały ekran
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      
      {/* Używamy komponentu odpowiedzialnego tylko za tło */}
      <BackgroundVideo />

      {/* Kontener na treść, która jest zdefiniowana na stałe w tym pliku */}
      <div className="relative z-30 px-4">
        <h1 className="text-5xl md:text-7xl p-2.5 font-youngest tracking-wide mb-4">
          Z pasji do muzyki
        </h1>
        <p className="text-lg md:text-2xl font-montserrat font-bold mb-8">
          Poznaj historię i brzmienie naszej orkiestry.
        </p>
        
        {/* Kontener na przyciski */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Używamy naszego reużywalnego komponentu przycisku */}
          <ButtonLink href="/events">
            Zobacz nadchodzące koncerty
          </ButtonLink>
          <ButtonLink href="/about">
            Poznaj nas
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;