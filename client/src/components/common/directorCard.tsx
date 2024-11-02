import { DirectorCardProps } from "@/lib/people";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DirectorCard(props: DirectorCardProps) {
  const [directors, setDirectors] = useState<DirectorCardProps | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/directors/${props.iddirector}`)
      .then((res) => {
        setDirectors(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.iddirector]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center gap-3">
        <div className="bg-zinc-400 rounded-xl w-36 h-56">
          <div className="bg-zinc-400 rounded-xl p-1">
            <img
              src={directors?.director_image_url}
              alt={directors?.first_name}
              className="rounded-xl object-cover w-36 h-56"
            />
          </div>
        </div>
      </div>
      <h1 className="text-2xl text-center my-4">
        {directors?.first_name} {directors?.last_name}
      </h1>
    </div>
  );
}
