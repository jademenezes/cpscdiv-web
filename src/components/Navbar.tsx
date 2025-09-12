import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitch from './LanguageSwitch';
import es from '../locales/es.json';
import pt from '../locales/pt-BR.json';

const Navbar = () => {
  const { language } = useLanguage();

  return (
    <nav className="navbar navbar-expand-lg navbar-white navbar-dark bg-success">
      <div className="container-fluid ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {language == 'es' ? es.navbar.home : pt.navbar.home}
              </Link>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#programacao">
                {language == 'es' ? es.navbar.schedule : pt.navbar.schedule}
              </HashLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre">
                {language == 'es' ? es.navbar.about : pt.navbar.about}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/organizacao">
                {language == 'es'
                  ? es.navbar.organization
                  : pt.navbar.organization}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={
                  language == 'es'
                    ? es.navbar.subscribe.link
                    : pt.navbar.subscribe.link
                }
                target="_blank"
              >
                {language == 'es'
                  ? es.navbar.subscribe.text
                  : pt.navbar.subscribe.text}
              </Link>
            </li>
          </ul>
        </div>
        <div className="position-absolute top-0 end-0 mt-2 me-3">
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
