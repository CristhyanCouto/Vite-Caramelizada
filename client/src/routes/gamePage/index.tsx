import Page from "@/components/common/page";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GamesType } from "@/lib/games";
import { useParams } from "react-router-dom";
import i18n from "@/lib/i18n/i18n";
import axios from "axios";
import YoutubeVideos from "@/components/common/youtubeVideos";
import { genreConverter } from "@/lib/genre";
import { formatDateTime } from "@/lib/utils";
import PictureCarousel from "@/components/common/pictureCarousel";
import CreatorCard from "@/components/common/creatorCard";
import PublisherGamesCard from "@/components/common/publisherGamesCard";
import { PlataformBackground } from "@/components/common/plataformBackground";
import { IoLogoGameControllerB } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <div className="overflow-x-hidden bg-zinc-300">
      <Page title={t("home.title")}>
        <div>
          {i18n.language === "en" ? (
            <div>
              {/*Trailer, rating and about */}
              <div className="max-w-5xl flex flex-col justify-center mx-auto bg-black text-white pb-6 mt-2">
                <h1 className="text-4xl text-left p-3 ml-2">
                  {gameData?.title_en}
                </h1>
                <div className="flex flex-col md:flex-row justify-center">
                  <div className="block sm:hidden">
                    <YoutubeVideos
                      width="100%"
                      height="450"
                      src={gameData?.trailer_game_url ?? ""}
                      title={gameData?.title_en ?? ""}
                    />
                  </div>
                  <div className="hidden sm:block">
                    <YoutubeVideos
                      width="600"
                      height="450"
                      src={gameData?.trailer_game_url ?? ""}
                      title={gameData?.title_en ?? ""}
                    />
                  </div>
                  <div className="w-full sm:w-96 flex flex-col sm:ml-4">
                    <div className="w-full h-32 bg-red-500">
                      <h2 className="text-8xl text-white text-center">
                        {gameData?.my_rating}
                      </h2>
                    </div>
                    <div className="p-2 flex-grow">
                      <ScrollArea className="h-[100px] w-full rounded-sm border border-zinc-400 p-4">
                        <p>{gameData?.about_game_en}</p>
                      </ScrollArea>
                      {gameData?.release_date ? (
                        <div className="flex mt-3">
                          <p className="">{t("movies.releaseDate")}: </p>
                          <p>{formatDateTime(gameData.release_date)}</p>
                        </div>
                      ) : (
                        <p className="text-center">
                          {t("movies.releaseDate")}: {t("movies.noInformation")}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 p-2">
                      {gameData?.singleplayer ? (
                        <div className="flex items-center">
                          <p className="text-center text-2xl">
                            <IoLogoGameControllerB />
                          </p>
                          <p>{t("games.singlePlayer")}</p>
                        </div>
                      ) : null}
                      {gameData?.multiplayer ? (
                        <div className="flex items-center">
                          <p className="text-center text-2xl">
                            <MdLanguage />
                          </p>
                          <p>{t("games.multiPlayer")}</p>
                        </div>
                      ) : null}
                      {gameData?.multiplayer_local ? (
                        <div className="flex items-center">
                          <p className="text-center text-2xl">
                            <FaPeopleLine />
                          </p>
                          <p>{t("games.multiplayerLocal")}</p>
                        </div>
                      ) : null}
                    </div>
                    <div className="flex gap-1 justify-center sm:justify-end mt-auto">
                      {genre
                        ?.filter((genre) => genre !== "0")
                        .map((genre, index) => (
                          <p
                            key={index}
                            className="grid text-sm bg-red-500 rounded-sm w-24 h-12 shadow text-center align-center items-center text-white"
                          >
                            {t(`genre.${genre}`)}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/*Plataforms*/}
              <div
                className="
              max-w-5xl flex flex-col items-center justify-center m-auto bg-black text-white"
              >
                <h2 className="text-4xl text-center mt-4">
                  {t("games.platforms")}
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mt-6 px-10 mb-6">
                  {Array.from({ length: 10 }, (_, i) => {
                    const plataformKey = `fk_plataform0${
                      i + 1
                    }` as keyof GamesType;
                    const plataformValue = gameData?.[plataformKey];

                    if (plataformValue === null) {
                      return null; // Stop rendering further items
                    }
                    return (
                      <div
                        key={i}
                        className="grid justify-center text-center align-center items-center"
                      >
                        <PlataformBackground
                          plataform={Number(plataformValue)}
                        />
                      </div>
                    );
                  }).filter(Boolean)}{" "}
                  {/* Filter out null values */}
                </div>
              </div>

              {/*Movie Prints */}
              <div className="max-w-5xl flex flex-col items-center justify-center m-auto bg-black text-white">
                <div className="mt-4">
                  <h2 className="text-4xl text-center mb-4">
                    {t("games.gamesScreenShots")}
                  </h2>
                </div>
                <div className="mb-6 text-black">
                  <PictureCarousel pictures={gamesPrints ?? []} />
                </div>
              </div>

              {/*My review */}
              <div className="px-6 max-w-5xl bg-black m-auto p-4 text-white">
                <h2 className="text-4xl text-center mb-4">
                  {t("movies.myReview")}
                </h2>
                <p className="mb-4">{gameData?.my_review_en}</p>
              </div>

              {/*Creators */}
              {CreatorCards().props.children.length > 0 && (
                <div className="max-w-5xl bg-black text-white m-auto">
                  <h2 className="text-4xl text-center">
                    {t("games.creators")}
                  </h2>
                  <div className="flex justify-center gap-4 px-10">
                    {CreatorCards()}
                  </div>
                </div>
              )}

              {/*Producers */}
              <div className="max-w-5xl bg-black text-white mx-auto p-6">
                <h2 className="text-4xl text-center">
                  {t("games.publishers")}
                </h2>
                <div className="flex justify-center gap-4 mt-4 px-10">
                  {PublisherGamesCards()}
                </div>
              </div>
              <div className="h-2"></div>
            </div>
          ) : (
            <div>
              {/*Trailer, rating and about */}
              <div className="max-w-5xl flex flex-col justify-center mx-auto bg-black text-white pb-6 mt-2">
                <h1 className="text-4xl text-left p-3 ml-2">
                  {gameData?.title_pt}
                </h1>
                <div className="flex flex-col md:flex-row justify-center">
                  <div className="block sm:hidden">
                    <YoutubeVideos
                      width="100%"
                      height="450"
                      src={gameData?.trailer_game_url ?? ""}
                      title={gameData?.title_pt ?? ""}
                    />
                  </div>
                  <div className="hidden sm:block">
                    <YoutubeVideos
                      width="600"
                      height="450"
                      src={gameData?.trailer_game_url ?? ""}
                      title={gameData?.title_pt ?? ""}
                    />
                  </div>
                  <div className="w-full sm:w-96 flex flex-col sm:ml-4">
                    <div className="w-full h-32 bg-red-500">
                      <h2 className="text-8xl text-white text-center">
                        {gameData?.my_rating}
                      </h2>
                    </div>
                    <div className="p-2 flex-grow">
                      <ScrollArea className="h-[100px] w-full rounded-sm border border-zinc-400 p-4">
                        <p>{gameData?.about_game_pt}</p>
                      </ScrollArea>
                      {gameData?.release_date ? (
                        <div className="flex mt-3">
                          <p className="">{t("movies.releaseDate")}: </p>
                          <p>{formatDateTime(gameData.release_date)}</p>
                        </div>
                      ) : (
                        <p className="text-center">
                          {t("movies.releaseDate")}: {t("movies.noInformation")}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 p-2">
                      {gameData?.singleplayer ? (
                        <div className="flex items-center">
                          <p className="text-center text-2xl">
                            <IoLogoGameControllerB />
                          </p>
                          <p>{t("games.singlePlayer")}</p>
                        </div>
                      ) : null}
                      {gameData?.multiplayer ? (
                        <div className="flex items-center">
                          <p className="text-center text-2xl">
                            <MdLanguage />
                          </p>
                          <p>{t("games.multiPlayer")}</p>
                        </div>
                      ) : null}
                      {gameData?.multiplayer_local ? (
                        <div className="flex items-center">
                          <p className="text-center text-2xl">
                            <FaPeopleLine />
                          </p>
                          <p>{t("games.multiplayerLocal")}</p>
                        </div>
                      ) : null}
                    </div>
                    <div className="flex gap-1 justify-center sm:justify-end mt-auto">
                      {genre
                        ?.filter((genre) => genre !== "0")
                        .map((genre, index) => (
                          <p
                            key={index}
                            className="grid text-sm bg-red-500 rounded-sm w-24 h-12 shadow text-center align-center items-center text-white"
                          >
                            {t(`genre.${genre}`)}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {/*Plataforms*/}
              <div
                className="
              max-w-5xl flex flex-col items-center justify-center m-auto bg-black text-white"
              >
                <h2 className="text-4xl text-center mt-4">
                  {t("games.platforms")}
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mt-6 px-10 mb-6">
                  {Array.from({ length: 10 }, (_, i) => {
                    const plataformKey = `fk_plataform0${
                      i + 1
                    }` as keyof GamesType;
                    const plataformValue = gameData?.[plataformKey];

                    if (plataformValue === null) {
                      return null; // Stop rendering further items
                    }
                    return (
                      <div
                        key={i}
                        className="grid justify-center text-center align-center items-center"
                      >
                        <PlataformBackground
                          plataform={Number(plataformValue)}
                        />
                      </div>
                    );
                  }).filter(Boolean)}{" "}
                  {/* Filter out null values */}
                </div>
              </div>

              {/*Movie Prints */}
              <div className="max-w-5xl flex flex-col items-center justify-center m-auto bg-black text-white">
                <div className="mt-4">
                  <h2 className="text-4xl text-center mb-4">
                    {t("games.gamesScreenShots")}
                  </h2>
                </div>
                <div className="mb-6 text-black">
                  <PictureCarousel pictures={gamesPrints ?? []} />
                </div>
              </div>

              {/*My review */}
              <div className="px-6 max-w-5xl bg-black text-white m-auto p-4">
                <h2 className="text-4xl text-center mb-4">
                  {t("movies.myReview")}
                </h2>
                <p className="mb-4">{gameData?.my_review_pt}</p>
              </div>

              {/*Creators */}
              {CreatorCards().props.children.length > 0 && (
                <div className="max-w-5xl bg-black text-white m-auto">
                  <h2 className="text-4xl text-center">
                    {t("games.creators")}
                  </h2>
                  <div className="flex justify-center gap-4 px-10">
                    {CreatorCards()}
                  </div>
                </div>
              )}

              {/*Producers */}
              <div className="max-w-5xl bg-black mx-auto p-6 text-white">
                <h2 className="text-4xl text-center">
                  {t("games.publishers")}
                </h2>
                <div className="flex justify-center gap-4 mt-4 px-10">
                  {PublisherGamesCards()}
                </div>
              </div>
              <div className="h-2"></div>
            </div>
          )}
        </div>
      </Page>
    </div>
  );
}
