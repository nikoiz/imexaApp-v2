import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "../DashboardImexa/container-grid-styles";
import { Main } from "../DashboardImexa/container-main-styles";
import { Sidebar } from "../DashboardImexa/Sidebar/Sidebar";
import { Navbar } from "../Navbar/Navbar";
import { AddGasto } from "./AddGasto";
import { ResumenGastos } from "./ResumenGastos";
import { SideMenuGastos } from "./SideMenuGastos";

export const GastosMain = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth={"1100"}>
        <Sidebar>
          <SideMenuGastos />
        </Sidebar>
        <Main customPadding={"15"} customBackground={'#DDDDDD'}>
          <Routes>
            <Route path="add" element={<AddGasto/>} />
            <Route path="resumen" element={<ResumenGastos/>} />
          </Routes>
        </Main>
      </Container>
    </>
  );
};
