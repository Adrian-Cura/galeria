import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="navbar lg:w-[1270px] py-0 px-[10px] bg-base-100 border-2">
      <div className="py-3 px-4 flex-1">
        <a className="btn rounded-none bg-[#D63415] text-xl font-sans font-semibold text-white">
          LOGO
        </a>
      </div>
      <div>
        <ul className="menu menu-horizontal px-1 flex items-center text-base">
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Quienes somos?</a>
          </li>
          <li>
            <a>Ayuda</a>
          </li>
          <li>
            <a>Mis compras</a>
          </li>

          {/* Avatar  */}
          <li>
            <details>
              <summary>
                <div className="dropdown dropdown-end flex items-center gap-1">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 h-10 rounded-full">
                      <Image
                        width={40} // Aumenta el tamaño para que sea consistente
                        height={40}
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  Delfina
                </div>
              </summary>
              <ul className="bg-base-100 rounded-t-none p-2">
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
            <div className="dropdown dropdown-end">
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
  );
};

export default Header;
