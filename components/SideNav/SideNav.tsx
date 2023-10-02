import { useContext } from "react";
import { UserContext } from "@/lib/context";
import { NavLink } from "@mantine/core";
import { Home, Search } from "feather-icons-react";

export function SideNav() {
  const { user, username } = useContext(UserContext);
  return (
    <>
      <NavLink label="Home" leftSection={<Home />} />
      <NavLink label="Search" leftSection={<Search />} />
    </>
  );
}
