import { Link } from "react-router-dom";
import { formatDateTime } from "@/lib/utils";
import { genreConverter } from "@/lib/genre";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18n";
import { GamesType } from "@/lib/games";
import { PlataformBackground } from "./plataformBackground";

export default function GameCard(props: GamesType) {
    const { t } = useTranslation();

    const genre01 = genreConverter(props.fk_genre_pt01 ?? 0);
    const genre02 = genreConverter(props.fk_genre_pt02 ?? 0);

    const currentLanguage = i18n.language;

  return (
    <div>
        <div className="bg-zinc-200 shadow p-2 m-5 w-72 rounded-sm
        transition ease-in-out delay-150 bg-zinc-400
        duration-200
        group relative">

        <Link to={`/games/${props.idgame}`}>
          <div
            className=""
            key={props.idgame}
          >
            <img
              className="group-hover:opacity-30 transition-opacity duration-200
              rounded-sm"
              src={props.cover_game_url}
              alt={props.title_en}
            />

            {/*Showing my rating review in absolute position over the movie cover */}
            <div className="absolute top-0 translate-y-[450%] translate-x-48 p-5 bg-red-500
            rounded-full">
                <p className="text-white text-2xl">{props.my_rating}</p>
            </div>


            {/* Showing First Plataform (The ne I've played the game) */}
            <div className="">
                <div className="absolute top-[76%] ml-5 left-0 z-20 transition-all duration-300">
                    <PlataformBackground plataform={props.fk_plataform01 ?? 0}/>
                </div>
            </div> 

            <div className="hidden group-hover:block
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

                {/*Showing Tittle based on language */}
                <div className="text-center">
                    <h1 className="text-2xl">{currentLanguage === "en" ? props.title_en : props.title_pt}</h1>
                </div>

                {/*Showing Genre based on language */}
                <div className="flex gap-4 mb-4 text-black">
                    <p className="grid bg-zinc-400 rounded-sm w-24 shadow text-center align-center items-center">{t(`genre.${genre01}`)}</p>
                    <p className="grid bg-zinc-400 rounded-sm w-24 shadow text-center align-center items-center">{t(`genre.${genre02}`)}</p>
                </div>

                {/*Showing Release Date */}
                <div className="text-1xl">
                    {props.release_date && <p className="text-center">{t("movies.releaseDate")}: {formatDateTime(props.release_date)}</p>}
                </div>

                {/*Showing multiplayer */}
                <div className="text-1xl">
                  {props.singleplayer === true ? <p className="text-center">{t("games.singlePlayer")}</p> : null}
                  {props.multiplayer === true ? <p className="text-center">{t("games.multiPlayer")}</p> : null}
                  {props.multiplayer_local === true ? <p className="text-center">{t("games.multiplayerLocal")}</p> : null}
                </div>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}
