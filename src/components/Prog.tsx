import progData from '../data/progData.json';
import ProgCard from './ProgCard';
import { useLanguage } from '../context/LanguageContext';

interface CourseItem {
  period: string;
  description: string;
  teacher: string;
}

interface ProgItem {
  date: string;
  courses: CourseItem[];
}

interface ProgData {
  'pt-BR': ProgItem[];
  es: ProgItem[];
}

const Prog = () => {
  const { language } = useLanguage();

  const currentData = (progData as ProgData)[language as keyof ProgData];

  return (
    <div className="prog-container py-3" id="programacao">
      <div className="prog-title">
        <h3>{language == 'es' ? 'Programación' : 'Programação'}</h3>
      </div>
      <div className="container my-3">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-4 mx-md-5 mx-lg-0 g-lg-0 g-xl-0 g-xxl-4 justify-content-center">
          {currentData.map((data, index) => (
            <div key={index} className="col">
              <ProgCard date={data.date} courses={data.courses} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prog;
