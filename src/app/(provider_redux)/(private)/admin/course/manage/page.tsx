"use client";
import { apiGetAllCourse } from "@/api/admin";
import { Course } from "@/utils/type";
import { AxiosError, AxiosResponse } from "axios";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page: FC = ({}) => {
  const [courses, setCourses] = useState<Course | null>(null);

  const fetch = async () =>
    await apiGetAllCourse()
      .then((rs: AxiosResponse) => {
        if (rs.status >= 400 && rs.status <= 599)
          toast.error("Something went wrong");
        else setCourses(rs.data);
      })
      .catch((err: AxiosError) => toast.error("Something went wrong"));

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div
      className="p-4 flex flex-col w-full mx-auto gap-y-20 min-h-full 
    bg-[#EDF2F9] overflow-scroll"
    >
      <div className="w-4/5 mx-auto">
        <div className="bg-white px-8 py-12 w-full rounded-xl mt-10 shadow-sidebar items-center flex">
          <div className="w-full">
            <h1 className="text-4xl font-bold">Manage Course</h1>
          </div>
          <div className="w-[16%] flex gap-x-6 items-center">
            <h1 className="text-2xl">Sort by:</h1>
            <select
              name=""
              id=""
              className="p-4 mt-4 text-xl rounded-2xl border outline-none"
            >
              <option className="px-4" value="">
                CreatedAt
              </option>
            </select>
          </div>
        </div>
        <div className="bg-white mt-[3%] rounded-2xl w-full h-full p-6 shadow-sidebar">
          {courses?.courses.map((el) => (
            <div key={el._id}>
              <div className="w-[25rem] h-[25rem]">
                <Image
                  alt="image"
                  height={1000}
                  width={1000}
                  src={el.thumbnail.path}
                />
              </div>
              <h1>{el.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
