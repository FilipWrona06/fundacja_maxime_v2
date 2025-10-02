import Image from 'next/image';
import { TimelineItem } from '@/features/about/data/timeline'; // Importujemy nasz typ danych

// Definiujemy propsy, które komponent będzie przyjmował
type TimelineSectionProps = {
  item: TimelineItem; // Dane dla tej konkretnej sekcji
  isReversed?: boolean; // Opcjonalny props, który odwróci kolejność
};

const TimelineSection = ({ item, isReversed = false }: TimelineSectionProps) => {
  // Warunkowo dodajemy klasę, która odwraca kolejność na desktopie
  const flexDirection = isReversed ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <section className={`flex flex-col items-center gap-10 md:gap-16 ${flexDirection}`}>
      {/* Kolumna z obrazem */}
      <div className="w-full md:w-5/12">
        <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-philippineSilver">
          <Image 
            src={item.imageUrl} // Używamy danych z propsów
            alt={item.imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* Kolumna z tekstem */}
      <div className="w-full md:w-7/12 text-center md:text-left">
        <h2 className="text-3xl font-montserrat font-bold mb-4">{item.year} - {item.title}</h2>
        <p className="text-lg font-montserrat leading-relaxed">
          {item.description}
        </p>
      </div>
    </section>
  );
};

export default TimelineSection;