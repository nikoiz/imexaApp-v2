import styled from "styled-components";
import React from "react";

const MyHeader = styled.header`
  font-size: 45px;
  font-family: Lato, Roboto, sans-serif;
  background-color: #334756;
  color: #fff;
  padding: 15px;
  text-align: center;
  box-shadow: 0 5px rgb(40, 0, 0, 0.3);
`;

export const Header = ({ children }) => {
  return <MyHeader>{children}</MyHeader>;
};
