import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainDashboard } from "../components/DashboardImexa/MainDashboard";
import Login from "../components/login-form/Login";
import { Registrar } from "../components/login-form/Registrar";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route index element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="dashboardImexa" element={<MainDashboard />} />
        <Route path="registrar" element={<Registrar />} />
      </Routes>
    </>
  );
};