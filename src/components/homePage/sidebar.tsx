import { FC } from "react";
import MenuSidebar from "../menu/menu";
import { elSidebarHomePage } from "@/utils/contants";

const Page: FC = ({}) => {
  return (
    <div className="fixed">
      <div className=" w-full h-full px-[0.8rem]">
        <div className="flex flex-col items-center gap-y-10">
          <MenuSidebar items={elSidebarHomePage} />
        </div>
      </div>
    </div>
  );
};

export default Page;
