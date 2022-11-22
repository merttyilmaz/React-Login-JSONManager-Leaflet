import React from "react";
import { useForm } from "react-hook-form";

import Logo from "@/assets/images/logo.svg";
import Input from "./Input";

export type FormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div className="bg-black text-white flex flex-col gap-6 pt-28 w-full xl:w-1/4 h-screen">
      <div className="flex flex-col items-center">
        <img src={Logo} alt="Logo" className="w-28 h-28" />
        <h3 className="uppercase text-lg">Smart transportation skills</h3>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-1/2 xl:w-2/3 mx-auto"
      >
        <Input
          id="username"
          label="Username"
          type="text"
          placeholder="E.g: admin"
          register={register}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="E.g: admin"
          register={register}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
