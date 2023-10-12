"use client";
import { FC, Fragment, useEffect, useState } from "react";
import { mockBanner } from "@/_mock";
import Image from "next/image";
import { ModalRegister } from "@/components";

interface Props {
  params: { idCourse: string };
}

const Page: FC<Props> = ({ params }) => {
  const [isShowModal, setIsShowModal] = useState<{
    isShowModal: boolean;
    title: string;
  }>({
    isShowModal: false,
    title: "",
  });
  useEffect(() => {
    const modal = document.getElementById("modal");
    const handleShowModal = (e: MouseEvent) => {
      if (modal && !modal?.contains(e.target as Node))
        setIsShowModal({ isShowModal: false, title: "" });
    };
    document.addEventListener("click", handleShowModal);
    return () => removeEventListener("click", handleShowModal);
  }, []);

  return (
    <>
      {isShowModal.isShowModal && (
        <div className="bg-blackOpacity fixed top-0 left-0 bottom-0 right-0 z-50 ">
          <div className="relative w-[100rem] h-[60rem]">
            <ModalRegister
              title={isShowModal.title}
              setModal={setIsShowModal}
            />
          </div>
        </div>
      )}
      <div className="w-1/2 mx-auto mt-[1%]" id="close-modal">
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
            {mockBanner.map((el) => (
              <Fragment key={el.id}>
                {el.id.toString() === params.idCourse &&
                  el.info.map((item, index) => (
                    <tr className="border-b-2" key={index}>
                      <th className="text-start py-6">{item.name}</th>
                      <th className="text-start py-6 font-semibold">
                        {item.openingDay}
                      </th>
                      <th className="text-start py-6 font-semibold">
                        {item.Area}
                      </th>
                      <th className="text-start py-6 font-semibold">
                        {item.schedule}
                      </th>
                      <th className="text-start py-6 font-semibold">
                        {item.duration}
                      </th>
                      <th className="text-start py-6 font-semibold">
                        {item.slot}
                      </th>
                      <th
                        onClick={() => {
                          setIsShowModal({
                            isShowModal: true,
                            title: el.title,
                          });
                        }}
                        className="text-center py-6 cursor-pointer group"
                      >
                        <div className="bg-mainColor py-2 px-1 text-white group-hover:opacity-80">
                          Đăng ký
                        </div>
                      </th>
                    </tr>
                  ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Page;
