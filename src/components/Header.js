import styled from "styled-components";
import React from "react";

const MyHeader = styled.header`
  font-size: 45px;
  font-family: Roboto, Lato, sans-serif;
  background-color: #FEBA33;
  font-weight:bold;
  color: #101010;
  padding: 15px;
  text-align: center;
  box-shadow: 0 5px rgb(40, 0, 0, 0.3);
`;

export const Header = ({ children }) => {
  return <MyHeader>{children}</MyHeader>;
};
