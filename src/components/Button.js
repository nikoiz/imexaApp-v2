import styled from "styled-components";

export const Button = styled.button`
  background: #1B515B;
  color: white;
  font-size: ${(props) => props.customFontSize || "1.5em"};
  font-family: Roboto;
  cursor: pointer;
  padding: 0.25em 1em;
  border: solid 2px #101010 ;
  border-radius: 4px;
  width: ${(props) => props.customWidth || "100%"};
  transition: all 0.3s ease-out;
  margin-top: 10px;
  margin-bottom: 20px;

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
    &:hover {
      background: gray;
      width: ${(props) => props.customWidth || "100%"};
      font-size: ${(props) => props.customFontSize || "1.5em"};

    }
  }

  ${(props) =>
    props.Hover === "false"
      ? `&:hover {
    background: #FF4C29;
    transition: all 0.2s ease;
  }`
      : `&:hover {
        background: #101010;
        font-size:1.6em;
        transition: all 0.2s ease;
      }`}
`;
