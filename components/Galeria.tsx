import React from "react";
import Image from "next/image";
import portada from "@/assets/portada.jpeg";
import avatar from "@/assets/avatar.jpeg";
import Albumes from "@/components/svg/Albumes";
import Camara from "@/components/svg/Camara";
import Centro from "@/components/svg/Centro";
import Estrella from "./svg/Estrella";
import Carrito from "./svg/Carrito";
import GaleriaLayout from "./GaleriaLayout";
import fotosGaleria from "@/utils/galeriaData";
import FotografosCards from "./FotografosCards";
import fotografosData from "@/utils/fotografosData";

const Galeria = () => {
  return (
    <div className="bg-[#F8F9FA] ">
      <div className="mx-40 pt-4 mb-6 ">
        <p className="flex gap-1 items-center">
          <Albumes />
          <span className="text-[#D63415] ">
            <a className="underline" href="/">
              Albumes
            </a>
          </span>
          <span className="text-[8px] ">{">"}</span>
          15/06/2024
        </p>
      </div>
      <div className="flex justify-center relative mx-2">
        <div className=" overflow-hidden h-[158px] w-full justify-center">
          <Image
            alt="Imagen de portada"
            src={portada}
            layout="fill"
            className="object-cover object-center"
          />
        </div>
        <div className="avatar absolute top-[70%]">
          <div className="ring-2 ring-white w-24 rounded-full  ">
            <Image alt="avatar picture" src={avatar} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16 ">
        <h4 className="font-semibold  text-2xl">Expo mascotas 2024</h4>
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <p className="flex gap-2  font-normal items-center text-[#363E4E]">
          <Camara /> Juan Bianchi
        </p>
        <p className="flex gap-2  items-center text-[#687285]">
          <Centro /> Centro de convenciones, Bariloche
        </p>
        <p className="flex items-center  gap-2 text-[#687285]">
          <Albumes color={"#687285"} />
          12 fotos
          <label className="text-[#D63415] ml-8">Exp. 15/06/2024</label>
        </p>
      </div>
      <div className="flex justify-center gap-6 pt-4">
        <button className=" font-medium px-3 py-[6px] flex gap-1 items-center bg-white border-[1px] rounded-md border-[#F8F9FA] h-[38px] hover:bg-green-200 hover:border-2 ">
          <Estrella />
          Calificar
        </button>
        <button className=" font-light  text-white px-3 py-[6px] flex gap-1 items-center bg-[#D63415] border-[1px] rounded-md border-[#F8F9FA] h-[38px] w-[184px] justify-center hover:bg-red-700 ">
          <Carrito /> Agregar todo
        </button>
      </div>
      <GaleriaLayout fotosGaleria={fotosGaleria} />

      <div className="flex justify-center mt-24 w-1/2 ">
        <h2 className="text-3xl text-[#363E4E] font-medium ">
          Fotógrafos destacados
        </h2>
      </div>
      <div className="flex justify-center mt-10">
        <FotografosCards fotografosData={fotografosData} />
      </div>
    </div>
  );
};

export default Galeria;
