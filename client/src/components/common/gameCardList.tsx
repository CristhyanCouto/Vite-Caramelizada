import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import { IoSearchSharp } from "react-icons/io5"
import { SortComboBoxMovies } from "./sortComboBox";
import i18n from "@/lib/i18n/i18n";
import {
  CategoryComboBoxGames,
  MultiplayerComboBoxGames,
  PlataformsComboBoxGames,
} from "./categoryComboBox";
import { GamesType } from "@/lib/games";
import GameCard from "./gameCard";

export default function GameCardList() {
  const { t } = useTranslation();

  const [gameData, setGameData] = useState<GamesType[] | null>(null);
  const [query, setQuery] = useState<string>("");
  const [sortValue, setSortValue] = useState<string>("myRatingPlus");
  const [sortGenre, setSortGenre] = useState<string[]>([]);
  const [sortModes, setSortModes] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(3); // Estado para controle da quantidade visível

  useEffect(() => {
    axios.get("http://localhost:3001/games").then((res) => {
      setGameData(res.data);
    });
  }, []);

  const handlePlatformSelect = (value: string[]) => {
    setSelectedPlatforms(value);
  };

  function getSortFunction(sortValue: string) {
    switch (sortValue) {
      case "myRatingPlus":
        return (a: GamesType, b: GamesType) =>
          (b.my_rating ?? 0) - (a.my_rating ?? 0);
      case "myRatingMinus":
        return (a: GamesType, b: GamesType) =>
          (a.my_rating ?? 0) - (b.my_rating ?? 0);
      case "alphabeticalPlus":
        return i18n.language === "en"
          ? (a: GamesType, b: GamesType) => a.title_en.localeCompare(b.title_en)
          : (a: GamesType, b: GamesType) =>
              a.title_pt.localeCompare(b.title_pt);
      case "alphabeticalMinus":
        return i18n.language === "en"
          ? (a: GamesType, b: GamesType) => b.title_en.localeCompare(a.title_en)
          : (a: GamesType, b: GamesType) =>
              b.title_pt.localeCompare(a.title_pt);
      case "releaseDatePlus":
        return (a: GamesType, b: GamesType) =>
          new Date(b.release_date ?? 0).getTime() -
          new Date(a.release_date ?? 0).getTime();
      case "releaseDateMinus":
        return (a: GamesType, b: GamesType) =>
          new Date(a.release_date ?? 0).getTime() -
          new Date(b.release_date ?? 0).getTime();
      default:
        return (a: GamesType, b: GamesType) =>
          (b.my_rating ?? 0) - (a.my_rating ?? 0);
    }
  }

  function filterByGenres(game: GamesType) {
    if (sortGenre.length === 0) return true;
    const gameGenres = [
      game.fk_genre_en01,
      game.fk_genre_en02,
      game.fk_genre_en03,
      game.fk_genre_en04,
      game.fk_genre_en05,
    ].filter(Boolean);
    return sortGenre.every((genre) => gameGenres.includes(Number(genre)));
  }

  function filterByModes(game: GamesType) {
    if (sortModes.length === 0) return true;
    const modeMapping = {
      "0": game.singleplayer,
      "1": game.multiplayer,
      "2": game.multiplayer_local,
    };
    return sortModes.every(
      (mode) => modeMapping[mode as keyof typeof modeMapping]
    );
  }

  function filterByPlatforms(game: GamesType) {
    if (selectedPlatforms.length === 0) return true;
    const gamePlatforms = [
      game.fk_plataform01,
      game.fk_plataform02,
      game.fk_plataform03,
      game.fk_plataform04,
      game.fk_plataform05,
      game.fk_plataform06,
      game.fk_plataform07,
      game.fk_plataform08,
      game.fk_plataform09,
      game.fk_plataform10,
    ].filter(Boolean);
    return selectedPlatforms.every((platform) =>
      gamePlatforms.includes(Number(platform))
    );
  }

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Carregar mais 6 games ao clicar
  };

  return (
    <div className="bg-zinc-900">
      <div className="pt-4 px-16 flex gap-2">
        <SortComboBoxMovies sortValue={sortValue} setSortValue={setSortValue} />
        <PlataformsComboBoxGames
          sortValue={selectedPlatforms}
          setSortValue={handlePlatformSelect}
        />
        <input
          type="text"
          className="bg-white text-black p-2 w-full h-10 rounded-lg pr-10 text-center border"
          placeholder={t("navbar01.search")}
          onChange={(e) => setQuery(e.target.value)}
        />
        <CategoryComboBoxGames
          sortValue={sortGenre}
          setSortValue={setSortGenre}
        />
        <MultiplayerComboBoxGames
          sortValue={sortModes}
          setSortValue={setSortModes}
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {gameData &&
            gameData
              .sort(getSortFunction(sortValue))
              .filter((game: GamesType) => {
                const matchesQuery =
                  game.title_en.toLowerCase().includes(query.toLowerCase()) ||
                  game.title_pt.toLowerCase().includes(query.toLowerCase());
                return (
                  matchesQuery &&
                  filterByGenres(game) &&
                  filterByModes(game) &&
                  filterByPlatforms(game)
                );
              })
              .slice(0, visibleCount) // Limitar o número de games visíveis
              .map((game: GamesType) => (
                <GameCard key={game.idgame} {...game} />
              ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        {visibleCount < (gameData?.length ?? 0) && (
          <button
            onClick={handleLoadMore}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded mb-8"
          >
            {t("utils.loadMore")}
          </button>
        )}
      </div>
    </div>
  );
}
