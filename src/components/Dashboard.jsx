import React from "react";

function Dashboard() {
  const admin = { name: "Ravi Kumar", username: "admin_ravi" };

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="card shadow-sm p-3 mt-3">
        <h4>Welcome, {admin.name}</h4>
        <p>Username: {admin.username}</p>
        <p>Role: Admin</p>
      </div>
    </div>
  );
}

export default Dashboard;
