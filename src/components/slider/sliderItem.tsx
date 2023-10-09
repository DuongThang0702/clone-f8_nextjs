import { _mockBanner } from "@/_mock";
import { FC } from "react";
import Image from "next/image";

interface Props {
  item: _mockBanner;
  divColor: string;
}

const Page: FC<Props> = ({ item, divColor }) => {
  return (
    <>
      <div
        className={`h-[27rem] flex p-12 justify-between items-center rounded-3xl`}
        style={{ backgroundColor: `${divColor}` }}
      >
        <div className="text-white px-10 flex flex-col gap-y-8 w-[64rem]">
          <h1 className="text-5xl font-bold">{item.title}</h1>
          <h1 className="text-2xl">{item.des}</h1>
          <button
            className="text-start border-2 w-[24%] font-semibold uppercase
          text-2xl flex justify-center py-2 px-4 rounded-full border-white"
          >
            Đăng ký ngay
          </button>
        </div>
        <div className="w-2/5 ml-4">
          <Image alt="img" src={item.img} height={1000} width={1000} />
        </div>
      </div>
    </>
  );
};

export default Page;
