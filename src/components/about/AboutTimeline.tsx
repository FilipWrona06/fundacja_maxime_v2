// components/about/Timeline.tsx

import { timelineData } from '@/data/about/aboutTimeline';
import AboutTimelineItem from './AboutTimelineItem';

/**
 * =================================================================
 *  Główny Komponent Osi Czasu
 * =================================================================
 * Pobiera dane i renderuje listę wydarzeń z historii firmy,
 * naprzemiennie odwracając ich układ.
 * =================================================================
 */
const AboutTimeline = () => {
  return (
    <div className="space-y-20">
      {timelineData.map((item, index) => (
        <AboutTimelineItem
          key={item.year}
          item={item}
          isReversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default AboutTimeline;