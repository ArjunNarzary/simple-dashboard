import { LucideProps } from "lucide-react"

export interface INavItem {
  id: string
  name: string
  href: string
  active: boolean
}
export interface ICardItem {
  id: number
  count: number
  label: string
  isRed: boolean
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >
}

export interface IModeItem {
  id: number
  name: string
  designation: string
  image: string
  mood: number
}

export interface IBudgetStatus {
  id: number
  title: string
  subtitle: string
  imgSrc: string
  budget: {
    totalBudget: number
    profitability: number
  }
  progress: number
  progressColor: string
  actualHours: string
  remark: string
  showIcon: boolean
}
