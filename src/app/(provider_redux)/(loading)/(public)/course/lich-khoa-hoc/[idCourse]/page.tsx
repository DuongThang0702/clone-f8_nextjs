"use client";
import { FC, Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { ModalRegister } from "@/components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { showModel } from "@/redux/app";
import { apiGetAllCourse } from "@/api";
import { AxiosError, AxiosResponse } from "axios";
import { Courses } from "@/utils/type";
import { toast } from "react-toastify";

interface Props {
  params: { idCourse: string };
}

const Page: FC<Props> = ({ params }) => {
  const [info, setInfo] = useState<Courses | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const fetchData = async () => {
    const query = {
      fields: "info title _id",
      limit: 10,
    };
    await apiGetAllCourse(query)
      .then((rs: AxiosResponse) => {
        if (rs.status >= 400 && rs.status <= 599)
          toast.error("Something went wrong");
        else setInfo(rs.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-1/2 mx-auto mt-[1%]">
        <div>
          <Image
            src={`/lich-khai-giang.png`}
            height={1000}
            width={1000}
            alt="lich-khai-giang"
            className="rounded-3xl"
          />
        </div>
        <div className="mt-[8rem] flex flex-col gap-y-8">
          <h1
            className="text-[3rem] font-semibold uppercase space-x-4 py-4 pr-4 
            border-b-8 border-mainColor rounded-md w-[30%]"
          >
            Lịch khai giảng
          </h1>
          <p className="text-3xl font-semibold">
            Cập nhật mới nhất tại Cao đẵng Việt Mỹ !
          </p>
        </div>
        <table className="table-auto w-full mt-8 text-mainSize">
          <thead>
            <tr>
              <th className="text-start">Khoá học</th>
              <th className="text-start">Ngày khai giảng</th>
              <th className="text-start">Khu vực</th>
              <th className="text-start">Lịch học</th>
              <th className="text-start">Thời lượng</th>
              <th className="text-start">Chỗ trống</th>
              <th className="text-center">Đăng ký</th>
            </tr>
          </thead>
          <tbody>
            {info?.courses.map((el) => (
              <Fragment key={el._id}>
                {el._id.toString() === params.idCourse && (
                  <tr className="border-b-2">
                    <th className="text-start py-6">{el.title}</th>
                    <th className="text-start py-6 font-semibold">
                      {el.info.openingDay}
                    </th>
                    <th className="text-start py-6 font-semibold">
                      {el.info.area}
                    </th>
                    <th className="text-start py-6 font-semibold">
                      {el.info.schedule}
                    </th>
                    <th className="text-start py-6 font-semibold">
                      {el.info.duration}
                    </th>
                    <th className="text-start py-6 font-semibold">
                      {el.info.slot}
                    </th>
                    <th
                      onClick={() => {
                        dispatch(
                          showModel({
                            isShowModal: true,
                            modalChildren: <ModalRegister title={el.title} />,
                          })
                        );
                      }}
                      className="text-center py-6 cursor-pointer group"
                    >
                      <div className="bg-mainColor py-2 px-1 text-white group-hover:opacity-80 select-none">
                        Đăng ký
                      </div>
                    </th>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Page;
