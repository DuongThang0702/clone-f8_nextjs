import { Menu } from "@/utils/type";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SubMenu from "./submenu";
interface Props {
  items: Menu[];
}

const Page: FC<Props> = ({ items }) => {
  const pathName = usePathname();
  const [isActiveTabParent, setIsActiveTabParent] = useState<boolean>(false);

  useEffect(() => {
    const handleShowTabParent = (e: MouseEvent) => {
      const tab = document.getElementById("tab-parent");
      if (!tab?.contains(e.target as Node)) setIsActiveTabParent(false);
    };
    document.addEventListener("click", handleShowTabParent);
    return () => removeEventListener("click", handleShowTabParent);
  }, []);

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
            <div className="text-center">
              <FontAwesomeIcon
                icon={el.icon}
                className="text-[2rem] opacity-70"
              />
            </div>
            {el.text && (
              <h1 className="font-semibold text-[1.2rem] space-x-3">
                {el.text}
              </h1>
            )}
          </Link>
        ) : (
          <div key={el.id} className="relative">
            <div
              id={`tab-parent`}
              className={`group ${
                el.style ? el.style : "flex flex-col text-mainSize "
              } `}
              onClick={() => setIsActiveTabParent((prev) => !prev)}
            >
              <div className="text-center">
                <FontAwesomeIcon
                  icon={el.icon}
                  className={`text-[2rem] ${
                    isActiveTabParent ? `rotate-45` : ``
                  }  transition ease-linear duration-200 group-hover:scale-125 py-2 px-7`}
                />
              </div>
              {el.text && (
                <h1 className="font-semibold text-[1.2rem] space-x-3">
                  {el.text}
                </h1>
              )}
            </div>
            {isActiveTabParent && el.child && <SubMenu subItems={el.child} />}
          </div>
        );
      })}
    </>
  );
};

export default Page;
