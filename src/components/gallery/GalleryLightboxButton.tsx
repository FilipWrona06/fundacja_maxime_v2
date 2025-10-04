// src/components/gallery/LightboxButton.tsx

interface LightboxButtonProps {
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  ariaLabel: string;
  position: 'left' | 'right';
}

const LightboxButton: React.FC<LightboxButtonProps> = ({ onClick, children, ariaLabel, position }) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className={`absolute top-1/2 -translate-y-1/2 ${position === 'left' ? 'left-2 md:left-4' : 'right-2 md:right-4'} z-20 rounded-full bg-black/85 p-2 transition focus:outline-none focus:ring-2 focus:ring-white`}
  >
    {children}
  </button>
);

export default LightboxButton;