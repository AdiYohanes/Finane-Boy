import React, { useState } from "react";
import InputField from "../components/InputField";
import ToggleSwitch from "../components/ToggleSwitch";

const SecuritySection = () => {
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-xl animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-800">Security</h2>
        <p className="text-slate-500 text-sm mt-1">
          Update your password and manage account security.
        </p>
      </div>

      {/* --- Change Password Section --- */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
        <h3 className="text-sm font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">
          Change Password
        </h3>
        <div className="space-y-4">
          <InputField
            label="Current Password"
            name="current"
            type="password"
            placeholder="••••••••"
            value={passwords.current}
            onChange={handleChange}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="New Password"
              name="new"
              type="password"
              placeholder="••••••••"
              value={passwords.new}
              onChange={handleChange}
            />
            <InputField
              label="Confirm Password"
              name="confirm"
              type="password"
              placeholder="••••••••"
              value={passwords.confirm}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-lg transition">
            Update Password
          </button>
        </div>
      </div>

      {/* --- Two-Factor Authentication --- */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-sm font-bold text-slate-800">
              Two-Factor Authentication
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              Add an extra layer of security to your account by requiring a code
              when logging in.
            </p>
          </div>
          <div className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide">
            Recommended
          </div>
        </div>

        <div className="border-t border-slate-100 mt-4">
          <ToggleSwitch
            label="Enable 2FA via SMS/App"
            description="We will send a code to your phone +62 812-xxxx-xxxx."
            checked={is2FAEnabled}
            onChange={setIs2FAEnabled}
          />
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
