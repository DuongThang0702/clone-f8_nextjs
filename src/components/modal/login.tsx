import { showModel } from "@/redux/app";
import { AppDispatch } from "@/redux/store";
import Image from "next/image";
import { FC, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { InputField } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "@/utils/icon";

interface Login {
  email: string;
  password: string;
}

const Page: FC = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ShowTarget = (e: MouseEvent) => {
      if (!modalRef.current) {
        return;
      }
      if (!modalRef.current.contains(e.target as Node))
        dispatch(showModel({ isShowModal: false, modalChildren: null }));
    };
    document.addEventListener("click", ShowTarget);
    return () => removeEventListener("click", ShowTarget);
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Login>();
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <div
        ref={modalRef}
        className="w-[46%] h-full text-black px-10 py-16 bg-white rounded-3xl 
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
                register={register}
                id="password"
                label="Password"
                errors={errors?.password?.message}
                placeholder="Địa chỉ password"
                validate={{ required: "Missing name book" }}
              />
            </div>
          </div>
          <div
            className="mt-10 py-6 px-4 bg-[#6DD5FA] rounded-full text-white
         flex items-center justify-center"
          >
            <button type="submit" className="text-center text-3xl font-bold">
              Đăng nhập
            </button>
          </div>
        </form>
        <p className="text-lg opacity-70 w-2/3 text-center">
          Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{" "}
          <span className="underline-offset-2 underline decoration-solid">
            điều khoản sử dụng
          </span>{" "}
          của chúng tôi.
        </p>
      </div>
    </>
  );
};

export default Page;
