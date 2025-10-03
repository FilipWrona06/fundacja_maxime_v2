// components/navigation/NavbarLogo.tsx

import Link from 'next/link';

type NavbarLogoProps = {
  // Możemy dodać propsy, aby kontrolować np. rozmiar w przyszłości
};

/**
 * =================================================================
 *  Komponent Logotypu Nawigacji
 * =================================================================
 * Odpowiada za wyświetlanie klikalnego logo, które prowadzi
 * do strony głównej.
 * =================================================================
 */
const NavbarLogo = ({}: NavbarLogoProps) => {
  return (
    <Link href="/" className="font-youngest">
      Fundacja Maxime
    </Link>
  );
};

export default NavbarLogo;