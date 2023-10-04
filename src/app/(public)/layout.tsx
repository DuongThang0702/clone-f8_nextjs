"use client";
import { SidebarHomePage, TaskBarHomePage } from "@/components";
import NextNProgress from "nextjs-progressbar";
export default function PulicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-full overflow-x-hidden">
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <TaskBarHomePage />
      <div className="h-[6.5rem] w-full flex-none"></div>
      <div className="flex relative h-full w-full">
        <div className="absolute top-0 left-0 bottom-0">
          <SidebarHomePage />
        </div>
        <div className="w-[8rem]"></div>
        {children}
      </div>
    </div>
  );
}
