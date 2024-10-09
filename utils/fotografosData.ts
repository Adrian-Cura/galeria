import avatar1 from "@/assets/avatares/avatar1.jpeg";
import avatar2 from "@/assets/avatares/avatar2.jpeg";
import avatar3 from "@/assets/avatares/avatar3.jpeg";
import avatar4 from "@/assets/avatares/avatar4.jpeg";
import { StaticImageData } from "next/image";

export interface fotografosProps {
  avatar: StaticImageData;
  nombre: string;
  ciudad: string;
  sector: string;
}

const fotografosData: fotografosProps[] = [
  {
    avatar: avatar1,
    nombre: "Paula Pérez",
    ciudad: "Buenos Aires, CABA",
    sector: "Tienda de mascotas",
  },
  {
    avatar: avatar2,
    nombre: "Pedro Fuentes",
    ciudad: "Buenos Aires, CABA",
    sector: "Eventos",
  },
  {
    avatar: avatar3,
    nombre: "Patricio Funes",
    ciudad: "Buenos Aires, CABA",
    sector: "Fundacion rescate",
  },
  {
    avatar: avatar4,
    nombre: "Macarena Ramirez",
    ciudad: "La Plata, GBA",
    sector: "Bicho feliz fundación",
  },
];

export default fotografosData;
