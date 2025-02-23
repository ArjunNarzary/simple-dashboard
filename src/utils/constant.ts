import { IBudgetStatus, ICardItem, IModeItem, INavItem } from "@/interface"
import {
  CircleCheckBigIcon,
  LayoutGridIcon,
  RefreshCwIcon,
  TriangleAlertIcon,
  UsersIcon,
} from "lucide-react"

export const NAVBARS: INavItem[] = [
  {
    id: "dashboard",
    name: "Dashboard",
    href: "/",
    active: true,
  },
  {
    id: "projects",
    name: "Projects",
    href: "/",
    active: false,
  },
  {
    id: "team",
    name: "Team",
    href: "/",
    active: false,
  },
  {
    id: "clients",
    name: "Clients",
    href: "/",
    active: false,
  },
  {
    id: "time",
    name: "Time",
    href: "/",
    active: false,
  },
  {
    id: "reports",
    name: "Reports",
    href: "/",
    active: false,
  },
]

export const CARD_ITEMS: ICardItem[] = [
  {
    id: 1,
    count: 5,
    label: "Total Projects",
    isRed: false,
    icon: LayoutGridIcon,
  },
  {
    id: 2,
    count: 1,
    label: "Completed",
    isRed: false,
    icon: CircleCheckBigIcon,
  },
  {
    id: 3,
    count: 3,
    label: "Ongoing",
    isRed: false,
    icon: RefreshCwIcon,
  },
  {
    id: 4,
    count: 1,
    label: "Delayed",
    isRed: true,
    icon: TriangleAlertIcon,
  },
  {
    id: 5,
    count: 5,
    label: "Employees",
    isRed: false,
    icon: UsersIcon,
  },
]

export const TEAM_MOODS: IModeItem[] = [
  {
    id: 1,
    name: "Andrea",
    designation: "UX Junior",
    image:
      "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    mood: 30,
  },
  {
    id: 2,
    name: "Alvaro",
    designation: "Back end developer",
    image:
      "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    mood: 100,
  },
  {
    id: 3,
    name: "Juan",
    designation: "UX Senior",
    image:
      "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    mood: 80,
  },
  {
    id: 4,
    name: "Jose",
    designation: "Marketing",
    image:
      "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    mood: 0,
  },
  {
    id: 5,
    name: "Maria",
    designation: "UX Junior",
    image:
      "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    mood: 45,
  },
]

export const BUDGET_STATUSES: IBudgetStatus[] = [
  {
    id: 1,
    title: "Insurance App",
    subtitle: "Verti",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1661963063875-7f131e02bf75?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    budget: {
      totalBudget: 70000,
      profitability: -2500,
    },
    progress: 100,
    progressColor: "bg-red-100 [&>*]:bg-red-500",
    showIcon: true,
    actualHours: "1100",
    remark: "100 hours over Budget!",
  },
  {
    id: 2,
    title: "Neo",
    subtitle: "Bankia",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1661963063875-7f131e02bf75?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    budget: {
      totalBudget: 70000,
      profitability: 4000,
    },
    progress: 50,
    progressColor: "bg-yellow-100 [&>*]:bg-yellow-500",
    actualHours: "1100",
    remark: "1000 sold hours",
    showIcon: false,
  },
  {
    id: 3,
    title: "VR Website",
    subtitle: "Barca",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1661963063875-7f131e02bf75?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    budget: {
      totalBudget: 70000,
      profitability: 4000,
    },
    progress: 60,
    progressColor: "bg-green-100 [&>*]:bg-green-500",
    actualHours: "1100",
    remark: "2000 sold hours",
    showIcon: false,
  },
  {
    id: 4,
    title: "VR Website",
    subtitle: "Barca",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1661963063875-7f131e02bf75?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    budget: {
      totalBudget: 70000,
      profitability: 4000,
    },
    showIcon: true,
    progress: 100,
    progressColor: "bg-green-100 [&>*]:bg-green-500",
    actualHours: "1100",
    remark: "2000 sold hours",
  },
]
