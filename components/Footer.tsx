import React from "react";
import Instagram from "./svg/Instagram";
import Facebook from "./svg/Facebook";

const Footer = () => {
  return (
    <div className="tablet:bg-[#D63415] bg-[#F8F9FA] tablet:h-[250px] desktop:h-[200px] pt-[40px] pb-2 px-3 font-roboto font-normal ">
      <div className="flex tablet:justify-center  desktop:justify-evenly ">
        <div className="flex justify-start tablet:gap-20  desktop:gap-60  desktop:w-[500px]">
          <div className="text-white font-medium text-lg hidden tablet:block">
            LOGO
          </div>
          <div>
            <ul className="hidden tablet:block  text-white">
              <li>Inicio</li>
              <li>Quienes somos</li>
              <li>Mi perfil</li>
              <li>Mis compras</li>
              <li>Ayuda</li>
            </ul>
          </div>
        </div>
        <div className="   tablet:self-end flex flex-col px-9 tablet:px-0  tablet:flex-row gap-3 w-full tablet:w-auto">
          <p className="tablet:hidden text-[#363E4E] underline">
            <a href="/">Como cuidamos tu privacidad</a>
          </p>
          <p className="text-[#687285] tablet:hidden">
            Copyright © 1999-2024 Photeala S.R.L
          </p>
          <p className="tablet:text-white">
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
