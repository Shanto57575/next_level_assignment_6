import AllParcels from "@/modules/admin/AllParcels";
import AllUsers from "@/modules/admin/AllUsers";

export const adminSidebarItems = [
  {
    title: "Admin Dashboard",
    items: [
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
