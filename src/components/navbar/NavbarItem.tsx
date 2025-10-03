'use client'; // Ten komponent musi być po stronie klienta, ponieważ używa hooka `usePathname` do interakcji z przeglądarką.

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * ===================================================================================
 *  KOMPONENT POJEDYNCZEGO ELEMENTU NAWIGACJI (NAV ITEM)
 * ===================================================================================
 * Jego zadaniem jest wyświetlenie pojedynczego linku w menu.
 * Jest "inteligentny" - sam sprawdza, czy strona, do której prowadzi,
 * jest aktualnie aktywna, i na tej podstawie dodaje odpowiedni styl.
 * ===================================================================================
 */

// Definiujemy, jakie właściwości (props) ten komponent przyjmuje.
type NavbarItemProps = {
  href: string;       // Adres URL, do którego prowadzi link (np. "/about")
  label: string;      // Tekst, który ma być wyświetlony (np. "O nas")
  onClick?: () => void; // Opcjonalna funkcja wywoływana po kliknięciu (używana do zamykania menu mobilnego)
};

const NavbarItem = ({ href, label, onClick }: NavbarItemProps) => {
  // 1. Pobieramy aktualną ścieżkę URL z przeglądarki.
  // Hook `usePathname` zwraca string, np. "/gallery", "/contact" itp.
  const pathname = usePathname();
  
  // 2. Sprawdzamy, czy link powinien być oznaczony jako "aktywny".
  // Porównujemy `href` linku z aktualną ścieżką. Jeśli są takie same, link jest aktywny.
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      // 3. Dynamicznie budujemy listę klas CSS.
      // Do bazowych stylów, które ma każdy link, warunkowo dodajemy klasę podświetlenia,
      // jeśli `isActive` jest `true`.
      className={`
        block w-full text-center lg:w-auto 
        px-3 py-2 rounded-3xl 
        font-montserrat lg:text-base xl:text-lg font-bold 
        duration-250 transition-colors hover:bg-philippineSilver 
        ${isActive ? 'bg-philippineSilver/20' : ''} 
      `}
    >
      {label}
    </Link>
  );
};

export default NavbarItem;