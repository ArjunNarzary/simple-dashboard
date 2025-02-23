import { Card, CardContent } from "./ui/card"
import ChartHeader from "./ChartHeader"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "19 June", revenue: 0 },
  { month: "20 June", revenue: 900 },
  { month: "21 June", revenue: 3500 },
  { month: "22 June", revenue: 3100 },
  { month: "23 June", revenue: 4012 },
  { month: "24 June", revenue: 5800 },
  { month: "25 June", revenue: 6200 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(156.2 71.6% 66.9%)",
  },
} satisfies ChartConfig

export default function LineChartCard() {
  return (
    <Card className="w-full">
      <ChartHeader title="Total revenue" subheader1="Month" subheader2="Week" />
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="revenue"
              type="linear"
              stroke="var(--color-revenue)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
