import React from "react";

const statusColors = {
  PENDING: "bg-yellow-400",
  VERIFIED: "bg-green-500",
  REJECTED: "bg-red-500",
  APPROVED: "bg-blue-500",
};

const LoanCard = ({ name, amount, date, status }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <img src="https://via.placeholder.com/40" alt="user" className="rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-500 text-sm">Updated 1 day ago</p>
        </div>
      </div>
      <p className="text-gray-700 font-semibold">{amount}</p>
      <p className="text-gray-500">{date}</p>
      <span className={`px-3 py-1 text-white rounded-full ${statusColors[status]}`}>
        {status}
      </span>
    </div>
  );
};

export default LoanCard;
