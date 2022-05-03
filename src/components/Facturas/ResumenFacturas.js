import React, { useState } from "react";
import {
  FacturasCompra,
  FacturaVenta,
} from "../../example_data_base/DataExample";
import { Button } from "../Button";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "../DashboardImexa/Card/card-table-styles";
import { Modal } from "../Modal/Modal";

export const ResumenFacturas = () => {
  const [facturas, setFacturas] = useState([...FacturaVenta, ...FacturasCompra]);
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(null)

  const verDetalles = ( _id ) => {
    setShowModal(true)
    setData(facturas.find( general => general._id === _id))
  }

  return (
    <>
      <Modal data={data} show={showModal} onClose={() => setShowModal(false)} tipo={'general'} />

      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Folio</TableHeader>
            <TableHeader>Fecha</TableHeader>
            <TableHeader>Empresa/Nombre</TableHeader>
            <TableHeader>RUT</TableHeader>
            <TableHeader>Tipo de factura</TableHeader>
            <TableHeader>Pagado</TableHeader>
            <TableHeader>Detalle</TableHeader>
            {/* <TableHeader>Acciones</TableHeader> */}
          </TableRow>
        </TableHead>
        {facturas.length > 0 && facturas != null
          ? facturas.map(( general ) => (
              <TableBody key={general.factura._id}>
                <TableRow>
                  <TableData>{general.factura.folio}</TableData>
                  <TableData>{general.factura.fecha}</TableData>
                  <TableData>{general.factura.nombre}</TableData>
                  <TableData>{general.factura.rut}</TableData>
                  <TableData>{general.tipo === 'compra' ? 'Compra' : 'Venta'}</TableData>
                  <TableData>
                    {general.factura.pagado === "false" ? "No pagado" : "Pagado"}
                  </TableData>
                  <TableData>
                    <Button
                      customFontSize={"1vw"}
                      customWidth={"70%"}
                      Hover={"false"}
                      onClick={() => verDetalles(general._id)}
                    >
                      Ver detalles
                    </Button>
                  </TableData>
{/* 
                  <TableData>
                    {general.factura.pagado === "true" ? (
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
