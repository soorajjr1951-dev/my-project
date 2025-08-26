import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./components/Dashboard";
import AddCompany from "./components/AddCompany";
import ManageAccounts from "./components/ManageAccounts";
import EligibleStudents from "./components/EligibleStudents";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          
          <Route index element={<Dashboard />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-company" element={<AddCompany />} />
          <Route path="manage-accounts" element={<ManageAccounts />} />
          <Route path="eligible-students" element={<EligibleStudents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
