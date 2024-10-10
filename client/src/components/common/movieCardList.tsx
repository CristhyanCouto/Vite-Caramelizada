import axios from "axios"
import { useEffect, useState } from "react"
import { MoviesType } from "../../lib/movies"
import MovieCard from "@/components/common/movieCard"
import { useTranslation } from "react-i18next"
// import { IoSearchSharp } from "react-icons/io5"
import { SortComboBoxMovies } from "./sortComboBox"
import i18n from "@/lib/i18n/i18n"


export default function MovieCardList() {
    const { t } = useTranslation()

    const [movieData, setMovieData] = useState<MoviesType[] | null>(null)
    const [query, setQuery] = useState<string>("")
    const [sortValue, setSortValue] = useState<string>("myRatingPlus")

    useEffect(() => {
        axios.get("http://localhost:3001/movies")
            .then(res => {
                setMovieData(res.data)
            })
    }, [])

    function getSortFunction(sortValue: string) {
        switch (sortValue) {
            case "myRatingPlus": //My Rating > 0
                return (a: MoviesType, b: MoviesType) => (b.my_rating ?? 0) - (a.my_rating ?? 0)
            case "myRatingMinus": //My Rating < 0
                return (a: MoviesType, b: MoviesType) => (a.my_rating ?? 0) - (b.my_rating ?? 0)
            case "alphabeticalPlus": //Alphabetical order
                return i18n.language === "en" 
                    ? (a: MoviesType, b: MoviesType) => a.title_en.localeCompare(b.title_en)
                    : (a: MoviesType, b: MoviesType) => a.title_pt.localeCompare(b.title_pt)
            case "alphabeticalMinus": //Reverse alphabetical order
                return i18n.language === "en" 
                    ? (a: MoviesType, b: MoviesType) => b.title_en.localeCompare(a.title_en)
                    : (a: MoviesType, b: MoviesType) => b.title_pt.localeCompare(a.title_pt)
            case "releaseDatePlus": //Release date + recent
                return (a: MoviesType, b: MoviesType) => new Date(b.release_date ?? 0).getTime() - new Date(a.release_date ?? 0).getTime()
            case "releaseDateMinus": //Release date - recent
                return (a: MoviesType, b: MoviesType) => new Date(a.release_date ?? 0).getTime() - new Date(b.release_date ?? 0).getTime()
          default:
            return (a: MoviesType, b: MoviesType) => (b.my_rating ?? 0) - (a.my_rating ?? 0)
        }
      }      


  return (

    <div>
        <div className="pt-4 px-16 flex gap-2">
            <input type="text"
            className="bg-white text-black p-2 w-full h-10 rounded-lg pr-10 text-center
            border"
            placeholder={t('navbar01.search')}
            onChange={(e) => setQuery(e.target.value)} />
            {/* <IoSearchSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" /> */}
            <SortComboBoxMovies sortValue={sortValue} setSortValue={setSortValue} />
        </div>
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                {movieData && movieData
                .sort(getSortFunction(sortValue))
                .filter((movie: MoviesType) => {
                    return movie.title_en.toLowerCase().includes(query.toLowerCase())
                    || movie.title_pt.toLowerCase().includes(query.toLowerCase())
                })
                .map((movie: MoviesType) => (
                <MovieCard key={movie.idmovie} {...movie} />
                ))}
            </div>
        </div>
      </div>
  )
}
