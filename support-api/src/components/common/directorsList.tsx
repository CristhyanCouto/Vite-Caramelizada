import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DirectorCardProps } from "@/lib/person";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface DirectorsListProps {
  refreshComponentCounter?: number;
}

export default function DirectorsList({ refreshComponentCounter }: DirectorsListProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [directorsData, setDirectorsData] = useState<DirectorCardProps[]>([]);
  const [searchDirectors, setSearchDirectors] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/directors")
      .then((response) => {
        setDirectorsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refreshComponentCounter]);

  const handleSearchDirectors = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchDirectors(e.target.value);
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setSearchDirectors("");
  };

  return (
    <div>
      <ScrollArea className="h-[700px] w-[450px] rounded-md border p-4 bg-white">
        <div className="p-4">
          <div className="flex items-center">
            <input
              name="searchDirectors"
              ref={inputRef}
              type="text"
              placeholder="Search directors"
              className="w-full p-2 rounded-md border"
              onChange={handleSearchDirectors}
            />
            <Button
              onClick={clearInput}
              className="bg-transparent text-black hover:bg-zinc-400 ml-2 rounded-lg h-8 w-8"
            >
              x
            </Button>
          </div>
          <h1 className="text-2xl font-bold text-center my-4">Directors</h1>
          <table className="border">
            <thead>
              <tr>
                <th className="border border-black p-2 text-center">ID</th>
                <th className="border border-black w-64">First Name</th>
                <th className="border border-black w-64">Last Name</th>
              </tr>
            </thead>
            <tbody className="border">
              {directorsData
                .filter((value) => {
                  return (
                    (value.first_name &&
                      value.first_name
                        .toLowerCase()
                        .includes(searchDirectors.toLowerCase())) ||
                    (value.last_name &&
                      value.last_name
                        .toLowerCase()
                        .includes(searchDirectors.toLowerCase())) ||
                    (value.first_name &&
                      value.last_name &&
                      `${value.first_name} ${value.last_name}`
                        .toLowerCase()
                        .includes(searchDirectors.toLowerCase()))
                  );
                })
                .filter((director) => director.first_name !== undefined)
                .sort((a, b) => a.first_name!.localeCompare(b.first_name!))
                .map((director: DirectorCardProps) => (
                  <tr key={director.iddirector} className="border odd:bg-zinc-200">
                    <td className="border border-black text-center">
                      {director.iddirector}
                    </td>
                    <td className="border border-black pl-2">
                      {director.first_name}
                    </td>
                    <td className="border border-black pl-2">
                      {director.last_name}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </ScrollArea>
    </div>
  );
}
