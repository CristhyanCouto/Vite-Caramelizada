import Page from "@/components/common/page";
import { Suspense, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GamesType } from "@/lib/games";
import { useParams } from "react-router-dom";
import i18n from "@/lib/i18n/i18n";
import axios from "axios";
import YoutubeVideos from "@/components/common/youtubeVideos";
import { genreConverter } from "@/lib/genre";
import { formatDateTime } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import PictureCarousel from "@/components/common/pictureCarousel";
import CreatorCard from "@/components/common/creatorCard";
import PublisherGamesCard from "@/components/common/publisherGamesCard";

export default function GamePage() {
  const { gamesId } = useParams();
  const { t } = useTranslation();

  const [gameData, setGameData] = useState<GamesType | null>(null);
  const [genre] = useState<string[] | null>([]);
  const [pageTitle, setPageTitle] = useState<string>("");
  const [gamesPrints] = useState<string[]>([]);

  // Converts the genre to a string
  if (genre) {
    genre[0] = genreConverter(gameData?.fk_genre_pt01 ?? 0);
    genre[1] = genreConverter(gameData?.fk_genre_pt02 ?? 0);
    genre[2] = genreConverter(gameData?.fk_genre_pt03 ?? 0);
    genre[3] = genreConverter(gameData?.fk_genre_pt04 ?? 0);
    genre[4] = genreConverter(gameData?.fk_genre_pt05 ?? 0);
  }

  // Converts the GameId to a number
  const gameId = Number(gamesId);

  // Associating the image_games_url to the GamesPrints
  if (gameData) {
    gamesPrints[0] = gameData.image_game_url01 ?? "";
    gamesPrints[1] = gameData.image_game_url02 ?? "";
    gamesPrints[2] = gameData.image_game_url03 ?? "";
    gamesPrints[3] = gameData.image_game_url04 ?? "";
    gamesPrints[4] = gameData.image_game_url05 ?? "";
    gamesPrints[5] = gameData.image_game_url06 ?? "";
    gamesPrints[6] = gameData.image_game_url07 ?? "";
    gamesPrints[7] = gameData.image_game_url08 ?? "";
    gamesPrints[8] = gameData.image_game_url09 ?? "";
    gamesPrints[9] = gameData.image_game_url10 ?? "";
  }

  //Maping the creators
  const CreatorCards = () => {
    const cards = [];
    if (gameData) {
      for (let i = 1; i <= 5; i++) {
        const creatorId = Number(
          (gameData as GamesType)[`fk_creator0${i}` as keyof GamesType]
        );
        if (!creatorId) break;
        cards.push(<CreatorCard key={i} idcreator={creatorId} />);
      }
    }
    return <>{cards}</>;
  };

  //Maping the publishers
  const PublisherGamesCards = () => {
    const cards = [];
    if (gameData) {
      for (let i = 1; i <= 5; i++) {
        const publisherId = Number(
          (gameData as GamesType)[`fk_publisher_games0${i}` as keyof GamesType]
        );
        if (!publisherId) break;
        cards.push(
          <PublisherGamesCard key={i} idpublisher_games={publisherId} />
        );
      }
    }
    return <>{cards}</>;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isNaN(gameId)) {
      // Only calls the api if the movieId is a valid number
      axios
        .get(`http://localhost:3001/games/${gameId}`)
        .then((res) => {
          setGameData(res.data);
        })
        .then(() => {
          switch (i18n.language) {
            case "en":
              setPageTitle(gameData?.title_en ?? "");
              break;
            case "pt":
              setPageTitle(gameData?.title_pt ?? "");
              break;
            default:
              setPageTitle(gameData?.title_en ?? "");
          }
        })
        .catch((err) => {
          console.error(t("errors.erroeToFechtGameData"), err);
        });
    }
  }, [gameData?.title_en, gameData?.title_pt, gameId, t]);

  document.title = `Caramelizada - ${pageTitle}`;

  return (
    <div>
      <Page title={t("home.title")}>
        <div>
          {i18n.language === "en" ? (
            <div>
              <div className="flex justify-center">
                <h1 className=" flex text-4xl p-3">{gameData?.title_en}</h1>
              </div>
              <div className="grid grid-cols-[0.5fr,1fr,0.5fr]">
                {/*Cover and Title */}
                <div className="flex justify-center items-center h-full">
                  <div className="bg-zinc-200 shadow p-2 m-5 w-72 rounded-sm bg-zinc-400">
                    <img
                      className="rounded-sm"
                      src={gameData?.cover_game_url}
                      alt={gameData?.title_en}
                    />
                  </div>
                </div>

                {/* Trailer */}
                <div className="flex justify-center items-center h-full">
                  <div className="grid grid-cols-1 justify-center text-center">
                    <Suspense fallback={<div>Loading Video...</div>}>
                      <YoutubeVideos
                        width="600"
                        height="420"
                        src={gameData?.trailer_game_url ?? ""}
                        title={gameData?.title_en ?? ""}
                      />
                    </Suspense>
                  </div>
                </div>

                {/*My Rating */}
                <div className="flex justify-center items-center">
                  <div className="p-5 bg-red-500 rounded-full h-52 flex items-center justify-center">
                    <p className="text-white text-9xl">{gameData?.my_rating}</p>
                  </div>
                </div>
              </div>

              {/*Genres */}
              <div className="grid grid-cols-1">
                <div className="flex gap-12 justify-center items-center">
                  {genre
                    ?.filter((genre) => genre !== "0")
                    .map((genre, index) => (
                      <p
                        key={index}
                        className="grid bg-zinc-400 rounded-sm w-24 h-12 shadow text-center align-center items-center"
                      >
                        {t(`genre.${genre}`)}
                      </p>
                    ))}
                </div>
              </div>

              {/*Movie Infos */}
              <div className="grid grid-cols-4 mt-4">
                {gameData?.release_date ? (
                  <p className="text-center">
                    {t("movies.releaseDate")}:{" "}
                    {formatDateTime(gameData.release_date)}
                  </p>
                ) : (
                  <p className="text-center">
                    {t("movies.releaseDate")}: {t("movies.noInformation")}
                  </p>
                )}
              </div>

              <Separator className="my-4 h-0.5" orientation="horizontal" />

              {/*Sinopse */}
              <div className="px-6 flex flex-col justify-center items-center align-center">
                <h2 className="text-4xl">{t("movies.sinopse")}</h2>
                <p className="mt-4">{gameData?.about_game_en}</p>
              </div>

              <Separator className="my-4 h-0.5" orientation="horizontal" />

              {/*My review */}
              <div className="px-6">
                <h2 className="text-4xl text-center mb-4">
                  {t("movies.myReview")}
                </h2>
                <p className="mb-4">{gameData?.my_review_en}</p>
              </div>

              <Separator className="my-4 h-0.5" orientation="horizontal" />

              {/*Movie Prints */}
              <div>
                <h2 className="text-4xl text-center mb-4">
                  {t("games.gamesScreenShots")}
                </h2>
              </div>
              <div>
                <PictureCarousel pictures={gamesPrints ?? []} />
              </div>

              <Separator className="my-4 h-0.5" orientation="horizontal" />

              {/*Creators */}
              {CreatorCards().props.children.length > 0 && (
                <div>
                  <h2 className="text-4xl text-center">
                    {t("games.creators")}
                  </h2>
                  <div className="grid sm:grid-cols-5 justify-center gap-4 px-10">
                    {CreatorCards()}
                  </div>
                  <Separator className="my-4 h-0.5" orientation="horizontal" />
                </div>
              )}

              {/*Producers */}
              <div>
                <h2 className="text-4xl text-center">
                  {t("games.publishers")}
                </h2>
                <div className="grid sm:grid-cols-5 justify-center gap-4 mt-6 px-10">
                  {PublisherGamesCards()}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-center">
                <h1 className=" flex text-4xl p-3">{gameData?.title_pt}</h1>
              </div>
              <div className="grid grid-cols-[0.5fr,1fr,0.5fr]">
                {/*Cover and Title */}
                <div className="flex justify-center items-center h-full">
                  <div className="bg-zinc-200 shadow p-2 m-5 w-72 rounded-sm bg-zinc-400">
                    <img
                      className="rounded-sm"
                      src={gameData?.cover_game_url}
                      alt={gameData?.title_pt}
                    />
                  </div>
                </div>
                {/* Trailer */}
                <div className="flex justify-center items-center h-full">
                  <div className="grid grid-cols-1 justify-center text-center">
                    <Suspense fallback={<div>Loading Video...</div>}>
                      <YoutubeVideos
                        width="600"
                        height="420"
                        src={gameData?.trailer_game_url ?? ""}
                        title={gameData?.title_pt ?? ""}
                      />
                    </Suspense>
                  </div>
                </div>
                {/*My Rating */}
                <div className="flex justify-center items-center">
                  <div className="p-5 bg-red-500 rounded-full h-52 flex items-center justify-center">
                    <p className="text-white text-9xl">{gameData?.my_rating}</p>
                  </div>
                </div>
              </div>

              {/*Genres */}
              <div className="grid grid-cols-1">
                <div className="flex gap-12 justify-center items-center">
                  {genre
                    ?.filter((genre) => genre !== "0")
                    .map((genre, index) => (
                      <p
                        key={index}
                        className="grid bg-zinc-400 rounded-sm w-24 h-12 shadow text-center align-center items-center"
                      >
                        {t(`genre.${genre}`)}
                      </p>
                    ))}
                </div>
              </div>

              {/*Movie Infos */}
              <div className="grid grid-cols-4 mt-4">
                {gameData?.release_date ? (
                  <p className="text-center">
                    {t("movies.releaseDate")}:{" "}
                    {formatDateTime(gameData.release_date)}
                  </p>
                ) : (
                  <p className="text-center">
                    {t("movies.releaseDate")}: {t("movies.noInformation")}
                  </p>
                )}
              </div>

              <Separator className="my-4 h-0.5" orientation="horizontal" />

              {/*Sinopse */}
              <div className="px-6 flex flex-col justify-center items-center align-center">
                <h2 className="text-4xl">{t("movies.sinopse")}</h2>
                <p className="mt-4">{gameData?.about_game_pt}</p>
              </div>

              <Separator className="my-4 h-0.5" orientation="horizontal" />

              {/*My review */}
              <div className="px-6">
                <h2 className="text-4xl text-center mb-4">
                  {t("movies.myReview")}
                </h2>
                <p className="mb-4">{gameData?.my_review_pt}</p>
              </div>

              <Separator className="my-4 h-0.5" orientation="horizontal" />

              {/*Movie Prints */}
              <div>
                <h2 className="text-4xl text-center mb-4">
                  {t("movies.movieScreenShots")}
                </h2>
              </div>
              <div>
                <PictureCarousel pictures={gamesPrints ?? []} />
              </div>

              <Separator className="my-4 h-0.5" orientation="horizontal" />

              {/*Creators */}
              {CreatorCards().props.children.length > 0 && (
                <div>
                  <h2 className="text-4xl text-center">
                    {t("games.creators")}
                  </h2>
                  <div className="grid sm:grid-cols-5 justify-center gap-4 px-10">
                    {CreatorCards()}
                  </div>
                  <Separator className="my-4 h-0.5" orientation="horizontal" />
                </div>
              )}

              <Separator className="my-4 h-0.5" orientation="horizontal" />

              {/*Producers */}
              <div>
                <h2 className="text-4xl text-center">
                  {t("games.publishers")}
                </h2>
                <div className="grid grid-cols-5 justify-center items-center gap-4 mt-6 px-10">
                  {PublisherGamesCards()}
                </div>
              </div>
            </div>
          )}
        </div>
      </Page>
    </div>
  );
}
