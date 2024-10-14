import { ProducerCardProps } from "@/lib/people";
import axios from "axios";
import { useEffect, useState } from "react";


export default function ProducerCard(props: ProducerCardProps) {

    const [producers, setProducers] = useState<ProducerCardProps | null>(null);

    useEffect(() => {
      axios.get(`http://localhost:3001/producers/${props.idproducer}`)
      .then(res => {
        setProducers(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    }, [props.idproducer]);

  return (
    <div className="grid grid-cols-5 justify-center items-center text-center">
        <div className=" grid grid-rows-2 rounded-full w-36">
            <div className="bg-zinc-400 rounded-full p-1">
                <img src={producers?.producer_image_url} alt={producers?.name_producer} className="rounded-full"/>
            </div>
            <h1 className="text-2xl">{producers?.name_producer}</h1>
        </div>
    </div>
  )
}
