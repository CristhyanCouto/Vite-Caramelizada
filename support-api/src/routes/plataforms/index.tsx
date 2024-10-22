import PlataformsList from "@/components/common/plataformsList";
import PostPlataforms from "@/components/common/postPlataforms";
import { useState } from "react";

export default function Plataforms() {
  const [counter, setCounter] = useState(0);

  const handleRefresh = () => {
    setCounter((prevCounter) => prevCounter + 1); // Incrementa o contador para forçar o refresh
  };
  return (
    <div className="grid grid-cols-2">
      <div className="grid grid-cols-1 justify-center px-6">
        <PostPlataforms setRefreshComponentCounter={handleRefresh} />
      </div>
      <div className="flex flex-col p-2 justify-center">
        <h1 className="text-4xl text-center bold mb-2">Helping Tools</h1>
        <div className="flex justify-center h-full">
          <PlataformsList refreshComponentCounter={counter} />
        </div>
      </div>
    </div>
  );
}
