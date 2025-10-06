import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function PlacementStatus() {
  const { students, setStudents } = useContext(DataContext);

  const updateStatus = (id, status) => {
    setStudents(students.map((s) => (s.id === id ? { ...s, status } : s)));
  };

  return (
    <div className="p-4">
      <h2>Placement Status</h2>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Branch</th>
            <th>CGPA</th>
            <th>Status</th>
            <th>Change</th>
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
                <select
                  value={s.status}
                  className="form-select"
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
    </div>
  );
}
export default PlacementStatus;
