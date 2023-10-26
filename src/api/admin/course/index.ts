import axiosClient from "../../config";

export const apiGetAllCourse = () =>
  axiosClient({ url: "/course", method: "get" });

export const apiCreateCourse = (data: object) =>
  axiosClient({ url: "/course", method: "post", data });

export const apiUpdateInfomationCourse = (data: object, cid: string) =>
  axiosClient({ url: `/course/${cid}`, method: "patch", data });

export const apiDeleteCourse = (cid: string) =>
  axiosClient({ url: `/course/${cid}`, method: "delete" });
