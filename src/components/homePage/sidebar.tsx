import { FC } from "react";
import icon from "@/utils/icon";
import MenuSidebar from "../menu/menu";
import { Menu } from "@/utils/type";
import { Routes } from "@/utils/contants";

const elSidebar: Menu[] = [
  {
    id: 1,
    icon: icon.faPlus,
    style:
      "bg-blue-600 text-white py-4 px-5 rounded-full text-mainSize cursor-pointer",
    type: "parent",
    child: [
      {
        id: 2,
        link: Routes.NEW_POST,
        icon: icon.faPen,
        type: "single",
        text: "Viết blog",
      },
    ],
  },
  {
    id: 3,
    icon: icon.faHouse,
    text: "Trang chủ",
    type: "single",
    link: Routes.HOME_PAGE,
  },
  {
    id: 4,
    icon: icon.faMap,
    type: "single",
    text: "Lộ trình",
    link: Routes.ROAD_MAP,
  },
  {
    id: 5,
    icon: icon.faFileSignature,
    type: "single",
    text: "Bài viết",
    link: Routes.BLOG,
  },
];

const Page: FC = ({}) => {
  return (
    <>
      <div className=" w-full h-full px-[0.8rem]">
        <div className="flex flex-col items-center gap-y-10">
          <MenuSidebar items={elSidebar} />
        </div>
      </div>
    </>
  );
};

export default Page;
