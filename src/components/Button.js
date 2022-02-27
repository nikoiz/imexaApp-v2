import styled from "styled-components";

export const Button = styled.button`
  background: #334756;
  color: white;
  font-size: 1.5em;
  font-family: Roboto;
  cursor: pointer;
  padding: 0.25em 1em;
  border: solid 2px #1c6dd0;
  border-radius: 4px;
  width: 100%;
  transition: all 0.3s ease-out;
  margin-top: 10px;
  margin-bottom: 20px;

  &:hover {
    background: #FF4C29;
    font-size:1.6em;
    transition: all 0.2s ease;
  }
`;
