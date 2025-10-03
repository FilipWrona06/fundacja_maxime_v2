/**
 * =================================================================
 *  CENTRALNA KONFIGURACJA NAWIGACJI
 * =================================================================
 * Ten plik jest jedynym miejscem, w którym definiujemy,
 * jakie linki znajdują się w głównym menu.
 * Dzięki temu dodawanie, usuwanie lub zmiana kolejności linków
 * wymaga edycji tylko tej jednej tablicy.
 * =================================================================
 */

// Definiujemy "kształt" pojedynczego linku dla bezpieczeństwa kodu
export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  // Ta kolejność będzie teraz używana w całej aplikacji
  { href: '/', label: 'Home' },
  { href: '/about', label: 'O nas' },
  { href: '/gallery', label: 'Galeria' },
  { href: '/news', label: 'Aktualności' }, // <-- Przeniesiony!
  { href: '/events', label: 'Wydarzenia' },
  { href: '/contact', label: 'Kontakt' },
];