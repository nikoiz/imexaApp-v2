import React from "react";
import styled from "styled-components";

const MySidebar = styled.div`
  background: #9aaab7;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-sizing: border-box;
  height: 100%;
  grid-area: sidebar;
  min-width: 300px;
  padding: 0.5rem;
`;

export const Sidebar = ({ children }) => {
  return <MySidebar>{children}</MySidebar>;
};
