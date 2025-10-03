// components/navigation/NavbarMobileHeader.tsx

import NavbarLogo from './NavbarLogo'; // <-- Import

interface NavbarMobileHeaderProps {
  isOpen: boolean;
  onToggleMenu: () => void;
}

const NavbarMobileHeader = ({ isOpen, onToggleMenu }: NavbarMobileHeaderProps) => {
  return (
    <div className="lg:hidden flex justify-between items-center w-full">
      {/* Logo (teraz jako komponent) */}
      <div className="text-4xl pl-1.5">
        <NavbarLogo />
      </div>
      <button onClick={onToggleMenu} className="focus:outline-none" aria-label="Menu">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
          />
        </svg>
      </button>
    </div>
  );
};

export default NavbarMobileHeader;