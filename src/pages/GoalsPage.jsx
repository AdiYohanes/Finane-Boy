import React, { useState } from "react";
import GoalSummary from "../features/GoalSummary"; // Sesuaikan path
import GoalTable from "../features/GoalTable"; // Sesuaikan path
import GoalMobileList from "../features/GoalMobileList"; // Sesuaikan path

const GoalsPage = () => {
  // --- STATE ---
  const [rows, setRows] = useState([
    { id: 1, name: "New MacBook Pro", target: 30000000, saved: 15000000 },
    { id: 2, name: "Bali Trip", target: 10000000, saved: 2500000 },
    { id: 3, name: "Emergency Fund", target: 50000000, saved: 48000000 }, // Ini hampir 100% jadi hijau
    { id: 4, name: "New House DP", target: 150000000, saved: 10000000 },
  ]);

  // --- LOGIC ---
  const handleChange = (id, field, value) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const addNewRow = () => {
    const newRow = { id: Date.now(), name: "", target: 0, saved: 0 };
    setRows([...rows, newRow]);
  };

  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const totalTarget = rows.reduce((acc, curr) => acc + Number(curr.target), 0);
  const totalSaved = rows.reduce((acc, curr) => acc + Number(curr.saved), 0);

  // --- RENDER ---
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Financial Goals 🎯
            </h1>
            <p className="text-slate-500 mt-1">
              Visualize your dreams and track your savings progress.
            </p>
          </div>
          <GoalSummary totalTarget={totalTarget} totalSaved={totalSaved} />
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Desktop Table View */}
          <GoalTable rows={rows} onUpdate={handleChange} onDelete={deleteRow} />

          {/* Mobile Card View */}
          <GoalMobileList
            rows={rows}
            onUpdate={handleChange}
            onDelete={deleteRow}
          />

          {/* Add Button */}
          <div className="p-2 bg-gray-50 border-t border-slate-200">
            <button
              onClick={addNewRow}
              className="w-full py-3 rounded-lg border-2 border-dashed border-slate-300 text-slate-500 hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all font-semibold flex items-center justify-center gap-2"
            >
              <span>+ Add New Goal</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsPage;
