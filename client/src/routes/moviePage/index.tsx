import Page from "@/components/common/page";
import { MoviesType } from "@/lib/movies";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import i18n from "@/lib/i18n/i18n";
import axios from "axios";
import YoutubeVideos from "@/components/common/youtubeVideos";
import {
  RatedenBackground,
  RatedPtBackground,
} from "@/components/common/ratedenBackground";
import { genreConverter } from "@/lib/genre";
import { formatDateTime, formatMoney, formatRuntime } from "@/lib/utils";
import DirectorCard from "@/components/common/directorCard";
import WriterCard from "@/components/common/writersCard";
import ActorCard from "@/components/common/actorCard";
import ProducerCard from "@/components/common/producerCard";
import PictureCarousel from "@/components/common/pictureCarousel";

export default function MoviePage() {
  const { moviesId } = useParams();
  const { t } = useTranslation();

  const [movieData, setMovieData] = useState<MoviesType | null>(null);
  const [genre] = useState<string[] | null>([]);
  const [pageTitle, setPageTitle] = useState<string>("");
  const [moviePrints] = useState<string[]>([]);

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

  // Associating the image_movie_url to the moviePrints
  if (movieData) {
    moviePrints[0] = movieData.image_movie_url01 ?? "";
    moviePrints[1] = movieData.image_movie_url02 ?? "";
    moviePrints[2] = movieData.image_movie_url03 ?? "";
    moviePrints[3] = movieData.image_movie_url04 ?? "";
    moviePrints[4] = movieData.image_movie_url05 ?? "";
    moviePrints[5] = movieData.image_movie_url06 ?? "";
    moviePrints[6] = movieData.image_movie_url07 ?? "";
    moviePrints[7] = movieData.image_movie_url08 ?? "";
    moviePrints[8] = movieData.image_movie_url09 ?? "";
    moviePrints[9] = movieData.image_movie_url10 ?? "";
  }

  //Maping the directors
  const DirectorCards = () => {
    const cards = [];
    if (movieData) {
      for (let i = 1; i <= 5; i++) {
        const directorId = Number(
          (movieData as MoviesType)[`fk_director0${i}` as keyof MoviesType]
        );
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
        const writerId = Number(
          (movieData as MoviesType)[`fk_writer0${i}` as keyof MoviesType]
        );
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
        const actorId = Number(
          (movieData as MoviesType)[`fk_actor0${i}` as keyof MoviesType]
        );
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
        const producerId = Number(
          (movieData as MoviesType)[`fk_producer0${i}` as keyof MoviesType]
        );
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
        .then((res) => {
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
        .catch((err) => {
          console.error(t("errors.erroeToFechtMovieData"), err);
        });
    }
  }, [movieData?.title_en, movieData?.title_pt, movieId, t]);

  document.title = `Caramelizada - ${pageTitle}`;

  return (
    <div className="bg-zinc-900 overflow-x-hidden">
      <Page title={t("home.title")}>
        <div>
          {i18n.language === "en" ? (
            <div>
              <div className="flex flex-col md:flex-row max-w-5xl items-center text-center md:justify-between py-4 px-16 mx-auto bg-black mt-4 gap-2">
                <div>
                  <h1 className=" flex text-white text-4xl">
                    {movieData?.title_en}
                  </h1>
                </div>
                {/*My Rating */}
                <div className="w-16 rounded-sm sm:h-10 bg-red-500">
                  <p className="text-3xl text-white text-center">
                    {movieData?.my_rating}
                  </p>
                </div>
              </div>

              <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-start">
                <div>
                  <div className="max-w-5xl flex flex-col md:flex-row justify-center mx-auto bg-black gap-2">
                    {/*Cover*/}
                    <div className="flex flex-col md:flex-row justify-center">
                      <div className="bg-zinc-200 shadow w-72 rounded-sm bg-zinc-400 mx-auto md:mx-0">
                        <img
                          className="rounded-sm w-full h-[435px] object-cover"
                          src={movieData?.cover_movie_url}
                          alt={movieData?.title_en}
                        />
                      </div>
                    </div>
                    {/* Trailer */}
                    <div className="flex justify-center items-center h-full">
                      <div className="block sm:hidden">
                        <YoutubeVideos
                          width="100%"
                          height="427"
                          src={movieData?.trailer_movie_url ?? ""}
                          title={movieData?.title_en ?? ""}
                        />
                      </div>
                      <div className="hidden sm:block">
                        <YoutubeVideos
                          width="600"
                          height="427"
                          src={movieData?.trailer_movie_url ?? ""}
                          title={movieData?.title_en ?? ""}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="max-5xl bg-black p-2">
                    {/*Age Rating and genres */}
                    {/*Normal Screen */}
                    <div className="hidden md:grid grid-cols-[0.5fr,1fr]">
                      <div className="flex justify-center md:ml-16">
                        <RatedenBackground
                          age={movieData?.fk_rated_pg_en ?? 0}
                        />
                      </div>
                      <div className="flex flex-col md:flex-row md:grid-rows gap-6 justify-center items-center">
                        {genre
                          ?.filter((genre) => genre !== "0")
                          .map((genre, index) => (
                            <p
                              key={index}
                              className="grid bg-red-500 text-white rounded-sm w-24 h-20 shadow text-center align-center items-center"
                            >
                              {t(`genre.${genre}`)}
                            </p>
                          ))}
                      </div>
                    </div>

                    {/*Mobile Screen */}
                    <div className="md:hidden grid grid-cols-1">
                      <div className="flex justify-center mb-4">
                        <RatedenBackground
                          age={movieData?.fk_rated_pg_en ?? 0}
                        />
                      </div>
                      <div className="flex flex-col-2 gap-6 justify-center items-center">
                        {genre
                          ?.filter((genre) => genre !== "0")
                          .map((genre, index) => (
                            <p
                              key={index}
                              className="grid bg-red-500 text-white rounded-sm w-24 h-20 shadow text-center align-center items-center"
                            >
                              {t(`genre.${genre}`)}
                            </p>
                          ))}
                      </div>
                    </div>
                    {/*Movie Infos */}
                    <div className="grid grid-cols-2 max-w-5xl mx-auto bg-black text-white items-center justify-center mt-4">
                      {movieData?.release_date ? (
                        <p className="text-center">
                          {t("movies.releaseDate")}:{" "}
                          {formatDateTime(movieData.release_date)}
                        </p>
                      ) : (
                        <p className="text-center">
                          {t("movies.releaseDate")}: {t("movies.noInformation")}
                        </p>
                      )}
                      {movieData?.runtime ? (
                        <p className="text-center">
                          {t("movies.runtime")}:{" "}
                          {formatRuntime(movieData.runtime)}
                        </p>
                      ) : (
                        <p className="text-center">
                          {t("movies.runtime")}: {t("movies.noInformation")}
                        </p>
                      )}
                      {movieData?.budget ? (
                        <p className="text-center">
                          {t("movies.budget")}: {formatMoney(movieData.budget)}
                        </p>
                      ) : (
                        <p className="text-center">
                          {t("movies.budget")}: {t("movies.noInformation")}
                        </p>
                      )}
                      {movieData?.box_office ? (
                        <p className="text-center">
                          {t("movies.boxOffice")}:{" "}
                          {formatMoney(movieData.box_office)}
                        </p>
                      ) : (
                        <p className="text-center">
                          {t("movies.boxOffice")}: {t("movies.noInformation")}
                        </p>
                      )}
                    </div>
                  </div>
                  {/*Sinopse */}
                  <div className="p-2 bg-black">
                    <div className="text-center border border-zinc-400 p-4 flex flex-col justify-center items-center align-center bg-black text-white">
                      <h2 className="text-4xl">{t("movies.sinopse")}</h2>
                      <p className="mt-4">{movieData?.about_movie_en}</p>
                    </div>
                  </div>
                  <div>
                    {/*My review */}
                    {movieData?.my_review_en ? (
                      <div className="bg-black p-2">
                        <div className="px-6 bg-black text-white border border-zinc-400 py-4">
                          <h2 className="text-4xl text-center mb-4">
                            {t("movies.myReview")}
                          </h2>
                          <p className="">{movieData?.my_review_en}</p>
                        </div>
                      </div>
                    ) : null}
                    {/*Movie Prints */}
                    <div className="max-w-5xl flex flex-col items-center justify-center m-auto bg-black text-white">
                      <div className="">
                        <h2 className="text-4xl text-center mb-4">
                          {t("movies.movieScreenShots")}
                        </h2>
                      </div>
                      <div className="text-black">
                        <PictureCarousel pictures={moviePrints ?? []} />
                      </div>
                    </div>
                  </div>
                  {/*Directors */}
                  <div className="p-2 bg-black">
                    <div className="max-w-5xl bg-black text-white border border-zinc-400 py-4">
                      <h2 className="text-4xl text-center">
                        {t("movies.directors")}
                      </h2>
                      <div className="grid sm:grid-cols-5 justify-center gap-4 px-10">
                        {DirectorCards()}
                      </div>
                    </div>
                  </div>
                  <div className="p-2 bg-black">
                    {/*Writers */}
                    <div className="text-white bg-black border border-zinc-400 py-4">
                      <h2 className="text-4xl text-center">
                        {t("movies.writers")}
                      </h2>
                      <div className="grid sm:grid-cols-5 justify-center gap-4 px-10">
                        {WriterCards()}
                      </div>
                    </div>
                  </div>

                  {/*Actors */}
                  <div className="p-2 bg-black">
                    <div className="bg-black text-white border border-zinc-400 py-4">
                      <h2 className="text-4xl text-center mb-4">
                        {t("movies.actors")}
                      </h2>
                      <div className="grid sm:grid-cols-5 justify-center gap-4 px-10">
                        {ActorCards()}
                      </div>
                    </div>
                  </div>
                  <div className="p-2 bg-black">
                    {/*Producers */}
                    <div className="bg-black text-white border boder-zinc-400 py-4">
                      <h2 className="text-4xl text-center">
                        {t("movies.producers")}
                      </h2>
                      <div className="grid sm:grid-cols-5 justify-center gap-4 mt-6 px-10">
                        {ProducerCards()}
                      </div>
                    </div>
                  </div>
                  <div className="h-4"></div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col md:flex-row max-w-5xl items-center text-center md:justify-between py-4 px-16 mx-auto bg-black mt-4 gap-2">
                <div>
                  <h1 className=" flex text-white text-4xl">
                    {movieData?.title_pt}
                  </h1>
                </div>
                {/*My Rating */}
                <div className="w-16 rounded-sm sm:h-10 bg-red-500">
                  <p className="text-3xl text-white text-center">
                    {movieData?.my_rating}
                  </p>
                </div>
              </div>

              <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-start">
                <div>
                  <div className="max-w-5xl flex flex-col md:flex-row justify-center mx-auto bg-black gap-2">
                    {/*Cover*/}
                    <div className="flex flex-col md:flex-row justify-center">
                      <div className="bg-zinc-200 shadow w-72 rounded-sm bg-zinc-400 mx-auto md:mx-0">
                        <img
                          className="rounded-sm w-full h-[435px] object-cover"
                          src={movieData?.cover_movie_url}
                          alt={movieData?.title_en}
                        />
                      </div>
                    </div>
                    {/* Trailer */}
                    <div className="flex justify-center items-center h-full">
                      <div className="block sm:hidden">
                        <YoutubeVideos
                          width="100%"
                          height="427"
                          src={movieData?.trailer_movie_url ?? ""}
                          title={movieData?.title_pt ?? ""}
                        />
                      </div>
                      <div className="hidden sm:block">
                        <YoutubeVideos
                          width="600"
                          height="427"
                          src={movieData?.trailer_movie_url ?? ""}
                          title={movieData?.title_pt ?? ""}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="max-5xl bg-black p-2">
                    {/*Age Rating and genres */}
                    {/*Normal Screen */}
                    <div className="hidden md:grid grid-cols-[0.5fr,1fr]">
                      <div className="flex justify-center md:ml-16">
                        <RatedPtBackground
                          age={movieData?.fk_rated_pg_pt ?? 0}
                        />
                      </div>
                      <div className="flex flex-col md:flex-row md:grid-rows gap-6 justify-center items-center">
                        {genre
                          ?.filter((genre) => genre !== "0")
                          .map((genre, index) => (
                            <p
                              key={index}
                              className="grid bg-red-500 text-white rounded-sm w-24 h-20 shadow text-center align-center items-center"
                            >
                              {t(`genre.${genre}`)}
                            </p>
                          ))}
                      </div>
                    </div>

                    {/*Mobile Screen */}
                    <div className="md:hidden grid grid-cols-1">
                      <div className="flex justify-center mb-4">
                        <RatedPtBackground
                          age={movieData?.fk_rated_pg_pt ?? 0}
                        />
                      </div>
                      <div className="flex flex-col-2 gap-6 justify-center items-center">
                        {genre
                          ?.filter((genre) => genre !== "0")
                          .map((genre, index) => (
                            <p
                              key={index}
                              className="grid bg-red-500 text-white rounded-sm w-24 h-20 shadow text-center align-center items-center"
                            >
                              {t(`genre.${genre}`)}
                            </p>
                          ))}
                      </div>
                    </div>
                    {/*Movie Infos */}
                    <div className="grid grid-cols-2 max-w-5xl mx-auto bg-black text-white items-center justify-center mt-4">
                      {movieData?.release_date ? (
                        <p className="text-center">
                          {t("movies.releaseDate")}:{" "}
                          {formatDateTime(movieData.release_date)}
                        </p>
                      ) : (
                        <p className="text-center">
                          {t("movies.releaseDate")}: {t("movies.noInformation")}
                        </p>
                      )}
                      {movieData?.runtime ? (
                        <p className="text-center">
                          {t("movies.runtime")}:{" "}
                          {formatRuntime(movieData.runtime)}
                        </p>
                      ) : (
                        <p className="text-center">
                          {t("movies.runtime")}: {t("movies.noInformation")}
                        </p>
                      )}
                      {movieData?.budget ? (
                        <p className="text-center">
                          {t("movies.budget")}: {formatMoney(movieData.budget)}
                        </p>
                      ) : (
                        <p className="text-center">
                          {t("movies.budget")}: {t("movies.noInformation")}
                        </p>
                      )}
                      {movieData?.box_office ? (
                        <p className="text-center">
                          {t("movies.boxOffice")}:{" "}
                          {formatMoney(movieData.box_office)}
                        </p>
                      ) : (
                        <p className="text-center">
                          {t("movies.boxOffice")}: {t("movies.noInformation")}
                        </p>
                      )}
                    </div>
                  </div>
                  {/*Sinopse */}
                  <div className="p-2 bg-black">
                    <div className="text-center border border-zinc-400 p-4 flex flex-col justify-center items-center align-center bg-black text-white">
                      <h2 className="text-4xl">{t("movies.sinopse")}</h2>
                      <p className="mt-4">{movieData?.about_movie_pt}</p>
                    </div>
                  </div>
                  <div>
                    {/*My review */}
                    {movieData?.my_review_pt ? (
                      <div className="bg-black p-2">
                        <div className="px-6 bg-black text-white border border-zinc-400 py-4">
                          <h2 className="text-4xl text-center mb-4">
                            {t("movies.myReview")}
                          </h2>
                          <p className="">{movieData?.my_review_pt}</p>
                        </div>
                      </div>
                    ) : null}
                    {/*Movie Prints */}
                    <div className="max-w-5xl flex flex-col items-center justify-center m-auto bg-black text-white">
                      <div className="">
                        <h2 className="text-4xl text-center mb-4">
                          {t("movies.movieScreenShots")}
                        </h2>
                      </div>
                      <div className="text-black">
                        <PictureCarousel pictures={moviePrints ?? []} />
                      </div>
                    </div>
                  </div>
                  {/*Directors */}
                  <div className="p-2 bg-black">
                    <div className="max-w-5xl bg-black text-white border border-zinc-400 py-4">
                      <h2 className="text-4xl text-center">
                        {t("movies.directors")}
                      </h2>
                      <div className="grid sm:grid-cols-5 justify-center gap-4 px-10">
                        {DirectorCards()}
                      </div>
                    </div>
                  </div>
                  <div className="p-2 bg-black">
                    {/*Writers */}
                    <div className="text-white bg-black border border-zinc-400 py-4">
                      <h2 className="text-4xl text-center">
                        {t("movies.writers")}
                      </h2>
                      <div className="grid sm:grid-cols-5 justify-center gap-4 px-10">
                        {WriterCards()}
                      </div>
                    </div>
                  </div>

                  {/*Actors */}
                  <div className="p-2 bg-black">
                    <div className="bg-black text-white border border-zinc-400 py-4">
                      <h2 className="text-4xl text-center mb-4">
                        {t("movies.actors")}
                      </h2>
                      <div className="grid sm:grid-cols-5 justify-center gap-4 px-10">
                        {ActorCards()}
                      </div>
                    </div>
                  </div>
                  <div className="p-2 bg-black">
                    {/*Producers */}
                    <div className="bg-black text-white border boder-zinc-400 py-4">
                      <h2 className="text-4xl text-center">
                        {t("movies.producers")}
                      </h2>
                      <div className="grid sm:grid-cols-5 justify-center gap-4 mt-6 px-10">
                        {ProducerCards()}
                      </div>
                    </div>
                  </div>
                  <div className="h-4"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Page>
    </div>
  );
}
