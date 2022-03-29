import React from "react";
import { Route, Routes } from "react-router-dom";
import { FacturasCompra, FacturaVenta } from "../../example_data_base/DataExample";
import { Container } from "../DashboardImexa/container-grid-styles";
import { Main } from "../DashboardImexa/container-main-styles";
import { Sidebar } from "../DashboardImexa/Sidebar/Sidebar";
import { SideMenu } from "../DashboardImexa/Sidebar/SideMenu";
import { Navbar } from "../Navbar/Navbar";
import { MenuFacturas } from "./facturas-options-menu";
import { ResumenFacturas } from "./ResumenFacturas";

export const FacturasMain = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth={"1100"}>
        <Sidebar>
          <SideMenu data={MenuFacturas} label={"Facturas"}/>
        </Sidebar>
        <Main customPadding={"15"} customBackground={'#DDDDDD'}>
            <Routes>
                <Route path="resumenFacturas" element={<ResumenFacturas />} />
                <Route path="compra" element={<FacturasCompra/>} />
                <Route path="venta" element={<FacturaVenta/>} />
            </Routes>
        </Main>
      </Container>
    </>
  );
};
