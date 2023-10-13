import Image from "next/image";
import { FC } from "react";

const Page: FC = ({}) => {
  return (
    <>
      <div className="w-full h-[40rem] bg-[#181821] mt-32 text-white py-32 text-mainSize">
        <div className="w-2/3 h-full m-auto grid grid-cols-5 gap-x-10">
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-4 mb-4">
              <div className="w-[5rem] h-[5rem]">
                <Image
                  src={`/logo.png`}
                  width={1000}
                  height={1000}
                  alt="logo"
                  className="rounded-3xl"
                />
              </div>
              <h1 className="text-2xl font-bold">Học Lập Trình Để Đi Làm</h1>
            </div>
            <span className="opacity-70">Điện thoại: 0246.329.1102</span>
            <span className="opacity-70">Email: contact@fullstack.edu.vn</span>
            <span className="opacity-70">
              Số 11D, lô A10, khu đô thị Nam Trung Yên, Phường Yên Hòa, Quận Cầu
              Giấy, TP. Hà Nội
            </span>
          </div>
          <div className="ml-14">
            <div className="h-[5rem] items-center flex mb-4">
              <h1 className="text-2xl font-bold">VỀ F8</h1>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="opacity-70">Giới thiệu</span>
              <span className="opacity-70">Liên hệ</span>
              <span className="opacity-70">Điều khoản</span>
              <span className="opacity-70">Bảo mật</span>
              <span className="opacity-70">Cơ hội việc làm</span>
            </div>
          </div>
          <div className="">
            <div className="h-[5rem] items-center flex">
              <h1 className="text-2xl font-bold">SẢN PHẨM</h1>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="opacity-70">Game Nester</span>
              <span className="opacity-70">Game CSS Diner</span>
              <span className="opacity-70">Game CSS Selectors</span>
              <span className="opacity-70">Game Froggy</span>
              <span className="opacity-70">Game Froggy Pro</span>
              <span className="opacity-70">Game Scoops</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-[5rem] items-center flex">
              <h1 className="text-2xl font-bold">CÔNG CỤ</h1>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="opacity-70">Tạo CV xin việc</span>
              <span className="opacity-70">Rút gọn liên kết</span>
              <span className="opacity-70">Clip-path maker</span>
              <span className="opacity-70">Snippet generator</span>
              <span className="opacity-70">CSS Grid generator</span>
              <span className="opacity-70">Cảnh báo sờ tay lên mặt</span>
            </div>
          </div>
          <div className="">
            <div className="h-[5rem] w-[20rem] items-center flex mb-4">
              <h1 className="text-2xl font-bold">
                CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8
              </h1>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="opacity-70">Mã số thuế: 0109922901</span>
              <span className="opacity-70">Ngày thành lập: 04/03/2022</span>
              <span className="opacity-70">
                Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát
                triển những sản phẩm mang lại giá trị cho cộng đồng.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
