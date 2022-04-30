import { useEffect, useState } from "react";
import { FacturasCompra } from "../../example_data_base/DataExample";
import { FormFacturaCompra } from "./Facturas_Compra/FormFacturaCompra";
import { FormFacturaVenta } from "./Facturas_Venta/FormFacturaVenta";

export const AddFactura = (props) => {
  const { tipoFactura } = props;

  const [datosFactura, setDatosFactura] = useState([]);
  const [fetch, setFetch] = useState(false);


  useEffect(() => {
    setFetch(!fetch)
    if (fetch) {
      FacturasCompra.push(datosFactura)
    }
  }, [datosFactura])
  


  return tipoFactura === "compra" ? (
    <FormFacturaCompra factura={setDatosFactura} fetch={setFetch} />
  ) : (
    <FormFacturaVenta />
  );
};
