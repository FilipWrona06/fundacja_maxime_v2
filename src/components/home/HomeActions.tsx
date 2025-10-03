// components/hero/HeroActions.tsx

import HomeButtonLink from './HomeButtonLink'; // Upewnij się, że ścieżka jest poprawna

/**
 * =================================================================
 *  Komponent Przycisków Akcji (Wezwania do Działania)
 * =================================================================
 * Grupuje przyciski w sekcji powitalnej, takie jak nawigacja
 * do koncertów czy strony "O nas".
 * =================================================================
 */
const HomeActions = () => {
  return (
    // Kontener na przyciski z elastycznym układem
    <div className="relative z-30 flex flex-col sm:flex-row items-center justify-center gap-4">
      <HomeButtonLink href="/events">
        Zobacz nadchodzące koncerty
      </HomeButtonLink>
      <HomeButtonLink href="/about">
        Poznaj nas
      </HomeButtonLink>
    </div>
  );
};

export default HomeActions;