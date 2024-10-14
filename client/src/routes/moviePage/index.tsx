import Page from "@/components/common/page"
import { MoviesType } from "@/lib/movies"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import i18n from "@/lib/i18n/i18n"
import axios from "axios"
import YoutubeVideos from "@/components/common/youtubeVideos"
import { RatedenBackground, RatedPtBackground } from "@/components/common/ratedenBackground"
import { genreConverter } from "@/lib/genre"
import { formatDateTime, formatMoney, formatRuntime } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import DirectorCard from "@/components/common/directorCard"
import WriterCard from "@/components/common/writersCard"
import ActorCard from "@/components/common/actorCard"
import ProducerCard from "@/components/common/producerCard"

export default function MoviePage() {
  const { moviesId } = useParams();
  const { t } = useTranslation();

  const [movieData, setMovieData] = useState<MoviesType | null>(null);
  const [genre] = useState<string[] | null>([]);
  const [pageTitle, setPageTitle] = useState<string>("");
  
  // Converts the genre to a string
  if (genre) {
    genre[0] = genreConverter(movieData?.fk_genre_pt01 ?? 0);
    genre[1] = genreConverter(movieData?.fk_genre_pt02 ?? 0);
    genre[2] = genreConverter(movieData?.fk_genre_pt03 ?? 0);
    genre[3] = genreConverter(movieData?.fk_genre_pt04 ?? 0);
    genre[4] = genreConverter(movieData?.fk_genre_pt05 ?? 0);
  }

  // Converts the movieId to a number
  const movieId = Number(moviesId);

  //Maping the directors
  const DirectorCards = () => {
    const cards = [];
    if (movieData) {
      for (let i = 1; i <= 5; i++) {
        const directorId = Number((movieData as MoviesType)[`fk_director0${i}` as keyof MoviesType]);
        if (!directorId) break;
        cards.push(<DirectorCard key={i} iddirector={directorId} />);
      }
    }
    return <>{cards}</>;
  };

  //Maping the writers
  const WriterCards = () => {
    const cards = [];
    if (movieData) {
      for (let i = 1; i <= 5; i++) {
        const writerId = Number((movieData as MoviesType)[`fk_writer0${i}` as keyof MoviesType]);
        if (!writerId) break;
        cards.push(<WriterCard key={i} idwriter={writerId} />);
      }
    }
    return <>{cards}</>;
  };

  //Maping the actors
  const ActorCards = () => {
    const cards = [];
    if (movieData) {
      for (let i = 1; i <= 20; i++) {
        const actorId = Number((movieData as MoviesType)[`fk_actor0${i}` as keyof MoviesType]);
        if (!actorId) break;
        cards.push(<ActorCard key={i} idactor={actorId} />);
      }
    }
    return <>{cards}</>;
  };

  //Maping the producers
  const ProducerCards = () => {
    const cards = [];
    if (movieData) {
      for (let i = 1; i <= 5; i++) {
        const producerId = Number((movieData as MoviesType)[`fk_producer0${i}` as keyof MoviesType]);
        if (!producerId) break;
        cards.push(<ProducerCard key={i} idproducer={producerId} />);
      }
    }
    return <>{cards}</>;
  };


  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isNaN(movieId)) {
      // Only calls the api if the movieId is a valid number
      axios
        .get(`http://localhost:3001/movies/${movieId}`)
        .then(res => {
          setMovieData(res.data);
        })
        .then(() => {
          switch (i18n.language) {
            case "en":
              setPageTitle(movieData?.title_en ?? "");
              break;
            case "pt":
              setPageTitle(movieData?.title_pt ?? "");
              break;
            default:
              setPageTitle(movieData?.title_en ?? "");
          }
        })
        .catch(err => {
          console.error(t('errors.erroeToFechtMovieData'), err);
        });
    }
  }, [movieData?.title_en, movieData?.title_pt, movieId, t]);

  document.title = `Caramelizada - ${pageTitle}`;

  return (
    <div>
      <Page title={t('home.title')}>
        <div>
          {i18n.language === "en" ? (
            <div>
              <div className="flex justify-center">
                <h1 className=" flex text-4xl p-3">{movieData?.title_en}</h1>
              </div>
              <div className="grid grid-cols-[0.5fr,1fr,0.5fr]">
                {/*Cover and Title */}
                <div className="flex justify-center items-center h-full">
                    <div className="bg-zinc-200 shadow p-2 m-5 w-72 rounded-sm bg-zinc-400">
                      <img
                        className="rounded-sm"
                        src={movieData?.cover_movie_url}
                        alt={movieData?.title_en}
                      />
                    </div>
                </div>
                {/* Trailer */}
                <div className="flex justify-center items-center h-full">
                  <div className="grid grid-cols-1 justify-center text-center">
                    <YoutubeVideos
                      width="600"
                      height="420"
                      src={movieData?.trailer_movie_url ?? ""}
                      title={movieData?.title_en ?? ""}
                    />
                  </div>
                </div>
                {/*My Rating */}
                <div className="flex justify-center items-center">
                  <div className="p-5 bg-red-500 rounded-full h-52 flex items-center justify-center">
                    <p className="text-white text-9xl">{movieData?.my_rating}</p>
                  </div>
                </div>
              </div>

              {/*Age Rating and genres */}
              <div className="grid grid-cols-[0.5fr,1fr,0.5fr]">
                <div className="flex justify-center">
                  <RatedenBackground age={movieData?.fk_rated_pg_en ?? 0} />
                </div>
                <div className="flex gap-12 justify-center items-center">
                {genre?.filter(genre => genre !== "0").map((genre, index) => (
                  <p key={index} className="grid bg-zinc-400 rounded-sm w-24 h-12 shadow text-center align-center items-center">
                    {t(`genre.${genre}`)}
                  </p>
                  ))}
                </div>
              </div>

              {/*Movie Infos */}
              <div className="grid grid-cols-4 mt-4">
              {movieData?.release_date ? <p className="text-center">{t("movies.releaseDate")}: {formatDateTime(movieData.release_date)}</p> : <p className="text-center">{t("movies.releaseDate")}: {t("movies.noInformation")}</p>}
              {movieData?.runtime ? <p className="text-center">{t("movies.runtime")}: {formatRuntime(movieData.runtime)}</p> : <p className="text-center">{t("movies.runtime")}: {t("movies.noInformation")}</p>}
              {movieData?.budget ? <p className="text-center">{t("movies.budget")}: {formatMoney(movieData.budget)}</p> : <p className="text-center">{t("movies.budget")}: {t("movies.noInformation")}</p>}
              {movieData?.box_office ? <p className="text-center">{t("movies.boxOffice")}: {formatMoney(movieData.box_office)}</p> : <p className="text-center">{t("movies.boxOffice")}: {t("movies.noInformation")}</p>}
              </div>

              <Separator className="my-4 h-0.5" orientation="horizontal" />

              {/*Sinopse */}
              <div className="px-6 flex flex-col justify-center items-center align-center">
                <h2 className="text-4xl">{t('movies.sinopse')}</h2>
                <p className="mt-4">{movieData?.about_movie_en}</p>
              </div>

              <Separator className="my-4 h-0.5" orientation="horizontal" />

              {/*Directors */}
              <div>
                <h2 className="text-4xl text-center">{t('movies.directors')}</h2>
                <div className="grid sm: grid-cols-5 justify-center gap-4 p-10">
                  {DirectorCards()}
                </div>
              </div>

              <Separator className="my-4 h-0.5" orientation="horizontal" />

              {/*Writers */}
              <div>
                <h2 className="text-4xl text-center">{t('movies.writers')}</h2>
                <div className="grid sm: grid-cols-5 justify-center gap-4 p-10">
                  {WriterCards()}
                </div>
              </div>

              
              <Separator className="my-4 h-0.5" orientation="horizontal" />

              {/*Actors */}
              <div>
                <h2 className="text-4xl text-center">{t('movies.actors')}</h2>
                <div className="grid sm:grid-cols-5 justify-center gap-4 p-10">
                  {ActorCards()}
                </div>
              </div>

              <Separator className="my-4 h-0.5" orientation="horizontal" />

              {/*Producers */}
              <div>
                <h2 className="text-4xl text-center">{t('movies.producers')}</h2>
                <div className="grid sm:grid-cols-5 justify-center gap-4 p-10">
                  {ProducerCards()}
                </div>
              </div>

              <Separator className="my-4 h-0.5" orientation="horizontal" />

              {/*My review */}
              <div className="px-6">
                <h2 className="text-4xl text-center mb-4">{t('movies.myReview')}</h2>
                <p className="mb-4">{movieData?.my_review_en}</p>
              </div>

            </div>
          ) : (
            <div>
            <div className="flex justify-center">
              <h1 className=" flex text-4xl p-3">{movieData?.title_pt}</h1>
            </div>
            <div className="grid grid-cols-[0.5fr,1fr,0.5fr]">
              {/*Cover and Title */}
              <div className="flex justify-center items-center h-full">
                  <div className="bg-zinc-200 shadow p-2 m-5 w-72 rounded-sm bg-zinc-400">
                    <img
                      className="rounded-sm"
                      src={movieData?.cover_movie_url}
                      alt={movieData?.title_pt}
                    />
                  </div>
              </div>
              {/* Trailer */}
              <div className="flex justify-center items-center h-full">
                <div className="grid grid-cols-1 justify-center text-center">
                  <YoutubeVideos
                    width="600"
                    height="420"
                    src={movieData?.trailer_movie_url ?? ""}
                    title={movieData?.title_pt ?? ""}
                  />
                </div>
              </div>
              {/*My Rating */}
              <div className="flex justify-center items-center">
                <div className="p-5 bg-red-500 rounded-full h-52 flex items-center justify-center">
                  <p className="text-white text-9xl">{movieData?.my_rating}</p>
                </div>
              </div>
            </div>

            {/*Age Rating and genres */}
            <div className="grid grid-cols-[0.5fr,1fr,0.5fr]">
              <div className="flex justify-center">
                <RatedPtBackground age={movieData?.fk_rated_pg_pt ?? 0} />
              </div>
              <div className="flex gap-12 justify-center items-center">
              {genre?.filter(genre => genre !== "0").map((genre, index) => (
                <p key={index} className="grid bg-zinc-400 rounded-sm w-24 h-12 shadow text-center align-center items-center">
                  {t(`genre.${genre}`)}
                </p>
                ))}
              </div>
            </div>

            {/*Movie Infos */}
            <div className="grid grid-cols-4 mt-4">
            {movieData?.release_date ? <p className="text-center">{t("movies.releaseDate")}: {formatDateTime(movieData.release_date)}</p> : <p className="text-center">{t("movies.releaseDate")}: {t("movies.noInformation")}</p>}
            {movieData?.runtime ? <p className="text-center">{t("movies.runtime")}: {formatRuntime(movieData.runtime)}</p> : <p className="text-center">{t("movies.runtime")}: {t("movies.noInformation")}</p>}
            {movieData?.budget ? <p className="text-center">{t("movies.budget")}: {formatMoney(movieData.budget)}</p> : <p className="text-center">{t("movies.budget")}: {t("movies.noInformation")}</p>}
            {movieData?.box_office ? <p className="text-center">{t("movies.boxOffice")}: {formatMoney(movieData.box_office)}</p> : <p className="text-center">{t("movies.boxOffice")}: {t("movies.noInformation")}</p>}
            </div>

            <Separator className="my-4 h-0.5" orientation="horizontal" />

            {/*Sinopse */}
            <div className="px-6 flex flex-col justify-center items-center align-center">
              <h2 className="text-4xl">{t('movies.sinopse')}</h2>
              <p className="mt-4">{movieData?.about_movie_pt}</p>
            </div>

            <Separator className="my-4 h-0.5" orientation="horizontal" />

            {/*Directors */}
            <div>
              <h2 className="text-4xl text-center">{t('movies.directors')}</h2>
              <div className="grid sm: grid-cols-5 justify-center gap-4 p-10">
                {DirectorCards()}
              </div>
            </div>

            <Separator className="my-4 h-0.5" orientation="horizontal" />

            {/*Writers */}
            <div>
              <h2 className="text-4xl text-center">{t('movies.writers')}</h2>
              <div className="grid sm: grid-cols-5 justify-center gap-4 p-10">
                {WriterCards()}
              </div>
            </div>

            
            <Separator className="my-4 h-0.5" orientation="horizontal" />

            {/*Actors */}
            <div>
              <h2 className="text-4xl text-center">{t('movies.actors')}</h2>
              <div className="grid sm:grid-cols-5 justify-center gap-4 p-10">
                {ActorCards()}
              </div>
            </div>

            <Separator className="my-4 h-0.5" orientation="horizontal" />

            {/*Producers */}
            <div>
              <h2 className="text-4xl text-center">{t('movies.producers')}</h2>
              <div className="grid sm:grid-cols-5 justify-center gap-4 p-10">
                {ProducerCards()}
              </div>
            </div>

            <Separator className="my-4 h-0.5" orientation="horizontal" />

            {/*My review */}
            <div className="px-6">
              <h2 className="text-4xl text-center mb-4">{t('movies.myReview')}</h2>
              <p className="mb-4">{movieData?.my_review_pt}</p>
            </div>

          </div>
          )}
        </div>
      </Page>
    </div>
  )
}
