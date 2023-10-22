import { showModel } from "@/redux/app";
import { AppDispatch } from "@/redux/store";
import Image from "next/image";
import { FC, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { InputField } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "@/utils/icon";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { apiLogin } from "@/api";
import { LoginData } from "@/utils/type";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { login } from "@/redux/user";

const Page: FC = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const modalRef = useRef<HTMLDivElement>(null);

  const schema = yup
    .object({
      email: yup.string().required().email().min(6),
      password: yup.string().required().min(6),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginData) => {
    await apiLogin(data)
      .then((rs: AxiosResponse) => {
        if (rs.status >= 400 && rs.status <= 499)
          toast.error("wrong password or email");

        if (rs.status >= 500 && rs.status <= 599)
          toast.error("something went wrong");

        if (rs.status >= 100 && rs.status <= 299) {
          toast.success("login success");
          dispatch(
            login({ access_token: rs.data.access_token, isLoggedIn: true })
          );
          dispatch(showModel({ isShowModal: false, modalChildren: null }));
        }
      })
      .catch((err: AxiosError) => toast.error("Something went wrong"));
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!modalRef.current) {
        return;
      }
      if (!modalRef.current.contains(e.target as Node))
        dispatch(showModel({ isShowModal: false, modalChildren: null }));
    };
    document.addEventListener("click", handleClickOutside);
    return () => removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="flex-none">
      <div
        ref={modalRef}
        className="w-[30%] h-full text-black px-10 py-16 bg-white rounded-3xl 
      mx-auto flex flex-col gap-y-14 items-center"
      >
        <div className="w-full">
          <div
            className="w-[5rem] p-4 rounded-full bg-[#F8F8F8] flex 
            float-right justify-center cursor-pointer"
            onClick={() =>
              dispatch(showModel({ isShowModal: false, modalChildren: null }))
            }
          >
            <FontAwesomeIcon icon={icon.faXmark} className="text-[2rem]" />
          </div>
        </div>
        <div className="w-[5rem] h-[5rem]">
          <Image
            src={"/logo.png"}
            alt="logo"
            height={100}
            width={100}
            className="rounded-xl"
          />
        </div>
        <h1 className="text-4xl leading-6 font-bold text-[3rem]">
          Đăng nhập vào ShortCourse
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col text-start w-[80%] mx-auto"
        >
          <div className=" flex flex-col gap-y-10">
            <div className="flex flex-col">
              <InputField
                style="rounded-full outline-none focus:outline text-2xl focus:outline-blue-500 px-8 py-6 mt-4 bg-[#F1F1F1]"
                register={register}
                id="email"
                label="Email"
                errors={errors?.email?.message}
                placeholder="Địa chỉ email"
                validate={{ required: "Missing name book" }}
              />
            </div>
            <div className="flex flex-col">
              <InputField
                style="rounded-full outline-none focus:outline text-2xl focus:outline-blue-500 px-8 py-6 mt-4 bg-[#F1F1F1]"
                register={register}
                id="password"
                type="password"
                label="Password"
                errors={errors?.password?.message}
                placeholder="Địa chỉ password"
                validate={{ required: "Missing name book" }}
              />
            </div>
          </div>

          <button
            disabled={!isDirty || !isValid}
            type="submit"
            className="text-center mt-10 py-6 px-4 bg-[#6DD5FA] rounded-full text-white
         block text-3xl font-bold"
          >
            Đăng nhập
          </button>
        </form>
        <p className="text-lg opacity-70 w-2/3 text-center select-none cursor-default">
          Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{" "}
          <span className="underline-offset-2 underline decoration-solid">
            điều khoản sử dụng
          </span>{" "}
          của chúng tôi.
        </p>
      </div>
    </div>
  );
};

export default Page;
