import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
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
            <Button className="gap-1 bg-zinc-900 hover:bg-zinc-800">
                <IoIosMenu className="text-3xl"/> Menu
            </Button>
        </DrawerTrigger>
        <DrawerContent className="h-full bg-zinc-900 border-none">
          <DrawerHeader>
            <DrawerTitle className="flex justify-between px-12">
                <Link to="/">
                    <Button className="w-36 h-16 bg-red-500 hover:bg-red-400">Caramelizada</Button>
                </Link>
                <DrawerClose>
                    <Button className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-400">X</Button>
                </DrawerClose>
            </DrawerTitle>
            <DrawerDescription>
                <div className="flex gap-6 justify-center text-white mt-6">
                    <div className="flex flex-col text-center gap-2">
                        <Link to="/" className="flex text-center items-center text-3xl">
                            <BiCameraMovie /> {t('navbar02.movies')}
                        </Link>
                        <Link to="/" className="text-2xl">
                            Top 100
                        </Link>
                    </div>
                    <div className="flex flex-col text-center gap-2">
                        <Link to="/" className="flex text-center items-center text-3xl">
                            <BiMoviePlay /> {t('navbar02.series')}
                        </Link>
                        <Link to="/" className="text-2xl">
                            Top 100
                        </Link>
                    </div>
                    <div className="flex flex-col text-center gap-2">
                        <Link to="/" className="flex text-center items-center text-3xl">
                            <RiMovieLine /> {t('navbar02.animes')}
                        </Link>
                        <Link to="/" className="text-2xl">
                            Top 100
                        </Link>
                    </div>
                    <div className="flex flex-col text-center gap-2">
                        <Link to="/" className="flex text-center items-center text-3xl">
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
                        <Link to="/" className="flex text-center items-center text-3xl">
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
