import React, { useState } from "react";
import ProfileSection from "../features/ProfileSection";
import NotificationSection from "../features/NotificationSection";
import SecuritySection from "../features/SecuritySection";
import BillingSection from "../features/BillingSection";

const SettingsPage = () => {
  // State untuk Tab yang aktif (default: 'profile')
  const [activeTab, setActiveTab] = useState("profile");

  // Daftar Tab Menu
  const tabs = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "billing", label: "Plan & Billing", icon: "💳" },
  ];

  // Logic render konten berdasarkan Tab yang dipilih
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSection />;
      case "notifications":
        return <NotificationSection />;
      case "security":
        return <SecuritySection />;
      default:
        return <BillingSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">
          Settings
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* --- SIDEBAR MENU (KIRI) --- */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <nav className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-white text-blue-600 shadow-sm ring-1 ring-slate-200"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/50"
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Sidebar Footer Info */}
            <div className="hidden md:block mt-8 px-4">
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-xs font-bold text-blue-800 mb-1">Pro Tip</p>
                <p className="text-xs text-blue-600 leading-relaxed">
                  Complete your profile to get a verified badge on your account.
                </p>
              </div>
            </div>
          </aside>

          {/* --- MAIN CONTENT (KANAN) --- */}
          <main className="flex-1 min-w-0">{renderContent()}</main>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
