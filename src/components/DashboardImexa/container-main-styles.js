import styled from "styled-components";

export const Main = styled.div`
  background: ${(props) => props.customBackground || "#101010"};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-sizing: border-box;
  color: white;
  height: 100%;
  grid-area: main;
  padding: ${(props) => props.customPadding || 0}px;
`;
