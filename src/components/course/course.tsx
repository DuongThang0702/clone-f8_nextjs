import { FC } from "react";
import ListCourse from "./ListCourse";
import { mockBanner } from "@/_mock/";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Page: FC = ({}) => {
  const { courses } = useSelector((state: RootState) => state.course);
  return (
    <>
      <div className="text-black w-[95%] mx-auto h-full">
        <h1 className="text-4xl font-bold">Khóa Học</h1>
        {courses && <ListCourse items={courses} />}
      </div>
    </>
  );
};

export default Page;
