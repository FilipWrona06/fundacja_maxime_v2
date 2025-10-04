// src/components/gallery/GalleryGrid.tsx

import GalleryItem from './GalleryItem';
import type { GalleryImage } from '@/data/gallery/galleryImages';

interface GalleryGridProps {
  images: readonly GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, onImageClick }) => {
  return (
    // ZMIANA: Usuwamy grid i używamy właściwości column-*
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
      {images.map((image, index) => (
        // ZMIANA: Dodajemy klasy do elementu-dziecka
        <div key={image.src} className="mb-4 break-inside-avoid">
          <GalleryItem
            image={image}
            onImageClick={onImageClick}
            isPriority={index < 8}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;