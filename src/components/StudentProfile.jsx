import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataContext";

function StudentProfile() {
  const { student } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h2>Welcome, {student.name} 👋</h2>

      <div className="card mt-3 mb-4">
        <div className="card-body">
          <h5 className="card-title">Student Details</h5>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Branch:</strong> {student.branch}</p>
          <p><strong>CGPA:</strong> {student.cgpa}</p>
          <p><strong>Backlogs:</strong> {student.backlogs}</p>
          <p><strong>Skills:</strong> {student.skills?.join(", ")}</p>
        </div>
      </div>

      <div className="mb-4">
        <h4>Notifications</h4>
        {student.notifications?.map((n, i) => (
          <div key={i} className="alert alert-info shadow-sm">
            <h6 className="fw-bold">{n.title}</h6>
            <p className="mb-0">{n.message}</p>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h4>Applications</h4>
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

      <button
        className="btn btn-danger"
        onClick={() => navigate("/", { replace: true })}
      >
        Logout
      </button>
    </div>
  );
}

export default StudentProfile;