import axiosClient from "../../config";

export const apiGetAllUsers = () =>
  axiosClient({ url: "/user", method: "Get" });

export const apiDeleteUser = (id: string) =>
  axiosClient({ url: `/user/${id}`, method: "delete" });

export const apiCreateUserByAdmin = (data: object) =>
  axiosClient({ url: `/user`, method: "post", data });
