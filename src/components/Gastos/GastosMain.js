import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "../DashboardImexa/container-grid-styles";
import { Main } from "../DashboardImexa/container-main-styles";
import { Sidebar } from "../DashboardImexa/Sidebar/Sidebar";
import { SideMenu } from "../DashboardImexa/Sidebar/SideMenu";
import { Navbar } from "../Navbar/Navbar";
import { AddGasto } from "./AddGasto";
import { MenuGastos } from "./gastos-options-menu";
import { ResumenGastos } from "./ResumenGastos";

export const GastosMain = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth={"1100"}>
        <Sidebar>
          <SideMenu data={MenuGastos} label={"Gastos"} />
        </Sidebar>
        <Main customPadding={"15"} customBackground={"#2E3034"}>
          <Routes>
            <Route path="add" element={<AddGasto />} />
            <Route path="resumen" element={<ResumenGastos />} />
          </Routes>
        </Main>
      </Container>
    </>
  );
};
