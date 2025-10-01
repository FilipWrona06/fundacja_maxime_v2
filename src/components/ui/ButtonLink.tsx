import Link from 'next/link';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
};

const ButtonLink = ({ href, children }: ButtonLinkProps) => {
  const baseStyles = "bg-transparent border-2 border-philippineSilver rounded-full px-8 py-3 text-sm font-montserrat font-bold tracking-wider hover:bg-philippineSilver hover:text-raisinBlack transition-all duration-250";

  return (
    <Link href={href} className={baseStyles}>
      {children}
    </Link>
  );
};

export default ButtonLink;