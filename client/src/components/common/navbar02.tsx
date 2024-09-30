import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

//Icons
import { BiCameraMovie, BiMoviePlay } from "react-icons/bi";
import { RiMovieLine } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { FiBook } from "react-icons/fi";
import { twMerge } from "tailwind-merge";



interface Navbar02Props {
    href: string;
    label: string;
}

function NavbarItem({ href, label }: Navbar02Props) {
    const location = useLocation();
    const { t } = useTranslation();

    function isActive() {
        return location.pathname === href;
    }

    function getIcon(label: string) {
        switch (label) {
            case t('navbar02.movies'):
                return <BiCameraMovie />;
            case t('navbar02.series'):
                return <BiMoviePlay />;
            case t('navbar02.animes'):
                return <RiMovieLine />;
            case t('navbar02.games'):
                return <IoGameControllerOutline />;
            case t('navbar02.books'):
                return <FiBook />;
            default:
                return "";
        }
    }

    return (
        <Link to={href}
        className={twMerge(
            "flex items-center gap-3 p-2 rounded-sm hover:bg-zinc-400 transition-all text-white text-2xl",
            isActive() && "bg-black/20"
        )}
        >
            {getIcon(label)}
            {isActive() && (
                <span className="text-white font-semibold">{label}</span>
            )}
        </Link>
    );
}

export default function Navbar02() {
    const { t } = useTranslation();
    return (
    <div className="w-full flex items-center gap-4 bg-zinc-800 px-2 py-1">
      <div className="hidden flex-1 md:flex items-center justify-center text-center gap-2 h-16">
        <NavbarItem href="/movies" label={t("navbar02.movies")} />
        <NavbarItem href="/series" label={t("navbar02.series")} />
        <NavbarItem href="/animes" label={t("navbar02.animes")} />
        <NavbarItem href="/games" label={t("navbar02.games")} />
        <NavbarItem href="/books" label={t("navbar02.books")} />
      </div>
    </div>
  );
}
