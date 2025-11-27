import React from "react";

const StatsCard = ({ title, icon, currency, amount, indicator }) => {
  const isLoss = indicator?.includes("-");

  const indicatorColor = isLoss ? "text-rose-500" : "text-emerald-500";

  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 ">
      <div className="card-body p-4 hover:cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-medium text-base-content">{title}</h3>
          <div className="p-2 rounded-lg bg-transparent text-base-content">
            {icon}
          </div>
        </div>

        <div className="text-3xl font-bold text-base-content">
          {currency} {amount}
        </div>

        {indicator && (
          <p className="text-xs text-base-content/60 mt-1 flex items-center gap-1">
            <span className={`${indicatorColor} font-bold`}>{indicator}</span>
            vs last month
          </p>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
