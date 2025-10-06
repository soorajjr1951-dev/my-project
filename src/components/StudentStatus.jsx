import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function StudentStatus() {
  const { students, setStudents } = useContext(DataContext);

  const updateStatus = (id, newStatus) => {
    const updated = students.map((s) =>
      s.id === id ? { ...s, status: newStatus } : s
    );
    setStudents(updated);
  };

  return (
    <div>
      <h2>Student Placement Status</h2>
      {students.filter((s) => s.applied === true).length === 0 ? (
        <p>No students have applied yet.</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Branch</th>
              <th>CGPA</th>
              <th>Skills</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {students
              .filter((s) => s.applied === true)
              .map((s) => (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.branch}</td>
                  <td>{s.cgpa}</td>
                  <td>{s.skills.join(", ")}</td>
                  <td>{s.status}</td>
                  <td>
                    <select
                      className="form-select"
                      value={s.status}
                      onChange={(e) => updateStatus(s.id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Placed">Placed</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentStatus;