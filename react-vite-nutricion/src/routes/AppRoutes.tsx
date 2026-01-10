import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../modules/login/Login';
import Dashboard from '../modules/dashboard/Dashboard';

import Paciente from '../modules/paciente/Paciente';
import Nutriologo from '../modules/nutriologo/Nutriologo';
import RegistroPaciente from '../modules/nutriologo/RegistroPaciente';
import Recepcionista from '../modules/recepcionista/Recepcionista';
import Administrador from '../modules/administrador/Administrador';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Ruta principal */}
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      {/* Rutas Modulo Paciente */}
      <Route path="/paciente-inicio" element={<Paciente />} />

      {/* Rutas Modulo Nutriologo */}
      <Route path="/nutriologo-inicio" element={<Nutriologo />} />
      <Route path="/nutriologo-registro-paciente" element={<RegistroPaciente />} />

      {/* Rutas Modulo Recepcionista */}
      <Route path="/recepcionista-inicio" element={<Recepcionista />} />

      {/* Rutas Modulo Administrador */}
      <Route path="/admin-inicio" element={<Administrador />} />

      {/* Ruta 404 (opcional) */}
      <Route path="*" element={<div>Página no encontrada</div>} />
    </Routes>
  );
};

export default AppRoutes;