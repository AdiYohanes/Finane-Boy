import React from "react";

const GoalSummary = ({ totalTarget, totalSaved }) => {
  const remaining = totalTarget - totalSaved;

  return (
    <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
      <div className="bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm min-w-[140px]">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          Total Target
        </p>
        <p className="text-lg font-bold text-slate-800">
          Rp {(totalTarget / 1000000).toFixed(1)}M
        </p>
      </div>

      <div className="bg-emerald-50 px-5 py-3 rounded-xl border border-emerald-100 shadow-sm min-w-[140px]">
        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">
          Total Saved
        </p>
        <p className="text-lg font-bold text-emerald-700">
          Rp {(totalSaved / 1000000).toFixed(1)}M
        </p>
      </div>

      <div className="bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm min-w-[140px]">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          To Go
        </p>
        <p className="text-lg font-bold text-slate-800">
          Rp {(remaining / 1000000).toFixed(2)}M
        </p>
      </div>
    </div>
  );
};

export default GoalSummary;
