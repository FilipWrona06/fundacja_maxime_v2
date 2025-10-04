// src/components/gallery/GalleryLightbox.tsx

'use client';

import Image from 'next/image';
import type { GalleryImage } from '@/data/gallery/galleryImages';
import { useLightboxKeys } from '@/hooks/gallery/useLightboxKeys'; // <-- Importujemy hooka

// Import komponentów UI
import LightboxButton from './GalleryLightboxButton';
import CloseButton from './GalleryCloseButton';
import ChevronLeftIcon from './GalleryLeftIcon';
import ChevronRightIcon from './GalleryRightIcon';

interface GalleryLightboxProps {
  image: GalleryImage | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ image, onClose, onNext, onPrevious }) => {
  // Cała logika obsługi klawiatury jest teraz zamknięta w tym hooku!
  useLightboxKeys({
    isOpen: !!image, // Konwertujemy obiekt `image` na boolean
    onClose,
    onNext,
    onPrevious,
  });

  // Jeśli nie ma wybranego zdjęcia, nie renderuj niczego
  if (!image) {
    return null;
  }

  // Funkcja pomocnicza do obsługi kliknięć w przyciski nawigacji
  const handleNavClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <LightboxButton onClick={(e) => handleNavClick(e, onPrevious)} ariaLabel="Poprzednie zdjęcie" position="left">
        <ChevronLeftIcon />
      </LightboxButton>

      <div className="relative h-[90vh] w-[90vw] max-w-5xl p-4" onClick={(e) => e.stopPropagation()}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-full w-full rounded-lg object-contain"
          sizes="90vw"
        />
      </div>

      <LightboxButton onClick={(e) => handleNavClick(e, onNext)} ariaLabel="Następne zdjęcie" position="right">
        <ChevronRightIcon />
      </LightboxButton>

      <CloseButton onClick={onClose} />
    </div>
  );
};

export default GalleryLightbox;