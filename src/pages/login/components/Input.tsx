import React from "react";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "./LoginForm";

type Props = {
  register: UseFormRegister<FormData>;
  id: string;
  label: string;
  type: string;
  placeholder: string;
};

const Input = (props: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-semibold" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className="border rounded-md outline-yellow-500 p-2 text-white bg-gray-900 focus:bg-black"
        {...props.register(props.id as keyof FormData)}
      />
    </div>
  );
};

export default Input;
