"use client";
import { BannerHomePage, Course } from "@/components";
import { FC, useEffect } from "react";
import { getAllCourse } from "@/redux/course/asyncAction";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

const Page: FC = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAllCourse());
  }, [dispatch]);
  return (
    <div className="w-full h-max">
      <BannerHomePage />
      <div className="mt-20">
        <Course />
      </div>
    </div>
  );
};

export default Page;
