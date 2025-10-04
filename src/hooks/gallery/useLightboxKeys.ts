// src/hooks/useLightboxKeys.ts

import { useEffect } from 'react';

// Definiujemy, jakich argumentów oczekuje nasz hook
interface UseLightboxKeysProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

/**
 * Niestandardowy hook do zarządzania nawigacją klawiaturą w lightboxie.
 * Jego jedynym zadaniem jest dodawanie i usuwanie globalnych event listenerów.
 */
export const useLightboxKeys = ({ isOpen, onClose, onNext, onPrevious }: UseLightboxKeysProps) => {
  useEffect(() => {
    // Jeśli modal nie jest otwarty, nic nie rób
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Funkcja czyszcząca, która jest wywoływana, gdy komponent się odmontowuje
    // lub gdy zmieniają się zależności w tablicy
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrevious]); // Uruchom efekt ponownie, jeśli zmieni się stan otwarcia lub funkcje
};