'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '@/components/layout/navbar/data/navigations'; // <-- 1. Importujemy naszą listę linków
import NavItem from './NavItem';       // <-- 2. Importujemy nasz nowy "klocek"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  // =================================================================
  // TUTAJ JEST JEDYNA ZMIANA - DZIELIMY LINKI W NOWYM MIEJSCU
  // =================================================================
  const leftLinks = navLinks.slice(0, 4); // <-- Zmieniamy z 3 na 4
  const rightLinks = navLinks.slice(4); // <-- Zmieniamy z 3 na 4

  return (
    <nav className="bg-raisinBlack p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">

                    {/* === WERSJA DESKTOPOWA === */}
          <div className="hidden lg:flex w-full items-center">
            
            {/* POPRAWKA ODSTĘPÓW: Mniejsze odstępy na 'lg', większe na 'xl' */}
            <div className="flex-1 flex justify-start lg:space-x-1 xl:space-x-2">
              {leftLinks.map((link) => (
                <NavItem key={link.href} href={link.href} label={link.label} />
              ))}
            </div>

            {/* Zmieniamy rozmiar fontu logo na responsywny */}
            <Link href="/" className="font-youngest p-0.74 lg:text-3xl xl:text-4xl">
              Fundacja Maxime
            </Link>

            {/* POPRAWKA ODSTĘPÓW: Mniejsze odstępy na 'lg', większe na 'xl' */}
            <div className="flex-1 flex justify-end items-center lg:space-x-1 xl:space-x-2">
              {rightLinks.map((link) => (
                <NavItem key={link.href} href={link.href} label={link.label} />
              ))}
              <Link href="https://patronite.pl/stowarzyszeniemaxime" target="_blank" rel="noopener noreferrer" className="ml-4 bg-transparent border-2 border-philippineSilver font-bold px-5 py-2 rounded-3xl text-sm hover:bg-philippineSilver hover:text-raisinBlack transition-colors">
                Wesprzyj nas
              </Link>
            </div>
          </div>

          {/* === WERSJA MOBILNA === */}
          <div className="lg:hidden flex justify-between items-center w-full">
            <Link href="/" className="text-4xl pl-1.5 font-youngest">
              Fundacja Maxime
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}/>
              </svg>
            </button>
          </div>
        </div>

        {/* === ROZWIJANE MENU MOBILNE === */}
{isOpen && (
  <div className="lg:hidden mt-4 space-y-2 flex flex-col items-center">
    
    {/* ================================================================= */}
    {/* 1. Przenosimy przycisk "Wesprzyj nas" na samą górę, przed linki */}
    {/* ================================================================= */}
    <Link 
      href="https://patronite.pl/stowarzyszeniemaxime" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-full text-center mt-2 bg-transparent border-2 border-philippineSilver font-bold px-5 py-3 rounded-3xl text-base hover:bg-philippineSilver hover:text-raisinBlack transition-colors"
      onClick={closeMenu} // <-- Dobrą praktyką jest dodanie tu również zamykania menu
    >
      Wesprzyj nas
    </Link>

    {/* ================================================================= */}
    {/* 2. Pętla z linkami nawigacyjnymi pozostaje bez zmian poniżej  */}
    {/* ================================================================= */}
    {navLinks.map((link) => (
      <NavItem 
        key={link.href} 
        href={link.href} 
        label={link.label} 
        onClick={closeMenu} 
      />
    ))}
    
  </div>
)}
      </div>
    </nav>
  );
};

export default Navbar;