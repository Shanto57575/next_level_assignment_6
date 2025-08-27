import DeliveryHistory from "@/modules/receiver/DeliveryHistory";
import InComingParcels from "@/modules/receiver/InComingParcels";

export const receiverSidebarItems = [
  {
    title: "Receiver Dashboard",
    items: [
      {
        title: "Incoming Parcels",
        url: "/receiver/all-parcel",
        component: InComingParcels,
      },
      {
        title: "Delivery History",
        url: "/receiver/delivery-history",
        component: DeliveryHistory,
      },
    ],
  },
];
