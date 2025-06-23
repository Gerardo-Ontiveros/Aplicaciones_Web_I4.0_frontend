import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import { MENU_DATA } from "../constants/Menu";
import type { MenuTypes } from "../types/MenuTypes";
import { AlignLeftOutlined, CloseOutlined } from "@ant-design/icons";

function Dashboard() {
  const [menuItems, setMenuItems] = useState<MenuTypes[]>([]);
  const [openMenu, setOpenMenu] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setMenuItems(MENU_DATA);
    }, 500);
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="flex flex-row  h-screen w-screen">
      <div
        className={`flex flex-col p-6 shadow-md  items-center  bg-neutral-900 transition-all duration-300 ${
          openMenu ? "w-64" : "w-20"
        }`}
      >
        <div className="flex w-full justify-end">
          <button
            className="px-2 cursor-pointer text-blue-300 dark:text-cyan-300  hover:text-blue-700 dark:hover:text-cyan-500 transition-colors"
            onClick={toggleMenu}
          >
            {openMenu ? <CloseOutlined /> : <AlignLeftOutlined />}
          </button>
        </div>
        <nav className="mt-6 flex flex-col gap-2">
          {openMenu
            ? menuItems.map((items) => (
                <Link
                  to={items.path}
                  className="text-lg text-blue-300 dark:text-cyan-300 hover:text-blue-500 dark:hover:text-cyan-500 transition-colors"
                >
                  {items.icon} {items.title}
                </Link>
              ))
            : menuItems.map((items) => (
                <Link
                  to={items.path}
                  className="text-lg text-blue-300 dark:text-cyan-300"
                >
                  {items.icon}
                </Link>
              ))}
        </nav>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
