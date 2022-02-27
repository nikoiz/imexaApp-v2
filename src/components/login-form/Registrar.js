import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { ContainerForm } from "./ContainerForm";
import { Titulo } from "./Titulo";
import { Input } from "../Input";
import { Button } from "../Button";
import { Header } from "../Header";
import { useNavigate } from "react-router-dom";

export const Registrar = () => {
  let navigate = useNavigate();
    const configYup = {
    requiredMessage: "Este campo es obligatorio",
    passwordMessage: "Las passwords no coinciden",
  };
  const initialValues = {
    name: "",
    user: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = ({ name, user, password, confirmPassword }) => {
    console.log({ name, user, password, confirmPassword });
  };
  return (
    <>
      <Header>IMEXA App v2</Header>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          name: Yup.string().required(configYup.requiredMessage),
          user: Yup.string().required(configYup.requiredMessage),
          password: Yup.string().required(configYup.requiredMessage),
          confirmPassword: Yup.string()
            .required(configYup.requiredMessage)
            .oneOf([Yup.ref("password"), null], configYup.passwordMessage),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <ContainerForm>
            <Titulo>Registrate</Titulo>
            <Input
              autoComplete="name"
              type="text"
              name="name"
              placeholder="Nombre Completo"
            />
            <Input
              autoComplete="user-name"
              type="text"
              name="user"
              placeholder="Usuario"
            />
            <Input
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Password"
            />
            <Input
              type="password"
              name="confirmPassword"
              autoComplete="current-password"
              placeholder="Confirm Password"
            />
            <Button type="submit">Registrar</Button>
            <Button type="button" onClick={() => navigate("/")}>
              Volver
            </Button>
          </ContainerForm>
        </Form>
      </Formik>
    </>
  );
};
