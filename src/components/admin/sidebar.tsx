import { RootState } from "@/redux/store";
import { RoutesAdmin } from "@/utils/contants";
import icon from "@/utils/icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useSelector } from "react-redux";

type TitemSidebar = {
  id: number;
  icon: IconProp;
  title: string;
  path: string;
};

const itemSidebar: TitemSidebar[] = [
  {
    id: 1,
    icon: icon.faGaugeHigh,
    path: `${RoutesAdmin.DASHBOARD}`,
    title: "Dashboard",
  },
  {
    id: 2,
    icon: icon.faPeopleGroup,
    path: `${RoutesAdmin.USER}`,
    title: "User",
  },
  {
    id: 3,
    icon: icon.faBookTanakh,
    path: `${RoutesAdmin.COURSE}`,
    title: "Course",
  },
];
//background-image: linear-gradient(to right, #9024ed, #6630c5, #45309b, #2d2a70, #1f2045);

const Page: FC = ({}) => {
  const { current } = useSelector((state: RootState) => state.user);
  return (
    <div className="absolute left-0 top-0 bottom-0 right-[10%]">
      <div className="h-full bg-[#122033] w-[16%] text-grayMain py-8 text-3xl flex flex-col">
        <div className="font-bold px-8">
          <div className="border-b flex py-4 items-center gap-x-8">
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

        <div className="mt-8">
          {itemSidebar.map((el) => (
            <Link
              className="block hover:bg-gradient-to-r hover:from-[#9325F1] hover:to-[#212048] hover:text-white font-bold py-8"
              key={el.id}
              href={el.path}
            >
              <div className="px-8">
                <FontAwesomeIcon className="mr-6" icon={el.icon} />
                <span className="text-center">{el.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
