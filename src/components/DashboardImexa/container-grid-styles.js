import styled from "styled-components";

export const Container = styled.div`
  height: calc(100% - 80px);
  box-sizing: border-box;
  padding: 5px;
  color: white;

  display: grid;
  grid-gap: 0.25rem;
  grid-template-columns: 0.2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "sidebar main main main";
  transition: all 0.25s ease-in-out;
  font-size: calc(1 * (0.7vw + 0.7vh));


  @media (max-width:${(props) => props.maxWidth || 750}px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "sidebar"
      "main";
  }
`;
