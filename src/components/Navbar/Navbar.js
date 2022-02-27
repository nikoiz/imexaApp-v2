import React, { useState } from "react";
import LogoImg from "../../assets/NavLogo.png";
import {
  LeftContainer,
  Logo,
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
  OpenLinksButton,
  RightContainer,
} from "./Navbar.styles";

export const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to={"/"}>Inventario</NavbarLink>
            <NavbarLink to={"/2"}>Gastos</NavbarLink>
            <NavbarLink to={"/3"}>Facturas</NavbarLink>
            <NavbarLink to={"/4"}>Salir</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to={"/"}>Inventario</NavbarLinkExtended>
          <NavbarLinkExtended to={"/2"}>Gastos</NavbarLinkExtended>
          <NavbarLinkExtended to={"/3"}>Facturas</NavbarLinkExtended>
          <NavbarLinkExtended to={"/4"}>Salir</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};
