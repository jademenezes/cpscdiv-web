import { BiSolidRightArrow } from 'react-icons/bi';

interface Course {
  period: string;
  description: string;
  teacher: string;
}

interface ProgCardProps {
  date: string;
  courses: Course[];
}

const ProgCard = (props: ProgCardProps) => {
  return (
    <div className="prog-card-container text-center">
      <h3 className="prog-card-title">{props.date}</h3>
      <div className="prog-card">
        {props.courses.map((course, courseIndex) => (
          <div key={courseIndex} className="prog-card-content text-start">
            <span className="card-period">
              {course.period}
              <BiSolidRightArrow className="card-content-icon" />
            </span>
            <div className="card-description prog-card-text py-1">
              {course.description}
            </div>
            <div className="prog-card-text card-teacher my-4">
              {course.teacher}
            </div>

            {courseIndex == 0 ? (
              <hr className="border-2 hr-custom my-0"></hr>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgCard;
