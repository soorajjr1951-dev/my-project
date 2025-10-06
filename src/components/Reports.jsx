import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function Reports() {
  const { students } = useContext(DataContext);

  const placed = students.filter((s) => s.status === "Placed").length;
  const shortlisted = students.filter((s) => s.status === "Shortlisted").length;
  const rejected = students.filter((s) => s.status === "Rejected").length;
  const pending = students.filter((s) => s.status === "Pending").length;
  const total = students.length;

  return (
    <div className="p-4">
      <h2 className="mb-4">Placement Reports</h2>

      <div className="row">
        <div className="col-md-6">
          <div className="card border-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Placement Summary</h5>
              <p>Total Students: {total}</p>
              <p>Placed: {placed}</p>
              <p>Shortlisted: {shortlisted}</p>
              <p>Rejected: {rejected}</p>
              <p>Pending: {pending}</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h5>Progress Overview</h5>
          <div className="progress" style={{ height: "30px" }}>
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
      </div>
    </div>
  );
}
export default Reports;