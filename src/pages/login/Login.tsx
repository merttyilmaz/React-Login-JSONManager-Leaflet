import React from "react";

import LoginForm from "./components/LoginForm";
import LoginBGImage from "@/assets/images/intersection.png";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="flex w-full">
      <LoginForm />
      <img
        src={LoginBGImage}
        alt="LoginBGImage"
        className="w-3/4 h-screen object-cover hidden xl:block"
      />
    </div>
  );
};

export default Login;
