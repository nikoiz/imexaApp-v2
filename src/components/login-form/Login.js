import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Button } from "../Button";
import { Header } from "../Header";
import { Input } from "../Input";
import { ContainerForm } from "./ContainerForm";
import { Titulo } from "./Titulo";

const Login = () => {
  const initialValues = { user: "", password: "" };
  let navigate = useNavigate();

  const handleSubmit = ({ user, password }) => {
    const loggedIn = true;

    if (loggedIn) {
      navigate("dashboardImexa");
    } else {
      navigate("/");
    }
  };
  

  return (
    <>
      <Header>IMEXA App v2</Header>
      <Formik
        initialValues={initialValues}
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
            <Button type="submit">Entrar</Button>
            <Button type="button" onClick={() => navigate('/registrar')}>
              Crear cuenta
            </Button>
          </ContainerForm>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
