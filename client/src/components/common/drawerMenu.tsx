import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

//Icons
import { BiCameraMovie, BiMoviePlay } from "react-icons/bi";
import { RiMovieLine } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { FiBook } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function DrawerMenu() {
    const { t } = useTranslation();
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
            <div className="w-28 flex items-center justify-center h-11 rounded-lg text-white gap-1 bg-zinc-900 hover:bg-zinc-800">
                <IoIosMenu className="text-3xl"/> Menu
            </div>
        </DrawerTrigger>
        <DrawerContent className="h-full bg-zinc-900 border-none">
          <DrawerHeader>
            <DrawerTitle className="flex justify-between px-12">
                <Link to="/">
                    <div className="w-36 flex items-center justify-center rounded-xl h-16 bg-red-500 hover:bg-red-400">
                        <div className="text-white text-center">Caramelizada</div>
                    </div>
                </Link>
                <DrawerClose>
                    <div className="flex items-center justify-center text-center text-white w-16 h-16 rounded-full bg-red-500 hover:bg-red-400">X</div>
                </DrawerClose>
            </DrawerTitle>
            <DrawerDescription>
                <div className="flex gap-6 justify-center text-white mt-6">
                    <div className="flex flex-col text-center gap-2">
                        <Link to="/movies" className="flex text-center items-center text-3xl">
                            <BiCameraMovie /> {t('navbar02.movies')}
                        </Link>
                        <Link to="/" className="text-2xl">
                            Top 100
                        </Link>
                    </div>
                    <div className="flex flex-col text-center gap-2">
                        <Link to="/series" className="flex text-center items-center text-3xl">
                            <BiMoviePlay /> {t('navbar02.series')}
                        </Link>
                        <Link to="/" className="text-2xl">
                            Top 100
                        </Link>
                    </div>
                    <div className="flex flex-col text-center gap-2">
                        <Link to="/animes" className="flex text-center items-center text-3xl">
                            <RiMovieLine /> {t('navbar02.animes')}
                        </Link>
                        <Link to="/" className="text-2xl">
                            Top 100
                        </Link>
                    </div>
                    <div className="flex flex-col text-center gap-2">
                        <Link to="/games" className="flex text-center items-center text-3xl">
                            <IoGameControllerOutline /> {t('navbar02.games')}
                        </Link>
                        <Link to="/" className="text-2xl">
                            Top 100
                        </Link>
                        <Link to="/" className="text-2xl">
                            PC
                        </Link>
                    </div>
                    <div className="flex flex-col text-center gap-2">
                        <Link to="/books" className="flex text-center items-center text-3xl">
                            <FiBook /> {t('navbar02.books')}
                        </Link>
                        <Link to="/" className="text-2xl">
                            Top 100
                        </Link>
                    </div>
                </div>
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
