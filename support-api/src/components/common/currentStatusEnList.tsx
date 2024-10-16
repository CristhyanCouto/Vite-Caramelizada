import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CurrentStatusPropsEn } from "@/lib/currentStatus"
import axios from "axios"
import { useEffect, useRef, useState } from "react"

export default function CurrentStatusEnList() {

  const inputRef = useRef<HTMLInputElement>(null);

  const [currentStatusEn, setCurrentStatusEn] = useState<CurrentStatusPropsEn[]>([])
  const [searchActors, setSearchActors] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/currentStatusEns')
      .then((response) => {
        setCurrentStatusEn(response.data)
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
          <div className="flex flex-col mt-2">
            <h1 className="text-2xl font-bold text-center mb-2">Current Status En</h1>
            <table className="border">
                <tr className="border">
                    <th className="border border-black p-2 text-center">ID</th>
                    <th className="border border-black w-64">Status Name</th>
                </tr>
                {currentStatusEn
                .filter((value) => {
                return value.name_current_status_en && value.name_current_status_en.toLowerCase().includes(searchActors.toLowerCase())})
                .filter((value) => value.name_current_status_en !== undefined)
                .sort((a, b) => a.name_current_status_en!.localeCompare(b.name_current_status_en!))
                .map((value: CurrentStatusPropsEn) => (
                <tr key={value.idcurrent_status_en} className="border odd:bg-zinc-200">
                    <td className="border border-black text-center">{value.idcurrent_status_en}</td>
                    <td className="border border-black pl-2">{value.name_current_status_en}</td>
                </tr>
                ))}
            </table>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
