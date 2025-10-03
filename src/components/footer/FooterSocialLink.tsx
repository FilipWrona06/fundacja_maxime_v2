import { ReactNode } from 'react';

/**
 * =================================================================
 *  Komponent Pojedynczego Linku Social Media
 * =================================================================
 * Reużywalny "klocek" do wyświetlania ikony-linku.
 * =================================================================
 */
interface FooterSocialLinkProps {
  href: string;
  title: string;
  children: ReactNode; // Pozwala przekazać ikonę jako dziecko komponentu
}

const FooterSocialLink = ({ href, title, children }: FooterSocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="text-2xl hover:text-philippineSilver transition-colors"
    >
      {children}
    </a>
  );
};

export default FooterSocialLink;