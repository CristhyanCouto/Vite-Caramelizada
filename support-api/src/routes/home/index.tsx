import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-black h-screen flex flex-col">
      <h1 className="text-white text-4xl text-center pt-6 my-8 font-bold">Support Tool Caramelizada</h1>
      <div className="px-20 py-6 gap-12 flex flex-wrap">
        <Link to='actors'><Button className="w-36">Actors</Button></Link>
        <Link to='animes'><Button className="w-36">Animes</Button></Link>
        <Link to='books'><Button className="w-36">Books</Button></Link>
        <Link to='creators'><Button className="w-36">Creators</Button></Link>
        <Link to='currentStatusEnPt'><Button className="w-36">Current Status En Pt</Button></Link>
        <Link to='directors'><Button className="w-36">Directors</Button></Link>
        <Link to='games'><Button className="w-36">Games</Button></Link>
        <Link to='genreEnPt'><Button className="w-36">Genre En Pt</Button></Link>
        <Link to='movies'><Button className="w-36">Movies</Button></Link>
        <Link to='plataforms'><Button className="w-36">Plataforms</Button></Link>
        <Link to='producers'><Button className="w-36">Producers</Button></Link>
        <Link to='publisherBooks'><Button className="w-36">Publisher Books</Button></Link>
        <Link to='publisherGames'><Button className="w-36">Publisher Games</Button></Link>
        <Link to='ratedPgEn'><Button className="w-36">Rated PG En</Button></Link>
        <Link to='ratedPgPt'><Button className="w-36">Rated PG Pt</Button></Link>
        <Link to='seasonsAnimes'><Button className="w-36">Seasons Animes</Button></Link>
        <Link to='seasonsSeries'><Button className="w-36">Seasons Series</Button></Link>
        <Link to='series'><Button className="w-36">Series</Button></Link>
        <Link to='writers'><Button className="w-36">Writers</Button></Link>
      </div>
    </div>
  )
}
