import {
  DollarSignIcon,
  TagIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from "lucide-react";
import StatsCard from "../components/StatsCard";
import MoneyFlowChart from "../features/MoneyFlowChart";
import BudgetChart from "../features/BudgetChart";
import SavingGoals from "../features/SavingGoals";
import Widgets from "../features/Widgets";
import RecentTransactions from "../features/RecentTransactions";

const statisticData = [
  {
    title: "Total Balance",
    currency: "Rp",
    amount: "124.500.000",
    indicator: "+12.5%",
    icon: <DollarSignIcon className="text-emerald-500" />,
  },
  {
    title: "Income",
    currency: "Rp",
    amount: "15.200.000",
    indicator: "+4.3%",
    icon: <TrendingUpIcon className="text-emerald-500" />,
  },
  {
    title: "Expenses",
    currency: "Rp",
    amount: "8.450.000",
    indicator: "-2.5%",
    icon: <TrendingDownIcon className="text-rose-500" />,
  },
  {
    title: "Total Savings",
    currency: "Rp",
    amount: "45.000.000",
    indicator: "+8.2%",
    icon: <TagIcon className="text-primary" />,
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Widgets />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-2">
        {statisticData.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            icon={item.icon}
            currency={item.currency}
            amount={item.amount}
            indicator={item.indicator}
          />
        ))}
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-4 grid-rows-2 gap-4 overflow-y-auto lg:overflow-hidden pb-4">
        <div className="lg:col-span-3 w-full h-full min-h-[300px] hover:shadow-lg transition-shadow duration-300">
          <MoneyFlowChart />
        </div>

        <div className="lg:col-span-1 w-full h-full min-h-[300px] hover:shadow-lg transition-shadow duration-300">
          <BudgetChart />
        </div>
        <div className="lg:col-span-3 w-full hover:shadow-lg transition-shadow duration-300">
          <RecentTransactions />
        </div>

        <div className="lg:col-span-1 w-full hover:shadow-lg transition-shadow duration-300">
          <SavingGoals />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
