import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function StudentVerification() {
  const { students, setStudents } = useContext(DataContext);

  const handleAction = (id, action) => {
    if (action === "approve") {
      setStudents(students.map((s) => (s.id === id ? { ...s, status: "Approved" } : s)));
    } else if (action === "reject") {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="p-4">
      <h2>Verify Students</h2>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Branch</th>
            <th>CGPA</th>
            <th>Status</th>
            <th>Resume</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.branch}</td>
              <td>{s.cgpa}</td>
              <td>{s.status}</td>
              <td>
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  View Resume
                </a>
              </td>
              <td>
                {s.status !== "Approved" && (
                  <>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleAction(s.id, "approve")}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleAction(s.id, "reject")}
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default StudentVerification;
