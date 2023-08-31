import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { authenticateUsingEmailAndPassword, setAuthError, setAuthLoading, authLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // login user using email and password
    authenticateUsingEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        alert(`Login success with email : ${user?.email}`);
        navigate(from);
      })
      .catch((error) => {
        setAuthLoading(false);
        setAuthError(error.message);
        // console.log(error.message);
      });
    form.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="space-y-3 max-w-md mx-auto">
        <div className="">
          <input
            className="border border-primary rounded p-3 w-full focus:outline-none focus:ring-2 ring-primary"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="relative">
          <input
            className="border border-primary rounded p-3 w-full focus:outline-none focus:ring-2 ring-primary"
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter password"
            required
          />
          <span className="absolute right-8 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
            {!showPassword && <EyeSlashIcon className="h-6 w-6 text-gray-500" />}
            {showPassword && <EyeIcon className="h-6 w-6 text-gray-500" />}
          </span>
        </div>

        <div className="text-right">
          <button className="btn btn-primary w-full rounded text-gray-600" type="submit">
            {authLoading ? "Loading.." : "Login"}
          </button>
        </div>

        <div className="text-end">
          <small className="text-blue-700">
            <Link to="/forgetPassword">Forget Password?</Link>
          </small>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
