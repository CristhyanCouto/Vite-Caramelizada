import axios from "axios"
import { useEffect, useState } from "react"
import { MoviesType } from "../../lib/movies"
import MovieCard from "@/components/common/movieCard"


export default function MovieCardList() {

    const [movieData, setMovieData] = useState<MoviesType | null>(null)

    useEffect(() => {
        axios.get("http://localhost:3001/movies")
            .then(res => {
                setMovieData(res.data)
            })
    }, [])

  return (

    <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {movieData && movieData.map((movie: MoviesType) => (
            <MovieCard key={movie.idmovie} {...movie} />
            ))}
        </div>
      </div>

  )
}
