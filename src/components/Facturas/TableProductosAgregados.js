import React from "react";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "../DashboardImexa/Card/card-table-styles";
import { formatter } from "../DashboardImexa/Card/Card";
import { ContainerTableProductos } from "./form-factura-styles";

export const TableProductosAgregados = (props) => {
  const { data } = props;

  return (
    <>
      <ContainerTableProductos>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>#</TableHeader>
              <TableHeader>Nombre Producto</TableHeader>
              <TableHeader>Valor</TableHeader>
              <TableHeader>Cantidad</TableHeader>
              <TableHeader>Total Valor</TableHeader>
              <TableHeader>Bodega</TableHeader>
            </TableRow>
          </TableHead>

          {data.length > 0 && data != null
            ? data.map((producto, i) => (
                <TableBody key={producto.nombreProducto}>
                  <TableRow key={producto.nombreProducto}>
                    <TableData>{i + 1}</TableData>
                    <TableData>{producto.nombreProducto}</TableData>
                    <TableData>
                      {formatter.format(producto.valorProducto)}
                    </TableData>
                    <TableData>{producto.cantidadProducto}</TableData>
                    <TableData>
                      {formatter.format(producto.valorTotalCompra)}
                    </TableData>
                    <TableData>{producto.bodegaProducto}</TableData>
                  </TableRow>
                </TableBody>
              ))
            : null}
        </Table>
      </ContainerTableProductos>
    </>
  );
};
