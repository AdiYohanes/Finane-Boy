export const getIconStyle = (name) => {
  const char = name ? name.charAt(0).toLowerCase() : "?";
  const colors = {
    a: "bg-orange-100 text-orange-600",
    b: "bg-blue-100 text-blue-600",
    c: "bg-green-100 text-green-600",
    g: "bg-emerald-100 text-emerald-600",
    h: "bg-purple-100 text-purple-600",
    i: "bg-indigo-100 text-indigo-600",
    n: "bg-rose-100 text-rose-600",
    s: "bg-cyan-100 text-cyan-600",
    default: "bg-slate-100 text-slate-600",
  };
  return colors[char] || colors.default;
};

export const calculateProgress = (spent, budget) => {
  if (!budget || budget <= 0) return { percent: 0, color: "bg-emerald-500" };
  const percent = Math.min(100, (spent / budget) * 100);
  let color = "bg-emerald-500";
  if (percent > 75) color = "bg-yellow-400";
  if (percent >= 100) color = "bg-red-500";
  return { percent, color };
};
