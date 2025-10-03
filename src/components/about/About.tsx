// components/about/AboutContent.tsx (lub bezpośrednio w app/about/page.tsx)

import AboutMissionStatement from './AboutMissionStatement';
import AboutTimeline from './AboutTimeline';

/**
 * =================================================================
 *  Główny Komponent Strony "O nas"
 * =================================================================
 * Składa całą stronę "O nas" z głównych sekcji: misji i osi czasu.
 * =================================================================
 */
const About = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <AboutMissionStatement />
      <AboutTimeline />
    </div>
  );
};

export default About;