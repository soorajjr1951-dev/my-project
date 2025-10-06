import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function Status() {
  const { student } = useContext(DataContext);

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-success">Application Status</h3>
      <table className="table table-bordered shadow-sm">
        <thead className="table-success">
          <tr>
            <th>Company</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {student.applications?.map((app, i) => (
            <tr key={i}>
              <td>{app.company}</td>
              <td>{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Status;