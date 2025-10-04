// src/data/gallery/galleryImages.ts

/**
 * Definiuje strukturę obiektu zdjęcia używanego w całej aplikacji.
 * Zawiera źródło, tekst alternatywny oraz wymiary dla optymalizacji.
 */
export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Tablica zawierająca dane wszystkich zdjęć do galerii.
 * Użycie "as const" sprawia, że dane są tylko do odczytu (immutable).
 *
 * WAŻNE: Wprowadź RZECZYWISTE wymiary swoich obrazów
 * dla najlepszej optymalizacji przez Next.js (zapobieganie CLS).
 */
export const galleryImages: readonly GalleryImage[] = [
  { src: '/images/gallery/photo1.jpg', alt: 'Opis zdjęcia numer 1', width: 1200, height: 800 },
  { src: '/images/gallery/photo2.jpg', alt: 'Opis zdjęcia numer 2', width: 1200, height: 800 },
  { src: '/images/gallery/photo3.jpg', alt: 'Opis zdjęcia numer 3', width: 800, height: 1200 },
  { src: '/images/gallery/photo4.jpg', alt: 'Opis zdjęcia numer 4', width: 1200, height: 800 },
  { src: '/images/gallery/photo5.jpg', alt: 'Opis zdjęcia numer 5', width: 1200, height: 800 },
  { src: '/images/gallery/photo6.jpg', alt: 'Opis zdjęcia numer 6', width: 800, height: 1200 },
  { src: '/images/gallery/photo7.jpg', alt: 'Opis zdjęcia numer 7', width: 1200, height: 800 },
  { src: '/images/gallery/photo8.jpg', alt: 'Opis zdjęcia numer 8', width: 1200, height: 800 },
] as const;