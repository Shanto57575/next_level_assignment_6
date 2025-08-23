import CreateParcel from "@/modules/sender/CreateParcel";
import SenderParcels from "@/modules/sender/SenderParcels";

export const senderSidebarItems = [
  {
    title: "Sender Dashboard",
    items: [
      {
        title: "Add Parcel",
        url: "/sender/add-parcel",
        component: CreateParcel,
      },
      {
        title: "Manage Parcels",
        url: "/sender/all-parcel",
        component: SenderParcels,
      },
    ],
  },
];
