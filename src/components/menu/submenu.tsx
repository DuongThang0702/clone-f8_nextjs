import { Menu } from "@/utils/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC, Fragment } from "react";

interface Props {
  subItems: Menu[];
}

const Page: FC<Props> = ({ subItems }) => {
  return (
    <>
      <div
        className="absolute left-[1rem] top-20 z-50 bg-white 
      rounded-xl shadow-sidebar w-[16rem] hover:bg-gray-300 
      transition ease-linear duration-200"
      >
        {subItems.map((el) => (
          <Fragment key={el.id}>
            <div>
              {el.type === "single" && el.link ? (
                <Link
                  href={el.link}
                  key={el.id}
                  className={` py-4 px-10 ${
                    el.style ? el.style : "flex gap-x-4 text-mainSize"
                  }`}
                >
                  <div className="text-center">
                    <FontAwesomeIcon
                      icon={el.icon}
                      className="text-lg opacity-70"
                    />
                  </div>
                  {el.text ? (
                    <h1 className="font-semibold text-[1.2rem] space-x-3">
                      {el.text}
                    </h1>
                  ) : (
                    <></>
                  )}
                </Link>
              ) : (
                <></>
              )}
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Page;
