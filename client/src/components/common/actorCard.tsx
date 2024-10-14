import { ActorCardProps } from "@/lib/people";
import axios from "axios";
import { useEffect, useState } from "react";


export default function ActorCard(props: ActorCardProps) {

    const [actors, setActors] = useState<ActorCardProps | null>(null);

    useEffect(() => {
      axios.get(`http://localhost:3001/actors/${props.idactor}`)
      .then(res => {
        setActors(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    }, [props.idactor]);

  return (
    <div className="flex flex-col justify-center items-center text-center">
        <div className="bg-zinc-400 rounded-full w-36">
            <div className="bg-zinc-400 rounded-full p-1">
                <img src={actors?.actor_image_url} alt={actors?.first_name} className="rounded-full"/>
            </div>
        </div>
        <h1 className="text-2xl">{actors?.first_name} {actors?.last_name}</h1>
    </div>
  )
}
