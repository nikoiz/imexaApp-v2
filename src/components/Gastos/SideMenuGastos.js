import React from "react";
import { MenuGastos } from "./gastos-options-menu";
import { ItemList, LinkStyled } from "./side-menu-styles";

export const SideMenuGastos = () => {
  return (
    <>
      <h1>Menu de gastos</h1>
      <div>
        {MenuGastos.map((option) => (
          <LinkStyled key={option.name} to={option.link}>
            <ItemList >{option.name}</ItemList>
          </LinkStyled>
        ))}
      </div>
    </>
  );
};
