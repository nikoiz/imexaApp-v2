import React from "react";
import { Titulo } from "../Card/card-styles";
import { ItemList, LinkStyled } from "./side-menu-styles";

export const SideMenu = ({ data, label }) => {
  return (
    <>
      <Titulo>Menu {label}</Titulo>
      <div>
        {data.map((option) => (
          <LinkStyled key={option.name} to={option.link}>
            {option.hasOwnProperty("accion") ? (
              <ItemList customBg={'#019267'} customMargin={"10%"}>{option.name}</ItemList>
            ) : (
              <ItemList>{option.name}</ItemList>
            )}
          </LinkStyled>
        ))}
      </div>
    </>
  );
};
