import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: rgba(51, 71, 86, 0.8);
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;

  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }

  &:hover {
    color: #ff4c29;
    border: 1px solid rgb(255, 255, 255, 0.4);
    border-radius: 5px;
    background-color: rgb(0, 0, 0, 0.3);
    transition: all 0.2s ease;
  }

  transition: all 0.4s ease-out;
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  text-align: center;
  width:100%;
  height:100%;
  padding:5px;

  &:hover {
    border: 1px solid rgb(255, 255, 255, 0.4);
    border-radius: 5px;
    background-color: rgb(0, 0, 0, 0.3);
    transition: all 0.2s ease;
  }


`;

export const Logo = styled.img`
  padding: 5px;
  margin: 10px;
  max-width: 180px;
  height: auto;
  border: 1px solid rgb(255, 255, 255, 0.4);
  border-radius: 5px;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:15px;
  background-color: rgba(0, 0, 0, 0.7);
  @media (min-width: 700px) {
    display: none;
  }


`;
