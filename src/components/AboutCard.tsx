interface AboutCardProps {
  image: string;
  title: string;
  content: string;
}

const AboutCard = (props: AboutCardProps) => {
  return (
    <div className="card-container">
      <div className="custom-card">
        <div className="img-frame d-lg-none">
          <img src={props.image} alt="" />
        </div>
        <div className="custom-card-content">
          <h4>{props.title}</h4>
          <p>{props.content}</p>
        </div>
      </div>

      <div className="img-frame d-none d-lg-block ">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default AboutCard;
