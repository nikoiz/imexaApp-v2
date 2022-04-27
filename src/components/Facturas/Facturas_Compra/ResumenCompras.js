import React, { useCallback, useState } from "react";
import { FacturasCompra } from "../../../example_data_base/DataExample";
import { Button } from "../../Button";
import { formatter } from "../../DashboardImexa/Card/Card";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "../../DashboardImexa/Card/card-table-styles";

export const ResumenCompras = () => {
  const [facturaCompra, setFacturaCompra] = useState(FacturasCompra);

  const changePaidState = useCallback((id) => {
    setFacturaCompra((compra) =>
      compra.map((item) =>
        item._id === id ? { ...item, paid: !item.paid } : item
      )
    );
  }, []);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Descripcion Factura</TableHeader>
            <TableHeader>Valor</TableHeader>
            <TableHeader>Bodega</TableHeader>
            <TableHeader>Fecha</TableHeader>
            <TableHeader>Pagado</TableHeader>
            <TableHeader>Acciones</TableHeader>
          </TableRow>
        </TableHead>
        {facturaCompra.map((compra) => (
          <TableBody key={compra._id}>
            <TableRow>
              <TableData>{compra._id}</TableData>
              <TableData>{compra.description}</TableData>
              <TableData>{formatter.format(compra.value)}</TableData>
              <TableData>{compra.warehouse}</TableData>
              <TableData>{compra.date}</TableData>
              <TableData>
                {compra.paid === false ? "No pagado" : "Pagado"}
              </TableData>
              <TableData>
                {compra.paid ? (
                  "--"
                ) : (
                  <Button
                    customFontSize={"1vw"}
                    customWidth={"70%"}
                    Hover={"false"}
                    onClick={() => changePaidState(compra._id)}
                  >
                    Pagar Factura
                  </Button>
                )}
              </TableData>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </>
  );
};
