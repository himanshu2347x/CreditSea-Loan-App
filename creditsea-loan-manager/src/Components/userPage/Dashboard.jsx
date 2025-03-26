import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeActions from "./HomeActions";
import Navbar from "./Navbar";

const Dashboard = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 


  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/loans"); 
        console.log("Data fetched is",response.data); 
        setLoans(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching loans:", error);
        setError("Failed to fetch loan data");
        setLoading(false);
      }
    };

    fetchLoans();
  }, [loans]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    
    
    <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <HomeActions/>
      <div className="bg-white p-6 shadow rounded-lg">
        
        <h1 className="text-xl font-bold">Applied Loans</h1>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-6 text-left">Loan Officer</th>
                <th className="py-3 px-6 text-left">Amount</th>
                <th className="py-3 px-6 text-left">Date Applied</th>
                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-6 flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/1.jpg" // Placeholder image
                      alt="Profile"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    {loan.fullName}
                  </td>
                  <td className="py-3 px-6">{loan.amount}</td>
                  <td className="py-3 px-6">
                    {new Date(loan.appliedAt).toLocaleDateString()} <br />
                    {new Date(loan.appliedAt).toLocaleTimeString()}
                  </td>
                  <td className="py-3 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        loan.status === "Pending"
                          ? "bg-yellow-400"
                          : loan.status === "Approved"
                          ? "bg-blue-500"
                          : loan.status === "Verified"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {loan.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;