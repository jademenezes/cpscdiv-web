import orgData from '../data/orgData.json';

const Organization = () => {
  return (
    <div className="content-fluid ">
      <h2 className="text-center py-3">Organização</h2>
      <div className="row mx-0">
        {orgData.map((column, columnIndex) => (
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
    </div>
  );
};

export default Organization;
