import axiosClient from "../config";

export const apiGetOneById = (cid: string) =>
  axiosClient({ url: `/course/${cid}` });
