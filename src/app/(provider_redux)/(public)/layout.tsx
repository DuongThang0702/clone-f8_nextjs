"use client";
import { SidebarHomePage, HeaderHomePage, FooterHomePage } from "@/components";
import { RootState } from "@/redux/store";
import NextNProgress from "nextjs-progressbar";
import { useSelector } from "react-redux";
export default function PulicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isShowModal, modalChildren } = useSelector(
    (state: RootState) => state.app
  );

  return (
    <div className="w-full h-full relative">
      {isShowModal && (
        <div className="bg-blackOpacity w-full h-full fixed left-0 right-0 top-0 z-50">
          <div className="relative max-w-full max-h-full top-[10%] left-[50%] translate-x-[-50%]">
            {modalChildren}
          </div>
        </div>
      )}
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <HeaderHomePage />
      <div className="h-[8rem] w-full"></div>
      <div className="h-full w-full flex relative">
        <div className="absolute top-0 left-0 bottom-0">
          <SidebarHomePage />
        </div>
        <div className="w-[9rem] flex-none"></div>
        <div className="w-[95%] h-full mx-auto flex flex-col gap-y-20">
          {children}
        </div>
      </div>
      <div className="w-[9rem] flex-none"></div>
      <FooterHomePage />
    </div>
  );
}
