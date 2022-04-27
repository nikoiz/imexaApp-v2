import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
`;
export const ItemList = styled.li`
  border: 1px solid rgba(0, 0, 0, 0.4);
  list-style-type: none;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  transition: all 0.3s ease-out;
  font-family: Roboto;
  margin-left: ${(props) => props.customMargin};
  background-color: ${(props) => props.customBg || 'rgba(4, 28, 50, .85)'};


  &:hover {
    background-color: #ff4c29;
    transition: all 0.2s ease;
  }
`;
