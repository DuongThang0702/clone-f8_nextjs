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
    <>
      <div
        onClick={() => setActive((prev) => !prev)}
        className={`flex bg-[#F5F5F5] rounded-xl p-6 justify-between
         group ${Active && `is-active`} cursor-pointer`}
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
    </>
  );
};

export default Page;
