import { calculateProgress, getIconStyle } from "../utils/BudgetHelper";

const BudgetTable = ({ rows, onUpdate, onDelete }) => {
  return (
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50/50 border-b border-slate-200">
          <tr>
            <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[35%]">
              Category
            </th>
            <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[20%]">
              Budget
            </th>
            <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[20%]">
              Spent
            </th>
            <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[20%]">
              Status
            </th>
            <th className="py-4 px-6 w-[5%]"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row) => {
            const { percent, color } = calculateProgress(row.spent, row.budget);

            return (
              <tr
                key={row.id}
                className="group hover:bg-slate-50/80 transition-colors duration-200"
              >
                <td className="py-3 px-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-sm ${getIconStyle(
                        row.category
                      )}`}
                    >
                      {row.category
                        ? row.category.charAt(0).toUpperCase()
                        : "?"}
                    </div>
                    <input
                      type="text"
                      value={row.category}
                      onChange={(e) =>
                        onUpdate(row.id, "category", e.target.value)
                      }
                      placeholder="Enter Name..."
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
                      value={row.budget}
                      onChange={(e) =>
                        onUpdate(row.id, "budget", Number(e.target.value))
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
                      value={row.spent}
                      onChange={(e) =>
                        onUpdate(row.id, "spent", Number(e.target.value))
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

export default BudgetTable;
