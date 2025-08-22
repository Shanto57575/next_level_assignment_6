import { createBrowserRouter } from "react-router";
import App from "@/App";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
