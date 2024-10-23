import { SiPlaystation2, SiPlaystation3, SiPlaystationvita, SiPlaystation, SiPlaystation4,
  SiWiiu, SiWii, SiNintendoswitch  
   } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import { FaXbox, FaApple  } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";




interface PlataformBackgroundProps {
    plataform: number;
    }

export function PlataformBackground({ plataform }: PlataformBackgroundProps) {
    return (
      <div className="text-white text-5xl">
        {plataform === 1 && <div className="bg-red-500 rounded-full w-20 h-20 shadow flex flex-col p-2 justify-center items-center align-center text-center
        "><SiPlaystation2 /></div>}
        {plataform === 2 && <div className="bg-red-500 rounded-full w-20 h-20 shadow flex justify-center items-center align-center text-center
        "><SiPlaystation3 /></div>}
        {plataform === 3 && <div className="bg-red-500 rounded-full w-20 h-20 shadow flex justify-center items-center align-center text-center
        "><SiPlaystationvita /></div>}
        {plataform === 4 && <div className="bg-red-500 rounded-full w-20 h-20 shadow flex justify-center items-center align-center text-center
        "><SiPlaystation /></div>}
        {plataform === 5 && <div className="bg-red-500 rounded-full w-20 h-20 shadow flex justify-center items-center align-center text-center
        "><FaComputer /></div>}
        {plataform === 6 && <div className="bg-red-500 rounded-full w-20 h-20 shadow flex justify-center items-center align-center text-center
        "><SiPlaystation4  /></div>}
        {plataform === 7 && <div className="bg-red-500 rounded-full w-20 h-20 shadow text-3xl flex flex-col justify-center items-center align-center text-center
        "><FaXbox  /> 360</div>}
        {plataform === 8 && <div className="bg-red-500 rounded-full w-20 h-20 shadow text-3xl flex flex-col justify-center items-center align-center text-center
        "><FaXbox  /> One</div>}
        {plataform === 9 && <div className="bg-red-500 rounded-full w-20 h-20 shadow flex justify-center items-center align-center text-center
        "><SiWiiu  /></div>}
        {plataform === 10 && <div className="bg-red-500 rounded-full w-20 h-20 shadow flex justify-center items-center align-center text-center
        "><IoLogoAndroid  /></div>}
        {plataform === 11 && <div className="bg-red-500 rounded-full w-20 h-20 shadow flex justify-center items-center align-center text-center
        "><FaApple  /></div>}
        {plataform === 12 && <div className="bg-red-500 rounded-full w-20 h-20 shadow flex justify-center items-center align-center text-center
        "><FaXbox  /></div>}
        {plataform === 13 && <div className="bg-red-500 rounded-full w-20 h-20 shadow flex justify-center items-center align-center text-center
        "><SiWii  /></div>}
        {plataform === 14 && <div className="bg-red-500 rounded-full w-20 h-20 shadow flex justify-center items-center align-center text-center
        "><SiNintendoswitch  /></div>}
      </div>
    );
}