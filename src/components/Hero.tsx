import heroData from '../data/heroData.json';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router';
import img3 from '../images/img3.jpg';

interface InformationData {
  inf: string;
  startDate: string;
  endDate: string;
}

interface HeroItem {
  title: string;
  aboutButton: string;
  subscribeButton: string;
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
            <Link className="btn btn-secondary hero-btn m-2" to={'/sobre'}>
              {currentData.aboutButton}
            </Link>
            <Link
              className="btn btn-success hero-btn m-2"
              to="http://google.com"
            >
              {currentData.subscribeButton}
            </Link>
          </div>
          <p className="inf-paragraph py-2 px-2 mt-2">
            {currentData.information.inf}
            <span className="text-danger">
              {' '}
              {currentData.information.startDate}{' '}
            </span>{' '}
            a
            <span className="text-danger">
              {' '}
              {currentData.information.endDate}
            </span>
          </p>
        </div>
        <div className="hero-img-frame">
          <img className="img-fluid" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
