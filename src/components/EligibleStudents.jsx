import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function EligibleStudents() {
  const { companies, students, setStudents } = useContext(DataContext);

  function isEligible(student, company) {
    return (
      student.applied === false &&
      student.cgpa >= company.minCgpa &&
      student.backlogs <= company.backlogs
    );
  }

  const markAsApplied = (id) => {
    const updated = students.map((s) =>
      s.id === id ? { ...s, applied: true, status: "Pending" } : s
    );
    setStudents(updated);
  };

  return (
    <div className="container mt-4">
      <h2>Eligible Students Under Each Company</h2>
      {companies.length === 0 ? (
        <p>No companies added yet. Please add companies first.</p>
      ) : (
        companies.map((c, index) => (
          <div key={index} className="card mt-3 p-3 shadow-sm">
            <h4>
              {c.companyName} — {c.position}
            </h4>
            <p>
              Skills: {c.skills}, Max Backlogs: {c.backlogs}, Min CGPA:{" "}
              {c.minCgpa}
            </p>
            <h6>Eligible Students:</h6>
            <ul className="list-unstyled">
              {students.filter((s) => isEligible(s, c)).length > 0 ? (
                students.filter((s) => isEligible(s, c)).map((s) => (
                  <li
                    key={s.id}
                    className="d-flex justify-content-between align-items-center mb-2 p-2 border rounded"
                  >
                    <span>
                      {s.name} ({s.branch}, CGPA: {s.cgpa})
                    </span>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => markAsApplied(s.id)}
                    >
                      Mark as Applied
                    </button>
                  </li>
                ))
              ) : (
                <li>No eligible students</li>
              )}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default EligibleStudents;
