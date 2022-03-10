export const MenuGastos = [
  {
    name: "Resumen",
    link: "resumen",
    filter: [
      { name: "No pagados", link: "notPaid" },
      { name: "Pagados", link: "paid" },
      { name: "Por bodega", link: "bybodega" },
    ],
  },
  {
    name: "Agregar Gasto",
    link: "add",
    filter: null,
  },
];
