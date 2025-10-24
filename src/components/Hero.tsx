import heroData from '../data/heroData.json';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router';
import sobre1 from '/images/sobre1.webp';

interface InformationData {
  inf: string;
  startDate: string;
  connect: string;
  endDate: string;
  postInf: string;
}

interface subscribeItem {
  text: string;
  link: string;
}

interface HeroItem {
  title: string;
  aboutButton: string;
  subscribeButton: subscribeItem;
  information: InformationData;
}

interface HeroData {
  'pt-BR': HeroItem;
  es: HeroItem;
}

const Hero = () => {
  const { language } = useLanguage();

  const currentData = (heroData as HeroData)[language as keyof HeroData];
  return (
    <div className="hero-container d-flex justify-content-center align-items-center p-2">
      <div className="row row-cols-1 row-cols-lg-2 align-items-center g-0">
        <div className="text-container">
          <h1 className="title p-2 mb-lg-5">{currentData.title}</h1>

          <div className="d-flex justify-content-between me-md-5">
            <Link
              className="btn btn-secondary hero-btn m-2"
              id="about"
              to="sobre"
            >
              {currentData.aboutButton}
            </Link>
            <Link
              className="btn btn-success hero-btn m-2"
              id="subcription"
              to={currentData.subscribeButton.link}
              target="_blank"
            >
              {currentData.subscribeButton.text}
            </Link>
          </div>
          <p className="inf-paragraph py-2 px-2 mt-2">
            {currentData.information.inf}
            <span className="text-danger">
              {' '}
              {currentData.information.startDate}{' '}
            </span>{' '}
            <span>{currentData.information.connect}</span>
            <span className="text-danger">
              {' '}
              {currentData.information.endDate}
            </span>
            <p className="text-danger inf-post mt-2">
              {currentData.information.postInf}
            </p>
          </p>
        </div>
        <div className="hero-img-frame">
          <img className="img-fluid" src={sobre1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
