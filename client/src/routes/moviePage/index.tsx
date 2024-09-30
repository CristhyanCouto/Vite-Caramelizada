import { useParams } from "react-router-dom"

export default function MoviePage() {
  const { moviesId } = useParams()
  return (
    <div>
      <div>Movie Page</div>
      <div> {moviesId} </div>
    </div>
  )
}
