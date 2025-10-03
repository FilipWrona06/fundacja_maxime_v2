// components/navigation/SupportButton.tsx

import Link from 'next/link';

// Definiujemy propsy, w tym opcjonalny onClick
type NavbarSupportUsButtonProps = {
  onClick?: () => void;
  className?: string; // Dodatkowe klasy dla elastyczności
};

/**
 * =================================================================
 *  Komponent Przycisku Wezwania do Akcji (CTA) - "Wesprzyj nas"
 * =================================================================
 * Centralne miejsce dla głównego przycisku CTA w nawigacji.
 * Ujednolica wygląd, link i zachowanie na desktopie i mobile.
 * =================================================================
 */
const NavbarSupportUsButton = ({ onClick, className = '' }: NavbarSupportUsButtonProps) => {
  return (
    <Link
      href="https://patronite.pl/stowarzyszeniemaxime"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick} // Przekazujemy onClick, aby zamykać menu mobilne
      // Łączymy bazowe style z dodatkowymi, przekazanymi przez propsy
      className={`
        bg-transparent border-2 border-philippineSilver font-bold 
        rounded-3xl hover:bg-philippineSilver hover:text-raisinBlack 
        transition-colors text-center
        ${className}
      `}
    >
      Wesprzyj nas
    </Link>
  );
};

export default NavbarSupportUsButton;