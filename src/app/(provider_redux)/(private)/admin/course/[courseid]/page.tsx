"use client";
import { apiGetOneById, apiUpdateInfomationCourse } from "@/api";
import { Accordient, InputField, MarkdownEditor } from "@/components";
import { formatSizeUnits, handlePreview } from "@/utils/helper";
import icon from "@/utils/icon";
import { RoutesAdmin } from "@/utils/path";
import { Course, CreateCourse } from "@/utils/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AxiosError, AxiosResponse } from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface Props {
  params: { courseid: string };
}

const Page: FC<Props> = ({ params }) => {
  const router = useRouter();
  const [preview, setPreview] = useState<string | null>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<CreateCourse>({});
  const [description, setDescription] = useState<string>("");
  const getCourse = async (cid: string) => {
    await apiGetOneById(cid).then((rs: AxiosResponse) => {
      if (rs.status >= 400 && rs.status <= 599) toast.error("Not found id");
      else setCourse(rs.data);
    });
  };
  useEffect(() => {
    getCourse(params.courseid);
  }, [params.courseid]);

  useEffect(() => {
    if (watch("thumbnail") && watch("thumbnail").length > 0)
      handlePreview(watch("thumbnail")[0], setPreview);
  }, [watch("thumbnail")]);

  const handleUpdateCourse = async (data: CreateCourse) => {
    const promise = watch("promise").split("\n");
    const finalPayload = { ...data, description, promise };
    const formData = new FormData();
    for (let i of Object.entries(finalPayload))
      formData.append(i[0], i[1] as string);
    if (watch("thumbnail").length > 0) {
      formData.append("thumbnail", watch("thumbnail")[0]);
    } else formData.delete("thumbnail");
    if (description === "") {
      formData.delete("description");
    }
    await apiUpdateInfomationCourse(formData, params.courseid)
      .then((rs: AxiosResponse) => {
        if (rs.status >= 400 && rs.status <= 599) {
          toast.error(rs.data.message.map((el: string[]) => el[0]));
        } else {
          toast.success("create success");
          router.push(
            `/${RoutesAdmin.ADMIN}/${RoutesAdmin.COURSE}/${RoutesAdmin.MANAGE_COURSE}`
          );
        }
      })
      .catch((err: AxiosError) => toast.error("Something went wrong!"));
  };

  console.log(course);

  return (
    course && (
      <div className="p-4 flex flex-col w-full mx-auto gap-y-20 min-h-full bg-[#EDF2F9] overflow-scroll">
        <form
          onSubmit={handleSubmit(handleUpdateCourse)}
          className="w-4/5 mx-auto"
        >
          <div className="bg-white px-8 py-6 rounded-xl mt-10 shadow-sidebar items-center flex">
            <div className="w-full">
              <h1 className="text-4xl font-bold">Update Course</h1>
            </div>
            <button
              type="submit"
              className="block p-4 w-[12%] text-2xl font-semibold bg-blue-600 rounded-xl text-white disabled:opacity-40"
            >
              Update course
            </button>
          </div>
          <div className="grid grid-cols-2 gap-x-20 items-center mt-10">
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
                      defaultValue={course?.title}
                      id="title"
                      style="p-4 text-2xl rounded-xl border-2 border-[#D8E2EF] focus:outline-[#D8E2EF]"
                    />
                  </div>

                  <div className="flex flex-col gap-y-4">
                    <label
                      htmlFor="price"
                      className="text-2xl font-semibold text-gray-700 px-2"
                    >
                      Price:
                    </label>
                    <InputField
                      errors={errors.price?.message}
                      register={register}
                      type="number"
                      id="price"
                      style="p-4 text-2xl rounded-xl border-2 border-[#D8E2EF] focus:outline-[#D8E2EF]"
                    />
                  </div>

                  <div className="flex flex-col gap-y-4">
                    <label
                      htmlFor="promise"
                      className="text-2xl font-semibold text-gray-700 px-2"
                    >
                      Promise:
                    </label>
                    <InputField
                      errors={errors.promise?.message}
                      register={register}
                      defaultValue={course?.promise.join("\n")}
                      type="textarea"
                      id="promise"
                      style="p-4 text-2xl rounded-xl border-2 border-[#D8E2EF] focus:outline-[#D8E2EF]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white mt-[3%] rounded-2xl w-full h-full pb-10 shadow-sidebar">
              <div className="flex flex-col rounded-2xl">
                <div className="text-2xl bg-[#F9FAFD] text-black font-semibold px-8 py-6 rounded-2xl">
                  Upload image
                </div>
                <label
                  className="text-2xl font-semibold tracking-wider bg-red text-black w-[90%] border-4 border-[#D8E2EF] h-[20rem] border-dashed px-4 py-2 mx-auto
                  rounded-xl flex items-center justify-center cursor-pointer mt-8"
                  htmlFor="thumbnail"
                >
                  <div className="flex flex-col gap-y-6">
                    <FontAwesomeIcon
                      icon={icon.faUpload}
                      className="text-gray-500 mr-4 text-center text-[5rem]"
                    />
                    <div className="text-gray-500">Upload thumbnail</div>
                  </div>
                </label>
                <input
                  type="file"
                  id="thumbnail"
                  {...register("thumbnail")}
                  className="hidden"
                />
                {errors["thumbnail"] && (
                  <small className="text-red font-semibold text-base">
                    {errors["thumbnail"]?.message}
                  </small>
                )}
                {
                  <div className="min-w-full h-[10rem] mt-8 px-8 py-6">
                    <div className=" border-b-2 flex px-6 items-center">
                      <div className="w-full flex  gap-x-8">
                        <div className="w-[6rem] h-[6rem]">
                          <Image
                            src={preview ? preview : course.thumbnail.path}
                            width={198}
                            height={123}
                            alt="image"
                          />
                        </div>
                        {preview && (
                          <div>
                            <h1 className="text-2xl font-semibold">
                              {watch("thumbnail")[0].name}
                            </h1>
                            <h1 className="text-2xl">
                              {formatSizeUnits(watch("thumbnail")[0].size)}
                            </h1>
                          </div>
                        )}
                      </div>
                      <div
                        className="text-black cursor-pointer"
                        onClick={() => setPreview(null)}
                      >
                        <FontAwesomeIcon
                          icon={icon.faXmark}
                          className="text-4xl"
                        />
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>

          <div className="bg-white mt-[3%] rounded-2xl w-full h-max pb-10 shadow-sidebar">
            <div className="flex flex-col">
              <div className="text-2xl rounded-2xl bg-[#F9FAFD] text-black font-semibold px-8 py-6">
                Details
              </div>
              <div className="px-8 py-6 flex flex-col gap-y-10">
                <div className="flex gap-x-10">
                  <div className="w-full flex flex-col gap-y-4">
                    <label
                      htmlFor="openingDay"
                      className="text-2xl font-semibold text-gray-700 px-2"
                    >
                      Opening day:
                    </label>
                    <InputField
                      errors={errors.openingDay?.message}
                      register={register}
                      defaultValue={course?.info.openingDay}
                      type="date"
                      id="openingDay"
                      style="p-4 text-2xl rounded-xl border-2 border-[#D8E2EF] focus:outline-[#D8E2EF]"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-y-4">
                    <label
                      htmlFor="area"
                      className="text-2xl font-semibold text-gray-700 px-2"
                    >
                      Localtion:
                    </label>
                    <InputField
                      errors={errors.area?.message}
                      register={register}
                      defaultValue={course?.info.area}
                      id="area"
                      style="p-4 text-2xl rounded-xl border-2 border-[#D8E2EF] focus:outline-[#D8E2EF]"
                    />
                  </div>
                </div>

                <div className="flex gap-x-10">
                  <div className="w-full flex flex-col gap-y-4">
                    <label
                      htmlFor="schedule"
                      className="text-2xl font-semibold text-gray-700 px-2"
                    >
                      Schedule:
                    </label>
                    <InputField
                      errors={errors.schedule?.message}
                      register={register}
                      defaultValue={course?.info.schedule}
                      id="schedule"
                      style="p-4 text-2xl rounded-xl border-2 border-[#D8E2EF] focus:outline-[#D8E2EF]"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-y-4">
                    <label
                      htmlFor="duration"
                      className="text-2xl font-semibold text-gray-700 px-2"
                    >
                      Duration:
                    </label>
                    <InputField
                      errors={errors.duration?.message}
                      register={register}
                      type="number"
                      defaultValue={course?.info.duration}
                      id="duration"
                      style="p-4 text-2xl rounded-xl border-2 border-[#D8E2EF] focus:outline-[#D8E2EF]"
                    />
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <label
                      htmlFor="slot"
                      className="text-2xl font-semibold text-gray-700 px-2"
                    >
                      Slot:
                    </label>
                    <InputField
                      errors={errors.slot?.message}
                      register={register}
                      type="number"
                      defaultValue={course?.info.slot}
                      id="slot"
                      style="p-4 text-2xl rounded-xl border-2 border-[#D8E2EF] focus:outline-[#D8E2EF]"
                    />
                  </div>
                </div>
              </div>

              <div className="px-8 py-6 flex flex-col gap-y-10">
                <label className="text-2xl font-semibold text-gray-700 px-2">
                  Description:
                </label>
                <MarkdownEditor
                  setDescription={setDescription}
                  defaultValue={course.description}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="w-4/5 mx-auto pb-[5rem]">
          <div className="flex gap-x-10 items-center h-full">
            <div className="bg-white mt-[3%] rounded-2xl w-full h-full pb-10 shadow-sidebar">
              <div className="flex flex-col rounded-2xl">
                <div className="flex justify-around items-center">
                  <div className="text-2xl bg-[#F9FAFD] text-black font-semibold px-8 py-6 rounded-2xl w-full">
                    Chapter
                  </div>
                  <div
                    onClick={() =>
                      router.push(
                        `/${RoutesAdmin.ADMIN}/${RoutesAdmin.COURSE}/${RoutesAdmin.CREATE_CHAPTER}/${course._id}`
                      )
                    }
                    className="p-4 px-6 bg-blue-600 m-4 rounded-full text-white w-1/12 text-xl text-center font-semibold cursor-pointer"
                  >
                    Add new
                  </div>
                </div>
                {course.chapter.map((el) => (
                  <Accordient key={el._id} item={el} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Page;
