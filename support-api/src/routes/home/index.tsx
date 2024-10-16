import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-black">
      <h1 className="text-white text-4xl text-center pt-6">Insert to API Routes</h1>
      <div className="flex flex-col px-20 py-6 gap-4">
        <Link to='actors'><Button className="w-full">Actors</Button></Link>
        <Link to='animes'><Button className="w-full">Animes</Button></Link>
        <Link to='books'><Button className="w-full">Books</Button></Link>
        <Link to='creators'><Button className="w-full">Creators</Button></Link>
        <Link to='currentStatusEnPt'><Button className="w-full">Current Status En Pt</Button></Link>
        <Link to='directors'><Button className="w-full">Directors</Button></Link>
        <Link to='games'><Button className="w-full">Games</Button></Link>
        <Link to='genreEnPt'><Button className="w-full">Genre En Pt</Button></Link>
        <Link to='movies'><Button className="w-full">Movies</Button></Link>
        <Link to='plataforms'><Button className="w-full">Plataforms</Button></Link>
        <Link to='producers'><Button className="w-full">Producers</Button></Link>
        <Link to='publisherBooks'><Button className="w-full">Publisher Books</Button></Link>
        <Link to='publisherGames'><Button className="w-full">Publisher Games</Button></Link>
        <Link to='ratedPgEn'><Button className="w-full">Rated PG En</Button></Link>
        <Link to='ratedPgPt'><Button className="w-full">Rated PG Pt</Button></Link>
        <Link to='seasonsAnimes'><Button className="w-full">Seasons Animes</Button></Link>
        <Link to='seasonsSeries'><Button className="w-full">Seasons Series</Button></Link>
        <Link to='series'><Button className="w-full">Series</Button></Link>
        <Link to='writers'><Button className="w-full">Writers</Button></Link>
      </div>
    </div>
  )
}
