import * as Yup from "yup";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import {
  ContainerDatosPersonales,
  ContainerDetalleFactura,
  ContainerFactura,
} from "../form-factura-styles";
import { Titulo } from "../../login-form/Titulo";
import { Input } from "../../Input";
import { Radio } from "../../Radio";
import { Button } from "../../Button";
import { TableProductosAgregados } from "../TableProductosAgregados";

export const FormFacturaCompra = (props) => {
  const [producto , setProducto] = useState([])

  const compra = {
    factura: {},
    detalle: [],
  };

  const initialValues = { 
    folio: "", fecha: "", nombre: "", rut: "", pagado: false,
    nombreProducto: "", valorProducto: "", cantidadProducto: "", valorTotalCompra: "", bodegaProducto: "",
  };

  const handleSubmit = ({ resetForm }) => {

    console.log(compra);

    console.log(Object.keys(compra.factura).length , Object.keys(compra.detalle).length  );

    if ( Object.keys(compra.factura).length > 0 && Object.keys(compra.detalle).length > 0 ) {
      props.fetch(true);
      props.factura(compra);
      resetForm({folio: "", fecha: "", nombre: "", rut: "", pagado: "", nombreProducto: "", valorProducto: "", cantidadProducto: "", valorTotalCompra: "", bodegaProducto: "",});
    } else {
      alert("Se deben agregar productos para crear factura.");
    }
  };

  const handleAgregarProducto = (value) => {
    const {folio, fecha, nombre, rut, pagado, nombreProducto, valorProducto, cantidadProducto, valorTotalCompra, bodegaProducto,} = value;

    const detalleProducto = {
      nombreProducto: nombreProducto,
      valorProducto: valorProducto,
      cantidadProducto: cantidadProducto,
      valorTotalCompra: valorTotalCompra,
      bodegaProducto: bodegaProducto }

    if (Object.keys(compra.factura).length === 0) {

      compra.factura = {
        folio: folio,
        fecha: fecha,
        nombre: nombre,
        rut: rut,
        pagado: pagado,
      };

      if (
        folio === "" ||
        fecha === "" ||
        nombre === "" ||
        rut === "" ||
        pagado === "" ||
        nombreProducto === "" ||
        valorProducto === "" ||
        cantidadProducto === "" ||
        valorTotalCompra === "" ||
        bodegaProducto === ""
      ) {
        alert("Se deben agregar productos para crear factura.");
      } else {

        compra.detalle.push(detalleProducto);
        setProducto([...producto, detalleProducto])

        alert("Producto agregado");
      }

      // resetForm({ values: { nombreProducto: "", valorProducto: "", cantidadProducto: "", valorTotalCompra: "", bodegaProducto: "",} });
    } else if (Object.keys(compra.factura).length > 0) {
      if (
        folio === "" ||
        fecha === "" ||
        nombre === "" ||
        rut === "" ||
        pagado === "" ||
        nombreProducto === "" ||
        valorProducto === "" ||
        cantidadProducto === "" ||
        valorTotalCompra === "" ||
        bodegaProducto === ""
      ) {
        alert("Se deben agregar productos para crear factura.");
      } else {
        compra.detalle.push(detalleProducto);
        setProducto([...producto, detalleProducto])
        alert("Producto agregado");
      }

      // resetForm({ values: { nombreProducto: "...Cargando", valorProducto: "Cargando", cantidadProducto: "Cargando", valorTotalCompra: "Cargando", bodegaProducto: "Cargando",} });
    }

    console.log(compra);
  };

  return (
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
        bodegaProducto: Yup.string().required("Este campo es obligatorio"),
      })}
      onSubmit={handleSubmit}
    >
      {({ dirty, isValid, values }) => (
        <Form>
          <ContainerFactura>
            <ContainerDatosPersonales>
              <Titulo>Datos Vendedor</Titulo>
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
              <Titulo>Detalle de compra</Titulo>
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
              />
              <Input
                autoComplete="cantidad-producto"
                type="text"
                name="cantidadProducto"
                placeholder="Cantidad"
              />
              <Input
                autoComplete="valor-total-producto"
                type="text"
                name="valorTotalCompra"
                placeholder="Valor Total"
              />
              <Input
                autoComplete="bodega-producto"
                type="text"
                name="bodegaProducto"
                placeholder="Bodega"
              />
              <Button
                type="button"
                onClick={() => handleAgregarProducto(values)}
                disabled={!dirty || !isValid}
              >
                Agregar producto
              </Button>
            </ContainerDetalleFactura>
          </ContainerFactura>

          <Button type="submit">Crear Factura</Button>
        {producto.length > 0 && producto !== null ? (
          <TableProductosAgregados data={producto}/>
        ) : (null)}

        </Form>
      )}
    </Formik>
  );
};
