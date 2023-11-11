import axiosClient from "../../config";

export const apiGetAllCourse = (query?: object) =>
  axiosClient({ url: "/course", method: "get", params: query });

export const apiCreateCourse = (data: object) =>
  axiosClient({ url: "/course", method: "post", data });

export const apiUpdateInfomationCourse = (data: object, cid: string) =>
  axiosClient({ url: `/course/${cid}`, method: "patch", data });

export const apiDeleteCourse = (cid: string) =>
  axiosClient({ url: `/course/${cid}`, method: "delete" });
