import type { ComponentType } from "react";

export interface ISideBarItems {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}
