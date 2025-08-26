import React from "react";

function ManageAccounts() {
  const tutors = [
    { id: 1, name: "Prof. Neha Patel", username: "tutor_neha" },
    { id: 2, name: "Prof. Suresh Iyer", username: "tutor_suresh" }
  ];

  const students = [
    { id: 1, name: "Amit Verma", cgpa: 8.2, skills: ["React", "JS"], branch: "CSE" },
    { id: 2, name: "Sneha Gupta", cgpa: 7.5, skills: ["Python"], branch: "IT" }
  ];

  return (
    <div>
      <h2>Manage Tutors & Students</h2>

      <div className="card mt-3 mb-3 p-3 shadow-sm">
        <h4>Tutors</h4>
        <ul className="list-group">
          {tutors.map((t) => (
            <li key={t.id} className="list-group-item">
              {t.name} ({t.username})
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-3 shadow-sm">
        <h4>Students</h4>
        <ul className="list-group">
          {students.map((s) => (
            <li key={s.id} className="list-group-item">
              {s.name} — CGPA: {s.cgpa} — Skills: {s.skills.join(", ")} — Branch: {s.branch}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ManageAccounts;
