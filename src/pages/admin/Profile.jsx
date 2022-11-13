import React, { useState } from "react";

// Icons
import {
  RiEdit2Line,
  RiShieldCheckLine,
  RiErrorWarningLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";

const Profile = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      {/* Profile */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-sky-500">Perfil</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p>Avatar</p>
            </div>
            <div className="flex-1">
              <div className="relative mb-2">
                <img
                  src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="w-28 h-28 object-cover rounded-lg"
                />
                <label
                  htmlFor="avatar"
                  className="absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-2 left-24"
                >
                  <RiEdit2Line />
                </label>
                <input type="file" id="avatar" className="hidden" />
              </div>
              <p className="text-gray-500 text-sm">
                Tipos de archivo: png, jpg, jpeg.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Nombre completo <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Nombres"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Apellidos"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Nombre de la empresa <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Empresa"
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
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="+573015984814"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Página web <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Frandev.tech"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                País <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none">
                <option value="Argentina">Argentina</option>
                <option value="Colombia">Colombia</option>
                <option value="México">México</option>
                <option value="Perú">Perú</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Ciudad <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none">
                <option value="Monteria">Monteria</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Buga">Buga</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="Ciudad de México">Ciudad de México</option>
                <option value="Lima">Lima</option>
                <option value="Montevideo">Montevideo</option>
                <option value="Caracas">Caracas</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-sky-500 text-black py-2 px-4 rounded-lg hover:bg-sky-400 transition-colors">
            Guardar
          </button>
        </div>
      </div>
      {/* Change password */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Usuario y contraseña</h1>
        <hr className="my-8 border-gray-500/30" />
        <form className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-100 text-xl mb-1">Correo electrónico</h5>
              <p className="text-gray-500 text-sm">francisco@gmail.com</p>
            </div>
            <div>
              <button className="w-full md:w-auto bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors">
                Cambiar email
              </button>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-100 text-xl mb-1">Contraseña</h5>
              <p className="text-gray-500 text-sm">****************</p>
            </div>
            <div>
              <button className="w-full md:auto bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors">
                Cambiar contraseña
              </button>
            </div>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-8 items-center gap-y-4 bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600">
          <div className="flex justify-center">
            <RiShieldCheckLine className="text-5xl text-green-600" />
          </div>
          <div className="md:col-span-6">
            <h5 className="text-gray-100 text-xl mb-2">Asegura tu cuenta</h5>
            <p className="text-gray-500">
            La autenticación de dos factores agrega una capa adicional de seguridad a su cuenta. Para iniciar sesión, además deberá proporcionar un código de 6 dígitos
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-green-600/70 hover:bg-green-600 transition-colors py-2 px-4 rounded-lg text-gray-100">
              Activar
            </button>
          </div>
        </div>
      </div>
      {/* Connected accounts */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Conectar con cuentas</h1>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex flex-col md:flex-row gap-4 items-center bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600 mb-8">
          <div className="flex justify-center">
            <RiShieldCheckLine className="text-5xl text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-500">
            La autenticación de dos factores agrega una capa adicional 
            de seguridad a su cuenta. Para iniciar sesión, deberá proporcionar
             un código asombroso de 4 dígitos. Aprende más{" "}
              <Link to="/" className="text-green-400">
                ver mas
              </Link>
            </p>
          </div>
        </div>
        <form className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                className="w-8 h-8 object-cover"
              />
              <div className="flex flex-col gap-y-1">
                <h5 className="text-gray-100">Google</h5>
                <p className="text-gray-500 text-sm">
                Planifica adecuadamente tu flujo de trabajo
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-primary" : "bg-secondary-900"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled
                      ? "translate-x-6 bg-secondary-900"
                      : "translate-x-1 bg-gray-500"
                  } inline-block h-4 w-4 transform rounded-full transition`}
                />
              </Switch>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                className="w-8 h-8 object-cover"
              />
              <div className="flex flex-col gap-y-1">
                <h5 className="text-gray-100">GitHub</h5>
                <p className="text-gray-500 text-sm">
                  Conecte sus repositorios
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-primary" : "bg-secondary-900"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled
                      ? "translate-x-6 bg-secondary-900"
                      : "translate-x-1 bg-gray-500"
                  } inline-block h-4 w-4 transform rounded-full transition`}
                />
              </Switch>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
                className="w-8 h-8 object-cover"
              />
              <div className="flex flex-col gap-y-1">
                <h5 className="text-gray-100">Slack</h5>
                <p className="text-gray-500 text-sm">
                  Integrate Projects Discussions
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-primary" : "bg-secondary-900"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled
                      ? "translate-x-6 bg-secondary-900"
                      : "translate-x-1 bg-gray-500"
                  } inline-block h-4 w-4 transform rounded-full transition`}
                />
              </Switch>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
        </form>
      </div>
      {/* Email preferences */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">
          Notificaciones por correo electrónico
        </h1>
        <hr className="my-8 border-gray-500/30" />
        <form className="mb-8">
          <div className="flex items-center gap-4">
            <input type="checkbox" className="accent-primary" id="id1" />
            <div className="flex flex-col gap-y-1">
              <label htmlFor="id1" className="text-gray-100">
               Pagos exitosos
              </label>
              <p className="text-gray-500 text-sm">
              Reciba una notificación por cada pago realizado con éxito.
              </p>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center gap-4">
            <input type="checkbox" className="accent-primary" id="id2" />
            <div className="flex flex-col gap-y-1">
              <label htmlFor="id2" className="text-gray-100">
                Pagos.
              </label>
              <p className="text-gray-500 text-sm">
              Reciba una notificación por cada pago iniciado.
              </p>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center gap-4">
            <input type="checkbox" className="accent-primary" id="id3" />
            <div className="flex flex-col gap-y-1">
              <label htmlFor="id3" className="text-gray-100">
              Disputa de pagos de clientes
              </label>
              <p className="text-gray-500 text-sm">
              Recibir una notificación si un cliente impugna un pago
                y a efectos de disputa.
              </p>
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-sky-500 text-black py-2 px-4 rounded-lg hover:bg-sky-400 transition-colors">
            Guardar
          </button>
        </div>
      </div>
      {/* Inactive account */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Desactivar cuenta</h1>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex flex-col md:flex-row items-center gap-4 bg-red-600/10 p-4 rounded-lg border border-dashed border-red-600 mb-8">
          <div className="flex justify-center">
            <RiErrorWarningLine className="text-5xl text-red-600" />
          </div>
          <div className="flex-1">
            <h5 className="text-gray-100 text-xl mb-2">
            Está desactivando su cuenta
            </h5>
            <p className="text-gray-500">
            Para mayor seguridad, esto requiere que confirmes tu correo electrónico o número de teléfono cuando restablezcas tu contraseña{" "}
              <Link className="text-blue-500">Mas informacion.</Link>
            </p>
          </div>
        </div>
        <form className="flex items-center gap-4">
          <input type="checkbox" className="accent-primary" id="idInactive" />
          <label htmlFor="idInactive" className="text-gray-500">
          Confirmo la desactivación de mi cuenta
          </label>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-red-500/80 text-gray-100 py-2 px-4 rounded-lg hover:bg-red-500 transition-colors">
            Desactivar cuenta 
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
