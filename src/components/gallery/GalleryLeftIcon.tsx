// src/components/gallery/icons/ChevronLeftIcon.tsx

interface IconProps {
  className?: string;
}

const ChevronLeftIcon: React.FC<IconProps> = ({ className = 'h-6 w-6' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

export default ChevronLeftIcon;