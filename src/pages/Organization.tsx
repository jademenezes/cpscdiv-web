import orgData from '../data/orgData.json';
import { useLanguage } from '../context/LanguageContext';
import { motion as m } from 'framer-motion';

interface StaffItem {
  title: string;
  staff: string | string[];
}

interface OrgItem {
  column: number;
  items: StaffItem[];
}

interface OrgData {
  'pt-BR': OrgItem[];
  es: OrgItem[];
}

const Organization = () => {
  const { language } = useLanguage();

  const currentData = (orgData as OrgData)[language as keyof OrgData];

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65 }}
      className="content-fluid "
    >
      <h2 className="text-center py-3">
        {language == 'es' ? 'Organización' : 'Organização'}
      </h2>
      <div className="row mx-0">
        {currentData.map((column, columnIndex) => (
          <div key={columnIndex} className="col-12 col-lg-6">
            {column.items.map((data, index) => (
              <div
                key={index}
                className="mb-4 mx-auto"
                style={{ maxWidth: '450px' }}
              >
                <h5 className="org-title">{data.title}:</h5>
                {Array.isArray(data.staff) ? (
                  <ul className="list-unstyled mb-0">
                    {data.staff.map((staff, staffIndex) => (
                      <li key={staffIndex}>{staff}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{data.staff}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </m.div>
  );
};

export default Organization;
