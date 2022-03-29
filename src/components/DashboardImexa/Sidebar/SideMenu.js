import React from "react";
import { ItemList, LinkStyled } from "./side-menu-styles";

export const SideMenu = ({ data, label }) => {
  return (
    <>
      <h1>Menu {label}</h1>
      <div>
        {data.map((option) => (
          <LinkStyled key={option.name} to={option.link}>
            <ItemList>{option.name}</ItemList>
          </LinkStyled>
        ))}
      </div>
    </>
  );
};
