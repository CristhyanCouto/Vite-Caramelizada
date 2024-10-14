import { WriterCardProps } from "@/lib/people";
import axios from "axios";
import { useEffect, useState } from "react";


export default function WriterCard(props: WriterCardProps) {

    const [writers, setWriters] = useState<WriterCardProps | null>(null);

    useEffect(() => {
      axios.get(`http://localhost:3001/writers/${props.idwriter}`)
      .then(res => {
        setWriters(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    }, [props.idwriter]);

  return (
    <div className="flex flex-col justify-center items-center text-center">
        <div className="bg-zinc-400 rounded-full w-36">
          <div className="bg-zinc-400 rounded-full p-1">
              <img src={writers?.writer_image_url} alt={writers?.first_name} className="rounded-full"/>
          </div>
        </div>
        <h1 className="text-2xl">{writers?.first_name} {writers?.last_name}</h1>
    </div>
  )
}
