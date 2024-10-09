import React from "react";
import Instagram from "./svg/Instagram";
import Facebook from "./svg/Facebook";

const Footer = () => {
  return (
    <div className="bg-[#D63415] h-[200px] pt-[40px] pb-2 px-3 font-roboto font-normal">
      <div className="flex justify-evenly">
        <div className="flex justify-start gap-60  w-[500px]">
          <div className="text-white font-medium text-lg">LOGO</div>
          <div>
            <ul className="text-white">
              <li>Inicio</li>
              <li>Quienes somos</li>
              <li>Mi perfil</li>
              <li>Mis compras</li>
              <li>Ayuda</li>
            </ul>
          </div>
        </div>
        <div className=" self-end flex gap-3">
          <p className="text-white">
            Protegido por{" "}
            <span className="underline"> reCAPTCHA Privacidad Condiciones</span>
          </p>
          <Instagram /> <Facebook />
        </div>
      </div>
    </div>
  );
};

export default Footer;
