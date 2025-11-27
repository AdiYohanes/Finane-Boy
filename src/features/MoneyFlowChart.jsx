import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 9000, expense: 8000 },
  { name: "Feb", income: 10500, expense: 12000 },
  { name: "Mar", income: 10000, expense: 9500 },
  { name: "Apr", income: 14000, expense: 12500 },
  { name: "May", income: 12500, expense: 12000 },
  { name: "Jun", income: 7500, expense: 5500 },
  { name: "Jul", income: 8500, expense: 6000 },
];

const MoneyFlowChart = () => {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 p-6 h-full w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h3 className="text-lg font-bold">Money flow</h3>

        <div className="flex gap-2">
          <select className="select select-bordered select-sm w-auto focus:outline-none rounded-full hover:bg-gray-300/30 cursor-pointer">
            <option>All accounts</option>
            <option>Main Wallet</option>
            <option>Savings</option>
          </select>

          <select className="select select-bordered select-sm w-auto focus:outline-none rounded-full hover:bg-gray-300/30 cursor-pointer">
            <option>This year</option>
            <option>Last year</option>
          </select>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E5E7EB"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            tickFormatter={(value) => `Rp${value}`}
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
          />
          <Legend
            verticalAlign="top"
            align="center"
            iconType="circle"
            wrapperStyle={{ paddingBottom: "20px" }}
          />
          <Bar
            dataKey="income"
            name="Income"
            fill="#8b5cf6"
            radius={[10, 10, 0, 0]}
            barSize={40}
          />
          <Bar
            dataKey="expense"
            name="Expense"
            fill="#c4b5fd"
            radius={[10, 10, 0, 0]}
            barSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MoneyFlowChart;
