import { createBrowserRouter, Navigate } from "react-router";
import App from "@/App";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { generateRoutes } from "@/utils/generateRoutes";
import { adminSidebarItems } from "./adminSidebarItems";
import { senderSidebarItems } from "./SenderSidebarItems";
import { receiverSidebarItems } from "./receiverSidebarItems";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/utils/getSidebarItems";
import type { TRole } from "@/interfaces/role.interface";
import UnAuthorized from "@/pages/UnAuthorized";

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
  {
    path: "/admin",
    Component: withAuth(DashboardLayout, role.ADMIN as TRole),
    children: [
      { index: true, element: <Navigate to="/admin/all-users" /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    path: "/sender",
    Component: withAuth(DashboardLayout, role.SENDER as TRole),
    children: [
      { index: true, element: <Navigate to="/sender/add-parcel" /> },
      ...generateRoutes(senderSidebarItems),
    ],
  },
  {
    path: "/receiver",
    Component: withAuth(DashboardLayout, role.RECEIVER as TRole),
    children: [
      { index: true, element: <Navigate to="/receiver/all-parcel" /> },
      ...generateRoutes(receiverSidebarItems),
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
  },
  {
    path: "/unauthorize",
    Component: UnAuthorized,
  },
]);
