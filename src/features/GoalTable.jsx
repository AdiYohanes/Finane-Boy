import React from "react";
import { getIconStyle, calculateGoalProgress } from "../utils/goalsHelper";

const GoalTable = ({ rows, onUpdate, onDelete }) => {
  return (
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50/50 border-b border-slate-200">
          <tr>
            <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[35%]">
              Goal Name
            </th>
            <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[20%]">
              Target Amount
            </th>
            <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[20%]">
              Current Saved
            </th>
            <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[20%]">
              Progress
            </th>
            <th className="py-4 px-6 w-[5%]"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row) => {
            const { percent, color } = calculateGoalProgress(
              row.saved,
              row.target
            );

            return (
              <tr
                key={row.id}
                className="group hover:bg-slate-50/80 transition-colors duration-200"
              >
                <td className="py-3 px-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-sm ${getIconStyle(
                        row.name
                      )}`}
                    >
                      {row.name ? row.name.charAt(0).toUpperCase() : "G"}
                    </div>
                    <input
                      type="text"
                      value={row.name}
                      onChange={(e) => onUpdate(row.id, "name", e.target.value)}
                      placeholder="e.g. New Car"
                      className="w-full bg-transparent outline-none font-medium text-slate-800 placeholder:text-slate-300 focus:text-blue-600"
                    />
                  </div>
                </td>
                <td className="py-3 px-6">
                  <div className="relative">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                      Rp
                    </span>
                    <input
                      type="number"
                      value={row.target}
                      onChange={(e) =>
                        onUpdate(row.id, "target", Number(e.target.value))
                      }
                      className="w-full pl-7 bg-transparent outline-none font-mono text-sm text-slate-600 focus:text-slate-900"
                    />
                  </div>
                </td>
                <td className="py-3 px-6">
                  <div className="relative">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                      Rp
                    </span>
                    <input
                      type="number"
                      value={row.saved}
                      onChange={(e) =>
                        onUpdate(row.id, "saved", Number(e.target.value))
                      }
                      className="w-full pl-7 bg-transparent outline-none font-mono text-sm text-slate-600 focus:text-slate-900"
                    />
                  </div>
                </td>
                <td className="py-3 px-6 align-middle">
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${color} transition-all duration-500`}
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 text-right">
                    {Math.round(percent)}%
                  </p>
                </td>
                <td className="py-3 px-6 text-right">
                  <button
                    onClick={() => onDelete(row.id)}
                    className="text-slate-300 hover:text-red-500 transition opacity-0 group-hover:opacity-100 p-2"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GoalTable;
