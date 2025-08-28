import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToTopButton from "./utils/ScrollToTopButton";

export default function App() {
  return (
    <div className="font-roboto">
      <Navbar />
      <ScrollToTop />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
