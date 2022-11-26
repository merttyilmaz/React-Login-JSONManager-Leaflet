import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex flex-col w-full h-screen bg-slate-200 text-black dark:text-white dark:bg-[#1f1f1f]">
      <Header />
      <Outlet />
    </div>
  </div>
);

export default Layout;
