const BillingSection = () => {
  const invoices = [
    { id: 1, date: "Oct 24, 2025", amount: "$15.00", status: "Paid" },
    { id: 2, date: "Sep 24, 2025", amount: "$15.00", status: "Paid" },
    { id: 3, date: "Aug 24, 2025", amount: "$15.00", status: "Paid" },
  ];

  return (
    <div className="max-w-2xl animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-800">Plan & Billing</h2>
        <p className="text-slate-500 text-sm mt-1">
          Manage your subscription plan and payment methods.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 shadow-lg mb-8">
        <div className="relative z-10 flex justify-between items-start">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
              Current Plan
            </p>
            <h3 className="text-2xl font-bold text-white">Pro Plan</h3>
            <p className="text-slate-300 text-sm mt-1">$15.00 / month</p>
          </div>
          <span className="bg-blue-500/20 border border-blue-500 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
            Active
          </span>
        </div>

        <div className="relative z-10 mt-8">
          <div className="flex justify-between text-xs text-slate-300 mb-2">
            <span>Transactions Usage</span>
            <span>85% Used</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full w-[85%]"></div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Your plan renews on
            <span className="text-white font-medium">Nov 24, 2025</span>.
          </p>
        </div>

        <div className="relative z-10 mt-6 flex gap-3">
          <button className="bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-100 transition">
            Upgrade Plan
          </button>
          <button className="text-white hover:text-red-300 px-4 py-2 rounded-lg text-sm font-medium transition">
            Cancel Subscription
          </button>
        </div>

        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
        <h3 className="text-sm font-bold text-slate-800 mb-4">
          Payment Method
        </h3>
        <div className="flex items-center justify-between p-4 border border-slate-100 rounded-lg bg-slate-50">
          <div className="flex items-center gap-4">
            <div className="w-10 h-6 bg-white border border-slate-200 rounded flex items-center justify-center">
              <span className="text-[10px] font-bold text-blue-800 italic">
                VISA
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-700">
                Visa ending in 4242
              </p>
              <p className="text-xs text-slate-400">Expiry 12/2028</p>
            </div>
          </div>
          <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">
            Edit
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-sm font-bold text-slate-800">Invoice History</h3>
          <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">
            Download All
          </button>
        </div>
        <div className="divide-y divide-slate-100">
          {invoices.map((inv) => (
            <div
              key={inv.id}
              className="p-4 flex items-center justify-between hover:bg-slate-50 transition"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    Invoice #{inv.id}0029
                  </p>
                  <p className="text-xs text-slate-400">{inv.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-mono text-slate-600">
                  {inv.amount}
                </span>
                <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase rounded-full border border-emerald-100">
                  {inv.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BillingSection;
