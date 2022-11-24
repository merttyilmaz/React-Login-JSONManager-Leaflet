import { useLocation } from "react-router-dom";
import { BiSun } from "react-icons/bi";
import { BsMoonStarsFill } from "react-icons/bs";

import { useAuthStore } from "@/store/auth";
import { useThemeStore } from "@/store/theme";

const Header = () => {
  const { pathname } = useLocation();
  const pageTitle = pathname.split("/")[1];

  const { setLogin } = useAuthStore();
  const { theme, changeTheme } = useThemeStore();

  return (
    <div className="px-4 py-6 flex items-center justify-between">
      <h1 className="text-3xl font-bold capitalize">{pageTitle}</h1>
      <div className="flex items-center gap-6">
        {theme === "light" ? (
          <BsMoonStarsFill
            className="text-2xl cursor-pointer hover:text-slate-800"
            onClick={() => changeTheme("dark")}
          />
        ) : (
          <BiSun
            className="text-2xl cursor-pointer"
            onClick={() => changeTheme("light")}
          />
        )}
        <button
          type="submit"
          className="bg-white text-black font-bold py-2 px-4 rounded-md hover:bg-slate-800"
          onClick={() => setLogin(false)}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
