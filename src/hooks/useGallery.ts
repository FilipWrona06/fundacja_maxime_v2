// src/hooks/useGallery.ts

import { useState, useCallback } from 'react';
import { galleryImages } from '@/data/gallery/galleryImages';
import type { GalleryImage } from '@/lib/types';

/**
 * Niestandardowy hook do zarządzania logiką galerii zdjęć.
 * Zamyka w sobie stan (wybrane zdjęcie) oraz wszystkie funkcje
 * do otwierania, zamykania i nawigacji.
 */
export const useGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const handleNext = useCallback(() => {
    setSelectedImage(currentImage => {
      if (!currentImage) return null;
      const currentIndex = galleryImages.findIndex((img) => img.src === currentImage.src);
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      return galleryImages[nextIndex];
    });
  }, []);

  const handlePrevious = useCallback(() => {
    setSelectedImage(currentImage => {
      if (!currentImage) return null;
      const currentIndex = galleryImages.findIndex((img) => img.src === currentImage.src);
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      return galleryImages[prevIndex];
    });
  }, []);

  return {
    images: galleryImages,
    selectedImage,
    openModal,
    closeModal,
    handleNext,
    handlePrevious,
  };
};