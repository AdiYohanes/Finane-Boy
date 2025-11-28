import React from "react";

const Card = ({
  logo,
  bankName,
  balance,
  bgColor,
  accentColor,
  onClick,
  isSelected,
}) => {
  return (
    <div
      onClick={onClick}
      // Tambahkan logic ring/border jika isSelected true
      className={`card w-80 h-48 shadow-xl relative overflow-hidden text-white transition-all hover:-translate-y-1 cursor-pointer ${bgColor} ${
        isSelected ? "ring-4 ring-offset-2 ring-gray-300 scale-105" : ""
      }`}
    >
      <div
        className={`absolute top-0 bottom-0 right-0 w-32 rounded-l-[5rem] translate-x-8 ${accentColor}`}
      ></div>

      <div className="card-body p-6 flex flex-col justify-between relative z-10 h-full">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full backdrop-blur-sm">
            {logo}
          </div>
          <h3 className="text-lg font-semibold tracking-wider opacity-90">
            {bankName}
          </h3>
        </div>

        <div className="flex flex-col items-end mt-4">
          <p className="text-xs font-light opacity-80 uppercase tracking-widest mb-1">
            Total Balance
          </p>
          <h2 className="text-3xl font-bold tracking-tight">{balance}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
