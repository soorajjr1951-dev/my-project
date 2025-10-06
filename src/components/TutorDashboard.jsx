import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function TutorDashboard() {
  const { students } = useContext(DataContext);

  const total = students.length;
  const placed = students.filter((s) => s.status === "Placed").length;
  const shortlisted = students.filter((s) => s.status === "Shortlisted").length;
  const rejected = students.filter((s) => s.status === "Rejected").length;
  const pending = students.filter((s) => s.status === "Pending").length;

  return (
    <div className="p-4">
      <h2 className="mb-4">Tutor Dashboard</h2>

      {/* Summary cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Students</h5>
              <p className="card-text fs-4">{total}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Placed</h5>
              <p className="card-text fs-4">{placed}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-dark bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">Shortlisted</h5>
              <p className="card-text fs-4">{shortlisted}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-danger mb-3">
            <div className="card-body">
              <h5 className="card-title">Rejected</h5>
              <p className="card-text fs-4">{rejected}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <h5>Placement Progress</h5>
        <div className="progress" style={{ height: "25px" }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${(placed / total) * 100 || 0}%` }}
          >
            Placed {placed}
          </div>
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: `${(shortlisted / total) * 100 || 0}%` }}
          >
            Shortlisted {shortlisted}
          </div>
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: `${(rejected / total) * 100 || 0}%` }}
          >
            Rejected {rejected}
          </div>
          <div
            className="progress-bar bg-secondary"
            role="progressbar"
            style={{ width: `${(pending / total) * 100 || 0}%` }}
          >
            Pending {pending}
          </div>
        </div>
      </div>

      {/* Detailed table */}
      <h5>All Students</h5>
      <table className="table table-bordered mt-3">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Branch</th>
            <th>CGPA</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.branch}</td>
              <td>{s.cgpa}</td>
              <td>{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TutorDashboard;
