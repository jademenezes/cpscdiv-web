import progData from '../data/progData.json';
import ProgCard from './ProgCard';
import { useLanguage } from '../context/LanguageContext';

interface CourseItem {
  period: string;
  opening?: string;
  ending?: string;
  description: string;
  teacher: string;
}

interface ProgItem {
  day: string;
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
        <h2>{language == 'es' ? 'Programación' : 'Programação'}</h2>
      </div>
      <div className="container my-3">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-4 mx-md-5 mx-lg-0 g-lg-0 g-xl-0 g-xxl-0 justify-content-center">
          {currentData.map((data, index) => (
            <div key={index} className="col">
              <ProgCard
                day={data.day}
                date={data.date}
                courses={data.courses}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prog;
