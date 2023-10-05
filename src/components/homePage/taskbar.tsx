import icon from "@/utils/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";

const Page: FC = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleSearch = () => {};
  return (
    <>
      <div className="fixed top-0 bg-white right-0 left-0 z-50">
        <div className="border-b h-[6.5rem] w-full px-[2.5rem] flex justify-between">
          <div className="flex items-center gap-x-6">
            <div className="w-[3.8rem] h-[3.8rem]">
              <Image
                src={"/logo.png"}
                height={38}
                width={38}
                alt="logo"
                className=" rounded-xl"
              />
            </div>
            <h1 className="font-bold text-2xl">Học Lập Trình Để Đi Làm</h1>
          </div>
          <form
            onSubmit={handleSubmit(handleSearch)}
            className="flex items-center w-[24%] relative"
          >
            <button className="absolute left-6 block top-[35%]">
              <FontAwesomeIcon
                icon={icon.faMagnifyingGlass}
                className="text-3xl font-light opacity-50"
              />
            </button>
            <input
              type="text"
              placeholder="Tìm kiếm khóa học, bài viết, ...."
              className="text-mainSize pl-[3.6rem] px-4 h-16 w-full border-2 rounded-full"
            />
          </form>
          <div className="w-[7%] h-[59%] my-auto">
            <div className=" flex items-center bg-mainColor justify-center h-full rounded-full">
              <button className="font-semibold text-[1.4rem] text-white">
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
