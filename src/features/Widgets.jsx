import React from "react";

const Widgets = () => {
  return (
    <div className="flex justify-between w-full mb-3">
      <div className="flex gap-2 items-center">
        <button
          className="btn btn-circle btn-sm md:btn-md tooltip before:bg-white before:text-black before:border before:border-gray-200 before:shadow-md after:hidden"
          data-tip="Date"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 md:size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </button>

        <button
          className="btn btn-xs md:btn-sm rounded-full tooltip before:bg-white before:text-black before:border before:border-gray-200 before:shadow-md after:hidden"
          data-tip="Month"
        >
          This Month
        </button>
      </div>

      <div className="flex gap-2 items-center">
        <button className="btn btn-xs md:btn-sm bg-white text-black border-[#e5e5e5] rounded-full hover:bg-gray-300/30">
          Manage Widgets
        </button>

        <button className="btn btn-xs md:btn-sm btn-primary rounded-full">
          Add new widget
        </button>
      </div>
    </div>
  );
};

export default Widgets;
