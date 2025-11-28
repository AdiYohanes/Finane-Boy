const TransactionTable = ({ transactions }) => {
  return (
    <div className="w-full max-w-6xl mt-10 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-xl font-bold text-slate-800">
          Recent Transactions
        </h3>
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {transactions.map((trx, index) => {
              const isIncome = trx.amount.startsWith("+");
              const badgeColorClass = isIncome
                ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                : "bg-red-100 text-red-700 border-red-200";
              const amountColorClass = isIncome
                ? "text-emerald-600"
                : "text-red-500";

              return (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {trx.date}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">
                    {trx.desc}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full border ${badgeColorClass}`}
                    >
                      {trx.category}
                    </span>
                  </td>
                  <td
                    className={`px-6 py-4 text-sm text-right font-bold ${amountColorClass}`}
                  >
                    {trx.amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="block md:hidden">
        <div className="divide-y divide-slate-100">
          {transactions.map((trx, index) => {
            const isIncome = trx.amount.startsWith("+");
            const badgeColorClass = isIncome
              ? "bg-emerald-100 text-emerald-700 border-emerald-200"
              : "bg-red-100 text-red-700 border-red-200";
            const amountColorClass = isIncome
              ? "text-emerald-600"
              : "text-red-500";

            return (
              <div
                key={index}
                className="p-4 flex flex-col gap-3 hover:bg-slate-50"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      {trx.desc}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{trx.date}</p>
                  </div>
                  <span className={`text-sm font-bold ${amountColorClass}`}>
                    {trx.amount}
                  </span>
                </div>

                <div className="flex justify-start">
                  <span
                    className={`px-2 py-1 text-[10px] font-bold rounded-full border ${badgeColorClass}`}
                  >
                    {trx.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {transactions.length === 0 && (
        <div className="p-12 text-center text-slate-400">
          <p>No transactions found.</p>
        </div>
      )}
    </div>
  );
};

export default TransactionTable;
