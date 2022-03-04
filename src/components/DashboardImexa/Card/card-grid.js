import styled from "styled-components";

export const CardGrid = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "content";
  }
`;
