import foto1 from "@/assets/galeria/foto1.jpg";
import foto2 from "@/assets/galeria/foto2.jpg";
import foto3 from "@/assets/galeria/foto3.jpg";
import foto4 from "@/assets/galeria/foto4.jpg";
import foto5 from "@/assets/galeria/foto5.jpg";
import foto6 from "@/assets/galeria/foto6.jpg";
import foto7 from "@/assets/galeria/foto7.jpg";
import foto8 from "@/assets/galeria/foto8.jpeg";
import foto9 from "@/assets/galeria/foto9.jpg";
import foto10 from "@/assets/galeria/foto10.jpg";
import foto11 from "@/assets/galeria/foto11.jpg";
import foto12 from "@/assets/galeria/foto12.jpg";
import { StaticImageData } from "next/image";

export interface fotosProps {
  foto: StaticImageData;
  adquirida: boolean;
}

const fotosGaleria: fotosProps[] = [
  {
    foto: foto1,
    adquirida: false,
  },
  {
    foto: foto2,
    adquirida: false,
  },
  {
    foto: foto3,
    adquirida: true,
  },
  {
    foto: foto4,
    adquirida: false,
  },
  {
    foto: foto5,
    adquirida: false,
  },
  {
    foto: foto6,
    adquirida: false,
  },
  {
    foto: foto7,
    adquirida: false,
  },
  {
    foto: foto8,
    adquirida: false,
  },
  {
    foto: foto9,
    adquirida: false,
  },
  {
    foto: foto10,
    adquirida: true,
  },
  {
    foto: foto11,
    adquirida: false,
  },
  {
    foto: foto12,
    adquirida: false,
  },
];

export default fotosGaleria;
