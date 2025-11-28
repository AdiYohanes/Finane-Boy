export const getIconStyle = (name) => {
  const char = name ? name.charAt(0).toLowerCase() : "?";
  const colors = {
    a: "bg-orange-100 text-orange-600",
    b: "bg-blue-100 text-blue-600",
    c: "bg-green-100 text-green-600",
    h: "bg-purple-100 text-purple-600",
    t: "bg-teal-100 text-teal-600",
    v: "bg-violet-100 text-violet-600",
    default: "bg-slate-100 text-slate-600",
  };
  return colors[char] || colors.default;
};

export const calculateGoalProgress = (saved, target) => {
  if (!target || target <= 0) return { percent: 0, color: "bg-slate-200" };
  const percent = Math.min(100, (saved / target) * 100);

  let color = "bg-blue-500";
  if (percent < 25) color = "bg-slate-400";
  if (percent >= 100) color = "bg-emerald-500";

  return { percent, color };
};
