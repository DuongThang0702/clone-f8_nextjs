"use client";
import { FC, Fragment, useEffect, useState } from "react";
import { mockBanner } from "@/_mock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "@/utils/icon";
import Image from "next/image";
import { Accordient } from "@/components";
import Link from "next/link";
import { Routes } from "@/utils/path";
import { apiGetOneById } from "@/api";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { Course } from "@/utils/type";
import DOMPurify from "dompurify";

interface Props {
  params: { idCourse: string };
}

const Page: FC<Props> = ({ params }) => {
  const [course, setCourse] = useState<Course | null>(null);
  const fetchCourseByParam = async (cid: string) => {
    await apiGetOneById(cid)
      .then((rs: AxiosResponse) => {
        if (rs.status >= 400 && rs.status <= 599)
          toast.error("Something went wrong");
        else setCourse(rs.data);
      })
      .catch((err: AxiosError) => toast.error("Something went wrong"));
  };

  useEffect(() => {
    fetchCourseByParam(params.idCourse);
  }, [params.idCourse]);

  return (
    <>
      {course && (
        <div className="w-[90%] mx-auto mt-8 flex">
          <Fragment>
            {
              <div className="flex justify-between w-full">
                <div className="flex flex-auto flex-col gap-y-12">
                  <div className="flex flex-col gap-y-10">
                    <h1 className="text-5xl font-bold">{course.title}</h1>
                    <div
                      className="text-mainSize"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(course.description),
                      }}
                    ></div>
                  </div>
                  <div className="flex flex-col gap-y-6 text-mainSize">
                    <h1 className="text-3xl font-bold">Bạn sẽ học được gì?</h1>
                    <div className="">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                        {course.promise.map((el, index) => (
                          <div
                            className="flex gap-x-6 items-center"
                            key={index}
                          >
                            <FontAwesomeIcon
                              icon={icon.faCheck}
                              className="text-mainColor"
                            />
                            <li>{el}</li>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-6 text-mainSize">
                    <h1 className="text-3xl font-bold">Nội dung khóa học</h1>
                    <div className="flex flex-col gap-y-4">
                      {course?.chapter.map((el, index) => (
                        <Accordient item={el} key={index} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-auto w-[10%] flex-col items-center">
                  <div className="relative w-[50rem] h-[26rem]">
                    <Image
                      src={course.thumbnail.path}
                      fill
                      alt="thumbnail"
                      className="rounded-3xl"
                    />
                  </div>
                  <Link
                    href={`${Routes.OPENING_DAY}/${course._id}`}
                    className="flex w-[30%] items-center justify-center mt-8 
                    py-4 px-6 rounded-full bg-mainColor text-white font-semibold text-2xl
                    cursor-pointer hover:opacity-75 transition-all duration-150 ease-linear"
                  >
                    Đăng ký học
                  </Link>
                </div>
              </div>
            }
          </Fragment>
        </div>
      )}
    </>
  );
};

export default Page;
