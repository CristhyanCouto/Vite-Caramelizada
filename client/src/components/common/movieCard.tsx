import { Link } from "react-router-dom";
import { MoviesType } from "../../lib/movies";
import { formatRuntime, formatDateTime } from "@/lib/utils";
import { genreConverter } from "@/lib/genre";
import { useTranslation } from "react-i18next";
import { ageRatedEn, ageRatedPt } from "@/lib/rated";
import i18n from "@/lib/i18n/i18n";

export default function MovieCard(props: MoviesType) {
    const { t } = useTranslation();

    const genre01 = genreConverter(props.fk_genre_pt01 ?? 0);
    const genre02 = genreConverter(props.fk_genre_pt02 ?? 0);
    
    const ratedEn = ageRatedEn(props.fk_rated_pg_en ?? 0);
    const ratedPt = ageRatedPt(props.fk_rated_pg_pt ?? 0);

    const currentLanguage = i18n.language;

    const ratedEnBackground = (age: number) => {
        return(
            <div className="text-white text-2xl">
                {age === 1 && <div className="bg-green-500 rounded-sm w-18 shadow text-center
                absolute top-0 translate-y-[450%] translate-x-3 p-5">{ratedEn}</div>}
                {age === 2 && <div className="bg-orange-500 rounded-sm w-18 shadow text-center
                absolute top-0 translate-y-[450%] translate-x-3 p-5">{ratedEn}</div>}
                {age === 3 && <div className="bg-violet-500 rounded-sm w-18 shadow text-center
                absolute top-0 translate-y-[450%] translate-x-3 p-5">{ratedEn}</div>}
                {age === 4 && <div className="bg-red-500 rounded-sm w-18 shadow text-center
                absolute top-0 translate-y-[450%] translate-x-3 p-5">{ratedEn}</div>}
                {age === 5 && <div className="bg-blue-500 rounded-sm w-18 shadow text-center
                absolute top-0 translate-y-[450%] translate-x-3 p-5">{ratedEn}</div>}
                {age === 6 && <div className="bg-black rounded-sm w-18 shadow text-center
                absolute top-0 translate-y-[450%] translate-x-3 p-5">{ratedEn}</div>}
            </div>
        )
    };

    const ratedPtBackground = (age: number) => {
        return(
            <div className="text-white text-2xl">
                {age === 1 && <div className="bg-green-500 rounded-sm w-20 shadow text-center
                absolute top-0 translate-y-[450%] translate-x-3 p-5">{ratedPt}</div>}
                {age === 2 && <div className="bg-blue-500 rounded-sm w-20 shadow text-center
                absolute top-0 translate-y-[450%] translate-x-3 p-5">{ratedPt}</div>}
                {age === 3 && <div className="bg-yellow-500 rounded-sm w-20 shadow text-center
                absolute top-0 translate-y-[450%] translate-x-3 p-5">{ratedPt}</div>}
                {age === 4 && <div className="bg-orange-500 rounded-sm w-20 shadow text-center
                absolute top-0 translate-y-[450%] translate-x-3 p-5">{ratedPt}</div>}
                {age === 5 && <div className="bg-red-500 rounded-sm w-20 shadow text-center
                absolute top-0 translate-y-[450%] translate-x-3 p-5">{ratedPt}</div>}
                {age === 6 && <div className="bg-black rounded-sm w-20 shadow text-center
                absolute top-0 translate-y-[450%] translate-x-3 p-5">{ratedPt}</div>}
            </div>
        )
    };

  return (
    <div>
        <div className="bg-zinc-200 shadow p-2 m-5 w-72 rounded-sm
        transition ease-in-out delay-150 bg-zinc-400
        duration-200
        group relative">

        <Link to={`/movies/${props.idmovie}`}>
          <div
            className=""
            key={props.idmovie}
          >
            <img
              className="group-hover:opacity-30 transition-opacity duration-200
              rounded-sm"
              src={props.cover_movie_url}
              alt={props.title_en}
            />

            {/*Showing my rating review in absolute position over the movie cover */}
            <div className="absolute top-0 translate-y-[450%] translate-x-48 p-5 bg-red-500
            rounded-full">
                <p className="text-white text-2xl">{props.my_rating}</p>
            </div>


            {/* Showing the age rating based on US and  PT-BR */}
            {currentLanguage === "en" ? 
            <div className="hidden group-hover:block">
                {ratedEnBackground(props.fk_rated_pg_en ?? 0)}
            </div> 
            : 
            <div className="hidden group-hover:block">
                {ratedPtBackground(props.fk_rated_pg_pt ?? 0)}
            </div>}

            <div className="hidden group-hover:block
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

                {/*Showing Tittle based on language */}
                {currentLanguage === "en" ?
                <div className="mb-4 text-3xl">
                    <h1 className="text-center">{props.title_en}</h1>
                </div>
                :
                <div className="mb-4 text-3xl">
                    <h1 className="text-center">{props.title_pt}</h1>
                </div>}

                {/*Showing Genre based on language */}
                <div className="flex gap-4 mb-4 text-black">
                    <p className="grid bg-zinc-400 rounded-sm w-24 shadow text-center align-center items-center">{t(`genre.${genre01}`)}</p>
                    <p className="grid bg-zinc-400 rounded-sm w-24 shadow text-center align-center items-center">{t(`genre.${genre02}`)}</p>
                </div>

                {/*Showing Runtime */}
                <div className="text-1xl">
                    {props.runtime && <p className="text-center">{t("movies.runtime")}: {formatRuntime(props.runtime)}</p>}
                </div>

                {/*Showing Release Date */}
                <div className="text-1xl">
                    {props.release_date && <p className="text-center">{t("movies.releaseDate")}: {formatDateTime(props.release_date)}</p>}
                </div>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}
