import aboutData from '../data/aboutData.json';
import AboutCard from '../components/AboutCard';
import { useLanguage } from '../context/LanguageContext';

interface AboutItem {
  title: string;
  content: string;
  image: string;
}

interface AboutData {
  'pt-BR': AboutItem[];
  es: AboutItem[];
}

const About = () => {
  const { language } = useLanguage();

  const currentData = (aboutData as AboutData)[language as keyof AboutData];

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          {currentData.map((data, index) => (
            <AboutCard
              key={index}
              image={data.image}
              title={data.title}
              content={data.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
