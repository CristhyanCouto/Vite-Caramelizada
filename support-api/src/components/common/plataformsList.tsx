import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlataformsCardProps } from "@/lib/nonPersonInterfaces";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface PlataformsListProps {
  refreshComponentCounter?: number;
}

export default function PlaformsList({ refreshComponentCounter }: PlataformsListProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [plataformsData, setPlataformsData] = useState<PlataformsCardProps[]>([]);
  const [searchPlataforms, setSearchPlataforms] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/plataforms")
      .then((response) => {
        setPlataformsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refreshComponentCounter]);

  const handleSearchPlataforms = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPlataforms(e.target.value);
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setSearchPlataforms("");
  };

  return (
    <div>
      <ScrollArea className="h-[700px] w-[450px] rounded-md border p-4">
        <div className="p-4">
          <div className="flex items-center">
            <input
              name="searchPlataforms"
              ref={inputRef}
              type="text"
              placeholder="Search plataforms"
              className="w-full p-2 rounded-md border"
              onChange={handleSearchPlataforms}
            />
            <Button
              onClick={clearInput}
              className="bg-transparent text-black hover:bg-zinc-400 ml-2 rounded-lg h-8 w-8"
            >
              x
            </Button>
          </div>
          <h1 className="text-2xl font-bold text-center">Plataforms</h1>
          <table className="border">
            <thead>
              <tr>
                <th className="border border-black p-2 text-center">ID</th>
                <th className="border border-black w-64">Plataform Name</th>
              </tr>
            </thead>
            <tbody className="border">
              {plataformsData
                .filter((value) => {
                  return (
                    (value.name_plataform &&
                      value.name_plataform
                        .toLowerCase()
                        .includes(searchPlataforms.toLowerCase()))
                  );
                })
                .filter((plataform) => plataform.name_plataform !== undefined)
                .sort((a, b) => a.name_plataform!.localeCompare(b.name_plataform!))
                .map((plataform: PlataformsCardProps) => (
                  <tr key={plataform.idplataform} className="border odd:bg-zinc-200">
                    <td className="border border-black text-center">
                      {plataform.idplataform}
                    </td>
                    <td className="border border-black pl-2">
                      {plataform.name_plataform}
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
