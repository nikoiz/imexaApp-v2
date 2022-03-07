import React from "react";
import {
  FacturasCompra,
  FacturaVenta,
  Gastos,
  Inventario,
} from "../../../example_data_base/DataExample";
import { MyCard, Titulo } from "./card-styles";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "./card-table-styles";

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

const checkInfo = (inventario) => {
  console.log(inventario);
};

export const Card = () => {
  return (
    <>
      {cardInfo.map((card, i) => (
        <MyCard key={card.name}>
          <Titulo>{card.titulo}</Titulo>

          {card.name === "inventario" ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>#</TableHeader>
                  <TableHeader>Bodega</TableHeader>
                  <TableHeader>Valor</TableHeader>
                </TableRow>
              </TableHead>
              {Inventario.map((inventario, i) => (
                <TableBody key={inventario._id}>
                  <TableRow onClick={() => checkInfo(inventario)}>
                    <TableData>{i}</TableData>
                    <TableData>{inventario.warehouse}</TableData>
                    <TableData>{inventario.value}</TableData>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          ) : null}

          {card.name === "gastos" ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>#</TableHeader>
                  <TableHeader>Gasto</TableHeader>
                  <TableHeader>Fecha</TableHeader>
                  <TableHeader>Valor</TableHeader>
                </TableRow>
              </TableHead>
              {Gastos.map((gasto, i) =>
                !gasto.paid ? (
                  <TableBody key={gasto._id}>
                    <TableRow onClick={() => checkInfo(gasto)}>
                      <TableData>{i}</TableData>
                      <TableData>{gasto.description}</TableData>
                      <TableData>{gasto.date}</TableData>
                      <TableData>{gasto.value}</TableData>
                    </TableRow>
                  </TableBody>
                ) : null
              )}
            </Table>
          ) : null}
          {card.name === "facturasCompra" ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>#</TableHeader>
                  <TableHeader>Folio</TableHeader>
                  <TableHeader>Valor</TableHeader>
                  <TableHeader>Fecha</TableHeader>
                </TableRow>
              </TableHead>
              {FacturasCompra.map((compra) =>
                !compra.paid ? (
                  <TableBody key={compra._id}>
                    <TableRow onClick={() => checkInfo(compra)}>
                      <TableData>{i}</TableData>
                      <TableData>{compra._id}</TableData>
                      <TableData>{compra.value}</TableData>
                      <TableData>{compra.date}</TableData>
                    </TableRow>
                  </TableBody>
                ) : null
              )}
            </Table>
          ) : null}

          {card.name === "facturasVenta" ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>#</TableHeader>
                  <TableHeader>Folio</TableHeader>
                  <TableHeader>Valor</TableHeader>
                  <TableHeader>Fecha</TableHeader>
                </TableRow>
              </TableHead>
              {FacturaVenta.map((venta, i) =>
                !venta.paid ? (
                  <TableBody key={venta._id}>
                    <TableRow onClick={() => checkInfo(venta)}>
                      <TableData>{i}</TableData>
                      <TableData>{venta._id}</TableData>
                      <TableData>{venta.value}</TableData>
                      <TableData>{venta.date}</TableData>
                    </TableRow>
                  </TableBody>
                ) : null
              )}
            </Table>
          ) : null}
        </MyCard>
      ))}
    </>
  );
};
