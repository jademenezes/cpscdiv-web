import { useLanguage } from '../context/LanguageContext';
import es from '../locales/es.json';
import pt from '../locales/pt-BR.json';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="container my-1">
      <p>{language == 'es' ? es.footer : pt.footer}</p>
      <div className="row align-items-center justify-content-center">
        <div className="col-2 col-md-2 text-center">
          <img className="footer-img" src="images/logoProex.png" alt="" />
        </div>
        <div className="col-2 col-md-2 text-center">
          <img className="footer-img" src="images/logoGepes.png" alt="" />
        </div>
        <div className="col-2 col-md-2 text-center">
          <img className="footer-img" src="images/logoGeposs.jpg" alt="" />
        </div>
        <div className="col-2 col-md-2 text-center">
          <img
            className="footer-img text-center"
            src="images/logoServicoSocial.png"
            alt=""
          />
        </div>
        <div className="col-2 col-md-2 text-center">
          <img className="footer-img" src="images/logoPpgssocial.jpeg" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
