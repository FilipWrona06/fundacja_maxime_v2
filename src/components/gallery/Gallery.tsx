// components/Gallery.tsx

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
// ZMIANA: Importujemy dane bezpośrednio w komponencie
import { galleryImages } from '@/data/gallery/galleryImages';

// Interfejs pozostaje, aby zapewnić typowanie wewnątrz komponentu
interface GalleryImage {
  src: string;
  alt: string;
}

// ZMIANA: Komponent nie przyjmuje już żadnych propsów
const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    // Dodajemy padding tutaj, aby komponent sam zarządzał swoim otoczeniem
    <div className="p-4 sm:p-6 md:p-8">
      {/* Siatka zdjęć */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* ZMIANA: Używamy bezpośrednio zaimportowanej tablicy galleryImages */}
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => openModal(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              priority={index < 8}
            />
          </div>
        ))}
      </div>

      {/* Modal (Lightbox) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg"
              style={{ objectFit: 'contain', maxHeight: '90vh' }}
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
              aria-label="Zamknij"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;