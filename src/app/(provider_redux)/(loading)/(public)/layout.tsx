"use client";
import { SidebarHomePage, HeaderHomePage, FooterHomePage } from "@/components";
import { showModel } from "@/redux/app";
import { AppDispatch, RootState } from "@/redux/store";
import NextNProgress from "nextjs-progressbar";
import { useDispatch, useSelector } from "react-redux";
export default function PulicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isShowModal, modalChildren } = useSelector(
    (state: RootState) => state.app
  );
  const dispatch = useDispatch<AppDispatch>();
  const handleCloseModal = () => {
    dispatch(showModel({ isShowModal: false, modalChildren: null }));
  };
  return (
    <div className="w-screen h-screen relative">
      {isShowModal && (
        <div
          className="bg-blackOpacity w-full h-full fixed left-0 right-0 top-0 z-50"
          onClick={handleCloseModal}
        >
          <div className="relative w-1/2 h-full top-[10%] left-[50%] translate-x-[-50%]">
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
      <div className="min-h-[100vh] w-full flex">
        <div className="absolute top-[10rem] left-0 bottom-0 z-30">
          <SidebarHomePage />
        </div>
        <div className="w-[9rem] flex-none"></div>
        <div className="w-[95%] h-max mx-auto overflow-y-scroll flex flex-col gap-y-20">
          {children}
        </div>
      </div>
      <FooterHomePage />
    </div>
  );
}
