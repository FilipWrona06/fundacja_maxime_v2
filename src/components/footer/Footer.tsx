import FooterBranding from './FooterBranding';
import FooterNavigation from './FooterNavigation';
import FooterContact from './FooterContact';
import FooterNewsletter from './FooterNewsletter';
import FooterCopyright from './FooterCopyright';

/**
 * =================================================================
 *  Główny Komponent Stopki (Orkiestrator)
 * =================================================================
 * Renderuje kompletną stopkę, składając ją z wyspecjalizowanych
 * komponentów-sekcji. Sam nie zawiera żadnej logiki ani treści.
 * =================================================================
 */
const Footer = () => {
  return (
    <footer className="bg-raisinBlack">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <FooterBranding />
          <FooterNavigation />
          <FooterContact />
          <FooterNewsletter />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;