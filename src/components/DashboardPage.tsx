// En: src/components/DashboardPage.tsx

import React from 'react';
// ===== 1. ¡ACÁ ESTÁ EL ARREGLO! =====
import { signOut } from 'firebase/auth'; // Traemos la función de la caja oficial
import { auth } from '../firebase';      // y traemos la "llave" de nuestra caja maestra
// ===================================
import { Link, Outlet, Routes, Route } from 'react-router-dom';
import BoatListPage from './cms/BoatListPage';

const DashboardPage: React.FC = () => {
  const handleLogout = async () => {
    try {
      // ===== 2. ¡Y ACÁ LE PASAMOS LA LLAVE A LA FUNCIÓN! =====
      await signOut(auth);
      // Ahora la redirección la manejará el AuthContext al detectar el cambio de estado
      console.log('User logged out successfully');
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
        <Routes>
          <Route path="boats" element={<BoatListPage />} />
          <Route path="*" element={<h1 className="text-3xl font-bold text-brand-blue-dark mb-6">Welcome to the Dashboard</h1>} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;