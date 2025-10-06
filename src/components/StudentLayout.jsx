import React, { useState, useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../DataContext";

function StudentLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { student, setStudent } = useContext(DataContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setStudent(null);
    navigate("/", { replace: true });
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {isSidebarOpen && (
        <div
          className="d-flex flex-column flex-shrink-0 p-3 bg-success text-white"
          style={{ width: "260px" }}
        >
          <NavLink
            to="/student/register"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-4">Student Panel</span>
          </NavLink>
          <hr className="text-white" />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <NavLink
                to="profile"
                className={({ isActive }) =>
                  "nav-link " +
                  (isActive ? "active bg-light text-dark" : "text-white")
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="apply"
                className={({ isActive }) =>
                  "nav-link " +
                  (isActive ? "active bg-light text-dark" : "text-white")
                }
              >
                Apply for Companies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="status"
                className={({ isActive }) =>
                  "nav-link " +
                  (isActive ? "active bg-light text-dark" : "text-white")
                }
              >
                Track Application Status
              </NavLink>
            </li>
            <li>
              <NavLink
                to="notifications"
                className={({ isActive }) =>
                  "nav-link " +
                  (isActive ? "active bg-light text-dark" : "text-white")
                }
              >
                Notifications & Notes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="history"
                className={({ isActive }) =>
                  "nav-link " +
                  (isActive ? "active bg-light text-dark" : "text-white")
                }
              >
                Placement History
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between align-items-center bg-light p-3 shadow-sm">
          <button
            className="btn btn-outline-success d-md-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
          <h5 className="m-0">Welcome, {student?.name || "Student"}</h5>
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default StudentLayout;
