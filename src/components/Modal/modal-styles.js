import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalContent = styled.div`
  padding: 10px;
  background-color: #eee;
  color: black;
  border-radius: 5px;
`;
export const ModalHeader = styled.div`
  padding: 10px;
`;
export const ModalFooter = styled(ModalHeader)``;
export const ModalTitle = styled.h4`
  margin: 0;
`;
export const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;
export const DatosFactura = styled.span`
    font-family: 'Roboto'
    color: black;
    font-weight: bold;
    font-size: calc(1 * (0.7vw + 0.7vh));
    border: 1px solid rgba(0,0,0, 0.6);
    border-radius: 5px;
    padding: 15px;
    margin: 5px;
    box-shadow: 2px 2px rgba(0,0,0,0.6);

`;

export const ContainerDatosFactura = styled.div`
  text-align: center;
  box-sizing: border-box;
  margin-bottom: 5%;
  margin-top: 2%;
`;
