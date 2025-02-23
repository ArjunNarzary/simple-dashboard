import { CircleIcon } from "lucide-react"
import { Pie, PieChart } from "recharts"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import ChartHeader from "./ChartHeader"
const chartData = [
  { budget: "overBudget", status: 19, fill: "var(--color-overBudget)" },
  { budget: "onBudget", status: 33, fill: "var(--color-onBudget)" },
  { budget: "underBudget", status: 48, fill: "var(--color-underBudget)" },
]

const chartConfig = {
  status: {
    label: "Status",
  },
  overBudget: {
    label: "Over Budget",
    color: "hsl(0 72.2% 50.6%)",
  },
  onBudget: {
    label: "On Budget",
    color: "hsl(229.7 93.5% 81.8%)",
  },
  underBudget: {
    label: "Under Budget",
    color: "hsl(156.2 71.6% 66.9%)",
  },
} satisfies ChartConfig

export default function CircularChartCard() {
  return (
    <Card className="flex flex-col h-full">
      <ChartHeader
        title="Budget"
        subheader1="Profitability"
        subheader2="Status"
      />
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="status"
              nameKey="budget"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm">
        <div className="flex justify-start items-center gap-1">
          <CircleIcon
            className={`size-3 rounded-full stroke-none bg-[hsl(0,72.2%,50.6%)]`}
          />
          <h1>Over Budget</h1>
        </div>
        <div className="flex justify-start items-center gap-1">
          <CircleIcon className="size-3 rounded-full stroke-none bg-[hsl(229.7,93.5%,81.8%)]" />
          <h1>On Budget</h1>
        </div>
        <div className="flex justify-start items-center gap-1">
          <CircleIcon className="size-3 rounded-full stroke-none bg-[hsl(156.2,71.6%,66.9%)]" />
          <h1>Under Budget</h1>
        </div>
      </CardFooter>
    </Card>
  )
}
