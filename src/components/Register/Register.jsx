import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import SocialLogin from "../common/SocialLogin/SocialLogin";

const Register = () => {
  const { name } = useContext(AuthContext);
  console.log(name);
  return (
    <div>
      register
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
