import { Link } from "react-router-dom";
import { genreConverter } from "@/lib/genre";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18n";
import { GamesType } from "@/lib/games";
import { PlataformBackground } from "./plataformBackground";
import { IoLogoGameControllerB } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export default function GameCard(props: GamesType) {
  const { t } = useTranslation();

  //Converting genre from number to string
  const genre01 = genreConverter(props.fk_genre_pt01 ?? 0);
  const genre02 = genreConverter(props.fk_genre_pt02 ?? 0);

  const currentLanguage = i18n.language;

  return (
    <div>
      <div
        className="shadow p-2 m-5 h-[450px] w-72 rounded-sm
        transition ease-in-out delay-150 bg-zinc-400
        duration-200
        group relative"
      >
        <Link to={`/games/${props.idgame}`}>
          <div className="" key={props.idgame}>
            <img
              className="group-hover:opacity-30 transition-opacity duration-200
              rounded-sm w-full h-[435px] object-cover"
              src={props.cover_game_url}
              alt={props.title_en}
            />

            {/*Showing my rating review in absolute position over the movie cover */}
            <div
              className="absolute top-0 translate-y-[485%] translate-x-48 p-5 bg-red-500
            rounded-full
            block group-hover:hidden"
            >
              <p className="text-white text-2xl">
                {" "}
                {typeof props.my_rating === "number"
                  ? props.my_rating.toString().includes(".")
                    ? props.my_rating
                    : `${props.my_rating}.0`
                  : "N/A"}
              </p>
            </div>

            <div
              className="absolute top-0 left-0 w-full h-full group-hover:bg-black bg-opacity-50
            transition-all duration-300 group-hover:opacity
            group-hover:bg-opacity-60"
            >
              {/* Showing First Plataform (The one I've played the game) */}
              <div className="block group-hover:hidden">
                <div className="absolute top-[76%] ml-5 left-0 z-20 transition-all duration-300">
                  <PlataformBackground plataform={props.fk_plataform01 ?? 0} />
                </div>
              </div>

              <div
                className="hidden group-hover:block
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                {/*Showing Tittle based on language */}
                <div className="text-center font-bold text-white bg-red-500 rounded-sm py-3">
                  <h1 className="text-2xl">
                    {currentLanguage === "en" ? props.title_en : props.title_pt}
                  </h1>
                </div>

                {/*Showing Genre based on language */}
                <div className="flex gap-4 my-4 text-black">
                  <p className="grid bg-red-500 text-white rounded-sm w-24 shadow text-center align-center items-center p-2">
                    {t(`genre.${genre01}`)}
                  </p>
                  <p className="grid bg-red-500 text-white rounded-sm w-24 shadow text-center align-center items-center p-2">
                    {t(`genre.${genre02}`)}
                  </p>
                </div>

                {/*Showing multiplayer */}
                <div className="flex justify-center gap-1 py-2 text-white bg-red-500 rounded-sm shadow mt-4">
                  {props?.singleplayer ? (
                    <div className="flex items-center">
                      <p className="text-center text-3xl">
                        <IoLogoGameControllerB />
                      </p>
                    </div>
                  ) : null}
                  {props?.multiplayer ? (
                    <div className="flex items-center">
                      <p className="text-center text-3xl">
                        <MdLanguage />
                      </p>
                    </div>
                  ) : null}
                  {props?.multiplayer_local ? (
                    <div className="flex items-center">
                      <p className="text-center text-3xl">
                        <FaPeopleLine />
                      </p>
                    </div>
                  ) : null}
                </div>

                <div>
                  {props?.my_rating ? (
                    <div className="flex justify-center gap-1 py-2 text-white bg-red-500 rounded-sm shadow mt-4 items-center">
                      <p className="text-center text-3xl">
                        <FaStar />
                      </p>
                      <p className="text-center text-3xl">
                        {props.my_rating.toString().includes(".")
                          ? props.my_rating
                          : `${props.my_rating}.0`}
                      </p>
                      <p className="text-center text-3xl">/10</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
