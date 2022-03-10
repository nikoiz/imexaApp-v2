import React, { useCallback, useState } from "react";
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

  const [dataGastos, setDataGastos] = useState(Gastos);

  const changePaidState = useCallback((id) => {
    setDataGastos((gasto) =>
      gasto.map((item) =>
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
            <TableHeader>Descripcion Gasto</TableHeader>
            <TableHeader>Valor</TableHeader>
            <TableHeader>Bodega</TableHeader>
            <TableHeader>Fecha</TableHeader>
            <TableHeader>Pagado</TableHeader>
            <TableHeader>Acciones</TableHeader>
          </TableRow>
        </TableHead>
        {dataGastos.map((gasto, i) => (
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
                {gasto.paid ? (
                  "--"
                ) : (
                  <Button
                    customFontSize={"1vw"}
                    customWidth={"70%"}
                    Hover={"false"}
                    onClick={() => changePaidState(gasto._id)}
                  >
                    Pagar gasto
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
