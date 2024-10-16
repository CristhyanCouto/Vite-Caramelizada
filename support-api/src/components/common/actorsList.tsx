import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ActorCardProps } from "@/lib/person"
import axios from "axios"
import { useEffect, useRef, useState } from "react"

export default function ActorsList() {

  const inputRef = useRef<HTMLInputElement>(null);

  const [actorsData, setActorsData] = useState<ActorCardProps[]>([])
  const [searchActors, setSearchActors] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/actors')
      .then((response) => {
        setActorsData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  , [])

  const handleSearchActors = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchActors(e.target.value)
  }

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setSearchActors('');
  };
    
  return (
    <div>
      <ScrollArea className="h-[300px] w-[450px] rounded-md border p-4">
        <div className="p-4">
          <div className="flex items-center">
            <input
            ref={inputRef} 
            type="text" 
            placeholder="Search actors" 
            className="w-full p-2 rounded-md border" 
            onChange={handleSearchActors}/>
            <Button onClick={clearInput} className="bg-transparent text-black hover:bg-zinc-400 ml-2 rounded-lg h-8 w-8">x</Button>
          </div>
          <h1 className="text-2xl font-bold text-center">Actors</h1>
          <table className="border">
            <tr className="border">
                <th className="border border-black p-2 text-center">ID</th>
                <th className="border border-black w-64">First Name</th>
                <th className="border border-black w-64">Last Name</th>
            </tr>
            {actorsData
            .filter((value) => {
              return value.first_name && value.first_name.toLowerCase().includes(searchActors.toLowerCase())
              || value.last_name && value.last_name.toLowerCase().includes(searchActors.toLowerCase())
              || value.first_name && value.last_name && 
              (`${value.first_name} ${value.last_name}`.toLowerCase().includes(searchActors.toLowerCase()))})
            .filter((actor) => actor.first_name !== undefined)
            .sort((a, b) => a.first_name!.localeCompare(b.first_name!))
            .map((actor: ActorCardProps) => (
              <tr key={actor.idactor} className="border odd:bg-zinc-200">
                <td className="border border-black text-center">{actor.idactor}</td>
                <td className="border border-black pl-2">{actor.first_name}</td>
                <td className="border border-black pl-2">{actor.last_name}</td>
              </tr>
            ))}
          </table>
        </div>
      </ScrollArea>
    </div>
  )
}
