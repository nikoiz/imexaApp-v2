import styled from "styled-components";

export const ContainerFactura = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  width: 100%;
  grid-gap: 3px;
`;
export const ContainerDatosPersonales = styled.div`
  border: solid 1px rgb(0, 0, 0, 0.6);
  background-color: #f7f7f7;
  border-radius: 4px;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
`;

export const ContainerDetalleFactura = styled.div`
  border: solid 1px rgb(0, 0, 0, 0.6);
  background-color: #f7f7f7;
  border-radius: 4px;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  padding: 15px;
  width: 100%;
  grid-column-start: 2;
  grid-column-end: 4;
  box-sizing: border-box;
`;

export const ContainerTableProductos = styled.div`
box-sizing: border-box;
height: 180px;
overflow-y: auto;
`
