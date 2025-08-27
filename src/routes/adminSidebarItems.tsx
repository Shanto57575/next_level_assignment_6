import AllParcels from "@/modules/admin/AllParcels";
import AllUsers from "@/modules/admin/AllUsers";
import Analytics from "@/modules/admin/Analytics";

export const adminSidebarItems = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
      {
        title: "Manage Users",
        url: "/admin/all-users",
        component: AllUsers,
      },
      {
        title: "Manage Parcels",
        url: "/admin/all-parcels",
        component: AllParcels,
      },
    ],
  },
];
