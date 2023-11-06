import { CreateChapter } from "@/utils/type";
import axiosClient from "../../config";

export const apiCreateChapter = (cid: string, data: object) =>
  axiosClient({ url: `/chapter/${cid}`, method: "post", data });
