import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BiSun } from "react-icons/bi";
import { BsMoonStarsFill } from "react-icons/bs";

import Logo from "@/assets/images/logo.svg";
import Input from "./Input";
import { useAuthStore } from "@/store/auth";
import { useThemeStore } from "@/store/theme";

const loginSchema = z
  .object({
    username: z
      .string()
      .min(5, { message: "Username must be atleast 5 characters" }),
    password: z
      .string()
      .min(5, { message: "Password must be atleast 5 characters" }),
  })
  .refine((data) => data.username === "admin", {
    path: ["username"], // path of error
    message: "Wrong username", // error message
  })
  .refine((data) => data.password === "admin", {
    path: ["password"], // path of error
    message: "Wrong password", // error message
  });

export type FormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const { setLogin } = useAuthStore();
  const { theme, changeTheme } = useThemeStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = () => {
    setLogin(true);
  };

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white flex flex-col gap-6 pt-28 w-full xl:w-1/4 h-screen">
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
          error={errors.username?.message}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="E.g: admin"
          register={register}
          error={errors.password?.message}
        />
        <div className="flex w-full items-center justify-between">
          {theme === "light" ? (
            <BsMoonStarsFill
              className="text-2xl cursor-pointer hover:text-slate-800"
              onClick={() => changeTheme("dark")}
            />
          ) : (
            <BiSun
              className="text-2xl cursor-pointer"
              onClick={() => changeTheme("light")}
            />
          )}
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-slate-800"
          >
            Login
          </button>
        </div>
      </form>
      <h3 className="text-yellow-500 text-2xl text-bold text-center mt-auto mb-8 uppercase">
        Intetra
      </h3>
    </div>
  );
};

export default LoginForm;
