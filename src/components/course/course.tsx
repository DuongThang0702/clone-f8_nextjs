import { FC } from "react";
import ListCourse from "./ListCourse";
import { mockBanner } from "@/_mock/";

const Page: FC = ({}) => {
  return (
    <>
      <div className="text-black w-[90%] mx-auto h-full">
        <h1 className="text-4xl font-bold">Khóa Học</h1>
        <ListCourse items={mockBanner} />
      </div>
    </>
  );
};

export default Page;
