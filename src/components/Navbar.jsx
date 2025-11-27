import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`navbar w-full justify-between px-4 sticky top-0 z-30 transition-all duration-300
      ${
        isScrolled
          ? "backdrop-blur-md bg-base-100/70 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="flex-none">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost tooltip tooltip-bottom before:bg-white before:text-black before:border before:border-gray-200 before:shadow-md after:hidden"
            data-tip="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="inline-block size-6"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
        </div>

        <div className="hidden md:block">
          <h1 className="text-4xl font-bold">Welcome Back, Adaline !!</h1>
          <p className="text-lg text-base-content/50">
            It's the best time to manage your money
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button className="btn btn-md btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <button className="btn btn-md btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-secondary indicator-item">
                4
              </span>
            </div>
          </button>
        </div>

        <div className="flex items-center gap-3 p-2 pr-4 rounded-full hover:bg-base-200 transition-all cursor-pointer border border-base-content/10">
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-9">
              <img
                src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                alt="Avatar"
              />
            </div>
          </div>
          <div className="flex flex-col sm:block">
            <p className="text-sm font-semibold leading-none">Adaline</p>
            <p className="text-[10px] text-base-content/60 leading-none mt-1">
              adaline@gmail.com
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
