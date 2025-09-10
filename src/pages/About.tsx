import aboutData from '../data/aboutData.json';
import AboutCard from '../components/AboutCard';
import { useLanguage } from '../context/LanguageContext';
import { motion as m } from 'framer-motion';

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
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65 }}
      className="container py-5"
    >
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
    </m.div>
  );
};

export default About;
