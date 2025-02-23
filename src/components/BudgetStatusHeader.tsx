import { DownloadIcon, PlusIcon, SlidersHorizontalIcon } from "lucide-react"
import { Button } from "./ui/button"
import DateRangePicker from "./DateRangePicker"

const BudgetStatusHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-4 mt-6">
      <h1 className="text-3xl font-semibold">Budget status</h1>
      <div className="block space-y-2 md:flex justify-start items-center gap-4">
        <Button
          className="bg-teal-700 font-light rounded-sm w-full md:w-auto"
          asChild
        >
          <div className="flex justify-center items-center gap-2">
            <PlusIcon />
            <span>Add New Project</span>
          </div>
        </Button>

        <Button
          variant={"outline"}
          className="border-teal-700 text-teal-700 font-light rounded-sm w-full md:w-auto"
          asChild
        >
          <div>
            <DownloadIcon />
            <span>Download report</span>
          </div>
        </Button>
        <DateRangePicker />

        <Button
          variant={"outline"}
          className="border-teal-700 text-teal-700 font-light rounded-sm w-full md:w-auto"
          asChild
        >
          <div>
            <SlidersHorizontalIcon />
            <span>Filter</span>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default BudgetStatusHeader
