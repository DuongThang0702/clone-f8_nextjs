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

export type LoginData = {
  email: string;
  password: string;
};

export type LocalStorage = {
  isLoggedIn: boolean;
  access_token: string;
};

export type UserCurrent = {
  id: string;
  email: string;
  is_blocked: boolean;
  role: string;
};
