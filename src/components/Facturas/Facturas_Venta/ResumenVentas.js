import React, { useState } from "react";
import { FacturaVenta } from "../../../example_data_base/DataExample";
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

export const ResumenVentas = () => {

  const [facturaVenta, setFacturaVenta] = useState(FacturaVenta);
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(null)

  const verDetalles = ( _id ) => {
    setShowModal(true)
    setData(facturaVenta.find( venta => venta._id === _id))
  }

  return (
    <>
      <Modal data={data} show={showModal} onClose={() => setShowModal(false)} tipo={'venta'} />

      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Folio</TableHeader>
            <TableHeader>Fecha</TableHeader>
            <TableHeader>Comprador</TableHeader>
            <TableHeader>RUT</TableHeader>
            <TableHeader>Pagado</TableHeader>
            <TableHeader>Detalle</TableHeader>
            {/* <TableHeader>Acciones</TableHeader> */}
          </TableRow>
        </TableHead>
        {facturaVenta.length > 0 && facturaVenta != null
          ? facturaVenta.map((venta) => (
              <TableBody key={venta.factura._id}>
                <TableRow>
                  <TableData>{venta.factura.folio}</TableData>
                  <TableData>{venta.factura.fecha}</TableData>
                  <TableData>{venta.factura.nombre}</TableData>
                  <TableData>{venta.factura.rut}</TableData>
                  <TableData>
                    {venta.factura.pagado === "false" ? "No pagado" : "Pagado"}
                  </TableData>
                  <TableData>
                    <Button
                      customFontSize={"1vw"}
                      customWidth={"70%"}
                      Hover={"false"}
                      onClick={() => verDetalles(venta._id)}
                    >
                      Ver detalles
                    </Button>
                  </TableData>
{/* 
                  <TableData>
                    {venta.factura.pagado === "true" ? (
                      "--"
                    ) : (
                      <Button
                        customFontSize={"1vw"}
                        customWidth={"70%"}
                        Hover={"false"}
                        // onClick={() => changePaidState(compra._id)}
                      >
                        Pagar Factura
                      </Button>
                    )}
                  </TableData> */}
                </TableRow>
              </TableBody>
            ))
          : null}
      </Table>
    </>
  );
};
