"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function LoadingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isShowLoading, componentLoading } = useSelector(
    (state: RootState) => state.app
  );

  return (
    <div className="relative w-screen h-full">
      {isShowLoading && (
        <div
          className={`bg-blackOpacity fixed top-0 right-0 left-0 bottom-0 z-50`}
        >
          <div className="relative left-1/2 top-[10%]">{componentLoading}</div>
        </div>
      )}
      {children}
    </div>
  );
}
