// components/about/TimelineImage.tsx

import Image from 'next/image';

type TimelineImageProps = {
  src: string;
  alt: string;
};

/**
 * =================================================================
 *  Komponent Obrazu dla Osi Czasu
 * =================================================================
 * Odpowiada wyłącznie za wyświetlenie responsywnego obrazu
 * w stylizowanym kontenerze.
 * =================================================================
 */
const AboutTimelineImage = ({ src, alt }: TimelineImageProps) => {
  return (
    <div className="w-full md:w-5/12">
      <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-philippineSilver">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default AboutTimelineImage;