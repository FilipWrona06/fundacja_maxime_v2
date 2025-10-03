'use client';

import { useState } from 'react';
import { navLinks } from '@/data/navbar/navbarNavigations';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobileHeader from './NavbarMobileHeader';
import NavbarMobileMenu from './NavbarMobileMenu';

/**
 * =================================================================
 *  Główny Komponent Nawigacji (Orkiestrator)
 * =================================================================
 * Zarządza stanem (otwarte/zamknięte menu mobilne) i składa
 * interfejs z wyspecjalizowanych komponentów, przekazując im
 * odpowiednie dane i funkcje.
 * =================================================================
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Funkcje do zarządzania stanem
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Przygotowanie danych dla komponentu desktopowego
  const leftLinks = navLinks.slice(0, 4);
  const rightLinks = navLinks.slice(4);

  return (
    <nav className="bg-raisinBlack p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Znacznik dla widoku desktopowego */}
          <NavbarDesktop leftLinks={leftLinks} rightLinks={rightLinks} />

          {/* Znacznik dla nagłówka mobilnego */}
          <NavbarMobileHeader isOpen={isOpen} onToggleMenu={toggleMenu} />
        </div>

        {/* Warunkowe renderowanie rozwijanego menu mobilnego */}
        {isOpen && <NavbarMobileMenu navLinks={navLinks} onClose={closeMenu} />}
      </div>
    </nav>
  );
};

export default Navbar;