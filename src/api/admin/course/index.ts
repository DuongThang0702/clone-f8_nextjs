import axiosClient from "../../config";

export const apiGetAllCourse = () =>
  axiosClient({ url: "/course", method: "get" });

export const apiCreateCourse = (data: object) =>
  axiosClient({ url: "/course", method: "post", data });
