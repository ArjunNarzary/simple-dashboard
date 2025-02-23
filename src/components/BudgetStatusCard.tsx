import { IBudgetStatus } from "@/interface"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Progress } from "./ui/progress"
import { formatCurrency } from "@/utils/formatCurrency"
import { CircleCheckBigIcon, TriangleAlertIcon } from "lucide-react"

const BudgetStatusCard = ({
  title,
  subtitle,
  imgSrc,
  budget,
  progress,
  progressColor,
  actualHours,
  remark,
  showIcon,
}: IBudgetStatus) => {
  //   const Icon = icon ? icon : undefined
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
          <img
            className="size-12 rounded-full object-cover"
            src={imgSrc}
            alt="logo"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-gray-700 text-sm space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <h3>Total Budget</h3>
            <h3>{formatCurrency(budget.totalBudget)} $</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <h3>Profitability (100%)</h3>
            <h3 className={budget.profitability < 0 ? "text-red-600" : ""}>
              {formatCurrency(budget.profitability)} $
            </h3>
          </div>
        </div>
        <div className="relative mt-4">
          {showIcon && (
            <>
              {budget.profitability < 0 ? (
                <TriangleAlertIcon className="absolute -top-8 right-0 size-6 text-red-700" />
              ) : (
                <CircleCheckBigIcon className="absolute -top-8 right-0 size-6 text-green-700" />
              )}
            </>
          )}
          <Progress
            value={progress}
            className={`h-3 w-full ${progressColor}`}
          />
          <div className="flex justify-between items-center text-sm mt-2">
            <h3>Actual hour: {actualHours}</h3>
            <h3 className={budget.profitability < 0 ? "text-red-600" : ""}>
              {remark}
            </h3>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default BudgetStatusCard
