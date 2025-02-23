import "./App.css"
import CardsContainer from "./components/CardsContainer"
import HeaderComponent from "./components/HeaderComponent"
import TeamMood from "./components/TeamMood"
import LineChartCard from "./components/LineChartCard"
import CircularChartCard from "./components/CircularChartCard"
import BudgetStatusHeader from "./components/BudgetStatusHeader"
import BudgetStatusCard from "./components/BudgetStatusCard"
import { BUDGET_STATUSES } from "./utils/constant"

function App() {
  return (
    <main>
      <HeaderComponent />
      <section className="px-4 md:px-12 py-4 bg-gray-100 h-full">
        <section className="grid grid-cols-6 gap-4">
          <div className="col-span-6 lg:col-span-5 space-y-4">
            <CardsContainer />
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-5 lg:col-span-3">
                <LineChartCard />
              </div>
              <div className="col-span-5 lg:col-span-2 h-full">
                <CircularChartCard />
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-1">
            <TeamMood />
          </div>
        </section>
        <section>
          <BudgetStatusHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {BUDGET_STATUSES.map((budget) => (
              <BudgetStatusCard key={budget.id} {...budget} />
            ))}
          </div>
        </section>
      </section>
      <footer>
        <div className="py-2 px-12 w-full flex justify-center items-center">
          <h1 className="text-sm text-gray-400">
            © 2025 HOURS. All rights reserved
          </h1>
        </div>
      </footer>
    </main>
  )
}

export default App
