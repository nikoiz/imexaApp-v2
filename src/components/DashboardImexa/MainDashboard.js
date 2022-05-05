import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Card } from "./Card/Card";
import { CardGrid } from "./Card/card-grid";
import { Container } from "./container-grid-styles";
import { Main } from "./container-main-styles";

export const MainDashboard = () => {
  return (
    <>
      <Navbar />
      <Container sidebar={false}>
        <Main>
          <CardGrid>
            <Card />
          </CardGrid>
        </Main>
      </Container>
    </>
  );
};
