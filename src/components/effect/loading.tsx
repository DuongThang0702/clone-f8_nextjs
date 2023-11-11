import { CSSProperties, FC, memo } from "react";
import { ClipLoader, GridLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Page: FC = ({}) => {
  const { isShowLoading } = useSelector((state: RootState) => state.app);

  return (
    <GridLoader
      color="#36d7b7"
      loading={isShowLoading}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
      className={`block my-0 mx-auto`}
    />
  );
};

export default memo(Page);
