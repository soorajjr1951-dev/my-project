import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [student, setStudent] = useState({});
  const [studentApplications, setStudentApplications] = useState([]);
  const [admin, setAdmin] = useState({});
  const [tutor, setTutor] = useState({});

  useEffect(() => {
    axios.get("/data.json")
      .then((response) => {
        const data = response.data;
        setAdmin(data.admin || {});
        setTutor(data.tutor || {});
        setStudents(data.students || []);
        setCompanies(data.companies || []);
        setStudentApplications(data.applications || []);
        setStudent(data.student || {});
      })
      .catch((error) => console.error("Error loading data.json:", error));
  }, []);

  return (
    <DataContext.Provider
      value={{
        admin,
        tutor,
        students,
        setStudents,
        companies,
        setCompanies,
        student,
        setStudent,
        studentApplications,
        setStudentApplications,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};