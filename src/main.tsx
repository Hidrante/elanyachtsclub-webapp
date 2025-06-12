import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { NavigationProvider } from './contexts/NavigationContext'; // Importamos el Provider
import PrivateRoute from './components/PrivateRoute';

import { PublicLayout } from './components/layouts/PublicLayout';
import App from './App';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import DashboardPage from './components/DashboardPage';

import '../index.css'; // Arreglado: con '../' para subir un nivel en los directorios

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <NavigationProvider> {/* <--- LA ESTACIÓN BASE AHORA ENVUELVE TODO */}
          <Routes>
            {/* Rutas Públicas usando la Plantilla */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/registro" element={<RegistrationPage />} />
            </Route>

            {/* Ruta Privada */}
            <Route 
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              } 
            />
          </Routes>
        </NavigationProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);