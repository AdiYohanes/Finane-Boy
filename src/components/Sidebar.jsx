import {
  ClipboardCheckIcon,
  HomeIcon,
  LogOutIcon,
  Settings,
  SignalHighIcon,
  Wallet2Icon,
  CircleHelp,
  CircleDollarSign,
  GoalIcon,
} from "lucide-react";
import { NavLink } from "react-router";

const iconClass = "size-5 shrink-0";

const MENUS = [
  {
    path: "/",
    name: "Dashboard",
    icon: <HomeIcon className={iconClass} />,
  },
  {
    path: "/transaksi",
    name: "Transaksi",
    icon: <ClipboardCheckIcon className={iconClass} />,
  },
  {
    path: "/wallet",
    name: "Wallet",
    icon: <Wallet2Icon className={iconClass} />,
  },
  {
    path: "/budget",
    name: "Budget",
    icon: <CircleDollarSign className={iconClass} />,
  },
  {
    path: "/goals",
    name: "Goals",
    icon: <GoalIcon className={iconClass} />,
  },
  {
    path: "/settings",
    name: "Pengaturan",
    icon: <Settings className={iconClass} />,
  },
];

const Sidebar = () => {
  const getItemClass = (isActive = false) =>
    `flex items-center gap-4 py-2 px-3 rounded-lg transition-all duration-200 
     is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:before:bg-white is-drawer-close:before:text-black is-drawer-close:before:border is-drawer-close:before:border-gray-200 is-drawer-close:before:p-3
     ${isActive ? "active bg-primary text-primary-content font-bold" : ""}`;

  return (
    <div className="drawer-side z-50 is-drawer-close:overflow-visible">
      <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

      <div className="flex min-h-full flex-col items-center bg-base-200 text-base-content is-drawer-close:w-14 is-drawer-open:w-64 transition-all duration-300">
        <div className="flex h-16 w-full items-center justify-center gap-2 border-b border-base-300 p-2 shrink-0">
          <div className="avatar">
            <div className="w-8 rounded bg-primary text-primary-content flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          <div className="is-drawer-close:hidden font-bold text-xl tracking-wide whitespace-nowrap">
            FINANCE<span className="text-primary ml-1">BOY</span>
          </div>
        </div>

        <ul className="menu w-full grow pt-4 gap-2 px-2">
          {MENUS.map((menu) => (
            <li key={menu.path}>
              <NavLink
                to={menu.path}
                data-tip={menu.name}
                className={({ isActive }) => getItemClass(isActive)}
              >
                {menu.icon}
                <span className="is-drawer-close:hidden font-medium">
                  {menu.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="menu w-full gap-2 px-2 pb-4">
          <div className="divider my-1"></div>

          <li>
            <NavLink
              to="/help"
              data-tip="Bantuan"
              className={({ isActive }) => getItemClass(isActive)}
            >
              <CircleHelp className={iconClass} />
              <span className="is-drawer-close:hidden font-medium">
                Bantuan
              </span>
            </NavLink>
          </li>

          <li>
            <button
              className="flex items-center gap-4 py-2 px-3 rounded-lg transition-all duration-200 text-error hover:bg-error/10 is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:before:bg-white is-drawer-close:before:text-black is-drawer-close:before:border"
              data-tip="Keluar"
            >
              <LogOutIcon className={iconClass} />
              <span className="is-drawer-close:hidden font-medium">Keluar</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
