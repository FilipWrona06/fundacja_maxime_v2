// components/hero/Hero.tsx

import HomeBackgroundVideo from './HomeBackgroundVideo';
import HomeContent from './HomeContent';
import HomeActions from './HomeActions';

/**
 * =================================================================
 *  Główny Komponent Sekcji Powitalnej (Hero)
 * =================================================================
 * Składa całą sekcję powitalną z mniejszych, wyspecjalizowanych
 * komponentów: tła, treści i przycisków akcji.
 * Działa jak "kontener" dla całej sekcji na stronie głównej.
 * =================================================================
 */
const Home = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Komponent tła */}
      <HomeBackgroundVideo />
      
      {/* Komponent z główną treścią (nagłówek i podtytuł) */}
      <HomeContent />

      {/* Komponent z przyciskami akcji */}
      <HomeActions />
    </section>
  );
};

export default Home;