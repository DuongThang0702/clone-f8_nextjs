"use client";
import { apiCreateChapter } from "@/api";
import { InputField } from "@/components";
import icon from "@/utils/icon";
import { CreateChapter } from "@/utils/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AxiosError, AxiosResponse } from "axios";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface Props {
  params: { courseId: string };
}

const Page: FC<Props> = ({ params }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<CreateChapter>({});

  const handleCreateChapter = async (data: CreateChapter) => {
    const lesson = watch("lesson").split("\n");
    await apiCreateChapter(params.courseId, { ...data, lesson })
      .then((rs: AxiosResponse) => {
        console.log(rs);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };
  return (
    <div className="p-4 flex flex-col w-full mx-auto gap-y-20 min-h-full bg-[#EDF2F9] overflow-scroll">
      <form
        onSubmit={handleSubmit(handleCreateChapter)}
        className="w-4/5 mx-auto"
      >
        <div className="bg-white px-8 py-6 rounded-xl mt-10 shadow-sidebar items-center flex">
          <div className="w-full">
            <h1 className="text-4xl font-bold">Create chapter</h1>
          </div>
          <button
            type="submit"
            className="block p-4 w-[12%] text-2xl font-semibold bg-blue-600 rounded-xl text-white disabled:opacity-40"
          >
            Submit
          </button>
        </div>

        <div className="items-center mt-10">
          <div className="bg-white mt-[3%] rounded-2xl w-full h-full pb-10 shadow-sidebar">
            <div className="flex flex-col rounded-2xl">
              <div className="text-2xl bg-[#F9FAFD] text-black font-semibold px-8 py-6 rounded-2xl">
                Base information
              </div>
              <div className="px-8 py-6 flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-4">
                  <label
                    htmlFor="title"
                    className="text-2xl font-semibold text-gray-700 px-2"
                  >
                    Title:
                  </label>
                  <InputField
                    errors={errors.title?.message}
                    register={register}
                    id="title"
                    style="p-4 text-2xl rounded-xl border-2 border-[#D8E2EF] focus:outline-[#D8E2EF]"
                  />
                </div>

                <div className="flex flex-col gap-y-4">
                  <label
                    htmlFor="lesson"
                    className="text-2xl font-semibold text-gray-700 px-2"
                  >
                    Lesson:
                  </label>
                  <InputField
                    register={register}
                    type="textarea"
                    id="lesson"
                    style="p-4 text-2xl rounded-xl border-2 border-[#D8E2EF] focus:outline-[#D8E2EF]"
                  />
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
