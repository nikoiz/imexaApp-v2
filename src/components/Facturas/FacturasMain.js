import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "../DashboardImexa/container-grid-styles";
import { Main } from "../DashboardImexa/container-main-styles";
import { Sidebar } from "../DashboardImexa/Sidebar/Sidebar";
import { SideMenu } from "../DashboardImexa/Sidebar/SideMenu";
import { Navbar } from "../Navbar/Navbar";
import { AddFactura } from "./AddFactura";
import { MenuFacturas } from "./facturas-options-menu";
import { ResumenCompras } from "./Facturas_Compra/ResumenCompras";
import { ResumenVentas } from "./Facturas_Venta/ResumenVentas";
import { ResumenFacturas } from "./ResumenFacturas";

export const FacturasMain = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth={"1100"}>
        <Sidebar>
          <SideMenu data={MenuFacturas} label={"Facturas"} />
        </Sidebar>
        <Main customPadding={"15"} customBackground={"#2E3034"}>
          <Routes>
            <Route path="resumenFacturas" element={<ResumenFacturas />} />
            
            <Route path="resumenCompras" element={<ResumenCompras />} />
            <Route path="addCompra" element={<AddFactura tipoFactura={'compra'}/>} />
            
            <Route path="resumenVentas" element={<ResumenVentas />} />
            <Route path="addVenta" element={<AddFactura tipoFactura={'venta'} />} />
          </Routes>
        </Main>
      </Container>
    </>
  );
};
