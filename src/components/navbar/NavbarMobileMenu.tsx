// components/navigation/NavbarMobileMenu.tsx

import NavItem from './NavbarItem';
import SupportButton from './NavbarSupportUsButton'; // <-- Import
import { NavLink } from '@/data/navbar/navbarNavigations';

interface NavbarMobileMenuProps {
  navLinks: NavLink[];
  onClose: () => void;
}

const NavbarMobileMenu = ({ navLinks, onClose }: NavbarMobileMenuProps) => {
  return (
    <div className="lg:hidden mt-4 space-y-2 flex flex-col items-center">
      {/* Przycisk "Wesprzyj nas" (teraz jako komponent) */}
      <SupportButton 
        onClick={onClose} 
        className="w-full mt-2 px-5 py-3 text-base" 
      />

      {/* ... reszta linków bez zmian */}
      {navLinks.map((link) => (
        <NavItem key={link.href} href={link.href} label={link.label} onClick={onClose} />
      ))}
    </div>
  );
};

export default NavbarMobileMenu;