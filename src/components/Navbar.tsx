import { cn } from "@/lib/utils"
import { NAVBARS } from "@/utils/constant"

const Navbar = () => {
  return (
    <div className="text-gray-400 justify-center ite gap-8 hidden lg:flex">
      {NAVBARS.map((nav) => (
        <div
          key={nav.id}
          className={cn(
            "font-light",
            nav.active && "border-b-[2px] border-emerald-500"
          )}
        >
          {nav.name}
        </div>
      ))}
    </div>
  )
}

export default Navbar
