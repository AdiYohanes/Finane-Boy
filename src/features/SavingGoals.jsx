import { ArrowUpRight } from "lucide-react";

const goals = [
  {
    name: "MacBook Pro",
    target: "$1,650",
    percent: 25,
    color: "bg-[#8b5cf6]",
  },
  {
    name: "New car",
    target: "$60,000",
    percent: 42,
    color: "bg-[#8b5cf6]",
  },
  {
    name: "New house",
    target: "$150,000",
    percent: 3,
    color: "bg-[#8b5cf6]",
  },
];

const SavingGoals = () => {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 p-6 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg">Saving goals</h3>
        <button className="btn btn-circle btn-xs btn-ghost border border-gray-200">
          <ArrowUpRight className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {goals.map((item, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-base-content text-sm sm:text-base">
                {item.name}
              </span>
              <span className="font-bold text-[#8b5cf6]">{item.target}</span>
            </div>

            <div className="w-full h-8 bg-[#f3f0ff] rounded-full overflow-hidden relative">
              <div
                className={`h-full ${item.color} rounded-full flex items-center pl-3 transition-all duration-500`}
                style={{ width: `${item.percent}%`, minWidth: "2rem" }}
              >
                <span className="text-white text-xs font-bold">
                  {item.percent}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavingGoals;
