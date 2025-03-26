import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/userPage/Dashboard";
import VerifierDashboard from "./Components/verifierPage/VerifierDashboard";
import VerifierLoanPage from "./Components/verifierPage/VerifierLoanPage";
import AdminDashboard from "./Components/adminPage/adminDashboard";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Routes>
      <Route path="/" element={<Dashboard/>} />
        <Route path="/verifier" element={<VerifierDashboard />} />
        <Route path="/verifier/loans" element={<VerifierLoanPage />} />
        <Route path="/admin" element={< AdminDashboard/>} />
    </Routes>
    </div>
  );
};

export default App;
