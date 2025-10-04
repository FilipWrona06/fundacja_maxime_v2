// src/components/gallery/GalleryItem.tsx

import Image from 'next/image';
import type { GalleryImage } from '@/data/gallery/galleryImages';

interface GalleryItemProps {
  image: GalleryImage;
  isPriority: boolean;
  onImageClick: (image: GalleryImage) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, isPriority, onImageClick }) => {
  return (
    <div
      // ZMIANA: Dodajemy klasę aspect-ratio
      className="group cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-square" // <-- TUTAJ ZMIANA
      onClick={() => onImageClick(image)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        priority={isPriority}
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
    </div>
  );
};

export default GalleryItem;