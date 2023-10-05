import { Menu } from "@/utils/type";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface Props {
  items: Menu[];
}

const Page: FC<Props> = ({ items }) => {
  const pathName = usePathname();
  const [isShowSubMenu, setIsShowSubMenu] = useState<Array<number>>([]);

  const [isActiveTabParent, setIsActiveTabParent] = useState<boolean>(false);
  const handleShowSubMenu = (idTab: number) => {
    if (isShowSubMenu?.some((el) => el === idTab))
      setIsShowSubMenu((prev) => {
        setIsActiveTabParent(false);
        return prev.filter((el) => el !== idTab);
      });
    else
      setIsShowSubMenu((prev) => {
        setIsActiveTabParent(true);
        return [...prev, idTab];
      });
  };
  return (
    <>
      {items.map((el) => {
        return el.type === "single" && el.link ? (
          <Link
            href={el.link}
            key={el.id}
            className={`${
              pathName === el.link ? "bg-[#E8EBED]" : ""
            } p-4 rounded-xl ${
              el.style ? el.style : "flex flex-col text-mainSize"
            }`}
          >
            <FontAwesomeIcon
              icon={el.icon}
              className="text-[2rem] opacity-70"
            />
            {el.text ? (
              <h1 className="font-semibold text-[1.2rem] space-x-3">
                {el.text}
              </h1>
            ) : (
              <></>
            )}
          </Link>
        ) : (
          <div
            key={el.id}
            className={`${
              el.style ? el.style : "flex flex-col text-mainSize"
            } `}
            onClick={() => handleShowSubMenu(el.id)}
          >
            <FontAwesomeIcon
              icon={el.icon}
              className={`text-[2rem] ${
                isActiveTabParent ? `rotate-45` : ``
              }  transition ease-linear duration-300 `}
            />
            {el.text ? (
              <h1 className="font-semibold text-[1.2rem] space-x-3">
                {el.text}
              </h1>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Page;
