"use client";
import { apiDeleteUser, apiGetAllUsers } from "@/api";
import { FieldsTableAdmin } from "@/utils/contants";
import { User } from "@/utils/type";
import { AxiosError, AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";
import Swal from "sweetalert2";

const Page: FC = ({}) => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [update, setUpdate] = useState<boolean>(false);
  const render = () => setUpdate((prev) => !prev);
  const fetchDataUser = async () => {
    await apiGetAllUsers()
      .then((rs: AxiosResponse) => {
        if (rs.status >= 400 && rs.status <= 599)
          return toast.error("Something went wrong!");
        else setUsers(rs.data);
      })
      .catch((err: AxiosError) => toast.error("Something went wrong!"));
  };

  const handleDeleteUser = async (idu: string) => {
    Swal.fire({
      title: "Are you sure",
      text: "Are you ready remove this user",
      showCancelButton: true,
    }).then(async (rs) => {
      if (rs.isConfirmed) {
        await apiDeleteUser(idu)
          .then((rs: AxiosResponse) => {
            if (rs.status >= 400 && rs.status <= 599)
              toast.error("Something went wrong!");
            else {
              render();
              toast.success(`delete user ${idu} success`);
            }
          })
          .catch((err: AxiosError) => toast.error("Something went wrong!"));
      }
    });
  };

  useEffect(() => {
    fetchDataUser();
  }, [update]);

  return (
    <div className="p-4 flex flex-col gap-y-20 w-full h-full">
      <h1 className="text-4xl font-bold">Manage User</h1>
      <table className="table-auto w-full border rounded-2xl">
        <thead className="bg-[#364152] text-white">
          <tr>
            {FieldsTableAdmin.map((el) => (
              <th
                key={el.id}
                className={`text-3xl font-bold p-4 border ${
                  el.style ? el.style : "text-start"
                }`}
              >
                {el.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-xl">
          {users !== null &&
            users.map((el) => (
              <tr key={el._id} className="">
                <td className="text-start text-mainSize border-r border-b p-4">
                  {el._id}
                </td>
                <td className="text-start text-mainSize border-r border-b p-4">
                  {el.email}
                </td>
                <td className="text-start text-mainSize border-r border-b p-4">
                  {el.fullname}
                </td>
                <td className="text-start text-mainSize border-r border-b p-4">
                  {el.dateOfBirth
                    ? moment(el.dateOfBirth).format("DD/MM/YYYY")
                    : "null"}
                </td>
                <td className="text-start text-mainSize border-r border-b p-4">
                  {el.phoneNumber}
                </td>
                <td className="text-start text-mainSize border-r border-b p-4">
                  {el.sex}
                </td>
                <td className="text-start text-mainSize border-r border-b p-4">
                  {moment(el.createdAt).format("DD/MM/YYYY")}
                </td>
                <td className="text-start text-mainSize border-r border-b p-4">
                  {el.is_blocked === false ? "false" : "true"}
                </td>
                <td className="text-start text-mainSize border-r border-b p-4">
                  {el.role === process.env.NEXT_PUBLIC_ADMIN ? "Admin" : "User"}
                </td>
                <td className="flex gap-x-6 text-start text-mainSize border-r border-b p-4 justify-center">
                  <div
                    className="bg-red-600 text-white p-4 cursor-pointer"
                    onClick={() => handleDeleteUser(el._id)}
                  >
                    Delete
                  </div>
                  <div className="bg-yellow-500 text-white p-4">Change</div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
