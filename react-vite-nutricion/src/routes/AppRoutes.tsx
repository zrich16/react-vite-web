import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../modules/login/Login';
import Dashboard from '../modules/dashboard/Dashboard';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Ruta principal */}
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Ruta 404 (opcional) */}
      <Route path="*" element={<div>Página no encontrada</div>} />
    </Routes>
  );
};

export default AppRoutes;