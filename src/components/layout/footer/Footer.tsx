// Footer nie jest już komponentem klienckim! To dobrze dla wydajności.
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';
import NewsletterForm from './NewsletterForm'; // <-- 1. Importujemy nasz nowy komponent

const Footer = () => {
  return (
    <footer className="bg-raisinBlack">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Kolumna 1: Branding */}
          <div className="md:col-span-2">
            <h3 className="text-4xl font-youngest mb-4">Fundacja Maxime</h3>
            <p className="font-montserrat text-sm max-w-md">
              Dzielimy się pasją do muzyki klasycznej, inspirując i edukując kolejne pokolenia artystów i słuchaczy.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/stowarzyszeniemaxime" target="_blank" title='Nasz Facebook' rel="noopener noreferrer" className="text-2xl hover:text-philippineSilver transition-colors"><FaFacebook /></a>
              <a href="https://www.instagram.com/maxime.orchestra/" target="_blank" title='Nasz Instagram' rel="noopener noreferrer" className="text-2xl hover:text-philippineSilver transition-colors"><FaInstagram /></a>
              <a href="https://www.youtube.com/@stowarzyszeniemaxime" target="_blank" title='Nasz kanał YouTube' rel="noopener noreferrer" className="text-2xl hover:text-philippineSilver transition-colors"><FaYoutube /></a>
              <a href="https://patronite.pl/stowarzyszeniemaxime" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-philippineSilver transition-colors" title="Wesprzyj nas na Patronite"><FaHeart /></a>
            </div>
          </div>

          {/* Kolumna 2: Nawigacja */}
          <div>
            <h4 className="text-lg font-montserrat font-bold mb-4">Nawigacja</h4>
            <div className="flex flex-col gap-2 font-montserrat text-sm">
              <Link href="/about" className="hover:text-philippineSilver transition-colors">O nas</Link>
              <Link href="/events" className="hover:text-philippineSilver transition-colors">Wydarzenia</Link>
              <Link href="/gallery" className="hover:text-philippineSilver transition-colors">Galeria</Link>
              <Link href="/contact" className="hover:text-philippineSilver transition-colors">Kontakt</Link>
            </div>
          </div>

          {/* Kolumna 3: Kontakt */}
          <div>
            <h4 className="text-lg font-montserrat font-bold mb-4">Kontakt</h4>
            <div className="text-sm font-montserrat space-y-2">
              <p>ul. Kossaka 12, Dąbrowa Górnicza</p>
              <p>kontakt@maxime.pl</p>
              <p>(+48) 123 456 789</p>
            </div>
          </div>

          {/* Kolumna 4: Newsletter */}
          <div className="md:col-span-4 lg:col-span-1">
            <h4 className="text-lg font-montserrat font-bold mb-4">Bądź na bieżąco</h4>
            
            {/* 2. Używamy naszego nowego komponentu jak zwykłego klocka LEGO */}
            <NewsletterForm />
          </div>
        </div>

        {/* Sekcja Copyright */}
        <div className="border-t border-philippineSilver mt-12 pt-8 text-center text-sm font-montserrat">
          <p>
            &copy; {new Date().getFullYear()} Fundacja Maxime. Wszelkie prawa zastrzeżone | Wykonanie: <a href="https://www.instagram.com/filip_wrona/" target="_blank" rel="noopener noreferrer" className="hover:text-philippineSilver transition-colors">
              Filip Wrona
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;