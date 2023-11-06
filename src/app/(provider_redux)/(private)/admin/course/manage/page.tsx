"use client";
import { apiDeleteCourse, apiGetAllCourse } from "@/api/admin";
import { FieldsTableCourse } from "@/utils/contants";
import { Courses } from "@/utils/type";
import { AxiosError, AxiosResponse } from "axios";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { RoutesAdmin } from "@/utils/path";

const Page: FC = ({}) => {
  const router = useRouter();
  const [courses, setCourses] = useState<Courses | null>(null);
  const [update, setUpdate] = useState<boolean>(false);
  const render = () => setUpdate((prev) => !prev);

  const fetch = async () =>
    await apiGetAllCourse()
      .then((rs: AxiosResponse) => {
        if (rs.status >= 400 && rs.status <= 599)
          toast.error("Something went wrong");
        else setCourses(rs.data);
      })
      .catch((err: AxiosError) => toast.error("Something went wrong"));

  useEffect(() => {
    fetch();
  }, [update]);

  const handleDeleteCourse = async (cid: string) => {
    Swal.fire({
      title: "Are you sure",
      text: "Are you ready remove this course",
      showCancelButton: true,
    })
      .then(async (rs) => {
        if (rs.isConfirmed) {
          await apiDeleteCourse(cid).then((rs: AxiosResponse) => {
            if (rs.status >= 400 && rs.status <= 599)
              toast.error("Something went wrong!");
            else {
              render();
              toast.success(`delete user ${cid} success`);
            }
          });
        }
      })
      .catch((err: AxiosError) => toast.error("Something went wrong!"));
  };

  return (
    <div
      className="p-4 flex flex-col w-full mx-auto gap-y-20 min-h-full 
    bg-[#EDF2F9] overflow-scroll"
    >
      <div className="w-4/5 mx-auto">
        <div className="bg-white px-8 py-12 w-full rounded-xl mt-10 shadow-sidebar items-center flex">
          <div className="w-full">
            <h1 className="text-4xl font-bold">Manage Course</h1>
          </div>
          <div className="w-[16%] flex gap-x-6 items-center">
            <h1 className="text-2xl">Sort by:</h1>
            <select
              name=""
              id=""
              className="p-4 mt-4 text-xl rounded-2xl border outline-none"
            >
              <option className="px-4" value="">
                CreatedAt
              </option>
            </select>
          </div>
        </div>
        <div className="bg-white mt-[3%] rounded-2xl w-full h-full p-6 shadow-sidebar">
          <table className="table-auto w-full border  ">
            <thead className="bg-[#364152] text-white ">
              <tr>
                {FieldsTableCourse.map((el) => (
                  <th
                    key={el.id}
                    className={`text-3xl font-bold p-4 border${
                      el.style ? el.style : "text-center"
                    }`}
                  >
                    {el.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-2xl">
              {courses?.courses.map((el) => (
                <tr key={el._id}>
                  <td className="border-r text-start px-4 text-xl">{el._id}</td>
                  <td className="border-r text-center">{el.title}</td>
                  <td className="border-r text-center">{el.view}</td>
                  <td className="border-r w-[6rem]">
                    <div className="w-full h-full">
                      <Image
                        src={el.thumbnail.path}
                        height={100}
                        width={100}
                        alt="image"
                        className="p-4"
                      />
                    </div>
                  </td>
                  <td className="border-r text-center">
                    {moment(el.createdAt).format("DD/MM/YYYY")}
                  </td>
                  <td className=" flex gap-x-6 text-start text-mainSize w-full h-full p-4 justify-center items-center">
                    <div
                      className="bg-blue-600 text-white w-full text-center font-semibold p-6 rounded-2xl cursor-pointer"
                      onClick={() =>
                        router.push(
                          `/${RoutesAdmin.ADMIN}/${RoutesAdmin.COURSE}/${RoutesAdmin.CREATE_CHAPTER}/${el._id}`
                        )
                      }
                    >
                      Add chapter
                    </div>
                    <div
                      className="bg-yellow-400 text-white p-6 rounded-2xl w-full text-center font-semibold cursor-pointer"
                      onClick={() =>
                        router.push(
                          `/${RoutesAdmin.ADMIN}/${RoutesAdmin.COURSE}/${el._id}`
                        )
                      }
                    >
                      Update Course
                    </div>
                    <div
                      className="bg-red-600 text-white p-6 rounded-2xl w-full text-center font-semibold cursor-pointer"
                      onClick={() => handleDeleteCourse(el._id)}
                    >
                      Delete
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
