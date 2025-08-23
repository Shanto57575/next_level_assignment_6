import type { ISideBarItems } from "@/interfaces/sidebar.interface";

export const generateRoutes = (sidebarItems: ISideBarItems[]) => {
  return sidebarItems.flatMap((section) =>
    section.items.map((item) => ({
      path: item.url,
      Component: item.component,
    }))
  );
};
