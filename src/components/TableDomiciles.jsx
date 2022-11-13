import React from "react";

const TableDomiciles = (props) => {
  const { pedido } = props;
  return (
    <>
      <div  className="flex flex-w w-full">
        {pedido.map((item, index) => {
          return (
            <div key={index} className="rounded  bg-secondary-900  w-60">
              <p>Plato: {item.plato}</p>
              <p>Nombre: {item.nombre}</p>
              <p>Direccion: {item.direccion} </p>
              <p>Telefono: {item.telefono}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TableDomiciles;
