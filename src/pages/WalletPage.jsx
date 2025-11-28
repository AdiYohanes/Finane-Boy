import React from "react";
import Card from "../features/Card";

// --- Definisi Logo (Bisa dipisah ke file icons.js sebenarnya) ---

// 1. Logo Visa (Yang kamu kasih)
// Saya sesuaikan sedikit className-nya agar responsif mengikuti parent div
const VisaLogo = () => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor" // Pakai currentColor agar bisa diwarnai lewat text-color parent
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.854 11.329l-2.003 9.367h-2.424l2.006-9.367zM26.051 17.377l1.275-3.518 0.735 3.518zM28.754 20.696h2.242l-1.956-9.367h-2.069c-0.003-0-0.007-0-0.010-0-0.459 0-0.853 0.281-1.019 0.68l-0.003 0.007-3.635 8.68h2.544l0.506-1.4h3.109zM22.429 17.638c0.010-2.473-3.419-2.609-3.395-3.714 0.008-0.336 0.327-0.694 1.027-0.785 0.13-0.013 0.28-0.021 0.432-0.021 0.711 0 1.385 0.162 1.985 0.452l-0.027-0.012 0.425-1.987c-0.673-0.261-1.452-0.413-2.266-0.416h-0.001c-2.396 0-4.081 1.275-4.096 3.098-0.015 1.348 1.203 2.099 2.122 2.549 0.945 0.459 1.262 0.754 1.257 1.163-0.006 0.63-0.752 0.906-1.45 0.917-0.032 0.001-0.071 0.001-0.109 0.001-0.871 0-1.691-0.219-2.407-0.606l0.027 0.013-0.439 2.052c0.786 0.315 1.697 0.497 2.651 0.497 0.015 0 0.030-0 0.045-0h-0.002c2.546 0 4.211-1.257 4.22-3.204zM12.391 11.329l-3.926 9.367h-2.562l-1.932-7.477c-0.037-0.364-0.26-0.668-0.57-0.82l-0.006-0.003c-0.688-0.338-1.488-0.613-2.325-0.786l-0.066-0.011 0.058-0.271h4.124c0 0 0.001 0 0.001 0 0.562 0 1.028 0.411 1.115 0.948l0.001 0.006 1.021 5.421 2.522-6.376z"></path>
  </svg>
);

const MastercardLogo = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7" cy="12" r="7" fill="#EB001B" fillOpacity="0.8" />
    <circle cx="17" cy="12" r="7" fill="#F79E1B" fillOpacity="0.8" />
  </svg>
);

const WalletPage = () => {
  const cardsData = [
    {
      id: 1,
      title: "Debit Card",
      subtitle: "Total Balance",
      balance: "52,376",
      holder: "EMRE KAYA",
      gradientClass:
        "bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-100",
      Logo: VisaLogo,
    },
    {
      id: 2,
      title: "Credit Card",
      subtitle: "Available Limit",
      balance: "14,256",
      holder: "EMRE KAYA",
      gradientClass: "bg-gradient-to-br from-white via-orange-50 to-red-50",
      Logo: VisaLogo,
    },
    {
      id: 3,
      title: "Virtual Card",
      subtitle: "Total Balance",
      balance: "12,738",
      holder: "EMRE KAYA",
      gradientClass: "bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-100",
      Logo: MastercardLogo,
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">My Wallet</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
    </div>
  );
};

export default WalletPage;
