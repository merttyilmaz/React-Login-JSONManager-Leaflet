import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex flex-col w-full">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  </div>
);

export default Layout;
