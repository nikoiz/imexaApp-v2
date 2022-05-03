import React from "react";
import { Button } from "../Button";
import {DatosFactura, ModalBody, ModalContainer, ModalContent, ModalFooter, ModalHeader, ModalTitle, ContainerDatosFactura} from "./modal-styles";
import {Table,TableBody,TableData,TableHead,TableHeader,TableRow,} from "../DashboardImexa/Card/card-table-styles";
import { formatter } from "../DashboardImexa/Card/Card";


export const ModalDetallesGeneral = ( props ) => {
  const { data } = props;

  if (!props.show) {
    return null;
  }

  console.log(data.tipo);

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <ModalTitle> Factura Numero: {data.factura.folio} </ModalTitle>
        </ModalHeader>
        <ModalBody>
          {data.tipo === "compra" ? (
            <ContainerDatosFactura>
              <DatosFactura>
                Nombre Vendedor: {data.factura.nombre}
              </DatosFactura>
              <DatosFactura>RUT Vendedor: {data.factura.rut}</DatosFactura>
              <DatosFactura>Fecha de Compra: {data.factura.fecha}</DatosFactura>
              <DatosFactura>
                Tipo de factura: {data.tipo === "compra" ? "Compra" : "Venta"}
              </DatosFactura>
              <DatosFactura>
                Estado: {data.factura.pagado === "true" ? "Pagada" : "No pagada"}
              </DatosFactura>
            </ContainerDatosFactura>
          ) : (
            <ContainerDatosFactura>
              <DatosFactura>
                Nombre Comprador: {data.factura.nombre}
              </DatosFactura>
              <DatosFactura>RUT Comprador: {data.factura.rut}</DatosFactura>
              <DatosFactura>Fecha de Venta: {data.factura.fecha}</DatosFactura>
              <DatosFactura>
                Tipo de factura: {data.tipo === "compra" ? "Compra" : "Venta"}
              </DatosFactura>
              <DatosFactura>
                Estado:{" "}
                {data.factura.pagado === "true" ? "Pagada" : "No pagada"}
              </DatosFactura>
            </ContainerDatosFactura>
          )}
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>#</TableHeader>
                <TableHeader>Nombre</TableHeader>
                <TableHeader>Cantidad</TableHeader>
                <TableHeader>Valor</TableHeader>
                <TableHeader>Total</TableHeader>
                <TableHeader>Bodega</TableHeader>
              </TableRow>
            </TableHead>
            {data.detalle.length > 0 && data.detalle != null
              ? data.detalle.map((producto, i) => (
                  <TableBody key={producto._id}>
                    <TableRow>
                      <TableData>{i + 1}</TableData>
                      <TableData>{producto.nombreProducto}</TableData>
                      <TableData>{producto.cantidadProducto}</TableData>
                      <TableData>
                        {formatter.format(producto.valorProducto)}
                      </TableData>
                      <TableData>
                        {data.tipo === "compra"
                          ? formatter.format(producto.valorTotalCompra)
                          : formatter.format(producto.valorTotalVenta)}
                      </TableData>
                      <TableData>{producto.bodegaProducto}</TableData>
                    </TableRow>
                  </TableBody>
                ))
              : null}
          </Table>
        </ModalBody>
        <ModalFooter>
          <Button Hover={"false"} onClick={props.onClose}>
            Cerrar Detalles
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};
