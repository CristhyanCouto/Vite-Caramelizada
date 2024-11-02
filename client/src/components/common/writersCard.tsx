import { WriterCardProps } from "@/lib/people";
import axios from "axios";
import { useEffect, useState } from "react";

export default function WriterCard(props: WriterCardProps) {
  const [writers, setWriters] = useState<WriterCardProps | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/writers/${props.idwriter}`)
      .then((res) => {
        setWriters(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.idwriter]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center gap-3">
        <div className="bg-zinc-400 rounded-xl w-36 h-56">
          <div className="bg-zinc-400 rounded-xl p-1">
            <img
              src={writers?.writer_image_url}
              alt={writers?.first_name}
              className="rounded-xl object-cover w-36 h-56"
            />
          </div>
        </div>
      </div>
      <h1 className="text-2xl text-center my-4">
        {writers?.first_name} {writers?.last_name}
      </h1>
    </div>
  );
}
