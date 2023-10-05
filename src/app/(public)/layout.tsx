"use client";
import { SidebarHomePage, TaskBarHomePage } from "@/components";
import NextNProgress from "nextjs-progressbar";
export default function PulicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <TaskBarHomePage />
      <div className="h-[8rem] w-full"></div>
      <div className="h-full w-full flex relative">
        <div className="absolute top-0 left-0 bottom-0 w-[9rem] ">
          <SidebarHomePage />
        </div>
        <div className="w-[9rem]"></div>
        {children}
      </div>
    </div>
  );
}
