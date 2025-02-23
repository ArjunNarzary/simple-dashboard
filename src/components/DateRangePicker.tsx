import React, { useState } from "react"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { Calendar } from "./ui/calendar"
import { DateRange } from "react-day-picker"
import { Calendar1Icon } from "lucide-react"

const DateRangePicker: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  })
  const [open, setOpen] = useState<boolean>(false)

  const handleSelect = (selectedDate: DateRange | undefined) => {
    if (!dateRange.from || (dateRange.from && dateRange.to)) {
      setDateRange({ from: selectedDate?.from, to: undefined })
    } else if (selectedDate?.to && selectedDate?.to >= dateRange.from) {
      setDateRange({ ...dateRange, to: selectedDate.to })
      setOpen(false)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="border-teal-700 text-teal-700 font-light rounded-sm w-full md:w-auto"
        >
          <Calendar1Icon />
          {dateRange.from
            ? format(dateRange.from, "MMM dd, yyyy")
            : "dd/mm/yyy"}{" "}
          -{dateRange.to ? format(dateRange.to, "MMM dd, yyyy") : "dd/mm/yyyy"}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto">
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export default DateRangePicker
