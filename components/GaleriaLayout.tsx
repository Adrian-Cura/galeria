"use client";
import React, { useEffect, useState } from "react";
import Layout4 from "./svg/Layout4";
import Layout3 from "./svg/Layout3";
import Layout2 from "./svg/Layout2";
import Layout1 from "./svg/Layout1";
import Image from "next/image";
import { fotosProps } from "@/utils/galeriaData";
import waterMark from "@/assets/galeria/watermark.png";
import Carrito from "./svg/Carrito";

{
  /* Recibe un array de imagenes junto a la propiedad booleana adquirida para distinguir las que el usuario ya adquirio de las que no  */
}

interface componentProps {
  fotosGaleria: fotosProps[];
}

const GaleriaLayout = ({ fotosGaleria }: componentProps) => {
  {
    /* Este estado es para manejar el componente de progress que determina cuantas imagenes se muestran por linea  */
  }
  const [rangeValue, setRangeValue] = useState(0);

  {
    /* Con esta funcion es que se actualiza el valor de la barra de progreso en un rango que va de 10 en 10  */
  }
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setRangeValue(Number(event.target.value));

  {
    /* Esta funcion hace que cuando la ventana es de mobile actualize el tamaño de las imagenes mediante clases de tailwind dependiendo del rango seleccionado en la barra de progreso */
  }

  const getImageSize = () => {
    if (window.innerWidth < 768) {
      switch (rangeValue) {
        case 0:
          return "h-[300px] w-[300px]";
        case 10:
          return "h-[150px] w-[150px]";
        case 20:
          return "h-[100px] w-[100px]";
      }
    }
  };

  {
    /* Esta funcion crea una clase de Tailwind segun el rango seleccionado en la barra de progreso, por ejemplo si la barra esta en 0 y la imagen es de tablet o mobile, entonces crea la clase grid-cols-1 para que se muestre solo una columna de imagenes  */
  }
  const getGridClass = () => {
    if (window.innerWidth < 1200) {
      switch (rangeValue) {
        case 0:
          return "grid-cols-1";
        case 10:
          return "grid-cols-2";
        case 20:
          return "grid-cols-3";
      }
      {
        /* En caso que la ventana tenga tamaño desktop ahora hay 4 rangos posibles y cada uno crea la grid correspondiente  */
      }
    } else {
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
    }
  };

  {
    /* Como indicaban las instrucciones de la evaluacion, la barra de progreso tiene un valor maximo mayor si es para Desktop con 4 posibilidades pero tiene solo 3 posibilidades en mobile y tablet */
  }

  const [maxValue, setMaxValue] = useState(30);

  {
    /* El useEffect se ejecuta siempre que el tamaño de la ventana cambie y cuando la ventana es de tablet o mobile actualiza el valor maximo de la barra de progreso a 20, si es desktop entonces a 30  */
  }

  useEffect(() => {
    const updateMaxValue = () => {
      if (window.innerWidth < 1200) {
        setMaxValue(20); // Si la ventana es menor a 1200px
      } else {
        setMaxValue(30); // Si la ventana es mayor o igual a 1200px
      }
    };

    getGridClass();
    window.addEventListener("resize", updateMaxValue); // Detectar cambios de tamaño

    return () => window.removeEventListener("resize", updateMaxValue); // Limpiar el event listener
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center tablet:px-2 desktop:px-0">
      <div className="w-full desktop:w-[1140px] h-[49px] bg-white rounded-xl flex justify-between items-center p-6 py-8 mt-10">
        <p>Seleccionados 0</p>
        <div className="flex justify-end gap-4 items-center">
          <p className="hidden tablet:inline">Ver como</p>

          <div className="h-8 w-[120px] tablet:w-[240px] ">
            <input
              onChange={handleRangeChange}
              type="range"
              min={0}
              max={maxValue}
              value={rangeValue}
              className="range range-error    "
              step="10"
            />
            {/* Utilizando flexbox modifique el orden del simbolito de layout segun el tamaño de la ventana, ya que el orden es a la inversa si es mobile o tablet y ademas se elimina uno, el de Layout4, eso lo logro con la clase hidden y desktop:block para que vuelva a aparecer */}
            <div className="flex w-full gap-14 pl-1  ">
              <span className="tablet:pl-[-5px] ml-[6px] desktop:pl-1 desktop:order-4">
                <Layout1 />
              </span>
              <span className=" tablet:pl-14 ml-[-12px] desktop:pl-[15px] desktop:order-3">
                <Layout2 />
              </span>
              <span className="desktop:ml-0 ml-[-22px] tablet:ml-[37px] desktop:order-2">
                <Layout3 />
              </span>
              <span className="desktop:pl-0 hidden desktop:block desktop:order-1 ">
                <Layout4 />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  desktop:w-[1140px] mt-10 flex justify-center">
        {/* Aca dentro de las clases llamo a la funcion que obtiene las clases de grids segun lo que el usuario elija en la barra de progreso */}
        {/* Mas abajo es la misma logica con getImageSize pero con el tamaño de las imagenes que se agrandan un poco en mobile  */}
        <div className={` grid ${getGridClass()}  gap-6`}>
          {fotosGaleria.map((foto, index) => (
            <div
              key={index}
              className={`${getImageSize()} h-[100px] w-[100px]  tablet:h-[260px] tablet:w-[260px] overflow-hidden relative border-2 border-white `}
            >
              <Image
                alt="foto galeria"
                src={foto.foto}
                layout="fill"
                className="object-cover rounded-md"
              />
              {/* Si la propiedad adquirida del array foto es false, entonces se le superpone la imagen de marca de agua junto con el carrito de compra  */}
              {!foto.adquirida && (
                <div>
                  <Image
                    alt="water mark"
                    src={waterMark}
                    layout="fill"
                    className="object-cover rounded-md opacity-30 absolute top-0 left-0"
                  />
                  <div className="absolute top-2 right-5 border p-1 rounded-sm ">
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
