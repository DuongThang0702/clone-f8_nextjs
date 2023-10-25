import React, { FC, memo } from "react";
import { UseFormRegister } from "react-hook-form";

interface InputForm {
  label?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  fullW?: boolean;
  id: string;
  errors?: string;
  validate?: object;
  style?: string;
  defaultValue?: string | number;
  styleLabel?: string;
  register: UseFormRegister<any>;
}

const inputForm: FC<InputForm> = ({
  label,
  placeholder,
  disabled,
  type = "text",
  fullW,
  id,
  validate,
  defaultValue,
  errors,
  style,
  styleLabel,
  register,
}) => {
  return (
    <>
      {(type === "text" || type === "password" || type === "number") && (
        <>
          <input
            type={type}
            placeholder={placeholder}
            className={`${
              style
                ? style
                : "p-4 outline-1 border-2 border-gray-500 mt-4 text-[1.6rem]"
            } ${fullW ? "w-full" : ""} `}
            disabled={disabled}
            id={id}
            {...register(id, validate)}
            defaultValue={defaultValue}
          />
          {errors && (
            <span className="text-red-700 font-semibold text-base">
              {errors}
            </span>
          )}
        </>
      )}

      {type === "textarea" && (
        <textarea
          rows={5}
          cols={2}
          placeholder={placeholder}
          className={`${style ? style : ""} ${fullW ? "w-full" : ""}`}
          id={id}
          {...register(id, validate)}
          defaultValue={defaultValue}
        ></textarea>
      )}
    </>
  );
};

export default memo(inputForm);
