import { FC } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import { _mockBanner } from "@/_mock";
import SliderItem from "./sliderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "@/utils/icon";

interface Props {
  items: _mockBanner[];
}

const SlickArrowLeft = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => (
  <div {...props}>
    <div>
      <FontAwesomeIcon
        icon={icon.faChevronLeft}
        className="text-2xl absolute left-[1rem] top-[.6rem]"
      />
    </div>
  </div>
);
const SlickArrowRight = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => (
  <div {...props}>
    <FontAwesomeIcon
      icon={icon.faChevronRight}
      className="text-2xl absolute left-[1rem] top-[.6rem]"
    />
  </div>
);

const Page: FC<Props> = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider
        {...settings}
        prevArrow={<SlickArrowLeft />}
        nextArrow={<SlickArrowRight />}
      >
        {items.map((el) => (
          <SliderItem key={el.id} item={el} divColor={el.divColor} />
        ))}
      </Slider>
    </>
  );
};

export default Page;
