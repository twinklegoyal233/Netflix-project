import React from "react";
import { BG_LOGO } from "../utils/constant";
import Header from "./Header";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div >
        <Header/>
      <div>
        <img className="w-screen h-screen  " alt="" src={BG_LOGO} />
      </div>
        <LoginForm/>
    </div>
  );
};

export default Login;
