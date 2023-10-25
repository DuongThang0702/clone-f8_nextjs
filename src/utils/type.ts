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
  fullname: string;
  avatar: string;
  phoneNumber: number;
  sex: string;
  studyTime: Date;
  graduatedFromSchool: string;
  major: string;
  dateOfBirth: Date;
};

export type TitemSidebar = {
  id: number;
  icon: IconProp;
  title: string;
  path: string;
  type: "single" | "parent";
  options?: TitemSidebar[];
  lastIcon?: IconProp;
};

export type User = {
  avatar: string;
  createdAt: string;
  dateOfBirth: string;
  email: string;
  fullname: string;
  graduatedFromSchool: string;
  is_blocked: boolean;
  major: string;
  phoneNumber: number;
  role: string;
  sex: string;
  studyTime: string;
  _id: string;
};

export type itemTable = {
  id: number;
  title: string;
  style?: string;
};

export type CreateCourse = {
  title: string;
  description: string;
  promise: string;
  price: number;
  thumbnail: { 0: File; length: number };
};
