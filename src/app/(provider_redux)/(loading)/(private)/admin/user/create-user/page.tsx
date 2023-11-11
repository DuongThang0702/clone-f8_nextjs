"use client";
import { apiCreateUserByAdmin } from "@/api";
import { InputField, Loading, SelectForm } from "@/components";
import { showLoading } from "@/redux/app";
import { AppDispatch } from "@/redux/store";
import { optionsRole } from "@/utils/contants";
import { RoutesAdmin } from "@/utils/path";
import { CreateUserByAdmin } from "@/utils/type";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Page: FC = ({}) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<CreateUserByAdmin>({});
  const handleCreateUserByAdmin = async (data: CreateUserByAdmin) => {
    dispatch(
      showLoading({ isShowLoading: true, componentLoading: <Loading /> })
    );
    await apiCreateUserByAdmin(data)
      .then((rs: AxiosResponse) => {
        dispatch(showLoading({ isShowLoading: false, componentLoading: null }));
        if (rs.status >= 400 && rs.status <= 499)
          toast.error("email has already exist");
        if (rs.status >= 500 && rs.status <= 599)
          toast.error("something went wrong");
        if (rs.status >= 200 && rs.status <= 399) {
          router.push(
            `/${RoutesAdmin.ADMIN}/${RoutesAdmin.USER}/${RoutesAdmin.MANAGE_USER}`
          );
          toast.success("created successfully");
        }
      })
      .catch((err: AxiosError) => {
        dispatch(showLoading({ isShowLoading: false, componentLoading: null }));
        console.log(err);
      });
  };

  return (
    <div className="p-4 flex flex-col w-full mx-auto gap-y-20 min-h-full bg-[#EDF2F9] overflow-scroll">
      <form
        onSubmit={handleSubmit(handleCreateUserByAdmin)}
        className="w-4/5 mx-auto"
      >
        <div className="bg-white px-8 py-6 rounded-xl mt-10 shadow-sidebar items-center flex">
          <div className="w-full">
            <h1 className="text-4xl font-bold">Add User</h1>
          </div>
          <button
            type="submit"
            disabled={!isDirty || !isValid}
            className="block p-4 w-[10%] text-2xl font-semibold bg-blue-600 rounded-xl text-white disabled:opacity-40"
          >
            Add user
          </button>
        </div>
        <div className="flex flex-col gap-x-20 items-center mt-10">
          <div className="bg-white mt-[3%] rounded-2xl w-full h-full pb-10 shadow-sidebar">
            <div className="flex flex-col rounded-2xl">
              <div className="text-2xl bg-[#F9FAFD] text-black font-semibold px-8 py-6 rounded-2xl">
                Base information
              </div>
              <div className="px-8 py-6 flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-6">
                  <label
                    htmlFor="email"
                    className="text-2xl font-semibold text-gray-700 px-2"
                  >
                    email:
                  </label>
                  <InputField
                    validate={{ required: "Missing input" }}
                    errors={errors.email?.message}
                    register={register}
                    id="email"
                    style="p-4 text-2xl rounded-xl border-2 border-[#D8E2EF] focus:outline-[#D8E2EF]"
                  />
                  <div className="w-full flex gap-x-8">
                    <div className="flex flex-col w-full gap-y-4">
                      <label
                        htmlFor="dateOfBirth"
                        className="text-2xl font-semibold text-gray-700 px-2"
                      >
                        dateOfBirth:
                      </label>
                      <InputField
                        validate={{ required: "Missing input" }}
                        errors={errors.dateOfBirth?.message}
                        register={register}
                        fullW
                        type="date"
                        id="dateOfBirth"
                        style="p-4 text-2xl rounded-xl border-2 border-[#D8E2EF] focus:outline-[#D8E2EF]"
                      />
                    </div>
                    <div className="flex flex-col w-full gap-y-4">
                      <label
                        htmlFor="phoneNumber"
                        className="text-2xl font-semibold text-gray-700 px-2"
                      >
                        phoneNumber:
                      </label>
                      <InputField
                        validate={{ required: "Missing input" }}
                        fullW
                        errors={errors.phoneNumber?.message}
                        register={register}
                        type="number"
                        id="phoneNumber"
                        style="p-4 text-2xl rounded-xl border-2 border-[#D8E2EF] focus:outline-[#D8E2EF]"
                      />
                    </div>
                  </div>
                  <div className="w-full flex gap-x-8">
                    <div className="flex flex-col w-full gap-y-4">
                      <label
                        htmlFor="role"
                        className="text-2xl font-semibold text-gray-700 px-2"
                      >
                        role:
                      </label>
                      <SelectForm
                        options={optionsRole}
                        fullW
                        errors={errors.role?.message}
                        register={register}
                        id="role"
                        style="p-4 text-2xl rounded-xl border-2 border-[#D8E2EF] focus:outline-[#D8E2EF]"
                      />
                    </div>
                    <div className="flex flex-col w-full gap-y-4">
                      <label
                        htmlFor="fullname"
                        className="text-2xl font-semibold text-gray-700 px-2"
                      >
                        fullname:
                      </label>
                      <InputField
                        validate={{ required: "Missing input" }}
                        fullW
                        errors={errors.fullname?.message}
                        register={register}
                        id="fullname"
                        style="p-4 text-2xl rounded-xl border-2 border-[#D8E2EF] focus:outline-[#D8E2EF]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
