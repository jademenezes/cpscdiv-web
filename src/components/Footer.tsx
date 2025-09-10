import { useLanguage } from '../context/LanguageContext';
import es from '../locales/es.json';
import pt from '../locales/pt-BR.json';
import logoProex from '../images/logoProex.png';
import logoGepes from '../images/logoGepes.png';
import logoGeposs from '../images/logoGeposs.jpg';
import logoServicoSocial from '../images/logoServicoSocial.png';
import logoPpgSocial from '../images/logoPpgssocial.jpeg';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="container my-1">
      <p>{language == 'es' ? es.footer : pt.footer}</p>
      <div className="row align-items-center justify-content-center">
        <div className="col-2 col-md-2 text-center">
          <img className="footer-img" src={logoProex} alt="" />
        </div>
        <div className="col-2 col-md-2 text-center">
          <img className="footer-img" src={logoGepes} alt="" />
        </div>
        <div className="col-2 col-md-2 text-center">
          <img className="footer-img" src={logoGeposs} alt="" />
        </div>
        <div className="col-2 col-md-2 text-center">
          <img
            className="footer-img text-center"
            src={logoServicoSocial}
            alt=""
          />
        </div>
        <div className="col-2 col-md-2 text-center">
          <img className="footer-img" src={logoPpgSocial} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
