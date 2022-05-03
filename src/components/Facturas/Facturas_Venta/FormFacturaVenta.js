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
import _uniqueId  from 'lodash/uniqueId'
import { formatter } from "../../DashboardImexa/Card/Card";
import { TableProductosAgregados } from "../TableProductosAgregados";


export const FormFacturaVenta = ( props ) => {

  const [producto, setProducto] = useState([])
  const [venta, setVenta] = useState({ factura: {}, detalle: [] })
    
  const initialValues = {
    folio: "", fecha: "", nombre: "", rut: "", pagado: false,
    nombreProducto: "", valorProducto: "", cantidadProducto: "", valorTotalVenta: "",bodegaProducto: "",
  };

  const handleSubmit = (values , { resetForm }) => {
    console.log('Clicked');
    if ( Object.keys(venta.factura).length > 0 && Object.keys(venta.detalle).length > 0 ) {
      props.fetch(true);
      props.factura(venta);
      resetForm(values);
      setVenta({ factura: {} , detalle: [] })
      setProducto([])
      alert("Factura creada");
    } else {
      alert("Se deben agregar productos para crear factura.");
    }
  };

  const handleAgregarProducto = (values, isValid) => {
      
    const { folio, fecha, nombre, rut, pagado, nombreProducto, valorProducto, cantidadProducto, bodegaProducto } = values;
    const prefix = Math.random().toString(36).slice(2);
    const prefixFactura = Math.random().toString(36).slice(2);
    const prefixDetalle = Math.random().toString(36).slice(2);

    const detalleProducto = {
      _id: _uniqueId(prefixDetalle + '-' + folio + '-' + nombreProducto.slice(0, 4) + "-"),
      nombreProducto: nombreProducto,
      valorProducto: valorProducto,
      cantidadProducto: cantidadProducto,
      valorTotalVenta: valorProducto * cantidadProducto,
      bodegaProducto: bodegaProducto,
    };

    const datosFactura = {
      _id: _uniqueId(prefixFactura + '-' + folio + "-" ),
      folio: folio,
      fecha: fecha,
      nombre: nombre,
      rut: rut,
      pagado: pagado,
    };

    if (isValid) {
      if (Object.keys(venta.factura).length === 0) {
        setVenta({
          ...venta,
          _id: _uniqueId(prefix + "-" + folio + "-"),
          tipo:'venta',
          factura: { ...datosFactura },
          detalle: [...venta.detalle, detalleProducto],
        });
        setProducto([...producto, detalleProducto]);

        alert("Factura creada \nProducto agregado");
      } else if (Object.keys(venta.factura).length > 0) {
        setVenta({ ...venta, detalle: [...venta.detalle, detalleProducto] });
        setProducto([...producto, detalleProducto]);
        alert("Producto agregado");
      }
    } else {
      alert("Falta completar campos");
    }      
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        folio: Yup.number().required("Este campo es obligatorio").typeError("Debe ser numerico"),
        fecha: Yup.date().required("Este campo es obligatorio"),
        nombre: Yup.string().required("Este campo es obligatorio"),
        rut: Yup.string().required("Este campo es obligatorio"),
        pagado: Yup.boolean().required("Este campo es obligatorio"),
        nombreProducto: Yup.string().required("Este campo es obligatorio"),
        valorProducto: Yup.number().required("Este campo es obligatorio").typeError("Debe ser numerico"),
        cantidadProducto: Yup.number().required("Este campo es obligatorio").typeError("Debe ser numerico"),
        valorTotalVenta: Yup.number().typeError("Debe ser numerico"),
        bodegaProducto: Yup.string().required("Este campo es obligatorio"),
      })}
      onSubmit={handleSubmit}
      initialErrors={initialValues}
    >
      {({ dirty, isValid, values }) => (

      <Form>
        <ContainerFactura>

          <ContainerDatosPersonales>
            <Titulo>Datos Comprador</Titulo>
            <Input autoComplete="folio-factura" type="text" name="folio" placeholder="Folio de factura"/>
            <Input autoComplete="fecha-factura" type="date" name="fecha" placeholder="Fecha de factura"/>
            <Input autoComplete="nombre-factura" type="text" name="nombre" placeholder="Nombre representante empresa"/>
            <Input autoComplete="rut-factura" type="text" name="rut" placeholder="RUT"/>
            <Radio name="pagado" value="true" label="Pagado" />
            <Radio name="pagado" value="false" label="No pagado" />
          </ContainerDatosPersonales>
          
          <ContainerDetalleFactura>
            <Titulo>Detalle de Venta</Titulo>
            <Input autoComplete="nombre-producto" type="text" name="nombreProducto" placeholder="Nombre del producto"/>
            <Input autoComplete="valor-producto" type="text" name="valorProducto" placeholder="Valor del producto"/>{" "}
            <Input autoComplete="cantidad-producto" type="text" name="cantidadProducto" placeholder="Cantidad"/> 
            <Input 
            autoComplete="valor-total-producto" 
            type="text" 
            name="valorTotalVenta" 
            placeholder="Valor Total"
            value={formatter.format(values.cantidadProducto * values.valorProducto)} 
            disabled
            />
            <Input autoComplete="bodega-producto" type="text" name="bodegaProducto" placeholder="Bodega"/>
            <Button type="button" onClick={() => handleAgregarProducto( values , isValid )} disabled={!isValid || !dirty}>Agregar producto</Button>
          </ContainerDetalleFactura>

        </ContainerFactura>
        <Button type="submit" disabled={!isValid || !dirty}>Crear Factura</Button>

        {producto.length > 0 && producto !== null ? (
          <TableProductosAgregados data={producto} tipo={'venta'}/>
        ) : (null)}
      </Form>
      )}
   </Formik>
  );
};
