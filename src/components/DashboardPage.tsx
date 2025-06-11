import React from 'react';
import { signOut } from '../firebaseAuth';
import { Link, Outlet, Routes, Route } from 'react-router-dom';
import BoatListPage from './cms/BoatListPage';

const DashboardPage: React.FC = () => {
  const handleLogout = async () => {
    try {
      await signOut();
      // Redirect or perform other actions after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-brand-blue-dark text-white flex flex-col">
        <div className="p-4 text-xl font-bold">Admin Panel</div>
        <nav className="mt-5">
          <Link to="/dashboard/boats" className="block py-2 px-4 hover:bg-brand-blue-light">Boat Management (CMS)</Link>
          <Link to="/dashboard/clients" className="block py-2 px-4 hover:bg-brand-blue-light">Client Management (CRM)</Link>
        </nav>
        <div className="mt-auto p-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Nested routes will be rendered here */}
        <Routes>
          <Route path="boats" element={<BoatListPage />} />
          {/* Add other nested routes here (e.g., for CRM) */}
          <Route path="*" element={<h1 className="text-3xl font-bold text-brand-blue-dark mb-6">Welcome to the Dashboard</h1>} />
        </Routes>
        <Outlet /> {/* This is where nested routes will be rendered */}
      </div>
    </div>
  );
};

export default DashboardPage;
