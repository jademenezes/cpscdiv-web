import { BiSolidRightArrow } from 'react-icons/bi';

interface PresentationItem {
  title: string;
  presenter: string;
}

type CourseDescription =
  | string
  | {
      theme: string;
      presentations: PresentationItem[];
    };

interface Course {
  period: string;
  opening?: string;
  ending?: string;
  description: CourseDescription;
  teacher: string;
}

interface ProgCardProps {
  day: string;
  date: string;
  courses: Course[];
}

const ProgCard = (props: ProgCardProps) => {
  return (
    <div className="prog-card-container text-center">
      <h4 className="prog-card-title">{props.day}</h4>
      <h5>{props.date}</h5>
      <div className="prog-card">
        {props.courses.map((course, courseIndex) => (
          <div key={courseIndex} className="prog-card-content text-start">
            <span className="card-period">
              {course.period}
              <BiSolidRightArrow className="card-content-icon" />
            </span>
            {course.opening ? (
              <div className="prog-card-text card-teacher py-1">
                {course.opening}
              </div>
            ) : null}
            <div className="card-description prog-card-text py-1">
              {typeof course.description === 'string' ? (
                course.description
              ) : (
                <>
                  <div style={{ fontWeight: 'bold' }}>
                    {course.description.theme}
                  </div>
                  {course.description.presentations.map(
                    (presentation, presentationIndex) => (
                      <div key={presentationIndex}>
                        <ul>
                          <li>
                            <p style={{ fontStyle: 'italic' }}>
                              {presentation.title}
                            </p>
                            <p>{presentation.presenter}</p>
                          </li>
                        </ul>
                      </div>
                    )
                  )}
                </>
              )}
            </div>
            <div className="prog-card-text card-teacher my-1 mb-3">
              {course.teacher}
            </div>
            {course.ending ? (
              <div className="prog-card-text card-teacher pb-1">
                {course.ending}
              </div>
            ) : null}

            {courseIndex < props.courses.length - 1 ? (
              <hr className="border-2 hr-custom my-0"></hr>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgCard;
