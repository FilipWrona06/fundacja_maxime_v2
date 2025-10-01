/**
 * =================================================================
 *  Główny Komponent Treści dla Strony "O nas"
 * =================================================================
 * Ten komponent jest w pełni samodzielny i definiuje całą treść
 * podstrony "/about". Importuje on mniejsze komponenty i dane,
 * aby złożyć w całość finalny widok.
 * =================================================================
 */

import { timelineData } from '@/data/timeline';
import TimelineSection from '@/components/about/TimelineSection';

const AboutContent = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      
      {/* --- SEKCJA TYTUŁOWA Z MISJĄ --- */}
      <section className="text-center mb-20">
        <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-4">
          Nasza Misja
        </h1>
        <p className="mt-6 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          W Fundacji Maxime wierzymy, że każdy zasługuje na równe szanse. Naszą misją jest tworzenie inspirującej przestrzeni dla rozwoju, edukacji i integracji społecznej.
        </p>
        <div className="w-3/4 h-0.5 bg-philippineSilver mx-auto mt-8"></div>
      </section>

      {/* --- SEKCJE Z TREŚCIĄ (GENEROWANE DYNAMICZNIE) --- */}
      <div className="space-y-20">
        {timelineData.map((item, index) => (
          <TimelineSection 
            key={item.year} 
            item={item} 
            isReversed={index % 2 !== 0} 
          />
        ))}
      </div>
    </div>
  );
};

export default AboutContent;