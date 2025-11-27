import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <Navbar />

        <main className="p-4 bg-base-100 min-h-screen">{children}</main>
      </div>

      <Sidebar />
    </div>
  );
};

export default Layout;
