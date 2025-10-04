// components/navigation/NavbarLogo.tsx

import Link from 'next/link';

/**
 * =================================================================
 *  Komponent Logotypu Nawigacji
 * =================================================================
 * Odpowiada za wyświetlanie klikalnego logo, które prowadzi
 * do strony głównej.
 * =================================================================
 */
const NavbarLogo = () => {
  return (
    <Link href="/" className="font-youngest">
      Fundacja Maxime
    </Link>
  );
};

export default NavbarLogo;