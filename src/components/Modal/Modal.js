import React from "react";
import { ModalDetallesCompra } from "./ModalDetallesCompra";
import { ModalDetallesVenta } from "./ModalDetallesVenta";

export const Modal = (props) => {
  
  const { data, tipo, show, onClose } = props;

  return (
    <>
      {tipo === "compra" ? (
        <ModalDetallesCompra data={data} show={show} onClose={onClose} />
      ) : tipo === "venta" ? (
        <ModalDetallesVenta data={data} show={show} onClose={onClose} />
      ) : null}
    </>
  );
};
