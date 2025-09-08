import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white navbar-dark bg-success">
      {/* Justify-content-smth (start (left), center, end (right)) */}
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
                Início
              </Link>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#programacao">
                Programação
              </HashLink>
              {/* <a className="nav-link" href="/#schedule">
                Programação
              </a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre">
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/organizacao">
                Organização
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Inscrições
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
