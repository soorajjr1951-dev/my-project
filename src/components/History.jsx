import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function History() {
  const { student } = useContext(DataContext);

  return (
    <div className="container">
      <h3 className="mb-4 text-success">Placement History</h3>
      <table className="table table-striped shadow-sm">
        <thead className="table-success">
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {student.history.map((h, i) => (
            <tr key={i}>
              <td>{h.company}</td>
              <td>{h.position}</td>
              <td>{h.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-warning mt-3">Update Profile</button>
    </div>
  );
}

export default History;