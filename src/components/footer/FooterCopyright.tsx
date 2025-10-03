const FooterCopyright = () => {
  return (
    <div className="border-t border-philippineSilver mt-12 pt-8 text-center text-sm font-montserrat">
      <p>
        &copy; {new Date().getFullYear()} Fundacja Maxime. Wszelkie prawa zastrzeżone | Wykonanie: 
        <a href="https://www.instagram.com/filip_wrona/" target="_blank" rel="noopener noreferrer" className="hover:text-philippineSilver transition-colors">
          Filip Wrona
        </a>
      </p>
    </div>
  );
};

export default FooterCopyright;