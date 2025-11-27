import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowUpRight } from "lucide-react";

const data = [
  { name: "Cafe & Restaurants", value: 400, color: "#8b5cf6" },
  { name: "Entertainment", value: 300, color: "#a78bfa" },
  { name: "Investments", value: 200, color: "#ddd6fe" },
  { name: "Food & Groceries", value: 500, color: "#374151" },
  { name: "Health & Beauty", value: 150, color: "#9ca3af" },
  { name: "Traveling", value: 100, color: "#e5e7eb" },
];

const BudgetChart = () => {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6 shrink-0">
        <h3 className="font-bold text-lg">Budget</h3>
        <button className="btn btn-circle btn-xs btn-ghost border border-gray-200">
          <ArrowUpRight className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      <div className="flex flex-col gap-6 h-full min-h-0">
        <div className="grid grid-cols-2 gap-x-2 gap-y-3 w-full shrink-0">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xs sm:text-sm"
            >
              <div
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-base-content/70 font-medium truncate">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex-1 w-full min-h-[200px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="65%"
                outerRadius="90%"
                paddingAngle={5}
                cornerRadius={8}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => `$${value}`}
                contentStyle={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                }}
                itemStyle={{ color: "black", fontWeight: "bold" }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <p className="text-[10px] sm:text-xs text-gray-400 mb-0.5">Total</p>
            <p className="text-lg sm:text-2xl font-bold text-base-content">
              $5,950
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetChart;
