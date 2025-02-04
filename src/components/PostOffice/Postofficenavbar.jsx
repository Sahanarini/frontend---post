// src/components/Navbar.jsx
import React from 'react';

const Postofficenavbar = () => {
  return (
    <div className="bg-red-600 text-white p-4 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Post Office Admin Dashboard</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-200 transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition-colors">Employees</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition-colors">Reports</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition-colors">Settings</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Postofficenavbar;
