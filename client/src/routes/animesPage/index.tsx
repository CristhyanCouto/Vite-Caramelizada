import Page from "@/components/common/page";
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
import { formatDateTime, formatRuntime } from "@/lib/utils";
import ProducerCard from "@/components/common/producerCard";
import PictureCarousel from "@/components/common/pictureCarousel";
import { AnimesType } from "@/lib/animes";
import CreatorCard from "@/components/common/creatorCard";

export default function AnimePage() {
  const { animesId } = useParams();
  const { t } = useTranslation();

  const [animeData, setAnimeData] = useState<AnimesType | null>(null);
  const [genre] = useState<string[] | null>([]);
  const [pageTitle, setPageTitle] = useState<string>("");
  const [animePrints] = useState<string[]>([]);

  // Converts the genre to a string
  if (genre) {
    genre[0] = genreConverter(animeData?.fk_genre_pt01 ?? 0);
    genre[1] = genreConverter(animeData?.fk_genre_pt02 ?? 0);
    genre[2] = genreConverter(animeData?.fk_genre_pt03 ?? 0);
    genre[3] = genreConverter(animeData?.fk_genre_pt04 ?? 0);
    genre[4] = genreConverter(animeData?.fk_genre_pt05 ?? 0);
    genre[5] = genreConverter(animeData?.fk_genre_pt06 ?? 0);
    genre[6] = genreConverter(animeData?.fk_genre_pt07 ?? 0);
    genre[7] = genreConverter(animeData?.fk_genre_pt08 ?? 0);
    genre[8] = genreConverter(animeData?.fk_genre_pt09 ?? 0);
    genre[9] = genreConverter(animeData?.fk_genre_pt10 ?? 0);
  }

  // Converts the movieId to a number
  const animeId = Number(animesId);

  // Associating the image_movie_url to the moviePrints
  if (animeData) {
    animePrints[0] = animeData.image_anime_url01 ?? "";
    animePrints[1] = animeData.image_anime_url02 ?? "";
    animePrints[2] = animeData.image_anime_url03 ?? "";
    animePrints[3] = animeData.image_anime_url04 ?? "";
    animePrints[4] = animeData.image_anime_url05 ?? "";
    animePrints[5] = animeData.image_anime_url06 ?? "";
    animePrints[6] = animeData.image_anime_url07 ?? "";
    animePrints[7] = animeData.image_anime_url08 ?? "";
    animePrints[8] = animeData.image_anime_url09 ?? "";
    animePrints[9] = animeData.image_anime_url10 ?? "";
  }

  //Maping the creators
  const CreatorCards = () => {
    const cards = [];
    if (animeData) {
      for (let i = 1; i <= 5; i++) {
        const creatorId = Number(
          (animeData as AnimesType)[`fk_creator0${i}` as keyof AnimesType]
        );
        if (!creatorId) break;
        cards.push(<CreatorCard key={i} idcreator={creatorId} />);
      }
    }
    return <>{cards}</>;
  };

  //Maping the producers
  const ProducerCards = () => {
    const cards = [];
    if (animeData) {
      for (let i = 1; i <= 5; i++) {
        const producerId = Number(
          (animeData as AnimesType)[`fk_producer0${i}` as keyof AnimesType]
        );
        if (!producerId) break;
        cards.push(<ProducerCard key={i} idproducer={producerId} />);
      }
    }
    return <>{cards}</>;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isNaN(animeId)) {
      // Only calls the api if the movieId is a valid number
      axios
        .get(`http://localhost:3001/animes/${animeId}`)
        .then((res) => {
          setAnimeData(res.data);
        })
        .then(() => {
          switch (i18n.language) {
            case "en":
              setPageTitle(animeData?.title_en ?? "");
              break;
            case "pt":
              setPageTitle(animeData?.title_pt ?? "");
              break;
            default:
              setPageTitle(animeData?.title_en ?? "");
          }
        })
        .catch((err) => {
          console.error(t("errors.erroeToFechtMovieData"), err);
        });
    }
  }, [animeData?.title_en, animeData?.title_pt, animeId, t]);

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
                    {animeData?.title_en}
                  </h1>
                </div>
                {/*My Rating */}
                <div className="w-16 rounded-sm sm:h-10 bg-red-500">
                  <p className="text-white text-2xl text-center">
                    {animeData &&
                    typeof animeData.my_rating === "number" &&
                    animeData.my_rating % 1 === 0
                      ? `${animeData.my_rating}.0`
                      : animeData?.my_rating}
                  </p>{" "}
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
                          src={animeData?.cover_anime_url}
                          alt={animeData?.title_en}
                        />
                      </div>
                    </div>
                    {/* Trailer */}
                    <div className="flex justify-center items-center h-full">
                      <div className="block sm:hidden">
                        <YoutubeVideos
                          width="100%"
                          height="427"
                          src={animeData?.trailer_anime_url ?? ""}
                          title={animeData?.title_en ?? ""}
                        />
                      </div>
                      <div className="hidden sm:block">
                        <YoutubeVideos
                          width="600"
                          height="427"
                          src={animeData?.trailer_anime_url ?? ""}
                          title={animeData?.title_en ?? ""}
                        />
                      </div>
                    </div>
                  </div>
                  {/*Age Rating and genres */}
                  {/*Normal Screen */}
                  <div className="max-5xl bg-black p-2">
                    <div className="hidden md:grid grid-cols-[0.5fr,1fr]">
                      <div className="flex justify-center md:ml-16">
                        <RatedenBackground
                          age={animeData?.fk_rated_pg_en ?? 0}
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
                          age={animeData?.fk_rated_pg_en ?? 0}
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
                      {animeData?.release_date ? (
                        <p className="text-center">
                          {t("movies.releaseDate")}:{" "}
                          {formatDateTime(animeData.release_date)}
                        </p>
                      ) : (
                        <p className="text-center">
                          {t("movies.releaseDate")}: {t("movies.noInformation")}
                        </p>
                      )}
                      {animeData?.runtime ? (
                        <p className="text-center">
                          {t("movies.runtime")}:{" "}
                          {formatRuntime(animeData.runtime)}
                        </p>
                      ) : (
                        <p className="text-center">
                          {t("movies.runtime")}: {t("movies.noInformation")}
                        </p>
                      )}
                    </div>
                  </div>
                  {/*Sinopse */}
                  <div className="p-2 bg-black">
                    <div className="text-center border border-zinc-400 p-4 flex flex-col justify-center items-center align-center bg-black text-white">
                      <h2 className="text-4xl">{t("movies.sinopse")}</h2>
                      <p className="mt-4">{animeData?.about_anime_en}</p>
                    </div>
                  </div>
                  <div>
                    {/*My review */}
                    {animeData?.my_review_en ? (
                      <div className="bg-black p-2">
                        <div className="px-6 bg-black text-white border border-zinc-400 py-4">
                          <h2 className="text-4xl text-center mb-4">
                            {t("movies.myReview")}
                          </h2>
                          <p className="">{animeData?.my_review_en}</p>
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
                        <PictureCarousel pictures={animePrints ?? []} />
                      </div>
                    </div>
                  </div>
                  {/*Creators */}
                  <div className="p-2 bg-black">
                    <div className="max-w-5xl bg-black text-white border border-zinc-400 py-4">
                      <h2 className="text-4xl text-center">
                        {t("games.creators")}
                      </h2>
                      <div className="grid sm:grid-cols-5 justify-center gap-4 px-10">
                        {CreatorCards()}
                      </div>
                    </div>
                  </div>
                  {/*Producers */}
                  <div className="p-2 bg-black">
                    <div className="max-w-5xl bg-black text-white border border-zinc-400 py-4">
                      <h2 className="text-4xl text-center">
                        {t("movies.producers")}
                      </h2>
                      <div className="grid sm:grid-cols-5 justify-center gap-4 px-10">
                        {ProducerCards()}
                      </div>
                    </div>
                  </div>
                  <div className="p-2 bg-black"></div>
                  <div className="h-4"></div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col md:flex-row max-w-5xl items-center text-center md:justify-between py-4 px-16 mx-auto bg-black mt-4 gap-2">
                <div>
                  <h1 className=" flex text-white text-4xl">
                    {animeData?.title_pt}
                  </h1>
                </div>
                {/*My Rating */}
                <div className="w-16 rounded-sm sm:h-10 bg-red-500">
                  <p className="text-white text-2xl text-center">
                    {animeData &&
                    typeof animeData.my_rating === "number" &&
                    animeData.my_rating % 1 === 0
                      ? `${animeData.my_rating}.0`
                      : animeData?.my_rating}
                  </p>{" "}
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
                          src={animeData?.cover_anime_url}
                          alt={animeData?.title_en}
                        />
                      </div>
                    </div>
                    {/* Trailer */}
                    <div className="flex justify-center items-center h-full">
                      <div className="block sm:hidden">
                        <YoutubeVideos
                          width="100%"
                          height="427"
                          src={animeData?.trailer_anime_url ?? ""}
                          title={animeData?.title_pt ?? ""}
                        />
                      </div>
                      <div className="hidden sm:block">
                        <YoutubeVideos
                          width="600"
                          height="427"
                          src={animeData?.trailer_anime_url ?? ""}
                          title={animeData?.title_pt ?? ""}
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
                          age={animeData?.fk_rated_pg_pt ?? 0}
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
                          age={animeData?.fk_rated_pg_pt ?? 0}
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
                      {animeData?.release_date ? (
                        <p className="text-center">
                          {t("movies.releaseDate")}:{" "}
                          {formatDateTime(animeData.release_date)}
                        </p>
                      ) : (
                        <p className="text-center">
                          {t("movies.releaseDate")}: {t("movies.noInformation")}
                        </p>
                      )}
                      {animeData?.runtime ? (
                        <p className="text-center">
                          {t("movies.runtime")}:{" "}
                          {formatRuntime(animeData.runtime)}
                        </p>
                      ) : (
                        <p className="text-center">
                          {t("movies.runtime")}: {t("movies.noInformation")}
                        </p>
                      )}
                    </div>
                  </div>
                  {/*Sinopse */}
                  <div className="p-2 bg-black">
                    <div className="text-center border border-zinc-400 p-4 flex flex-col justify-center items-center align-center bg-black text-white">
                      <h2 className="text-4xl">{t("movies.sinopse")}</h2>
                      <p className="mt-4">{animeData?.about_anime_pt}</p>
                    </div>
                  </div>
                  <div>
                    {/*My review */}
                    {animeData?.my_review_pt ? (
                      <div className="bg-black p-2">
                        <div className="px-6 bg-black text-white border border-zinc-400 py-4">
                          <h2 className="text-4xl text-center mb-4">
                            {t("movies.myReview")}
                          </h2>
                          <p className="">{animeData?.my_review_pt}</p>
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
                        <PictureCarousel pictures={animePrints ?? []} />
                      </div>
                    </div>
                  </div>
                  {/*Creators */}
                  <div className="p-2 bg-black">
                    <div className="max-w-5xl bg-black text-white border border-zinc-400 py-4">
                      <h2 className="text-4xl text-center">
                        {t("games.creators")}
                      </h2>
                      <div className="grid sm:grid-cols-5 justify-center gap-4 px-10">
                        {CreatorCards()}
                      </div>
                    </div>
                  </div>
                  {/*Producers */}
                  <div className="p-2 bg-black">
                    <div className="max-w-5xl bg-black text-white border border-zinc-400 py-4">
                      <h2 className="text-4xl text-center">
                        {t("movies.producers")}
                      </h2>
                      <div className="grid sm:grid-cols-5 justify-center gap-4 px-10">
                        {ProducerCards()}
                      </div>
                    </div>
                  </div>
                  <div className="p-2 bg-black"></div>
                  <div className="p-2 bg-black"></div>
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
