import { _mockBanner } from "@/_mock";
import { Routes } from "@/utils/contants";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  items: _mockBanner[];
}

const Page: FC<Props> = ({ items }) => {
  return (
    <>
      <div className="flex gap-10 mt-10">
        {items.map((el) => (
          <div key={el.id} className="group">
            <Link href={`${Routes.COURSE}/${el.id.toString()}`}>
              <div className="flex flex-col gap-y-6">
                <div className="relative">
                  <Image
                    src={el.thumbnail}
                    height={1000}
                    width={1000}
                    alt="img"
                    className="rounded-3xl"
                  />
                  <div
                    className="absolute opacity-0 group-hover:opacity-100 transition-all duration-150 ease-linear
                   rounded-3xl bg-blackOpacity top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center"
                  >
                    <button className="py-4 px-6 bg-white rounded-full text-xl font-semibold block">
                      Xem khóa học
                    </button>
                  </div>
                </div>
                <h1 className="text-3xl font-semibold">{el.title}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
