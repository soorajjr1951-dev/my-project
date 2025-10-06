import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

function TutorLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {isSidebarOpen && (
        <div
          className="d-flex flex-column flex-shrink-0 p-3 bg-light"
          style={{ width: "250px" }}
        >
          <h4 className="text-center">Tutor Panel</h4>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <NavLink
                to="profile"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "active" : "link-dark")
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "active" : "link-dark")
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="verify-students"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "active" : "link-dark")
                }
              >
                Verify Students
              </NavLink>
            </li>
            <li>
              <NavLink
                to="placement-status"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "active" : "link-dark")
                }
              >
                Placement Status
              </NavLink>
            </li>
            <li>
              <NavLink
                to="company-guidance"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "active" : "link-dark")
                }
              >
                Company Guidance
              </NavLink>
            </li>
            <li>
              <NavLink
                to="report"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "active" : "link-dark")
                }
              >
                Reports
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between align-items-center bg-light p-3 shadow-sm">
          <button
            className="btn btn-outline-dark d-md-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
          <h5 className="m-0">Tutor Panel</h5>
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default TutorLayout;
