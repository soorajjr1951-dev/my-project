import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function Dashboard() {
  const { companies, students } = useContext(DataContext);

  const stats = {
    studentsPlaced: students.filter((s) => s.status === "Placed").length,
    totalCompanies: companies.length,
    ongoingDrives: Math.min(companies.length, 5),
  };

  return (
    <div className="container">
      <h2 className="mb-4">Placement Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Students Placed</h5>
              <p className="card-text fs-4">{stats.studentsPlaced}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Total Companies</h5>
              <p className="card-text fs-4">{stats.totalCompanies}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-danger mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Ongoing Drives</h5>
              <p className="card-text fs-4">{stats.ongoingDrives}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;