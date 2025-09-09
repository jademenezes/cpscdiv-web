const Hero = () => {
  return (
    <div className="hero-container d-flex justify-content-center align-items-center p-2">
      <div className="row row-cols-1 row-cols-lg-2 align-items-center">
        <div className="text-container">
          <h1 className="title p-2 mb-lg-5">
            Bem vind@s ao II Colóquio Internacional e ao IV Colóquio de Pesquisa
            Social Crítico-dialética
          </h1>

          <div className="d-flex justify-content-between me-md-5">
            <button className="btn btn-secondary hero-btn m-2">Sobre</button>
            <button className="btn btn-success hero-btn m-2">
              Faça sua inscrição!
            </button>
          </div>
          <p className="inf-paragraph py-2 px-2 mt-2">
            As inscrições dos trabalhos serão realizadas no período de
            01/08/2025 a 10/10/2025
          </p>
        </div>
        <div className="hero-img-frame">
          <img
            className="img-fluid"
            src="/cpscdiv-web/images/img3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
