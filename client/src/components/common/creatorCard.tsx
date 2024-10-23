import { CreatorCardProps } from "@/lib/people";
import axios from "axios";
import { useEffect, useState } from "react";


export default function CreatorCard(props: CreatorCardProps) {

    const [creators, setCreators] = useState<CreatorCardProps | null>(null);

    useEffect(() => {
      axios.get(`http://localhost:3001/creators/${props.idcreator}`)
      .then(res => {
        setCreators(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    }, [props.idcreator]);

  return (
    <div className="flex flex-col justify-center items-center text-center">
        <div className="bg-zinc-400 rounded-full w-36">
          <div className="bg-zinc-400 rounded-full p-1">
            <img src={creators?.creator_image_url} alt={creators?.first_name} className="rounded-full"/>
          </div>
        </div>
        <h1 className="text-2xl">{creators?.first_name} {creators?.last_name}</h1>
    </div>
  )
}
