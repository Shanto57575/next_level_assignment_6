import { Link } from "react-router";
import logo from "../assets/icons/swiftDrops.png";
import { AnimatedThemeToggler } from "./animated-theme-toggler";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

export function VersionSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex items-center justify-between">
        <Link to="/">
          <img src={logo} className="w-20 h-20" alt="logo" />
        </Link>
        <AnimatedThemeToggler className="mr-4" />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
