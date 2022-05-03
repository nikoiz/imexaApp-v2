import React, { useState } from "react";
import { FacturasCompra } from "../../../example_data_base/DataExample";
import { Button } from "../../Button";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "../../DashboardImexa/Card/card-table-styles";
import { Modal } from "../../Modal/Modal";

export const ResumenCompras = () => {

  const [facturaCompra, setFacturaCompra] = useState(FacturasCompra);
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(null)
  
  const changePaidState = () => {
    setFacturaCompra(FacturasCompra)
  }

  const verDetalles = ( _id ) => {
    setShowModal(true)
    setData(facturaCompra.find( compra => compra._id === _id))
  }


  return (
    <>
      <Modal data={data} show={showModal} onClose={() => setShowModal(false)} tipo={'compra'} />

      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Folio</TableHeader>
            <TableHeader>Fecha</TableHeader>
            <TableHeader>Vendedor</TableHeader>
            <TableHeader>RUT</TableHeader>
            <TableHeader>Pagado</TableHeader>
            <TableHeader>Detalle</TableHeader>
            <TableHeader>Acciones</TableHeader>
          </TableRow>
        </TableHead>
        {facturaCompra.length > 0 && facturaCompra != null
          ? facturaCompra.map((compra) => (
              <TableBody key={compra.factura._id}>
                <TableRow>
                  <TableData>{compra.factura.folio}</TableData>
                  <TableData>{compra.factura.fecha}</TableData>
                  <TableData>{compra.factura.nombre}</TableData>
                  <TableData>{compra.factura.rut}</TableData>
                  <TableData>
                    {compra.factura.pagado === "false" ? "No pagado" : "Pagado"}
                  </TableData>
                  <TableData>
                    <Button
                      customFontSize={"1vw"}
                      customWidth={"70%"}
                      Hover={"false"}
                      onClick={() => verDetalles(compra._id)}
                    >
                      Ver detalles
                    </Button>
                  </TableData>
                  <TableData>
                    {compra.factura.pagado === "true" ? (
                      "--"
                    ) : (
                      <Button
                        customFontSize={"1vw"}
                        customWidth={"70%"}
                        Hover={"false"}
                        onClick={() => changePaidState()}
                      >
                        Pagar Factura
                      </Button>
                    )}
                  </TableData>
                </TableRow>
              </TableBody>
            ))
          : null}
      </Table>
    </>
  );
};
