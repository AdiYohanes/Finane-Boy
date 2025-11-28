import React from "react";

const Card = ({ logo, percentage, bgColor, accentColor }) => {
  return (
    // Container Utama
    <div
      className={`card w-80 h-44 shadow-xl relative overflow-hidden text-white transition-transform hover:-translate-y-1 cursor-pointer ${bgColor}`}
    >
      {/* Hiasan Lengkungan di Kanan */}
      {/* Kita gunakan 'rounded-l-[5rem]' untuk membuat lengkungan besar */}
      <div
        className={`absolute top-0 bottom-0 right-0 w-32 rounded-l-[5rem] translate-x-8 ${accentColor}`}
      ></div>

      {/* Konten Kartu (menggunakan z-10 agar di atas hiasan background) */}
      <div className="card-body p-6 flex flex-row items-center justify-between relative z-10 h-full">
        {/* Bagian Logo */}
        <div className="flex-1">
          {/* Kita render prop logo di sini */}
          {logo}
        </div>

        {/* Bagian Persentase (Pojok Kanan Bawah) */}
        <div className="absolute bottom-5 right-5 text-sm font-medium opacity-90">
          ({percentage}%)
        </div>
      </div>
    </div>
  );
};

export default Card;
