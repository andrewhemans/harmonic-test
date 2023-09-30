"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Home, Search } from "feather-icons-react";
import Box from "./Box";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: Home,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: Search,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    []
  );
  return (
    <div className="flex h-full">
      <div
        className="
            hidden
            md:flex
            flex-col
            gap-y-2
            h-full
            w-[300px]
            p-2
        "
      >
        <Box></Box>
      </div>
    </div>
  );
};

export default Sidebar;
