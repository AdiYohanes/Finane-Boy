import React from "react";

const ToggleSwitch = ({ label, description, checked, onChange }) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="pr-4">
        <h4 className="text-sm font-semibold text-slate-800">{label}</h4>
        {description && (
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
          checked ? "bg-slate-900" : "bg-slate-200"
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;
