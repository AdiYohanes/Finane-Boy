import React from "react";

const BudgetSummary = ({ totalBudget, totalSpent, totalRemaining }) => {
  return (
    <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
      <div className="bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm min-w-[140px]">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          Total Budget
        </p>
        <p className="text-lg font-bold text-slate-800">
          Rp {(totalBudget / 1000000).toFixed(1)}M
        </p>
      </div>
      <div className="bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm min-w-[140px]">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          Total Spent
        </p>
        <p className="text-lg font-bold text-slate-800">
          Rp {(totalSpent / 1000000).toFixed(1)}M
        </p>
      </div>
      <div
        className={`px-5 py-3 rounded-xl border shadow-sm min-w-[140px] ${
          totalRemaining < 0
            ? "bg-red-50 border-red-100"
            : "bg-emerald-50 border-emerald-100"
        }`}
      >
        <p
          className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
            totalRemaining < 0 ? "text-red-500" : "text-emerald-600"
          }`}
        >
          Remaining
        </p>
        <p
          className={`text-lg font-bold ${
            totalRemaining < 0 ? "text-red-700" : "text-emerald-700"
          }`}
        >
          Rp {(totalRemaining / 1000000).toFixed(2)}M
        </p>
      </div>
    </div>
  );
};

export default BudgetSummary;
