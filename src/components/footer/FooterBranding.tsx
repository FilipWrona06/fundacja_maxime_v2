import { FaFacebook, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';
import FooterSocialLink from './FooterSocialLink';

const FooterBranding = () => {
  return (
    <div className="md:col-span-2">
      <h3 className="text-4xl font-youngest mb-4">Fundacja Maxime</h3>
      <p className="font-montserrat text-sm max-w-md">
        Dzielimy się pasją do muzyki klasycznej, inspirując i edukując kolejne pokolenia artystów i słuchaczy.
      </p>
      <div className="flex gap-4 mt-6">
        <FooterSocialLink href="https://www.facebook.com/stowarzyszeniemaxime" title="Nasz Facebook">
          <FaFacebook />
        </FooterSocialLink>
        <FooterSocialLink href="https://www.instagram.com/maxime.orchestra/" title="Nasz Instagram">
          <FaInstagram />
        </FooterSocialLink>
        <FooterSocialLink href="https://www.youtube.com/@stowarzyszeniemaxime" title="Nasz kanał YouTube">
          <FaYoutube />
        </FooterSocialLink>
        <FooterSocialLink href="https://patronite.pl/stowarzyszeniemaxime" title="Wesprzyj nas na Patronite">
          <FaHeart />
        </FooterSocialLink>
      </div>
    </div>
  );
};

export default FooterBranding;