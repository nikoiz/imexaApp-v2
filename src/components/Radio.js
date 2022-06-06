import { useField } from "formik";
import styled from "styled-components";

const Label = styled.label`
  color: #eee;
  margin-left: 20px;
`;

const RadioContainer = styled.div`
  box-sizing: border-box;
  padding: 10px;
`;

const InputRadio = styled.input`
  cursor: pointer;

`;

export const Radio = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: "radio" });

  return (
    <RadioContainer>
      <InputRadio type="radio" {...field} {...props} />
      <Label>{label}</Label>
    </RadioContainer>
  );
};
