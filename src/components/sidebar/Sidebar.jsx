import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";
import SidebarItem from "./SidebarItem";
import { MENU_LIST } from "@/constant/constant";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    //get current url path
    setActiveLink(pathname);
    //init flowbite
    initFlowbite();
  }, [pathname]);
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium space-between">
          {MENU_LIST.map((menu, index) => {
            return (
              <SidebarItem
                key={index}
                path={menu.path}
                name={menu.name}
                activeLink={activeLink}
              />
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
