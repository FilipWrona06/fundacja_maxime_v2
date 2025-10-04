// src/lib/types.ts

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