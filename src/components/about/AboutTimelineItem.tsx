// components/about/TimelineItem.tsx

import { TimelineItem as TimelineItemType } from '@/data/about/aboutTimeline';
import AboutTimelineImage from './AboutTimelineImage';
import AboutTimelineContent from './AboutTimelineContent';

type TimelineItemProps = {
  item: TimelineItemType;
  isReversed?: boolean;
};

/**
 * =================================================================
 *  Komponent Pojedynczego Wpisu na Osi Czasu
 * =================================================================
 * Składa obraz i treść w jeden wiersz oraz zarządza ich
 * układem (normalnym lub odwróconym).
 * =================================================================
 */
const AboutTimelineItem = ({ item, isReversed = false }: TimelineItemProps) => {
  const flexDirection = isReversed ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <section className={`flex flex-col items-center gap-10 md:gap-16 ${flexDirection}`}>
      <AboutTimelineImage src={item.imageUrl} alt={item.imageAlt} />
      <AboutTimelineContent
        year={item.year}
        title={item.title}
        description={item.description}
      />
    </section>
  );
};

export default AboutTimelineItem;