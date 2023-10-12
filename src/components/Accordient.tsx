import { chapter } from "@/_mock";
import icon from "@/utils/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";

interface Props {
  item: chapter;
}

const Page: FC<Props> = ({ item }) => {
  const [Active, setActive] = useState<boolean>(false);
  return (
    <div
      onClick={() => setActive((prev) => !prev)}
      className={`group ${Active && `is-active`} cursor-pointer`}
    >
      <div
        className={`flex bg-[#F5F5F5] rounded-xl p-6 justify-between
        `}
      >
        <div className="flex items-center gap-x-4">
          <FontAwesomeIcon
            icon={icon.faPlus}
            className="font-light text-mainColor"
          />
          <div className="flex gap-x-4 font-semibold">
            <div>
              <span className="text-2xl">{item.titleChapter}</span>
            </div>
          </div>
        </div>
        <div>
          <FontAwesomeIcon
            icon={icon.faChevronRight}
            className="group-[.is-active]:rotate-90"
          />
        </div>
      </div>
      <div className={`group-[.is-active]:block hidden w-[90%] mx-auto`}>
        <div className="flex flex-col gap-4 mt-4">
          {item.lesson.map((el, index) => (
            <div key={index} className="flex gap-x-4 items-center">
              <FontAwesomeIcon
                icon={icon.faCirclePlay}
                className="text-mainColor opacity-70"
              />
              <h1>{el.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
