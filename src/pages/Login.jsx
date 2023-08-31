import SocialLogin from "../ui/SocialLogin";
import { Link } from "react-router-dom";
import ErrorMessage from "../ui/ErrorMessage";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const { authError } = useContext(AuthContext);
  return (
    <div className="py-3">
      <div className="w-full sm:max-w-md mx-auto border p-2 sm:p-10">
        <h1 className="text-4xl text-gray-700 uppercase text-center mb-4">Login</h1>
        <div className="text-center mb-2">
          <small>
            <span>New user? </span>
            <Link className="text-blue-600" to="/register">
              Register
            </Link>
            <span> here.</span>
          </small>
        </div>

        {/* error message */}
        {authError && <ErrorMessage error={authError} />}

        {/* login form */}
        <LoginForm />

        <div className="divider">OR</div>

        {/* social login */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
