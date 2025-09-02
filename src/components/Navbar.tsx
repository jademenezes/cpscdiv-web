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
              <a className="nav-link" href="/">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Programação
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sobre">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/organizacao">
                Organização
              </a>
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
