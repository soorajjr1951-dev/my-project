import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function Notifications() {
  const { student } = useContext(DataContext);

  return (
    <div className="container">
      <h3 className="mb-4 text-success">Notifications & Notes</h3>
      {student.notifications.map((n, i) => (
        <div key={i} className="alert alert-info shadow-sm">
          <h6 className="fw-bold">{n.title}</h6>
          <p className="mb-0">{n.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Notifications;