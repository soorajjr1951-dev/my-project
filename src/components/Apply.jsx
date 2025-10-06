import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function Apply() {
  const { companies, student, setStudent } = useContext(DataContext);

  const handleApply = (companyName) => {
    if (student.applications?.some(app => app.company === companyName)) return;
    const updatedApplications = [
      ...(student.applications || []),
      { company: companyName, status: "Applied" }
    ];
    setStudent({ ...student, applications: updatedApplications });
  };

  return (
    <div className="container mt-4">
      <h2>Apply for Eligible Companies</h2>
      <div className="row mt-3">
        {companies.map((company, index) => {
          const isApplied = student.applications?.some(app => app.company === company.name);
          return (
            <div key={index} className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{company.name}</h5>
                  <p><strong>Minimum CGPA:</strong> {company.minCgpa}</p>
                  <p><strong>Requirements:</strong> {company.skillsRequired?.join(", ")}</p>
                  <button
                    className={`btn ${isApplied ? "btn-secondary" : "btn-primary"}`}
                    onClick={() => handleApply(company.name)}
                    disabled={isApplied}
                  >
                    {isApplied ? "Applied" : "Apply"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5">
        <h4>Application Tracking</h4>
        <ul className="list-group">
          {student.applications?.map((app, i) => (
            <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
              {app.company}
              <span className="badge bg-info">{app.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Apply;