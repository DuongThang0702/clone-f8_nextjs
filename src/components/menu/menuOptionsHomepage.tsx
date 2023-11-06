import { apiLogout } from "@/api";
import { AppDispatch } from "@/redux/store";
import { logout } from "@/redux/user";
import { RoutesAdmin } from "@/utils/path";
import { UserCurrent } from "@/utils/type";
import { AxiosError, AxiosResponse } from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface Props {
  user: UserCurrent;
}

const Page: FC<Props> = ({ user }) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const handleLogtout = async () => {
    await apiLogout()
      .then((rs: AxiosResponse) => {
        if (rs.status >= 400 && rs.status <= 599)
          toast.error("something went wrong!");
        if (rs.status >= 100 && rs.status <= 299) dispatch(logout());
      })
      .catch((err: AxiosError) => toast.error("Something went wrong"));
  };

  return (
    <>
      <div className="w-[20rem] bg-white h-full px-[2.4rem] py-8 rounded-xl shadow-sidebar">
        <div className="flex flex-col">
          <div className="border-b-2 mb-4 flex justify-center items-center gap-x-6">
            <div className="w-[4.5rem] h-[4.5rem] mb-4">
              <Image
                src={user.avatar ? user.avatar : "/avatardefault.png"}
                height={50}
                width={50}
                alt="avatar"
              />
            </div>
            <h1 className="text-xl font-bold">{user.fullname}</h1>
          </div>
          {user.role === process.env.NEXT_PUBLIC_ADMIN && (
            <div
              className="border-b-2 mb-4 cursor-pointer"
              onClick={() =>
                router.push(`/${RoutesAdmin.ADMIN}/${RoutesAdmin.DASHBOARD}`)
              }
            >
              <div className="text-2xl opacity-80 cursor-pointer hover:opacity-100 mb-4">
                Admin
              </div>
            </div>
          )}

          <div
            className="text-2xl opacity-80 cursor-pointer hover:opacity-100"
            onClick={() => handleLogtout()}
          >
            <h1>Đăng xuất</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
