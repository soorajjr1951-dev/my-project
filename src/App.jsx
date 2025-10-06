import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./DataContext";
import Login from "./components/Login";

// Admin
import AdminLayout from "./components/AdminLayout";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import AddCompany from "./components/AddCompany";
import EligibleStudents from "./components/EligibleStudents";
import StudentStatus from "./components/StudentStatus";

// Tutor
import TutorLayout from "./components/TutorLayout";
import ProfileTutor from "./components/ProfileTutor";
import TutorDashboard from "./components/TutorDashboard";
import StudentVerification from "./components/StudentVerification";
import PlacementStatus from "./components/PlacementStatus";
import CompanyGuidance from "./components/CompanyGuidance";
import Reports from "./components/Reports";

// Student
import StudentLayout from "./components/StudentLayout";
import StudentProfile from "./components/StudentProfile";
import Apply from "./components/Apply";
import Status from "./components/Status";
import Notifications from "./components/Notifications";
import History from "./components/History";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          
          <Route path="/" element={<Login />} />

          
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-company" element={<AddCompany />} />
            <Route path="eligible-students" element={<EligibleStudents />} />
            <Route path="student-status" element={<StudentStatus />} />
          </Route>

          
          <Route path="/tutor" element={<TutorLayout />}>
            <Route index element={<ProfileTutor />} />
            <Route path="profile" element={<ProfileTutor />} />
            <Route path="dashboard" element={<TutorDashboard />} />
            <Route path="verify-students" element={<StudentVerification />} />
            <Route path="placement-status" element={<PlacementStatus />} />
            <Route path="company-guidance" element={<CompanyGuidance />} />
            <Route path="report" element={<Reports />} />
          </Route>

          
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<StudentProfile />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="apply" element={<Apply />} />
            <Route path="status" element={<Status />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="history" element={<History />} />
          </Route>
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;