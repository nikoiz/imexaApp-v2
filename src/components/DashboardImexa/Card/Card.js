import React from "react";
import { MyCard, Titulo } from "./card-styles";
import { Table, TableData, TableHeader, TableRow } from "./card-table-styles";

const cardInfo = [
  {
    name: "inventario",
    titulo: "Resumen Inventario",
    link: "/inventario",
    hasBodega: true,
  },
  {
    name: "gastos",
    titulo: "Resumen de Gastos",
    link: "/gastos",
    hasBodega: true,
  },
  {
    name: "facturasCompra",
    titulo: "Facturas de Compra Pendientes",
    link: "/facturasCompra",
    hasBodega: false,
  },
  {
    name: "facturasVenta",
    titulo: "Facturas de Venta Pendientes",
    link: "/facturasVenta",
    hasBodega: false,
  },
];

export const Card = () => {
  return (
    <>
      {cardInfo.map((card, i) => (
        <MyCard key={card.name}>
          <Titulo>{card.titulo}</Titulo>
          {card.hasBodega ? (
            <Table>
              <TableHeader>#</TableHeader>
              <TableHeader>Bodega</TableHeader>
              <TableHeader>Valor</TableHeader>
              <TableRow>
                <TableData>{i}</TableData>
                <TableData>{card.hasBodega.toString()}</TableData>
                <TableData>{card.link}</TableData>
              </TableRow>
            </Table>
          ) : (
            <Table>
              <TableRow>
                <TableHeader>#</TableHeader>
                <TableHeader>Valor</TableHeader>
              </TableRow>
              <TableRow>
                <TableData>{i}</TableData>
                <TableData>{card.link}</TableData>
              </TableRow>
            </Table>
          )}
        </MyCard>
      ))}
    </>
  );
};
