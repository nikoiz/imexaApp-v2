import styled from "styled-components";

export const Main = styled.div`
  background:  "#B8E1DD"};
  border-radius: 4px;
  box-sizing: border-box;
  color: white;
  height: 100%;
  grid-area: main;
  padding: ${(props) => props.customPadding || 0}px;
`;
