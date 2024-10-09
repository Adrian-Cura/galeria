import Image from "next/image";
import { fotografosProps } from "@/utils/fotografosData";
import Centro from "./svg/Centro";
import Estrellitas from "./svg/Estrellitas";
import Ojo from "./svg/Ojo";
import Raiting from "./Raiting";

interface FotografosProps {
  fotografosData: fotografosProps[];
}

const FotografosCards = ({ fotografosData }: FotografosProps) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 w-[1128px] mb-14">
      {fotografosData.map((fotografo, index) => (
        <div
          key={index}
          className="card bg-base-100 w-[270px] shadow-xl py-6 px-2 max-h-[292px]"
        >
          <div className="avatar flex justify-center">
            <div className="ring-2 ring-white w-[80px] h-[80px] rounded-full  ">
              <Image alt="avatar picture" src={fotografo.avatar} />
            </div>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title mt-[-20px]">{fotografo.nombre}</h2>
            <div className="mt-[-5px]">
              <p className="flex justify-center items-center gap-2">
                <Centro /> {fotografo.ciudad}
              </p>
              <p className="flex justify-center items-center gap-2 text-center mx-auto  ">
                <Estrellitas /> {fotografo.sector}
              </p>
            </div>

            <Raiting />

            <div className="card-actions ">
              <button className="flex gap-2 rounded-md items-center border border-[#6C757D] py-[6px] px-[12px] font-normal text-base text-[#6C757D] h-[38px] mt-1">
                <Ojo />
                Contactar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FotografosCards;
