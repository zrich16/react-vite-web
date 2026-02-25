import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../modules/login/page/Login';
import Dashboard from '../modules/dashboard/Dashboard';

import Paciente from '../modules/paciente/Paciente';
import RegistroPaciente from '../modules/paciente/RegistroPaciente';
import DetallePaciente from '../modules/paciente/DetallePaciente';

import NutriologoInicio from '../modules/nutriologo/page/Nutriologo';
import ListaPacientesNutriologo from '../modules/nutriologo/page/lista-pacientes';
import NutrioloPacienteDetalle from '../modules/nutriologo/page/nutriologo-detalle-paciente';


import Recepcionista from '../modules/recepcionista/Recepcionista';

import Administrador from '../modules/administrador/Administrador';
import AdminPaciente from '../modules/administrador/Paciente';
import AdminEmpleado from '../modules/administrador/Empleado';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Ruta principal */}
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      {/* Rutas Modulo Paciente */}
      <Route path="/paciente-inicio" element={<Paciente />} />
        <Route path="/detalle-paciente" element={<DetallePaciente />} />

      {/* Rutas Modulo Nutriologo */}
      <Route path="/nutriologo-inicio" element={<NutriologoInicio />} />
      <Route path="/nutriologo-registro-paciente" element={<RegistroPaciente />} />
        <Route path="/nutriologo-lista-paciente" element={<ListaPacientesNutriologo />} />
           <Route path="/nutriologo-detalle-paciente" element={<NutrioloPacienteDetalle />} />

      {/* Rutas Modulo Recepcionista */}
      <Route path="/recepcionista-inicio" element={<Recepcionista />} />

      {/* Rutas Modulo Administrador */}
      <Route path="/admin-inicio" element={<Administrador />} />
      <Route path="/admin-registro-paciente" element={<AdminPaciente />} />
      <Route path="/admin-registro-e mpleado" element={<AdminEmpleado />} />

      {/* Ruta 404 (opcional) */}
      <Route path="*" element={<div>Página no encontrada</div>} />
    </Routes>
  );
};

export default AppRoutes;