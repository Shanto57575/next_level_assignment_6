import InComingParcels from "@/modules/receiver/InComingParcels";

export const receiverSidebarItems = [
  {
    title: "Receiver Dashboard",
    items: [
      {
        title: "Manage Parcels",
        url: "/receiver/all-parcel",
        component: InComingParcels,
      },
    ],
  },
];
