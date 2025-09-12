import { useLanguage } from '../context/LanguageContext';
import es from '../locales/es.json';
import pt from '../locales/pt-BR.json';
import logoUft from '/images/logoUft.webp';
import logoProex from '/images/logoProex.webp';
import logoGepes from '/images/logoGepes.webp';
import logoGeposs from '/images/logoGeposs.webp';
import logoServicoSocial from '/images/logoServicoSocial.webp';
import logoPpgSocial from '/images/logoPpgssocial.webp';
import logoGEP from '/images/logoGEP.webp';
import logoSer from '/images/logoSer.webp';
import logoLeituras from '/images/logoLeituras.webp';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="container my-1 mb-2">
      <p>{language == 'es' ? es.footer : pt.footer}</p>
      <div className="row align-items-center justify-content-center">
        <div className="col-3 col-md-1 text-center">
          <img className="footer-img" src={logoUft} alt="" />
        </div>
        <div className="col-3 col-md-1 text-center">
          <img className="footer-img" src={logoProex} alt="" />
        </div>
        <div className="col-3 col-md-1 text-center">
          <img className="footer-img" src={logoGepes} alt="" />
        </div>
        <div className="col-3 col-md-1 text-center">
          <img className="footer-img" src={logoGeposs} alt="" />
        </div>
        <div className="col-2 col-md-1 text-center">
          <img
            className="footer-img text-center"
            src={logoServicoSocial}
            alt=""
          />
        </div>
        <div className="col-3 col-md-1 text-center">
          <img className="footer-img" src={logoGEP} alt="" />
        </div>
        <div className="col-3 col-md-1 text-center">
          <img className="footer-img" src={logoPpgSocial} alt="" />
        </div>
        <div className="col-2 col-md-1 text-center">
          <img className="footer-img" src={logoSer} alt="" />
        </div>
        <div className="col-3 col-md-1 text-center">
          <img className="footer-img" src={logoLeituras} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
