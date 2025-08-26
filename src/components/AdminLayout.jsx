import React from "react";
import { Outlet, Link } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="d-flex">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "250px", height: "100vh" }}
      >
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <span className="fs-4">Admin Panel</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <Link to="add-company" className="nav-link link-dark">
              Add Company
            </Link>
          </li>
          <li>
            <Link to="manage-accounts" className="nav-link link-dark">
              Manage Accounts
            </Link>
          </li>
          <li>
            <Link to="eligible-students" className="nav-link link-dark">
              Eligible Students
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Admin</strong>
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >

            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-4 flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;