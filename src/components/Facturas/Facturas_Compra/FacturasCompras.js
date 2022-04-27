import React from "react";
import styled from "styled-components";
import { ResumenCompras } from "./ResumenCompras";

const CustomDiv = styled.div`
  width: 50%;
  height: 50%;
  margin: auto;
  text-align: center;
`;

export const FacturasCompras = () => {
  return (
    <>
      <ResumenCompras />
    </>
  );
};
