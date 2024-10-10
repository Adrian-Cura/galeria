import Image from "next/image";
import React from "react";
import Hamburguer from "@/components/svg/Hamburger";

{
  /* Toda la web es responsive utilizando clases tablet y desktop, estas clases son personalizadas creadas en el archivo tailwind.config para cumplir con los pixeles recomendados en las instrucciones  */
}

const Header = () => {
  return (
    <div className="flex  justify-center font-roboto text-[#8B92A2] w-full ">
      <div className="navbar desktop:px-[10px] bg-base-100 w-full tablet:w-[780px] desktop:w-[1270px]">
        <div className="py-3 desktop:px-4 flex-1">
          <a className="btn rounded-none  w-[116px] tablet:w-auto bg-[#EC3F1E] text-xl font-sans font-semibold text-white hover:bg-red-700">
            LOGO
          </a>
        </div>
        <div>
          <ul className="menu menu-horizontal px-1 flex items-center text-base">
            <li className="hover:text-gray-600 hidden tablet:list-item">
              <a>Inicio</a>
            </li>
            <li className="hover:text-gray-600 hidden tablet:list-item">
              <a>Quienes somos?</a>
            </li>
            <li className="hover:text-gray-600 hidden tablet:list-item">
              <a>Ayuda</a>
            </li>
            <li className="hover:text-gray-600 hidden tablet:list-item">
              <a>Mis compras</a>
            </li>
            <div className="tablet:hidden">
              <Hamburguer />
            </div>
            {/* Avatar  */}
            <li>
              <details>
                <summary className="hover:text-gray-600">
                  <div className="dropdown dropdown-end flex items-center gap-1 ">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-[38px] h-[38px] tablet:w-10 tablet:h-10 rounded-full">
                        <Image
                          width={40} // Aumenta el tamaño para que sea consistente
                          height={40}
                          alt="Tailwind CSS Navbar component"
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                      </div>
                    </div>
                    <span className="hidden tablet:inline-block">Delfina</span>
                  </div>
                </summary>
                <ul className="bg-base-100 rounded-t-none p-2 z-10">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>

            {/* CARRITO DE COMPRAS */}
            <li>
              <div className="dropdown px-0 tablet:px-2 dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">2</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
