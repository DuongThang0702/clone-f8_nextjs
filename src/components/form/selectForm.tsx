import React, { memo, FC } from "react";
import { UseFormRegister } from "react-hook-form";

interface SelectProps {
  id: string;
  errors?: string;
  fullW?: boolean;
  style?: string;
  validate?: object;
  defaultValue?: string | number;
  options?: Array<any>;
  register: UseFormRegister<any>;
}

const Select: FC<SelectProps> = ({
  id,
  fullW,
  style,
  errors,
  validate,
  options,
  defaultValue,
  register,
}) => {
  return (
    <>
      <select
        id={id}
        {...register(id, validate)}
        className={`${
          style ? style : "p-4 outline-1 border-2 border-gray-500 mt-4"
        } ${fullW ? "w-full" : ""}`}
        defaultValue={defaultValue}
      >
        <option value="">--CHOOSE--</option>
        {options?.map((el, index) => (
          <option value={el.value} key={index}>
            {el.text}
          </option>
        ))}
      </select>
      {errors && <small className="text-red font-semibold">{errors}</small>}
    </>
  );
};

export default memo(Select);
