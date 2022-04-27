import React, { useCallback, useState } from "react";
import { FacturasCompra } from "../../example_data_base/DataExample";
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

export const ResumenFacturas = () => {
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
      <h1 style={{color:"black"}}>Todas las facturas resumidas, quizas formato Cards y solo morosas</h1>
    </>
  );
};
