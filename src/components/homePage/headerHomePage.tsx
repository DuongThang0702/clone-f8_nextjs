import { showModel } from "@/redux/app";
import { AppDispatch, RootState } from "@/redux/store";
import { Routes } from "@/utils/path";
import icon from "@/utils/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LoginModal, OptionsHomePage } from "..";
import { getUserCurrent } from "@/redux/user/asyncAction";
import { getAllCourse } from "@/redux/course/asyncAction";

const Page: FC = ({}) => {
  const router = useRouter();
  const { isLoggedIn, current } = useSelector((state: RootState) => state.user);
  const [isShowOptions, setIsShowOptions] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const pathName = usePathname();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn) dispatch(getUserCurrent());
    }, 800);
  }, [isLoggedIn, dispatch]);

  const handleSearch = (data: any) => console.log(data);
  return (
    <>
      <div className="fixed top-0 bg-white right-0 left-0 z-30">
        <div className="border-b h-[6.5rem] w-full px-[2.5rem] flex justify-between">
          <Link
            href={pathName !== Routes.HOME_PAGE ? Routes.HOME_PAGE : ""}
            className={`flex items-center gap-x-6 w-[14%] group ${
              pathName === Routes.HOME_PAGE
                ? "cursor-default"
                : "cursor-pointer"
            }`}
          >
            <div className="w-[3.8rem] h-[3.8rem] flex-none">
              <Image
                src={"/logo.png"}
                height={38}
                width={38}
                alt="logo"
                className="rounded-xl cursor-pointer"
              />
            </div>
            {pathName === Routes.HOME_PAGE ? (
              <h1 className="font-bold text-2xl">Học Lập Trình Để Đi Làm</h1>
            ) : (
              <div
                onClick={() => router.push(`${Routes.HOME_PAGE}`)}
                className="font-semibold opacity-60 text-2xl flex items-center gap-x-2 relative"
              >
                <FontAwesomeIcon
                  icon={icon.faChevronLeft}
                  className="text-base ml-4 group-hover:ml-0 ease-linear duration-500 transition-all"
                />
                <span className="absolute left-10 w-[6rem]">Quay lại</span>
              </div>
            )}
          </Link>
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
          {isLoggedIn && current ? (
            <div className="w-[14%] h-[59%] my-auto relative">
              <div className="text-2xl flex items-center justify-center h-full gap-x-8">
                <h1 className="select-none ">Welcome, {current.fullname}</h1>
                <div
                  className="w-[4rem] h-[4rem] cursor-pointer"
                  onClick={() => setIsShowOptions((prev) => !prev)}
                >
                  <Image
                    src={current.image ? current.image : "/avatardefault.png"}
                    height={50}
                    width={50}
                    alt="avatar"
                  />
                </div>
              </div>
              {isShowOptions && (
                <div className="absolute left-[6rem] top-[4.5rem]">
                  <OptionsHomePage user={current} />
                </div>
              )}
            </div>
          ) : (
            <div
              className="w-[7%] h-[59%] my-auto"
              onClick={() =>
                dispatch(
                  showModel({
                    isShowModal: true,
                    modalChildren: <LoginModal />,
                  })
                )
              }
            >
              <div className=" flex items-center bg-mainColor justify-center h-full rounded-full">
                <button className="font-semibold text-[1.4rem] text-white">
                  Đăng nhập
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
