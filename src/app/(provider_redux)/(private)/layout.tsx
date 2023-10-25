"use client";

import { HeaderAdmin, SidebarAdmin } from "@/components";
import { RootState } from "@/redux/store";
import { Routes, RoutesAdmin } from "@/utils/path";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { current, isLoggedIn } = useSelector((state: RootState) => state.user);
  if (!current || !isLoggedIn || current.role !== process.env.NEXT_PUBLIC_ADMIN)
    router.push(`/${Routes.HOME_PAGE}`);
  return (
    <div className="relative w-full min-h-screen flex">
      <div className="absolute left-0 top-0 bottom-0 right-[85%]">
        <SidebarAdmin />
      </div>
      <div className="w-[15%] flex-none"></div>
      {children}
    </div>
  );
}
