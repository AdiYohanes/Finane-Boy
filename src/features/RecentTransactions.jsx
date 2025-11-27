import React from "react";
import { ChevronRight } from "lucide-react";

const transactions = [
  {
    id: 1,
    date: "25 Jul 12:30",
    amount: "- $10",
    name: "YouTube",
    method: "VISA **3254",
    category: "Subscription",
    logoColor: "bg-red-600",
    logoText: "YT",
  },
  {
    id: 2,
    date: "26 Jul 15:00",
    amount: "- $150",
    name: "Reserved",
    method: "Mastercard **2154",
    category: "Shopping",
    logoColor: "bg-black",
    logoText: "RE",
  },
  {
    id: 3,
    date: "27 Jul 9:00",
    amount: "- $80",
    name: "Yaposhka",
    method: "Mastercard **2154",
    category: "Cafe & Restaurants",
    logoColor: "bg-pink-500",
    logoText: "YA",
  },
  {
    id: 4,
    date: "28 Jul 10:00",
    amount: "- $200",
    name: "Apple Store",
    method: "VISA **3254",
    category: "Gadget",
    logoColor: "bg-gray-500",
    logoText: "AP",
  },
  {
    id: 5,
    date: "29 Jul 19:30",
    amount: "- $15",
    name: "Netflix",
    method: "VISA **3254",
    category: "Subscription",
    logoColor: "bg-red-700",
    logoText: "NF",
  },
];

const RecentTransactions = () => {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 p-6 w-full h-full flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 shrink-0 gap-3">
        <h3 className="text-lg font-bold">Recent transactions</h3>

        <div className="flex gap-2 w-full sm:w-auto min-w-0">
          <select className="select select-ghost border border-gray-200 select-sm w-auto focus:outline-none rounded-full cursor-pointer hover:bg-gray-300/30">
            <option>All accounts</option>
            <option>Main Wallet</option>
          </select>

          <button className="btn btn-sm btn-ghost border border-gray-200 rounded-full flex items-center gap-1 whitespace-nowrap shrink-0">
            See all
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto min-h-0 relative pr-1 custom-scrollbar">
        <div className="flex flex-col gap-3 md:hidden pb-2">
          {transactions.map((trx) => (
            <div
              key={trx.id}
              className="flex items-center justify-between p-3 border border-base-200 rounded-xl hover:bg-base-100/50"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs text-white font-bold shrink-0 ${trx.logoColor}`}
                >
                  {trx.logoText}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-sm text-base-content truncate">
                    {trx.name}
                  </span>
                  <span className="text-[10px] text-base-content/60">
                    {trx.date}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end shrink-0 ml-2">
                <span className="font-bold text-sm text-base-content">
                  {trx.amount}
                </span>
                <span className="text-[10px] text-base-content/60">
                  {trx.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <table className="table w-full relative">
            <thead className="bg-[#F6F6F9] text-gray-400 font-medium sticky top-0 z-10">
              <tr className="border-none">
                <th className="py-4 rounded-l-xl">DATE</th>
                <th className="py-4">AMOUNT</th>
                <th className="py-4">PAYMENT NAME</th>
                <th className="py-4">METHOD</th>
                <th className="py-4 rounded-r-xl">CATEGORY</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {transactions.map((trx) => (
                <tr
                  key={trx.id}
                  className="border-none hover:bg-base-100/50 transition-colors"
                >
                  <td className="py-4 font-medium text-base-content/80">
                    {trx.date}
                  </td>
                  <td className="py-4 font-bold text-base-content">
                    {trx.amount}
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] text-white font-bold ${trx.logoColor}`}
                      >
                        {trx.logoText}
                      </div>
                      <span className="font-semibold text-base-content">
                        {trx.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 text-base-content/70">{trx.method}</td>
                  <td className="py-4 text-base-content/70">{trx.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
