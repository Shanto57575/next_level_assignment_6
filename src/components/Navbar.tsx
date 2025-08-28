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
    { href: "/parcel-tracker", label: "Track Parcel", role: "PUBLIC" },
    { href: "/admin", label: "Dashboard", role: role.ADMIN },
    { href: "/sender", label: "Dashboard", role: role.SENDER },
    { href: "/receiver", label: "Dashboard", role: role.RECEIVER },
    { href: "/contact", label: "Contact", role: "PUBLIC" },
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
    } catch {
      toast.error("Failed to logout", { id: toastId });
    }
  };

  return (
    <header className="font-serif bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={logo}
                className="w-20 h-20 transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-2 filter drop-shadow-md"
                alt="logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-x-4">
            {navLinks
              .filter(
                (link) =>
                  link.role === "PUBLIC" || link.role === userData?.data?.role
              )
              .map((link, index) => (
                <NavLink
                  key={link.label + link.href}
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-all duration-300 group transform ${
                      isActive
                        ? "text-red-600 dark:text-red-500"
                        : "text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                    }`
                  }
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <span className="relative z-10 rounded-lg transition-all duration-300">
                    {link.label}
                  </span>
                  <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full" />
                </NavLink>
              ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="transform transition-all duration-300 hover:scale-105">
              <AnimatedThemeToggler />
            </div>
            {userData && userData.data.email ? (
              <Button
                onClick={handleLogout}
                variant="outline"
                className={`cursor-pointer hidden md:inline-flex transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 hover:border-gray-400 dark:hover:border-gray-500 ${
                  isMenuOpen ? " md:hidden" : ""
                }`}
              >
                Logout
              </Button>
            ) : (
              <Link
                to="/login"
                className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5 border-2 border-transparent hover:border-gray-700 dark:hover:border-gray-300"
              >
                Login
              </Link>
            )}
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="cursor-pointer inline-flex items-center justify-center p-2 rounded text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:focus:ring-gray-400 transition-all duration-300 transform border border-transparent hover:border-gray-300 dark:hover:border-gray-600"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative">
                  <X
                    className={`h-6 w-6 absolute transition-all duration-300 transform ${
                      isMenuOpen
                        ? "opacity-100 rotate-0"
                        : "opacity-0 rotate-90"
                    }`}
                  />
                  <AlignJustify
                    className={`h-6 w-6 transition-all duration-300 transform ${
                      isMenuOpen
                        ? "opacity-0 -rotate-90"
                        : "opacity-100 rotate-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with enhanced animations */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 z-40 border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-black/95 backdrop-blur-md transition-all duration-300 ease-out transform origin-top shadow-lg ${
          isMenuOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50">
          {navLinks
            .filter(
              (link) =>
                link.role === "PUBLIC" || link.role === userData?.data?.role
            )
            .map((link, index) => (
              <NavLink
                key={link.label + link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-[1.02] hover:translate-x-2 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 ${
                    isActive
                      ? "text-red-500 dark:text-red-500 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800 shadow-sm"
                      : "text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white hover:shadow-md"
                  }`
                }
                style={{
                  animationDelay: `${index * 0.05}s`,
                  transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.3s ease-out ${index * 0.05}s`,
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></div>
                  {link.label}
                </div>
              </NavLink>
            ))}
          <div
            className="pt-2 border-t border-gray-200 dark:border-gray-700 mt-4"
            style={{
              animationDelay: `${navLinks.length * 0.05}s`,
              transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isMenuOpen ? 1 : 0,
              transition: `all 0.3s ease-out ${navLinks.length * 0.05}s`,
            }}
          >
            {userData && userData.data.email ? (
              <Button
                onClick={handleLogout}
                variant="outline"
                className="w-full cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg rounded-xl border-2 hover:border-gray-400 dark:hover:border-gray-500"
              >
                Logout
              </Button>
            ) : (
              <Link
                to="/login"
                className="w-full mt-2 text-center items-center justify-center rounded-xl text-sm font-medium h-12 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 block transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg border-2 border-transparent hover:border-gray-700 dark:hover:border-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
