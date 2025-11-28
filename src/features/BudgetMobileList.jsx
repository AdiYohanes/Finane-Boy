import { calculateProgress, getIconStyle } from "../utils/BudgetHelper";

const BudgetMobileList = ({ rows, onUpdate, onDelete }) => {
  return (
    <div className="md:hidden block divide-y divide-slate-100">
      {rows.map((row) => {
        const { percent, color } = calculateProgress(row.spent, row.budget);

        return (
          <div key={row.id} className="p-5 flex flex-col gap-4 bg-white">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-sm shrink-0 ${getIconStyle(
                  row.category
                )}`}
              >
                {row.category ? row.category.charAt(0).toUpperCase() : "?"}
              </div>
              <input
                type="text"
                value={row.category}
                onChange={(e) => onUpdate(row.id, "category", e.target.value)}
                placeholder="Category Name"
                className="w-full text-lg font-semibold text-slate-800 bg-transparent border-b border-transparent focus:border-slate-300 outline-none pb-1"
              />
              <button
                onClick={() => onDelete(row.id)}
                className="text-slate-300 hover:text-red-500 p-2"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 uppercase font-bold">
                  Budget
                </label>
                <div className="flex items-center gap-1 border border-slate-200 rounded-lg px-3 py-2 mt-1 focus-within:ring-2 focus-within:ring-blue-100">
                  <span className="text-slate-400 text-xs">Rp</span>
                  <input
                    type="number"
                    value={row.budget}
                    onChange={(e) =>
                      onUpdate(row.id, "budget", Number(e.target.value))
                    }
                    className="w-full bg-transparent outline-none font-mono text-sm text-slate-700"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-400 uppercase font-bold">
                  Spent
                </label>
                <div className="flex items-center gap-1 border border-slate-200 rounded-lg px-3 py-2 mt-1 focus-within:ring-2 focus-within:ring-blue-100">
                  <span className="text-slate-400 text-xs">Rp</span>
                  <input
                    type="number"
                    value={row.spent}
                    onChange={(e) =>
                      onUpdate(row.id, "spent", Number(e.target.value))
                    }
                    className="w-full bg-transparent outline-none font-mono text-sm text-slate-700"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span>Utilization</span>
                <span>{Math.round(percent)}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full rounded-full ${color}`}
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BudgetMobileList;
