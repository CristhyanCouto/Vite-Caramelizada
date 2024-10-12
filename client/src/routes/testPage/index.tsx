import axios from "axios"
import { useEffect, useState } from "react"
import { MoviesType } from "../../lib/movies"
import MovieCard from "@/components/common/movieCard"
import Page from "@/components/common/page"
import { CategoryComboBoxMovies } from "@/components/common/categoryComboBox"


export default function TestPage() {

    const [movieData, setMovieData] = useState<MoviesType | null>(null)
    const [genre, setGenre] = useState<string[]>([])

    useEffect(() => {
        axios.get("http://localhost:3001/genres")
            .then(res => {
                setMovieData(res.data)
            })
    }, [])

  return (
    <Page title="Test Page">
      <div>
        <div>
          <CategoryComboBoxMovies sortValue={genre} setSortValue={setGenre}/>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {movieData && movieData.map((movie: MoviesType) => (
                <MovieCard key={movie.idmovie} {...movie} />
            ))}
      </div>
      </div>
    </Page>

  )
}
