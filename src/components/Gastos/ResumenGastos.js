import React, { useEffect, useState } from "react";
import { Gastos } from "../../example_data_base/DataExample";
import { Button } from "../Button";
import { formatter } from "../DashboardImexa/Card/Card";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "../DashboardImexa/Card/card-table-styles";

export const ResumenGastos = () => {

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Descripcion Gasto</TableHeader>
            <TableHeader>Valor</TableHeader>
            <TableHeader>Bodega</TableHeader>
            <TableHeader>Fecha</TableHeader>
            <TableHeader>Pagado</TableHeader>
            <TableHeader>Acciones</TableHeader>
          </TableRow>
        </TableHead>
        {Gastos.map((gasto, i) => (
          <TableBody key={gasto._id}>
            <TableRow>
              <TableData>{gasto._id}</TableData>
              <TableData>{gasto.description}</TableData>
              <TableData>{formatter.format(gasto.value)}</TableData>
              <TableData>{gasto.warehouse}</TableData>
              <TableData>{gasto.date}</TableData>
              <TableData>
                {gasto.paid === false ? "No pagado" : "Pagado"}
              </TableData>
              <TableData>
                <Button
                  customFontSize={"1vw"}
                  customWidth={"70%"}
                  Hover={"false"}
                  onClick={() => console.log('click')}
                >
                  Pagar gasto
                </Button>
              </TableData>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </>
  );
};
