import { CreateCourse } from "@/utils/type";
import axiosClient from "../config";

export const apiGetAllUsers = () =>
  axiosClient({ url: "/user", method: "Get" });

export const apiDeleteUser = (id: string) =>
  axiosClient({ url: `/user/${id}`, method: "delete" });

export const apiCreateCourse = (data: object) =>
  axiosClient({ url: "/course", method: "post", data });
