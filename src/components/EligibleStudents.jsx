import React from "react";

function EligibleStudents() {
  const companies = [
    { id: 1, name: "Infosys", role: "Software Engineer", cgpa: 7, skills: ["Java", "React"], branch: "CSE" },
    { id: 2, name: "TCS", role: "Data Analyst", cgpa: 6.5, skills: ["Python", "SQL"], branch: "IT" }
  ];

  const students = [
    { id: 1, name: "Amit Verma", cgpa: 8.2, skills: ["React", "Java"], branch: "CSE" },
    { id: 2, name: "Sneha Gupta", cgpa: 7.0, skills: ["Python"], branch: "IT" },
    { id: 3, name: "Rahul Nair", cgpa: 6.0, skills: ["C++"], branch: "ECE" }
  ];

  function isEligible(student, company) {
    return (
      student.cgpa >= company.cgpa &&
      student.branch === company.branch &&
      company.skills.every((req) => student.skills.includes(req))
    );
  }

  return (
    <div>
      <h2>Eligible Students Under Each Company</h2>
      {companies.map((c) => (
        <div key={c.id} className="card mt-3 p-3 shadow-sm">
          <h4>{c.name} — {c.role}</h4>
          <p>CGPA: {c.cgpa}, Skills: {c.skills.join(", ")}, Branch: {c.branch}</p>
          <h6>Eligible Students:</h6>
          <ul>
            {students.filter((s) => isEligible(s, c)).length > 0 ? (
              students.filter((s) => isEligible(s, c)).map((s) => <li key={s.id}>{s.name}</li>)
            ) : (
              <li>No eligible students</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default EligibleStudents;
