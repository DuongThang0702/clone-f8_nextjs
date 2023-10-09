import { FC } from "react";
import { mockBanner } from "@/_mock/";
import SliderBanner from "../slider/sliderBanner";

const Page: FC = ({}) => {
  return (
    <>
      <div className="text-black w-[95%] mx-auto">
        <div className="ml-[3rem]">
          <SliderBanner items={mockBanner} />
        </div>
      </div>
    </>
  );
};

export default Page;
