import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Card } from "./Card/Card";
import { CardGrid } from "./Card/card-grid";
import { Container } from "./container-grid-styles";
import { Main } from "./container-main-styles";
import { Sidebar } from "./Sidebar/Sidebar";

export const MainDashboard = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Sidebar>SideBar</Sidebar>
        <Main>
          <CardGrid>
            <Card />
          </CardGrid>
        </Main>
      </Container>
    </>
  );
};
