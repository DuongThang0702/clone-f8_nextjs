import icon from "@/utils/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FC, SetStateAction } from "react";
interface Props {
  title: string;
  setModal: Dispatch<
    SetStateAction<{
      isShowModal: boolean;
      title: string;
    }>
  >;
}

const Page: FC<Props> = ({ title, setModal }) => {
  return (
    <div className="w-full h-full absolute top-[25%] left-[50%] text-white p-10 bg-[#20417D] rounded-2xl">
      <div className="text-3xl pt-8 font-bold justify-between flex">
        <span className="w-full">{title}</span>
        <span onClick={() => setModal({ isShowModal: false, title: "" })}>
          <FontAwesomeIcon
            icon={icon.faXmark}
            className="text-3xl cursor-pointer"
          />
        </span>
      </div>
      <div className="w-full h-[80%] m-auto bg-white mt-12 relative rounded-2xl text-black">
        <div className="py-10 px-12 flex flex-col gap-y-10">
          <div>
            <h1 className="text-2xl font-bold">Thông tin cá nhân</h1>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <input
                type="text"
                className="p-4 text-2xl border-b outline-none"
                placeholder="Họ và tên"
              />
              <input
                type="text"
                className="p-4 text-2xl border-b outline-none"
                placeholder="Ngày sinh"
              />
              <input
                type="text"
                className="p-4 text-2xl border-b outline-none"
                placeholder="Số điện thoại"
              />
              <input
                type="text"
                className="p-4 text-2xl border-b outline-none"
                placeholder="Địa chỉ email"
              />
              <select className="px-4 text-2xl outline-none">
                <option className="p-4 text-2xl" value="0">
                  Nam
                </option>
                <option className="p-4 text-2xl" value="0">
                  Nữ
                </option>
                <option className="p-4 text-2xl" value="0">
                  Khác
                </option>
              </select>
              <select className="px-4 text-2xl outline-none">
                <option className="p-4 text-2xl" value="0">
                  Thời gian học
                </option>
                <option className="p-4 text-2xl" value="0">
                  Full time
                </option>
                <option className="p-4 text-2xl" value="0">
                  Part time
                </option>
              </select>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Trình độ học vấn</h1>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <select className="px-4 text-2xl outline-none">
                <option className="p-4 text-2xl" value="0">
                  - Tốt nghiệp trường -
                </option>
                <option className="p-4 text-2xl" value="0">
                  Trường A
                </option>
                <option className="p-4 text-2xl" value="0">
                  Trường B
                </option>
              </select>

              <input
                type="text"
                className="p-4 text-2xl border-b outline-none"
                placeholder="Năm tốt nghiệp"
              />

              <select className="px-4 text-2xl outline-none">
                <option className="p-4 text-2xl" value="0">
                  - Khoa -
                </option>
                <option className="p-4 text-2xl" value="0">
                  Công nghệ thông tin
                </option>
                <option className="p-4 text-2xl" value="0">
                  Cơ khí
                </option>
              </select>

              <input
                type="text"
                className="p-4 text-2xl border-b outline-none"
                placeholder="Điểm trung bình hệ số 4"
              />
            </div>
          </div>
        </div>
        <div className="absolute right-1/2 bottom-[-2rem] py-4 px-12 text-3xl font-bold bg-green-300 text-white rounded-3xl translate-x-[50%]">
          Đăng ký
        </div>
      </div>
    </div>
  );
};

export default Page;
