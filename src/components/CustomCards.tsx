import { ICardItem } from "@/interface"
import { Card, CardContent } from "./ui/card"
import { cn } from "@/lib/utils"

const CustomCards = ({ count, label, icon, isRed }: ICardItem) => {
  const Icon = icon
  return (
    <Card className={cn("py-4 rounded-sm", isRed && "bg-red-300 text-white")}>
      <CardContent>
        <Icon
          className={cn("size-10", isRed ? "text-red-500" : "text-emerald-400")}
        />
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-black">{count}</h1>
          <h3>{label}</h3>
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomCards
