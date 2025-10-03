import FooterNewsletterForm from './FooterNewsletterForm';

const FooterNewsletter = () => {
  return (
    <div className="md:col-span-4 lg:col-span-1">
      <h4 className="text-lg font-montserrat font-bold mb-4">Bądź na bieżąco</h4>
      <FooterNewsletterForm />
    </div>
  );
};

export default FooterNewsletter;