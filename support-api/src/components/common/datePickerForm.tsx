"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface DatePickerFormProps {
  year?: number
  onDateChange?: (formattedDate: string) => void // Função de callback para exportar a data formatada
}

export function DatePickerForm({ year, onDateChange }: DatePickerFormProps) {
  const [date, setDate] = React.useState<Date>()

  // Função para formatar a data no formato MM/DD/YYYY
  function formatDate(date: Date): string {
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    const year = date.getFullYear()
    return `${month}/${day}/${year}`
  }

  // Quando a data for selecionada, chama a função para exportar o valor formatado
  React.useEffect(() => {
    if (date && onDateChange) {
      const formattedDate = formatDate(date)
      onDateChange(formattedDate) // Exporta a data formatada para fora
    }
  }, [date, onDateChange])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          toYear={year}
        />
      </PopoverContent>
    </Popover>
  )
}
