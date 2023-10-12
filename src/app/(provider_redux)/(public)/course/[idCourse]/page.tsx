"use client";
import { FC, Fragment } from "react";
import { mockBanner } from "@/_mock";
import { useParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "@/utils/icon";
import Image from "next/image";
import { Accordient } from "@/components";
import Link from "next/link";
import { Routes } from "@/utils/contants";
interface Props {
  params: { idCourse: string };
}

const Page: FC<Props> = ({ params }) => {
  return (
    <>
      <div className="w-[90%] mx-auto mt-8 flex">
        {mockBanner.map((el) => {
          return (
            <Fragment key={el.id}>
              {el.id.toString() === params.idCourse && (
                <div className="flex justify-between w-full">
                  <div className="flex flex-auto flex-col gap-y-12">
                    <div className="flex flex-col gap-y-10">
                      <h1 className="text-5xl font-bold">{el.title}</h1>
                      <p className="text-mainSize">{el.des}</p>
                    </div>
                    <div className="flex flex-col gap-y-6 text-mainSize">
                      <h1 className="text-3xl font-bold">
                        Bạn sẽ học được gì?
                      </h1>
                      <div className="">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                          {el.promise.map((el) => (
                            <div
                              className="flex gap-x-6 items-center"
                              key={el.id}
                            >
                              <FontAwesomeIcon
                                icon={icon.faCheck}
                                className="text-mainColor"
                              />
                              <li key={el.id}>{el.text}</li>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-6 text-mainSize">
                      <h1 className="text-3xl font-bold">Nội dung khóa học</h1>
                      <div className="flex flex-col gap-y-4">
                        {el.course.map((el, index) => (
                          <Accordient item={el} key={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-auto w-[10%] flex-col items-center">
                    <Image
                      src={el.thumbnail}
                      height={1000}
                      width={1000}
                      alt="thumbnail"
                      className="rounded-3xl"
                    />
                    <Link
                      href={`${Routes.OPENING_DAY}/${el.id}`}
                      className="flex w-[30%] items-center justify-center mt-8 
                    py-4 px-6 rounded-full bg-mainColor text-white font-semibold text-2xl
                    cursor-pointer hover:opacity-75 transition-all duration-150 ease-linear"
                    >
                      Đăng ký học
                    </Link>
                  </div>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Page;
