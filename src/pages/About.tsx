import aboutData from '../data/aboutData.json';
import AboutCard from '../components/AboutCard';

const About = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          {aboutData.map((data, index) => (
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
