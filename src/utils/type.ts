import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Menu = {
  id: number;
  type: "single" | "parent";
  icon: IconProp;
  text?: string;
  style?: string;
  link?: string;
  child?: Menu[];
};
