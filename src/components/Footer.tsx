const Footer = () => {
  return (
    <footer className="container my-1">
      <p>Realização</p>
      <div className="row align-items-center justify-content-center">
        <div className="col-2 col-md-2 text-center">
          <img className="footer-img" src="src/assets/logoProex.png" alt="" />
        </div>
        <div className="col-2 col-md-2 text-center">
          <img className="footer-img" src="src/assets/logoGepes.png" alt="" />
        </div>
        <div className="col-2 col-md-2 text-center">
          <img className="footer-img" src="src/assets/logoGeposs.jpg" alt="" />
        </div>
        <div className="col-2 col-md-2 text-center">
          <img
            className="footer-img text-center"
            src="src/assets/logoServicoSocial.png"
            alt=""
          />
        </div>
        <div className="col-2 col-md-2 text-center">
          <img
            className="footer-img"
            src="src/assets/logoPpgssocial.jpeg"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
