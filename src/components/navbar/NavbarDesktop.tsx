// components/navigation/NavbarDesktop.tsx

import NavbarItem from './NavbarItem';
import NavbarLogo from './NavbarLogo'; // <-- Import
import NavbarSupportUsButton from './NavbarSupportUsButton'; // <-- Import
import { NavLink } from '@/data/navbar/navbarNavigations';

interface NavbarDesktopProps {
  leftLinks: NavLink[];
  rightLinks: NavLink[];
}

const NavbarDesktop = ({ leftLinks, rightLinks }: NavbarDesktopProps) => {
  return (
    <div className="hidden lg:flex w-full items-center">
      {/* --- Sekcja lewych linków --- */}
      <div className="flex-1 flex justify-start lg:space-x-1 xl:space-x-2">
        {leftLinks.map((link) => (
          <NavbarItem key={link.href} href={link.href} label={link.label} />
        ))}
      </div>

      {/* --- Logo (teraz jako komponent) --- */}
      <div className="lg:text-3xl xl:text-4xl">
        <NavbarLogo />
      </div>

      {/* --- Sekcja prawych linków i przycisku --- */}
      <div className="flex-1 flex justify-end items-center lg:space-x-1 xl:space-x-2">
        {rightLinks.map((link) => (
          <NavbarItem key={link.href} href={link.href} label={link.label} />
        ))}
        {/* Przycisk "Wesprzyj nas" (teraz jako komponent) */}
        <NavbarSupportUsButton className="ml-4 px-5 py-2 text-sm" />
      </div>
    </div>
  );
};

export default NavbarDesktop;