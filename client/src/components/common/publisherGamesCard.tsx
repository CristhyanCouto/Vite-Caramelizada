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
    <div className="grid justify-center items-center text-center">
        <div className=" grid grid-rows-2 rounded-full w-36">
            <div className="bg-zinc-400 rounded-full p-1">
                <img src={publishers?.publisher_games_image_url} alt={publishers?.name_publisher_games} className="rounded-full"/>
            </div>
            <h1 className="text-2xl">{publishers?.name_publisher_games}</h1>
        </div>
    </div>
  )
}
