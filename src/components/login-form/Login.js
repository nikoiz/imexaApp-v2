import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button } from "../Button";
import { Header } from "../Header";
import { Input } from "../Input";
import { ContainerForm } from "./ContainerForm";
import { Titulo } from "./Titulo";

const Login = () => {
  const handleSubmit = ({ user, password }) => {
    console.log({ user, password });
  };
  return (
    <>
      <Header>IMEXA App v2</Header>
      <Formik
        initialValues={{
          user: "",
          password: "",
        }}
        validationSchema={Yup.object({
          user: Yup.string().required("Este campo es obligatorio"),

          password: Yup.string().required("Este campo es obligatorio"),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <ContainerForm>
            <Titulo>Inicio de sesion</Titulo>
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
            <Button type="submit">Iniciar Sesion</Button>
            <Button type="button" onClick={() => console.log('Registrar')}>Registrar Usuario</Button>
          </ContainerForm>
        </Form>
      </Formik>
      {/* <Footer>Contactame</Footer> */}
    </>
  );
};

export default Login;
