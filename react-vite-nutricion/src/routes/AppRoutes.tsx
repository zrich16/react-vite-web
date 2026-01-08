import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../modules/login/Login';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Ruta principal */}
      <Route path="/" element={<Login />} />

      {/* Ruta 404 (opcional) */}
      <Route path="*" element={<div>Página no encontrada</div>} />
    </Routes>
  );
};

export default AppRoutes;