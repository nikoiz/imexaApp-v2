import { useField } from "formik";
import React from "react";
import styled from "styled-components";

const MyInput = styled.input`
  outline: none;
  padding: 8px;
  margin-bottom: 25px;
  box-sizing: border-box;
  border: solid 2px rgba(0,0,0,0.5);
  border-radius: 4px;
  width: 100%;
  font-size: 18px;
  font-family: Lato
`;

const ErrorDialog = styled.div`
  margin-bottom: 20px;
  font-weight: bold;
  color: #d82148;
`;

export const Input = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <MyInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorDialog>{meta.error}</ErrorDialog>
      ) : null}
    </>
  );
};
