"use client";
import React, { useState } from "react";
import Layout4 from "./svg/Layout4";
import Layout3 from "./svg/Layout3";
import Layout2 from "./svg/Layout2";
import Layout1 from "./svg/Layout1";
import Image from "next/image";
import { fotosProps } from "@/utils/galeriaData";
import waterMark from "@/assets/galeria/watermark.png";
import Carrito from "./svg/Carrito";

interface componentProps {
  fotosGaleria: fotosProps[];
}

const GaleriaLayout = ({ fotosGaleria }: componentProps) => {
  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setRangeValue(Number(event.target.value));

  const getGridClass = () => {
    switch (rangeValue) {
      case 0:
        return "grid-cols-4";
      case 10:
        return "grid-cols-3";
      case 20:
        return "grid-cols-2";
      case 30:
        return "grid-cols-1";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[1140px] h-[49px] bg-white rounded-xl flex justify-between items-center p-6 py-8 mt-10">
        <p>Seleccionados 0</p>
        <div className="flex justify-end gap-4 items-center">
          <p>Ver como</p>

          <div className="h-8">
            <input
              onChange={handleRangeChange}
              type="range"
              min={0}
              max="30"
              value={rangeValue}
              className="range range-error w-[240px]"
              step="10"
            />
            <div className="flex w-full gap-14 pl-1 ">
              <span>
                <Layout4 />
              </span>
              <span className="">
                <Layout3 />
              </span>
              <span className="pl-1">
                <Layout2 />
              </span>
              <span className="pl-3">
                <Layout1 />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1140px] mt-10 flex justify-center">
        <div className={`grid ${getGridClass()}  gap-6`}>
          {fotosGaleria.map((foto, index) => (
            <div
              key={index}
              className="h-[267px] w-[267px] overflow-hidden relative border-2 border-white "
            >
              <Image
                alt="foto galeria"
                src={foto.foto}
                layout="fill"
                className="object-cover rounded-md"
              />
              {!foto.adquirida && (
                <div>
                  <Image
                    alt="water mark"
                    src={waterMark}
                    layout="fill"
                    className="object-cover rounded-md opacity-30 absolute top-0 left-0"
                  />
                  <div className="absolute top-2 right-5 border p-1 rounded-sm">
                    <Carrito />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GaleriaLayout;
