import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import SocialLogin from "../ui/SocialLogin";

import { Link } from "react-router-dom";
import ErrorMessage from "../ui/ErrorMessage";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  const { authError } = useContext(AuthContext);

  return (
    <div className="py-2">
      <div className="w-full sm:max-w-md mx-auto border p-2 sm:p-10">
        <h1 className="text-4xl text-gray-700 text-center mb-4 uppercase">register</h1>
        <div className="text-center mb-2">
          <small>
            <span>Already user? </span>
            <Link className="text-blue-600" to="/login">
              Login
            </Link>
            <span> here.</span>
          </small>
        </div>

        {/* error message */}
        {authError && <ErrorMessage error={authError} />}

        {/* register form */}
        <RegisterForm />

        <p className="text-center text-xl text-primary mt-3">---------------or---------------</p>
        {/* social login */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
