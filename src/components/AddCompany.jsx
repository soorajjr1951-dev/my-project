import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataContext";

function AddCompany() {
  const { companies, setCompanies } = useContext(DataContext);
  const navigate = useNavigate();

  const [company, setCompany] = useState({
    companyName: "",
    position: "",
    skills: "",
    backlogs: 0,
    minCgpa: 6
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((prev) => ({
      ...prev,
      [name]: name === "backlogs" || name === "minCgpa" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCompanies = [...companies, company];
    setCompanies(updatedCompanies);
    setCompany({ companyName: "", position: "", skills: "", backlogs: 0, minCgpa: 6 });
  };

  const goToEligible = () => {
    navigate("/admin/eligible-students");
  };

  return (
    <div className="container mt-4">
      <h2>Add Company</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control"
            name="companyName"
            value={company.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Position</label>
          <input
            type="text"
            className="form-control"
            name="position"
            value={company.position}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Required Skills</label>
          <input
            type="text"
            className="form-control"
            name="skills"
            value={company.skills}
            onChange={handleChange}
            placeholder="e.g. Java, React, SQL"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Maximum Backlogs</label>
          <input
            type="number"
            className="form-control"
            name="backlogs"
            min="0"
            value={company.backlogs}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Minimum CGPA</label>
          <input
            type="number"
            step="0.1"
            className="form-control"
            name="minCgpa"
            min="0"
            max="10"
            value={company.minCgpa}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary me-2">
          Add Company
        </button>
        <button type="button" className="btn btn-success" onClick={goToEligible}>
          View Eligible Students
        </button>
      </form>

      <h3>Company List</h3>
      {companies.length === 0 ? (
        <p>No companies added yet.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Position</th>
              <th>Skills Required</th>
              <th>Max Backlogs</th>
              <th>Min CGPA</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((comp, index) => (
              <tr key={index}>
                <td>{comp.companyName}</td>
                <td>{comp.position}</td>
                <td>{comp.skills}</td>
                <td>{comp.backlogs}</td>
                <td>{comp.minCgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AddCompany;