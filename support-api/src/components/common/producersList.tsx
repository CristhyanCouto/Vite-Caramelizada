import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProducersCardProps } from "@/lib/nonPersonInterfaces";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface ProducersListProps {
  refreshComponentCounter?: number;
}

export default function ProducersList({ refreshComponentCounter }: ProducersListProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [producersData, setProducersData] = useState<ProducersCardProps[]>([]);
  const [searchProducers, setSearchProducers] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/producers")
      .then((response) => {
        setProducersData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refreshComponentCounter]);

  const handleSearchProducers = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProducers(e.target.value);
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setSearchProducers("");
  };

  return (
    <div>
      <ScrollArea className="h-[700px] w-[450px] rounded-md border p-4">
        <div className="p-4">
          <div className="flex items-center">
            <input
              name="searchProducers"
              ref={inputRef}
              type="text"
              placeholder="Search producers"
              className="w-full p-2 rounded-md border"
              onChange={handleSearchProducers}
            />
            <Button
              onClick={clearInput}
              className="bg-transparent text-black hover:bg-zinc-400 ml-2 rounded-lg h-8 w-8"
            >
              x
            </Button>
          </div>
          <h1 className="text-2xl font-bold text-center">Producers</h1>
          <table className="border">
            <thead>
              <tr>
                <th className="border border-black p-2 text-center">ID</th>
                <th className="border border-black w-64">Producer Name</th>
              </tr>
            </thead>
            <tbody className="border">
              {producersData
                .filter((value) => {
                  return (
                    (value.name_producer &&
                      value.name_producer
                        .toLowerCase()
                        .includes(searchProducers.toLowerCase()))
                  );
                })
                .filter((producer) => producer.name_producer !== undefined)
                .sort((a, b) => a.name_producer!.localeCompare(b.name_producer!))
                .map((producer: ProducersCardProps) => (
                  <tr key={producer.idproducer} className="border odd:bg-zinc-200">
                    <td className="border border-black text-center">
                      {producer.idproducer}
                    </td>
                    <td className="border border-black pl-2">
                      {producer.name_producer}
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
