import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "./adminNavbar";
import { FaEllipsisV } from "react-icons/fa";

const AdminDashboard = () => {
  const [loans, setLoans] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/loans");
        console.log("Data fetched is", response.data);
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


  const updateLoanStatus = async (loanId, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/loans/${loanId}`, {
        status: newStatus,
      });
      setLoans((prevLoans) =>
        prevLoans.map((loan) =>
          loan._id === loanId ? { ...loan, status: newStatus } : loan
        )
      );
      setOpenMenu(null); // Close menu after action
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <AdminNavbar />
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-green-900 text-white p-5 flex flex-col">
          <h1 className="text-xl font-bold">CREDIT APP</h1>
          <nav className="space-y-2">
            {[
              { name: "Dashboard" },
              { name: "Borrowers" },
              { name: "Loans" },
              { name: "Repayments" },
              { name: "Loan Parameters" },
              { name: "Accounting" },
              { name: "Reports" },
              { name: "Collateral" },
              { name: "Access Configuration" },
              { name: "Savings" },
              { name: "Expenses" },
              { name: "E-signature" },
              { name: "Investor Accounts" },
              { name: "Calendar" },
              { name: "Settings" },
              { name: "Sign Out" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 px-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6 bg-white shadow-md rounded-lg m-5">
          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            {[
              "50 LOANS",
              "100 BORROWERS",
              "550,000 CASH DISBURSED",
              "450,000 SAVINGS",
              "30 REPAID LOANS",
              "1,000,000 CASH RECEIVED",
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 shadow rounded-lg flex items-center space-x-4"
              >
                <div className="bg-green-700 text-white p-4 rounded">📊</div>
                <div>
                  <h3 className="text-lg font-bold">{stat.split(" ")[0]}</h3>
                  <p className="text-gray-600">{stat.split(" ").slice(1).join(" ")}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Applied Loans Table */}
          <div className="mt-6 bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Recent Loans</h3>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">User Details</th>
                  <th>Customer Name</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loans.map((loan) => (
                  <tr key={loan._id} className="border-b">
                    <td className="py-3 px-6 flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                    </td>
                    <td className="py-3 px-6">{loan.fullName}</td>
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
                    <td className="py-3 px-6 relative">
                      {/* Three-dot menu button */}
                      <button
                        onClick={() => setOpenMenu(openMenu === loan._id ? null : loan._id)}
                        className="p-2 rounded-full hover:bg-gray-200"
                      >
                        <FaEllipsisV />
                      </button>

                      {/* Dropdown menu */}
                      {openMenu === loan._id && (
                        <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-10">
                          <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={()  =>updateLoanStatus(loan._id, "Approved")}
                          >
                            Approved
                          </button>
                          <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={ ()=>updateLoanStatus(loan._id, "Rejected")}
                          >
                            Rejected
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
