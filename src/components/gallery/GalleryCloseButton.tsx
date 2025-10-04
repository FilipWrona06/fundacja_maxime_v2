// src/components/gallery/CloseButton.tsx

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-2 md:right-4 md:top-4 z-20 text-3xl text-white transition-colors hover:text-gray-300"
    aria-label="Zamknij"
  >
    &times;
  </button>
);

export default CloseButton;