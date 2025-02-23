import {
  BellIcon,
  ChevronDownIcon,
  CircleIcon,
  CreditCard,
  Settings,
  User,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const UserNav = () => {
  return (
    <div className="flex justify-end items-center gap-4">
      <div className="relative">
        <BellIcon className="text-gray-400 size-5" />
        <CircleIcon className="absolute top-[0.1rem] right-[0.15rem] size-1.5 text-red-600 bg-red-600 rounded-full" />
      </div>
      <Avatar className="size-9">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>AN</AvatarFallback>
      </Avatar>
      <RenderUserOptions />
    </div>
  )
}

export default UserNav

const RenderUserOptions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-end items-center gap-1 text-gray-400">
          <span>Mario</span>
          <ChevronDownIcon className="size-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-12" sideOffset={10}>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          <DropdownMenuItem>
            <User />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
