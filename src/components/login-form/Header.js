import styled from "styled-components";
import React from "react";

const MyHeader = styled.div`
  font-size: 45px;
  font-family: Roboto, Lato, sans-serif;
  background-color: #3A9188;
  font-weight:bold;
  color: #eee;
  padding: 15px;
  text-align: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);

`;

export const Header = ({ children }) => {
  return <MyHeader>{children}</MyHeader>;
};
