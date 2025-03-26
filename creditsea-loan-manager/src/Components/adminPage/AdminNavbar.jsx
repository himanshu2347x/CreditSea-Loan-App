import React from "react";
import { Bell, MessageCircle, User } from "lucide-react";

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-green-700 text-xl font-bold">CREDIT APP</h1>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-green-800 font-medium">

      </div>

      {/* Icons */}
      <div className="flex items-center gap-4 text-green-800">
        <Bell size={22} className="cursor-pointer" />
        <MessageCircle size={22} className="cursor-pointer" />
        <User size={22} className="cursor-pointer" />
        <span className="cursor-pointer">Admin</span>
      </div>
    </nav>
  );
};

export default AdminNavbar;
