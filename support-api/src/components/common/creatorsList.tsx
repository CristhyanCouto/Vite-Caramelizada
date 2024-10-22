import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CreatorCardProps } from "@/lib/person";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface CreatorsListProps {
  refreshComponentCounter?: number;
}

export default function CreatorsList({ refreshComponentCounter }: CreatorsListProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [creatorsData, setCreatorsData] = useState<CreatorCardProps[]>([]);
  const [searchCreators, setSearchCreators] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/creators")
      .then((response) => {
        setCreatorsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refreshComponentCounter]);

  const handleSearchCreators = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCreators(e.target.value);
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setSearchCreators("");
  };

  return (
    <div>
      <ScrollArea className="h-[700px] w-[450px] rounded-md border p-4">
        <div className="p-4">
          <div className="flex items-center">
            <input
              name="searchCreators"
              ref={inputRef}
              type="text"
              placeholder="Search creators"
              className="w-full p-2 rounded-md border"
              onChange={handleSearchCreators}
            />
            <Button
              onClick={clearInput}
              className="bg-transparent text-black hover:bg-zinc-400 ml-2 rounded-lg h-8 w-8"
            >
              x
            </Button>
          </div>
          <h1 className="text-2xl font-bold text-center">Creators</h1>
          <table className="border">
            <thead>
              <tr>
                <th className="border border-black p-2 text-center">ID</th>
                <th className="border border-black w-64">First Name</th>
                <th className="border border-black w-64">Last Name</th>
              </tr>
            </thead>
            <tbody className="border">
              {creatorsData
                .filter((value) => {
                  return (
                    (value.first_name &&
                      value.first_name
                        .toLowerCase()
                        .includes(searchCreators.toLowerCase())) ||
                    (value.last_name &&
                      value.last_name
                        .toLowerCase()
                        .includes(searchCreators.toLowerCase())) ||
                    (value.first_name &&
                      value.last_name &&
                      `${value.first_name} ${value.last_name}`
                        .toLowerCase()
                        .includes(searchCreators.toLowerCase()))
                  );
                })
                .filter((creator) => creator.first_name !== undefined)
                .sort((a, b) => a.first_name!.localeCompare(b.first_name!))
                .map((creator: CreatorCardProps) => (
                  <tr key={creator.idcreator} className="border odd:bg-zinc-200">
                    <td className="border border-black text-center">
                      {creator.idcreator}
                    </td>
                    <td className="border border-black pl-2">
                      {creator.first_name}
                    </td>
                    <td className="border border-black pl-2">
                      {creator.last_name}
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
