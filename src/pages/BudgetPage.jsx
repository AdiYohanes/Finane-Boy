import { useState } from "react";
import BudgetSummary from "../features/BudgetSummary";
import BudgetTable from "../features/BudgetTable";
import BudgetMobileList from "../features/BudgetMobileList";

const BudgetPage = () => {
  const [rows, setRows] = useState([
    { id: 1, category: "Housing & Rent", budget: 5000000, spent: 5000000 },
    { id: 2, category: "Groceries", budget: 3000000, spent: 1200000 },
    { id: 3, category: "Netflix & Subs", budget: 500000, spent: 150000 },
    { id: 4, category: "Investments", budget: 2000000, spent: 2000000 },
  ]);

  const handleChange = (id, field, value) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const addNewRow = () => {
    const newRow = { id: Date.now(), category: "", budget: 0, spent: 0 };
    setRows([...rows, newRow]);
  };

  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const totalBudget = rows.reduce((acc, curr) => acc + Number(curr.budget), 0);
  const totalSpent = rows.reduce((acc, curr) => acc + Number(curr.spent), 0);
  const totalRemaining = totalBudget - totalSpent;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Budget Plan
            </h1>
            <p className="text-slate-500 mt-1">
              Monitor and adjust your monthly spending goals.
            </p>
          </div>
          <BudgetSummary
            totalBudget={totalBudget}
            totalSpent={totalSpent}
            totalRemaining={totalRemaining}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <BudgetTable
            rows={rows}
            onUpdate={handleChange}
            onDelete={deleteRow}
          />
          <BudgetMobileList
            rows={rows}
            onUpdate={handleChange}
            onDelete={deleteRow}
          />

          <div className="p-2 bg-gray-50 border-t border-slate-200">
            <button
              onClick={addNewRow}
              className="w-full py-3 rounded-lg border-2 border-dashed border-slate-300 text-slate-500 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all font-semibold flex items-center justify-center gap-2"
            >
              <span>+ Add Category</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetPage;
