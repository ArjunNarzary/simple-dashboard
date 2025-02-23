import { ICardItem } from "@/interface"
import CustomCards from "./CustomCards"
import { CARD_ITEMS } from "@/utils/constant"

const CardsContainer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {CARD_ITEMS.map((item: ICardItem) => (
        <CustomCards key={item.id} {...item} />
      ))}
    </div>
  )
}

export default CardsContainer
