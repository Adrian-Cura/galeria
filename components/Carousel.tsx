import Image from "next/image";
import { fotografosProps } from "@/utils/fotografosData";
import Centro from "./svg/Centro";
import Estrellitas from "./svg/Estrellitas";
import Ojo from "./svg/Ojo";
import Raiting from "./Raiting";

{
  /* Le asigno los tipos de datos que son los mismos que en FotografosCards porque recibe el mismo array */
}

interface FotografosProps {
  fotografosData: fotografosProps[];
}

{
  /* Utilizo el componente Carousel de DaisyUI modificado para poder usarlo con el array de fotografos  */
}

const Carousel = ({ fotografosData }: FotografosProps) => {
  return (
    <div className="carousel w-full pb-6 overflow-hidden">
      {fotografosData.map((fotografo, index) => (
        <div
          id={`slide${index + 1}`}
          key={index}
          className="carousel-item relative w-full flex justify-center items-center"
        >
          {/* Aquí cada fotógrafo es representado como una card individual */}
          <div className="card bg-base-100 w-[270px] shadow-xl py-6 px-2 max-h-[292px]">
            <div className="avatar flex justify-center">
              <div className="ring-2 ring-white w-[80px] h-[80px] rounded-full">
                <Image alt="avatar picture" src={fotografo.avatar} />
              </div>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title mt-[-20px]">{fotografo.nombre}</h2>
              <div className="mt-[-5px]">
                <p className="flex justify-center items-center gap-2">
                  <Centro /> {fotografo.ciudad}
                </p>
                <p className="flex justify-center items-center gap-2 text-center mx-auto">
                  <Estrellitas /> {fotografo.sector}
                </p>
              </div>
              <Raiting />
              <div className="card-actions">
                <button className="flex gap-2 rounded-md items-center border border-[#6C757D] py-[6px] px-[12px] font-normal text-base text-[#6C757D] h-[38px] mt-1">
                  <Ojo />
                  Contactar
                </button>
              </div>
            </div>
          </div>

          {/* Botones de navegación entre slides */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${index === 0 ? fotografosData.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${((index + 1) % fotografosData.length) + 1}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
