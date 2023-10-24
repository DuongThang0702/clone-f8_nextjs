import { RootState } from "@/redux/store";
import { itemSidebar } from "@/utils/contants";
import { Routes, RoutesAdmin } from "@/utils/path";
import { TitemSidebar } from "@/utils/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, Fragment, useState } from "react";
import { useSelector } from "react-redux";

const Page: FC = ({}) => {
  const router = useRouter();
  const pathName = usePathname();
  const [isShowTabOptions, setIsShowTabOptions] = useState<Array<number>>([]);
  const { current } = useSelector((state: RootState) => state.user);

  const handleShowOptions = (tabId: number) => {
    if (isShowTabOptions.some((el) => el === tabId)) {
      setIsShowTabOptions((prev) => prev.filter((el) => el !== tabId));
    } else {
      setIsShowTabOptions((prev) => [...prev, tabId]);
    }
  };
  return (
    <div className="flex-none">
      <div className="absolute left-0 top-0 bottom-0 right-[10%]">
        <div className="h-full bg-[#122033] w-[16%] text-grayMain py-8 text-3xl flex flex-col">
          <div className="font-bold px-8">
            <div className="border-b border-grayMain">
              <div className="flex items-center gap-x-8 py-4">
                <div
                  className="w-[5rem] h-[5rem] cursor-pointer"
                  onClick={() => router.push(`${Routes.HOME_PAGE}`)}
                >
                  <Image
                    src={"/logo.png"}
                    height={100}
                    width={100}
                    alt="logo"
                    className="rounded-2xl"
                  />
                </div>
                <h1 className="select-none">Admin</h1>
              </div>
            </div>
            <div className="border-b border-grayMain flex py-4 items-center gap-x-8">
              <div className="w-[5rem] h-[5rem]">
                <Image
                  alt="avatar"
                  height={50}
                  width={50}
                  src={current.avatar ? current.avatar : "/avatardefault.png"}
                />
              </div>
              <h1>{current.fullname}</h1>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-y-[.4rem]">
            {itemSidebar.map((el: TitemSidebar) => {
              const isActive: boolean = pathName.startsWith(`${el.path}`);
              return el.type === "single" ? (
                <Link
                  className={`block hover:bg-gradient-to-r hover:from-[#9325F1] hover:to-[#212048] hover:text-white font-bold py-8 ${
                    isActive
                      ? "bg-gradient-to-r from-[#9325F1] to-[#212048] text-white"
                      : ""
                  }`}
                  key={el.id}
                  href={el.path}
                >
                  <div className="px-8">
                    <FontAwesomeIcon className="mr-6" icon={el.icon} />
                    <span className="text-center">{el.title}</span>
                  </div>
                </Link>
              ) : (
                <div className="relative" key={el.id}>
                  <div
                    onClick={() => handleShowOptions(el.id)}
                    className={`hover:bg-gradient-to-r hover:from-[#9325F1] hover:to-[#212048] 
                  hover:text-white font-bold py-8 cursor-pointer ${
                    isShowTabOptions.some((tabId) => tabId === el.id)
                      ? "bg-gradient-to-r from-[#9325F1] to-[#212048] text-white"
                      : ""
                  }`}
                  >
                    <div className="px-8">
                      <div className="flex">
                        <div className="w-full">
                          <FontAwesomeIcon className="mr-6" icon={el.icon} />
                          <span className="text-center">{el.title}</span>
                        </div>
                        {el.lastIcon && (
                          <FontAwesomeIcon
                            className={`mr-6 ${
                              isShowTabOptions.some((tabId) => tabId === el.id)
                                ? "rotate-45"
                                : ""
                            }`}
                            icon={el.lastIcon}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  {isShowTabOptions.some((tabId) => tabId === el.id) &&
                    el.options && (
                      <Fragment>
                        {el?.options.map((el) => {
                          const isActive: boolean = pathName.startsWith(
                            `${el.path}`
                          );
                          return (
                            <Link
                              href={el.path}
                              key={el.id}
                              className={`py-8 px-20 hover:bg-gradient-to-r hover:from-[#9325F1] hover:to-[#212048] 
                            hover:text-white font-bold cursor-pointer mt-[.4rem] flex gap-x-4 items-center
                             ${
                               isActive
                                 ? "bg-gradient-to-r from-[#9325F1] to-[#212048] text-white"
                                 : ""
                             }`}
                            >
                              <FontAwesomeIcon icon={el.icon} />
                              {el.title}
                            </Link>
                          );
                        })}
                      </Fragment>
                    )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
