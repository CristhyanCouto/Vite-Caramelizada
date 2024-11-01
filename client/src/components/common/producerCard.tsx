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
    <div className="flex justify-center items-center align-center text-center">
        <div className=" grid grid-cols-1 md:grid-rows-2 items-center justify-center align-center w-40">
            <div className="bg-zinc-400 rounded-full w-40 h-40 flex items-center justify-center align-center">
                <img src={producers?.producer_image_url} alt={producers?.name_producer} className="rounded-full w-36 h-36 object-cover"/>
            </div>
            <h1 className="text-2xl">{producers?.name_producer}</h1>
        </div>
    </div>
  )
}
