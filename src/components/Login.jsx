import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { admin, tutor, student } = useContext(DataContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === admin?.username && password === admin?.password) {
      navigate("/admin/profile");
    } else if (username === tutor?.username && password === tutor?.password) {
      navigate("/tutor/profile");
    } else if (username === student?.username && password === student?.password) {
      navigate("/student/profile");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "300px" }}>
        <h3 className="text-center mb-3">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;