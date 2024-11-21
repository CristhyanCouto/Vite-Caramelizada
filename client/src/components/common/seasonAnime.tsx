import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18n";
import axios from "axios";
import YoutubeVideos from "@/components/common/youtubeVideos";
import { formatDateTime, formatRuntime } from "@/lib/utils";
import PictureCarousel from "@/components/common/pictureCarousel";
import { seasonAanimeType } from "@/lib/animes";

interface seasonAnimeProps {
  seasonIndex: number;
}


export default function SeasonAnime(seasonAnimeProps: seasonAnimeProps) {
  const animesId  = seasonAnimeProps.seasonIndex;
  const { t } = useTranslation();

  const [animeData, setAnimeData] = useState<seasonAanimeType | null>(null);
  const [animePrints] = useState<string[]>([]);


  // Converts the animeId to a number
  const animeId = Number(animesId);

  // Associating the image_movie_url to the moviePrints
  if (animeData) {
    animePrints[0] = animeData.image_season_url01 ?? "";
    animePrints[1] = animeData.image_season_url02 ?? "";
    animePrints[2] = animeData.image_season_url03 ?? "";
    animePrints[3] = animeData.image_season_url04 ?? "";
    animePrints[4] = animeData.image_season_url05 ?? "";
    animePrints[5] = animeData.image_season_url06 ?? "";
    animePrints[6] = animeData.image_season_url07 ?? "";
    animePrints[7] = animeData.image_season_url08 ?? "";
    animePrints[8] = animeData.image_season_url09 ?? "";
    animePrints[9] = animeData.image_season_url10 ?? "";
  }

  useEffect(() => {
    if (!isNaN(animeId)) {
      // Only calls the api if the animeId is a valid number
      axios
        .get(`http://localhost:3001/seasonsAnimes/${animeId}`)
        .then((res) => {
          setAnimeData(res.data);
        })
        .catch((err) => {
          console.error(t("errors.erroeToFechtMovieData"), err);
        });
    }
  }, [animeData?.title_en, animeData?.title_pt, animeId, t]);

  return (
        <div>
          {i18n.language === "en" ? (
            <div>
              <div className="flex flex-col md:flex-row max-w-3xl items-center text-center md:justify-between py-4 px-16 mx-auto bg-black mt-4 gap-2">
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
                          src={animeData?.cover_season_url}
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
                          src={animeData?.trailer_season_url ?? ""}
                          title={animeData?.title_en ?? ""}
                        />
                      </div>
                      <div className="hidden sm:block">
                        <YoutubeVideos
                          width="600"
                          height="427"
                          src={animeData?.trailer_season_url ?? ""}
                          title={animeData?.title_en ?? ""}
                        />
                      </div>
                    </div>
                  </div>
                  {/*Age Rating and genres */}
                  {/*Normal Screen */}
                  <div className="max-5xl bg-black p-2">
                    <div className="hidden md:grid grid-cols-[0.5fr,1fr]">
                    </div>

                    {/*Mobile Screen */}
                    <div className="md:hidden grid grid-cols-1">
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
                      <p className="mt-4">{animeData?.about_season_en}</p>
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
                    <div className="max-w-4xl flex flex-col items-center justify-center m-auto bg-black text-white">
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
                          src={animeData?.cover_season_url}
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
                          src={animeData?.trailer_season_url ?? ""}
                          title={animeData?.title_pt ?? ""}
                        />
                      </div>
                      <div className="hidden sm:block">
                        <YoutubeVideos
                          width="600"
                          height="427"
                          src={animeData?.trailer_season_url ?? ""}
                          title={animeData?.title_pt ?? ""}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="max-5xl bg-black p-2">
                    {/*Age Rating and genres */}
                    {/*Normal Screen */}
                    <div className="hidden md:grid grid-cols-[0.5fr,1fr]">
                    </div>

                    {/*Mobile Screen */}
                    <div className="md:hidden grid grid-cols-1">
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
                      <p className="mt-4">{animeData?.about_season_pt}</p>
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
                    <div className="max-w-4xl flex flex-col items-center justify-center m-auto bg-black text-white">
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
                  <div className="p-2 bg-black"></div>
                  <div className="p-2 bg-black"></div>
                  <div className="h-4"></div>
                </div>
              </div>
            </div>
          )}
        </div>
  );
}
