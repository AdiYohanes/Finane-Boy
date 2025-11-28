const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
}) => {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
        {label}
      </label>
      <div className="relative group">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
            {icon}
          </div>
        )}
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-lg py-2.5 px-4 text-sm outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${
            icon ? "pl-10" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default InputField;
