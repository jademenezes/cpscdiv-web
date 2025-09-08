import progData from '../data/progData.json';
import ProgCard from './ProgCard';

const Prog = () => {
  return (
    <div className="prog-container py-3" id="programacao">
      <div className="prog-title">
        <h3>Programação</h3>
      </div>
      <div className="container my-3">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-4 mx-md-5 mx-lg-0 g-lg-0 g-xl-0 g-xxl-4 justify-content-center">
          {progData.map((data, index) => (
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
