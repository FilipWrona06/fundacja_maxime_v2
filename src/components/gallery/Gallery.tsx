// src/components/gallery/Gallery.tsx

'use client';

import { useGallery } from '@/hooks/gallery/useGallery';
import GalleryGrid from './GalleryGrid';
import GalleryLightbox from './GalleryLightbox';

/**
 * Komponent widoku galerii.
 * Jest to "głupi" komponent, który nie zawiera żadnej logiki.
 * Całym stanem i operacjami zarządza hook `useGallery`.
 */
const Gallery: React.FC = () => {
  // Pobieramy całą logikę i stan z naszego hooka
  const {
    images,
    selectedImage,
    openModal,
    closeModal,
    handleNext,
    handlePrevious,
  } = useGallery();

  return (
    <section>
      <GalleryGrid images={images} onImageClick={openModal} />
      <GalleryLightbox
        image={selectedImage}
        onClose={closeModal}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </section>
  );
};

export default Gallery;