import React, { useState } from "react";
import InputField from "../components/InputField";

const ProfileSection = () => {
  const [formData, setFormData] = useState({
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.j@example.com",
    bio: "Product Designer based in Jakarta.",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-xl animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-800">Public Profile</h2>
        <p className="text-slate-500 text-sm mt-1">
          Manage how others see you on the platform.
        </p>
      </div>

      <div className="flex items-center gap-6 mb-8 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.firstName}`}
          alt="Avatar"
          className="w-16 h-16 rounded-full bg-slate-100 ring-2 ring-white shadow-md"
        />
        <div>
          <h3 className="text-sm font-bold text-slate-800">Profile Picture</h3>
          <p className="text-xs text-slate-500 mb-3">
            Supports PNG, JPG or GIF up to 2MB
          </p>
          <div className="flex gap-3">
            <button className="text-xs font-semibold bg-slate-900 text-white px-3 py-1.5 rounded-md hover:bg-slate-800 transition">
              Upload New
            </button>
            <button className="text-xs font-semibold text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-md transition">
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <InputField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <InputField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Bio
          </label>
          <textarea
            name="bio"
            className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 min-h-[100px] resize-none"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>

        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button className="bg-[#422ad5] text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
