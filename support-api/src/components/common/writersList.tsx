import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { WriterCardProps } from "@/lib/person";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface WritersListProps {
  refreshComponentCounter?: number;
}

export default function WritersList({ refreshComponentCounter }: WritersListProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [writersData, setWritersData] = useState<WriterCardProps[]>([]);
  const [searchWriters, setSearchWriters] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/writers")
      .then((response) => {
        setWritersData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refreshComponentCounter]);

  const handleSearchWriters = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWriters(e.target.value);
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setSearchWriters("");
  };

  return (
    <div>
      <ScrollArea className="h-[700px] w-[450px] rounded-md border p-4">
        <div className="p-4">
          <div className="flex items-center">
            <input
              name="searchWriters"
              ref={inputRef}
              type="text"
              placeholder="Search writers"
              className="w-full p-2 rounded-md border"
              onChange={handleSearchWriters}
            />
            <Button
              onClick={clearInput}
              className="bg-transparent text-black hover:bg-zinc-400 ml-2 rounded-lg h-8 w-8"
            >
              x
            </Button>
          </div>
          <h1 className="text-2xl font-bold text-center">Writers</h1>
          <table className="border">
            <thead>
              <tr>
                <th className="border border-black p-2 text-center">ID</th>
                <th className="border border-black w-64">First Name</th>
                <th className="border border-black w-64">Last Name</th>
              </tr>
            </thead>
            <tbody className="border">
              {writersData
                .filter((value) => {
                  return (
                    (value.first_name &&
                      value.first_name
                        .toLowerCase()
                        .includes(searchWriters.toLowerCase())) ||
                    (value.last_name &&
                      value.last_name
                        .toLowerCase()
                        .includes(searchWriters.toLowerCase())) ||
                    (value.first_name &&
                      value.last_name &&
                      `${value.first_name} ${value.last_name}`
                        .toLowerCase()
                        .includes(searchWriters.toLowerCase()))
                  );
                })
                .filter((writer) => writer.first_name !== undefined)
                .sort((a, b) => a.first_name!.localeCompare(b.first_name!))
                .map((writer: WriterCardProps) => (
                  <tr key={writer.idwriter} className="border odd:bg-zinc-200">
                    <td className="border border-black text-center">
                      {writer.idwriter}
                    </td>
                    <td className="border border-black pl-2">
                      {writer.first_name}
                    </td>
                    <td className="border border-black pl-2">
                      {writer.last_name}
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
