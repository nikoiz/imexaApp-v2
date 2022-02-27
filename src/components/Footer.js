import React from "react";
import styled from "styled-components";

const MyFooter = styled.footer`
  font-size: 45px;
  font-family: Lato, Roboto, sans-serif;
  background-color: #334756;
  color: #fff;
  padding: 15px;
  text-align: center;
  box-shadow: 0 5px rgb(40, 0, 0, 0.3);
`;

export const Footer = ({ children }) => {
  return <MyFooter>{children}</MyFooter>;
};
