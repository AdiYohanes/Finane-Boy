import React, { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";

const NotificationSection = () => {
  const [config, setConfig] = useState({
    emailAlerts: true,
    pushNotif: false,
    promotional: false,
    securityAlerts: true,
  });

  const handleToggle = (key) => {
    setConfig({ ...config, [key]: !config[key] });
  };

  return (
    <div className="max-w-xl">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">Notifications</h2>
        <p className="text-slate-500 text-sm mt-1">
          We'll always let you know about important changes.
        </p>
      </div>

      <div className="divide-y divide-slate-100">
        <ToggleSwitch
          label="Email Alerts"
          description="Receive a summary of your weekly spending and budget status."
          checked={config.emailAlerts}
          onChange={() => handleToggle("emailAlerts")}
        />
        <ToggleSwitch
          label="Push Notifications"
          description="Get real-time updates on your phone when a transaction occurs."
          checked={config.pushNotif}
          onChange={() => handleToggle("pushNotif")}
        />
        <ToggleSwitch
          label="Product Updates & Tips"
          description="Occasional newsletter about new features and financial advice."
          checked={config.promotional}
          onChange={() => handleToggle("promotional")}
        />
        <ToggleSwitch
          label="Security Alerts"
          description="Get notified immediately if we detect suspicious login activity."
          checked={config.securityAlerts}
          onChange={() => handleToggle("securityAlerts")}
        />
      </div>
    </div>
  );
};

export default NotificationSection;
