import styled from "styled-components";

export const CardGrid = styled.div`
  padding: 30px;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  height: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
  }
`;
