import Link from 'next/link';

const FooterNavigation = () => {
  return (
    <div>
      <h4 className="text-lg font-montserrat font-bold mb-4">Nawigacja</h4>
      <div className="flex flex-col gap-2 font-montserrat text-sm">
        <Link href="/about" className="hover:text-philippineSilver transition-colors">O nas</Link>
        <Link href="/events" className="hover:text-philippineSilver transition-colors">Wydarzenia</Link>
        <Link href="/gallery" className="hover:text-philippineSilver transition-colors">Galeria</Link>
        <Link href="/contact" className="hover:text-philippineSilver transition-colors">Kontakt</Link>
      </div>
    </div>
  );
};

export default FooterNavigation;