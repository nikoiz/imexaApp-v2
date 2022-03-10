import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Gastos } from "../../example_data_base/DataExample";
import { Button } from "../Button";
import { Input } from "../Input";
import { ContainerForm } from "../login-form/ContainerForm";
import { Titulo } from "../login-form/Titulo";
import { Radio } from "../Radio";


export const AddGasto = () => {
  const initialValues = { description: "", value: "", pagado: "", warehouse: '' };

  const handleSubmit = ({ description, value, pagado, warehouse }, { resetForm }) => {
    Gastos.push({
      _id: Math.floor(Math.random() * 124210),
      description: description,
      value: value,
      warehouse: warehouse,
      date: currentDate(),
      paid: pagado === 'true'
    });
    resetForm({ description: "", value: "", pagado: "" , warehouse: ''});

  };

  const currentDate = () => {
    
    let today = new Date()
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
    return date
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          description: Yup.string().required("Este campo es obligatorio"),
          value: Yup.number().required("Este campo es obligatorio").typeError("Este campo debe ser un numero"),
          pagado: Yup.boolean().required("Este campo es obligatorio"),
          warehouse: Yup.string().required("Este campo es obligatorio"),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <ContainerForm>
            <Titulo>Agregar un gasto</Titulo>
            <Input
              autoComplete="name-gasto"
              type="text"
              name="description"
              placeholder="Nombre de gasto"
            />
            <Input
              autoComplete="valor"
              type="text"
              name="value"
              placeholder="Valor del gasto"
            />
            <Input
              autoComplete="bodega"
              type="text"
              name="warehouse"
              placeholder="Bodega correspondiente"
            />
            <Radio name="pagado" value="true" label="Pagado" />
            <Radio name="pagado" value="false" label="No pagado" />

            <Button type="submit">Agregar Gasto</Button>
          </ContainerForm>
        </Form>
      </Formik>
    </>
  );
};
