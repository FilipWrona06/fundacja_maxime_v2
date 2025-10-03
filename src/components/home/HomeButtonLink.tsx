import Link from 'next/link';

type HomeButtonLinkProps = {
  href: string;
  children: React.ReactNode;
};

const HomeButtonLink = ({ href, children }: HomeButtonLinkProps) => {
  const baseStyles = "bg-transparent border-2 border-philippineSilver rounded-full px-8 py-3 text-sm font-montserrat font-bold tracking-wider hover:bg-philippineSilver hover:text-raisinBlack transition-all duration-250";

  return (
    <Link href={href} className={baseStyles}>
      {children}
    </Link>
  );
};

export default HomeButtonLink;