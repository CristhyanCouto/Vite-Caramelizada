import axios from "axios"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
// import { IoSearchSharp } from "react-icons/io5"
import { SortComboBoxMovies } from "./sortComboBox"
import i18n from "@/lib/i18n/i18n"
import { CategoryComboBoxAnimes } from "./categoryComboBox"
import { AnimesType } from "@/lib/animes"
import AnimeCard from "./animeCard"

export default function AnimeCardList() {
    const { t } = useTranslation()

    const [animeData, setAnimeData] = useState<AnimesType[] | null>(null)
    const [query, setQuery] = useState<string>("")
    const [sortValue, setSortValue] = useState<string>("myRatingPlus")
    const [sortGenre, setSortGenre] = useState<string[]>([])
    const [visibleAnimes, setVisibleAnimes] = useState<number>(8) // Número inicial de filmes visíveis

    useEffect(() => {
        axios.get("http://localhost:3001/animes")
            .then(res => {
                setAnimeData(res.data)
            })
    }, [])

    const loadMoreAnimes = () => {
        setVisibleAnimes((prev) => prev + 8)
    }

    function getSortFunction(sortValue: string) {
        switch (sortValue) {
            case "myRatingPlus": //My Rating > 0
                return (a: AnimesType, b: AnimesType) => (b.my_rating ?? 0) - (a.my_rating ?? 0)
            case "myRatingMinus": //My Rating < 0
                return (a: AnimesType, b: AnimesType) => (a.my_rating ?? 0) - (b.my_rating ?? 0)
            case "alphabeticalPlus": //Alphabetical order
                return i18n.language === "en" 
                    ? (a: AnimesType, b: AnimesType) => a.title_en.localeCompare(b.title_en)
                    : (a: AnimesType, b: AnimesType) => a.title_pt.localeCompare(b.title_pt)
            case "alphabeticalMinus": //Reverse alphabetical order
                return i18n.language === "en" 
                    ? (a: AnimesType, b: AnimesType) => b.title_en.localeCompare(a.title_en)
                    : (a: AnimesType, b: AnimesType) => b.title_pt.localeCompare(a.title_pt)
            case "releaseDatePlus": //Release date + recent
                return (a: AnimesType, b: AnimesType) => new Date(b.release_date ?? 0).getTime() - new Date(a.release_date ?? 0).getTime()
            case "releaseDateMinus": //Release date - recent
                return (a: AnimesType, b: AnimesType) => new Date(a.release_date ?? 0).getTime() - new Date(b.release_date ?? 0).getTime()
            default:
                return (a: AnimesType, b: AnimesType) => (b.my_rating ?? 0) - (a.my_rating ?? 0)
        }
    }

    function filterByGenres(anime: AnimesType) {
        if (sortGenre.length === 0) return true // Se nenhum gênero for selecionado, mostrar todos os filmes

        // Verificar se todos os gêneros selecionados estão entre os gêneros do filme
        const animeGenres = [
            anime.fk_genre_en01,
            anime.fk_genre_en02,
            anime.fk_genre_en03,
            anime.fk_genre_en04,
            anime.fk_genre_en05,
            anime.fk_genre_en06,
            anime.fk_genre_en07,
            anime.fk_genre_en08,
            anime.fk_genre_en09,
            anime.fk_genre_en10
        ].filter(Boolean) // Filtrar para remover valores "falsos" (null ou undefined)

        // Verificar se todos os gêneros selecionados estão presentes no array de gêneros do filme
        return sortGenre.every(genre => animeGenres.includes(Number(genre)))
    }

    return (
        <div className="bg-zinc-900">
            <div className="pt-4 px-16 flex gap-2">
                <SortComboBoxMovies sortValue={sortValue} setSortValue={setSortValue} />
                <input type="text"
                    className="bg-white text-black p-2 w-full h-10 rounded-lg pr-10 text-center border"
                    placeholder={t('navbar01.search')}
                    onChange={(e) => setQuery(e.target.value)} 
                />
                <CategoryComboBoxAnimes sortValue={sortGenre} setSortValue={setSortGenre} />
            </div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {animeData && animeData
                        .sort(getSortFunction(sortValue))
                        .filter((anime: AnimesType) => {
                            const matchesQuery = anime.title_en.toLowerCase().includes(query.toLowerCase()) ||
                                                 anime.title_pt.toLowerCase().includes(query.toLowerCase())

                            return matchesQuery && filterByGenres(anime)
                        })
                        .slice(0, visibleAnimes) // Mostra apenas os filmes visíveis
                        .map((anime: AnimesType) => (
                            <AnimeCard key={anime.idanime} {...anime} />
                        ))
                    }
                </div>
            </div>
            {animeData && visibleAnimes < animeData.length && (
                <div className="flex justify-center mt-4">
                    <button onClick={loadMoreAnimes} className="bg-red-500 text-white py-2 px-4 rounded mb-8">
                        {t("utils.loadMore")} {/* Texto do botão traduzido */}
                    </button>
                </div>
            )}
        </div>
    )
}
