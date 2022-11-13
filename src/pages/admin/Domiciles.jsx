import React, { useState } from "react";
import TableDomiciles from "../../components/TableDomiciles";

const Domiciles = () => {
  const [pedido, setPedido] = useState([]);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [plato, setPlato] = useState("");

  function addPedido() {
    let objPedido = {
      nombre: nombre,
      telefono: telefono,
      direccion: direccion,
      plato: plato,
    };
    setPedido([...pedido.concat(objPedido)]);
    form.reset();
  }

  return (
    <>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-sky-500">Domicilios</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Nombre completo <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  onChange={(e) => {
                    setNombre(e.target.value);
                  }}
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Nombres"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Nombre Plato<span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                onChange={(e) => {
                  setPlato(e.target.value);
                }}
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Plato"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Número de contacto <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                onChange={(e) => {
                  setTelefono(e.target.value);
                }}
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="+573015984814"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Direccion <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                onChange={(e) => {
                  setDireccion(e.target.value);
                }}
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Frandev.tech"
              />
            </div>
          </div>
        </form>

        <div className="flex justify-end">
          <button
            onClick={addPedido}
            className="bg-sky-500 text-black py-2 px-4 rounded-lg hover:bg-sky-400 transition-colors"
          >
            Guardar
          </button>
        </div>
        <hr className="my-8 border-gray-500/30" />
        <TableDomiciles pedido={pedido} />
      </div>
    </>
  );
};

export default Domiciles;
