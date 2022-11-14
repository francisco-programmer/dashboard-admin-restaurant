import React from "react";

const TableDomiciles = (props) => {
  const { pedido } = props;
  return (
    <>

<div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
