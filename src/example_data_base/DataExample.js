export const Gastos = [
  {
    _id: "62256f6322caeba58d1aba97",
    description: "POOCHIES",
    value: 2237839,
    warehouse: "Catharine 3",
    date: "29-01-2022",
    paid: false,
  },
  {
    _id: "62256f637033231d1c458b8a",
    description: "ISOLOGIA",
    value: 1812760,
    warehouse: "Rosine 0",
    date: "21-01-2022",
    paid: false,
  },
  {
    _id: "62256f63f1df4699a7370ff7",
    description: "COWTOWN",
    value: 3089917,
    warehouse: "Moraida 3",
    date: "13-01-2022",
    paid: false,
  },
  {
    _id: "62256f630415620e5ebaa92c",
    description: "SUNCLIPSE",
    value: 152774,
    warehouse: "Thermal 0",
    date: "17-02-2022",
    paid: false,
  },
  {
    _id: "62256f63346449ec3a65a66a",
    description: "PORTALIS",
    value: 650766,
    warehouse: "Tecolotito 2",
    date: "05-02-2022",
    paid: false,
  },
  {
    _id: "62256f63417a66f8f0ae3d72",
    description: "GINK",
    value: 782668,
    warehouse: "Gorst 1",
    date: "25-01-2022",
    paid: false,
  },
  {
    _id: "62256f63d13504e1681311cc",
    description: "IMAGEFLOW",
    value: 1142907,
    warehouse: "Belgreen 1",
    date: "12-01-2022",
    paid: true,
  },
  {
    _id: "62256f63df611f665af64bb9",
    description: "EQUITAX",
    value: 1113109,
    warehouse: "Moscow 0",
    date: "19-01-2022",
    paid: false,
  },
];

export const FacturasCompra = [
  {
    _id: "111119871",
    tipo:'compra',
    factura: {
      _id: "62257001e6bf96613e3c5428987",
      folio: "111111",
      fecha: "2022-03-05",
      nombre: "Nicolas Rozas",
      rut: "11.111.111-1",
      pagado: false ,
    },
    detalle: [
      {
        _id: "11119874521111",
        nombreProducto: "Manzanas",
        valorProducto: "15000",
        cantidadProducto: "2",
        valorTotalCompra: "30000",
        bodegaProducto: "Bodega 1",
      },
    ],
  },
];

export const FacturaVenta = [
  {
    _id: "11143589111",
    tipo:'venta',
    factura: {
      _id: "62257001e6bf96613e3c5428321321",
      folio: "222222",
      fecha: "2022-03-05",
      nombre: "Nicolas Rozas",
      rut: "11.111.111-1",
      pagado: false,
    },
    detalle: [
      {
        _id: "111165651111",
        nombreProducto: "Peras",
        valorProducto: "15000",
        cantidadProducto: "2",
        valorTotalVenta: "30000",
        bodegaProducto: "Bodega 1",
      },
    ],
  },
];

export const Inventario = [
  {
    _id: "62257074ff16bd9858871455",
    warehouse: "Fairacres 1",
    value: 2766504,
  },
  {
    _id: "622570749ea79f8eafd2a661",
    warehouse: "Southmont 3",
    value: 3886253,
  },
  {
    _id: "622570745890e9e1d9e7f54a",
    warehouse: "Dixie 3",
    value: 2816994,
  },
  {
    _id: "62257074e58d6801a4c7a5a7",
    warehouse: "Coral 1",
    value: 1429120,
  },
  {
    _id: "62257074da3173451e08ac7a",
    warehouse: "Derwood 3",
    value: 1883433,
  },
  {
    _id: "622570744c224b67c019f59e",
    warehouse: "Marysville 1",
    value: 2589656,
  },
  {
    _id: "62257074912eca46f187fcdf",
    warehouse: "Bakersville 2",
    value: 3613937,
  },
];

export const Bodega = [
  {
    _id: 1,
    nombre_bodega: "Bodega numero 1",
  },
];

/* FacutraCompra = [{
    _id: "62257001e6bf96613e3c5428",
    description: "TECHADE",
    value: 1042550,
    warehouse: "Downsville 1",
    date: "05-03-2022",
    paid: true,  

      detalle: [{
        _id: x,
        nombre_producto: x,
        valor_producto:x,
        cantidad:x, 
        total_valor_producto: x,
        bodega: x,
      }]
}]

export const Inventario = [

  {
    _id: "62257074ff16bd9858871455",
    warehouse: "Fairacres 1",
    value: 2766504,
      detalle_inventario: [{
        nombre_producto: x,
        cantidad_producto: x,
        valor_producto:x,
        total_valor_producto: x,  
    }]
  },


*/
