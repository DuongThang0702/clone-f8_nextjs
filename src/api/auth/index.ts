import { LoginData } from "@/utils/type";
import axiosClient from "../config";

export const apiLogin = (data: LoginData) =>
  axiosClient({
    url: "/auth/login",
    method: "POST",
    data,
    withCredentials: true,
  });

export const apiGetCurrent = () =>
  axiosClient({ url: "/auth/current", method: "GET" });

export const apiLogout = () =>
  axiosClient({ url: "/auth/logout", method: "DELETE", withCredentials: true });
