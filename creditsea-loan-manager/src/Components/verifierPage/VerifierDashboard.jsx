import React from "react";
import { Link } from "react-router-dom";
import VerifierNavbar from "./VerifierNavbar";


const VerifierDashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <VerifierNavbar />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-green-900 text-white p-5 flex flex-col">
          <nav className="space-y-2">
            {[
              { name: "Dashboard", path: "/verifier" },
              { name: "Borrowers", path: "/verifier/borrowers" },
              { name: "Loans", path: "/verifier/loans" },
              { name: "Repayments", path: "/verifier/repayments" },
              { name: "Loan Parameters", path: "/verifier/loan-parameters" },
              { name: "Accounting", path: "/verifier/accounting" },
              { name: "Reports", path: "/verifier/reports" },
              { name: "Collateral", path: "/verifier/collateral" },
              { name: "Access Configuration", path: "/verifier/access-configuration" },
              { name: "Savings", path: "/verifier/savings" },
              { name: "Expenses", path: "/verifier/expenses" },
              { name: "E-signature", path: "/verifier/e-signature" },
              { name: "Investor Accounts", path: "/verifier/investor-accounts" },
              { name: "Calendar", path: "/verifier/calendar" },
              { name: "Settings", path: "/verifier/settings" },
              { name: "Sign Out", path: "/" },
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
        <main className="flex-1 p-8 bg-white shadow-md rounded-lg m-5">
          <header className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              Verifier Dashboard
            </h2>
          </header>
          <section className="text-gray-700">
            <p className="text-lg">
              Welcome to the Verifier Dashboard. Navigate to the loan section to
              see all loans applied by users.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default VerifierDashboard;
