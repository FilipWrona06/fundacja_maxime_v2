// components/about/TimelineContent.tsx

type TimelineContentProps = {
  year: string;
  title: string;
  description: string;
};

/**
 * =================================================================
 *  Komponent Treści dla Osi Czasu
 * =================================================================
 * Odpowiada za wyświetlenie części tekstowej (rok, tytuł, opis)
 * dla pojedynczego wydarzenia na osi czasu.
 * =================================================================
 */
const AboutTimelineContent = ({ year, title, description }: TimelineContentProps) => {
  return (
    <div className="w-full md:w-7/12 text-center md:text-left">
      <h2 className="text-3xl font-montserrat font-bold mb-4">{year} - {title}</h2>
      <p className="text-lg font-montserrat leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AboutTimelineContent;