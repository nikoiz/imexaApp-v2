import * as Yup from "yup";
import { Form, Formik } from "formik";
import React from "react";
import { ContainerForm } from "../login-form/ContainerForm";
import { Input } from "../Input";
import { Radio } from "../Radio";
import { Button } from "../Button";
import { Container } from "../DashboardImexa/container-grid-styles";
import {
  ContainerDatosPersonales,
  ContainerDetalleFactura,
  ContainerFactura,
} from "./form-factura-styles";
import { Titulo } from "../login-form/Titulo";

export const AddFactura = (props) => {
  const { tipoFactura } = props;
  const initialValues = {
    folio: "",
    fecha: "",
    nombre: "",
    rut: "",
    pagado: false,

    nombreProducto: "",
    valorProducto: "",
    cantidadProducto: "",
    valorTotalCompra: "",
  };

  const handleSubmit = () => {
    console.log("click");
  };

  return tipoFactura === "compra" ? (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        folio: Yup.number()
          .required("Este campo es obligatorio")
          .typeError("Debe ser numerico"),
        fecha: Yup.date().required("Este campo es obligatorio"),
        nombre: Yup.string().required("Este campo es obligatorio"),
        rut: Yup.string().required("Este campo es obligatorio"),
        pagado: Yup.boolean().required("Este campo es obligatorio"),
        nombreProducto: Yup.string().required("Este campo es obligatorio"),
        valorProducto: Yup.number()
          .required("Este campo es obligatorio")
          .typeError("Debe ser numerico"),
        cantidadProducto: Yup.number()
          .required("Este campo es obligatorio")
          .typeError("Debe ser numerico"),
        valorTotalCompra: Yup.number()
          .required("Este campo es obligatorio")
          .typeError("Debe ser numerico"),
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <ContainerFactura>
          <ContainerDatosPersonales>
            <Titulo>Datos Comprador</Titulo>

            <Input
              autoComplete="folio-factura"
              type="text"
              name="folio"
              placeholder="Folio de factura"
            />
            <Input
              autoComplete="fecha-factura"
              type="date"
              name="fecha"
              placeholder="Fecha de factura"
            />
            <Input
              autoComplete="nombre-factura"
              type="text"
              name="nombre"
              placeholder="Nombre representante empresa"
            />
            <Input
              autoComplete="rut-factura"
              type="text"
              name="rut"
              placeholder="RUT"
            />
            <Radio name="pagado" value="true" label="Pagado" />
            <Radio name="pagado" value="false" label="No pagado" />
          </ContainerDatosPersonales>
          <ContainerDetalleFactura>
            <Titulo>Detalles de compra</Titulo>
            <Input
              autoComplete="nombre-producto"
              type="text"
              name="nombreProducto"
              placeholder="Nombre del producto"
            />
            <Input
              autoComplete="valor-producto"
              type="text"
              name="valorProducto"
              placeholder="Valor del producto"
            />{" "}
            <Input
              autoComplete="cantidad-producto"
              type="text"
              name="cantidadProducto"
              placeholder="Cantidad"
            />{" "}
            <Input
              autoComplete="valor-total-producto"
              type="text"
              name="valorTotalCompra"
              placeholder="Valor Total"
            />
            <Button type="button">Agregar producto</Button>
          </ContainerDetalleFactura>
        </ContainerFactura>
        <Button type="submit">Agregar Factura</Button>
      </Form>
    </Formik>
  ) : (
    <h1 style={{ color: "black" }}>Aqui ira el form de venta</h1>
  );
};
