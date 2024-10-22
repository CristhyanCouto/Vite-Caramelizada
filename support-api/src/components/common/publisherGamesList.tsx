import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PublishersGamesCardProps } from "@/lib/nonPersonInterfaces";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface PublishersGamesListProps {
  refreshComponentCounter?: number;
}

export default function PublishersGamesList({ refreshComponentCounter }: PublishersGamesListProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [publishersData, setPublishersData] = useState<PublishersGamesCardProps[]>([]);
  const [searchPublishers, setSearchPublishers] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/publisherGames")
      .then((response) => {
        setPublishersData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refreshComponentCounter]);

  const handleSearchPublishers = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPublishers(e.target.value);
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setSearchPublishers("");
  };

  return (
    <div>
      <ScrollArea className="h-[700px] w-[450px] rounded-md border p-4">
        <div className="p-4">
          <div className="flex items-center">
            <input
              name="searchPublishers"
              ref={inputRef}
              type="text"
              placeholder="Search publishers"
              className="w-full p-2 rounded-md border"
              onChange={handleSearchPublishers}
            />
            <Button
              onClick={clearInput}
              className="bg-transparent text-black hover:bg-zinc-400 ml-2 rounded-lg h-8 w-8"
            >
              x
            </Button>
          </div>
          <h1 className="text-2xl font-bold text-center">Publishers Games</h1>
          <table className="border">
            <thead>
              <tr>
                <th className="border border-black p-2 text-center">ID</th>
                <th className="border border-black w-64">Publisher Name</th>
              </tr>
            </thead>
            <tbody className="border">
              {publishersData
                .filter((value) => {
                  return (
                    (value.name_publisher_games &&
                      value.name_publisher_games
                        .toLowerCase()
                        .includes(searchPublishers.toLowerCase()))
                  );
                })
                .filter((publisher) => publisher.name_publisher_games !== undefined)
                .sort((a, b) => a.name_publisher_games!.localeCompare(b.name_publisher_games!))
                .map((publisher: PublishersGamesCardProps) => (
                  <tr key={publisher.idpublisher_games} className="border odd:bg-zinc-200">
                    <td className="border border-black text-center">
                      {publisher.idpublisher_games}
                    </td>
                    <td className="border border-black pl-2">
                      {publisher.name_publisher_games}
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
