import { PublisherCardProps } from "@/lib/people";
import axios from "axios";
import { useEffect, useState } from "react";


export default function PublisherGamesCard(props: PublisherCardProps) {

    const [publishers, setPublisher] = useState<PublisherCardProps | null>(null);

    useEffect(() => {
      axios.get(`http://localhost:3001/publisherGames/${props.idpublisher_games}`)
      .then(res => {
        setPublisher(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    }, [props.idpublisher_games]);

  return (
    <div className="flex justify-center items-center align-center text-center">
        <div className=" grid grid-cols-1 md:grid-rows-2 items-center justify-center align-center w-40">
            <div className="bg-zinc-400 rounded-full w-40 h-40 flex items-center justify-center align-center">
                <img src={publishers?.publisher_games_image_url} alt={publishers?.name_publisher_games} className="rounded-full w-36 h-36 object-cover"/>
            </div>
            <h1 className="text-2xl">{publishers?.name_publisher_games}</h1>
        </div>
    </div>
  )
}
