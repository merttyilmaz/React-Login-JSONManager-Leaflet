import { useLocation } from "react-router-dom";
import { TfiHarddrive } from "react-icons/tfi";
import { BsMap } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="h-screen max-w-fit bg-white text-black dark:bg-black dark:text-white flex flex-col pt-20 px-6 gap-10">
      <Link to="/devices">
        <TfiHarddrive
          className={`text-3xl  cursor-pointer hover:text-yellow-500 ${
            pathname === "/devices" ? "text-yellow-500" : "text-slate-300"
          }`}
        />
      </Link>
      <Link to="/map">
        <BsMap
          className={`text-3xl  cursor-pointer hover:text-yellow-500 ${
            pathname === "/map" ? "text-yellow-500" : "text-slate-300"
          }`}
        />
      </Link>
      <Link to="/alarm">
        <BsBell
          className={`text-3xl  cursor-pointer hover:text-yellow-500 ${
            pathname === "/alarm" ? "text-yellow-500" : "text-slate-300"
          }`}
        />
      </Link>
    </div>
  );
};

export default Sidebar;
