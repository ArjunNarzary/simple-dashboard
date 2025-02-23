import Navbar from "./Navbar"
import UserNav from "./UserNav"

const HeaderComponent = () => {
  return (
    <div className="bg-slate-800 py-2 px-4 md:px-12 w-full flex justify-between items-center">
      <a href="/">
        <h1 className="text-2xl font-semibold tracking-[0.5rem] text-white">
          <span className="text-emerald-400">H</span>OURS
        </h1>
      </a>
      <Navbar />
      <UserNav />
    </div>
  )
}

export default HeaderComponent
