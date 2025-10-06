import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataContext";

function Profile() {
  const { admin } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Welcome, {admin.adminName} 👋</h2>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Admin Details</h5>
          <p><strong>Name:</strong> {admin.adminName}</p>
          <p><strong>Email:</strong> {admin.email}</p>
          <p><strong>Role:</strong> {admin.role}</p>
        </div>
      </div>

      <button 
        className="btn btn-danger mt-3"
        onClick={() => navigate("/", { replace: true })}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;