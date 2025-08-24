import { useState } from "react";
import { AnimatedThemeToggler } from "./animated-theme-toggler";
import logo from "../assets/icons/swiftDrops.png";
import { Link, useNavigate, NavLink } from "react-router";
import { authApi, useProfileQuery } from "@/redux/app/features/authApi";
import { Button } from "./ui/button";
import { useLogoutMutation } from "@/redux/app/features/authApi";
import { toast } from "sonner";
import { AlignJustify, X } from "lucide-react";
import { role } from "@/utils/getSidebarItems";
import { useAppDispatch } from "@/redux/app/hooks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logout] = useLogoutMutation();

  const { data: userData } = useProfileQuery(undefined);

  const navigate = useNavigate();

  const navLinks = [
    { href: "/", label: "Home", role: "PUBLIC" },
    { href: "/about", label: "About", role: "PUBLIC" },
    { href: "/contact", label: "Contact", role: "PUBLIC" },
    { href: "/admin", label: "Dashboard", role: role.ADMIN },
    { href: "/sender", label: "Dashboard", role: role.SENDER },
    { href: "/receiver", label: "Dashboard", role: role.RECEIVER },
  ];

  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    const toastId = toast.loading("logging out....");
    try {
      const result = await logout(undefined).unwrap();
      if (result?.success) {
        navigate("/login");
        toast.success("Logged out successfully", { id: toastId });
        dispatch(authApi.util.resetApiState());
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to logout", { id: toastId });
    }
  };

  return (
    <header className="font-serif bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} className="w-20 h-20" alt="logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks
              .filter(
                (link) =>
                  link.role === "PUBLIC" || link.role === userData?.data?.role
              )
              .map((link) => (
                <NavLink
                  key={link.label + link.href}
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-colors duration-300 group ${
                      isActive
                        ? "text-red-600 dark:text-red-500"
                        : "text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                    }`
                  }
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-0.5 bg-red-600 w-0 group-hover:w-full transition-all duration-300 ease-out" />
                </NavLink>
              ))}
          </nav>

          <div className="flex items-center gap-4">
            <AnimatedThemeToggler />
            {userData && userData.data.email ? (
              <Button
                onClick={handleLogout}
                variant="outline"
                className={`cursor-pointer hidden md:inline-flex ${
                  isMenuOpen ? " md:hidden" : ""
                }`}
              >
                Logout
              </Button>
            ) : (
              <Link
                to="/login"
                className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
              >
                Login
              </Link>
            )}
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-300"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <AlignJustify className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Sheet) */}
      {isMenuOpen && (
        <div
          className="md:hidden border-t border-gray-200 dark:border-gray-700"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks
              .filter(
                (link) =>
                  link.role === "PUBLIC" || link.role === userData?.data?.role
              )
              .map((link) => (
                <NavLink
                  key={link.label + link.href}
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-red-500 dark:text-red-500 bg-red-50 dark:bg-red-950/20"
                        : "text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            {userData && userData.data.email ? (
              <Button
                onClick={handleLogout}
                variant="outline"
                className="w-full cursor-pointer"
              >
                Logout
              </Button>
            ) : (
              <Link
                to="/login"
                className="w-full mt-2 text-center items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 block transition-colors duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
