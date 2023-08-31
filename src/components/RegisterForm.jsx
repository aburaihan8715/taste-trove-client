import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { createUserUsingEmailAndPassword, setAuthError, authLoading, setAuthLoading } = useContext(AuthContext);

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // password validation
    if (!/(?=.*?[A-Z])/.test(password)) {
      setAuthError("Password should be at least one upper case");
      return;
    } else if (!/(?=.*?[a-z])/.test(password.trim())) {
      setAuthError("Password should be at least one lower case English letter");
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password.trim())) {
      setAuthError("Password should be at least one special character");
      return;
    } else if (!/.{6,}/.test(password.trim())) {
      setAuthError("Password should be at least 6 character");
      return;
    }
    // simple email validation
    if (!email.trim().includes("@")) {
      setAuthError("Email should have @ character!");
      return;
    } else if (!email.trim().includes(".com")) {
      setAuthError("Email should have .com character!");
      return;
    }
    form.reset();

    // create user using email and password
    createUserUsingEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        alert(`Registration success with email : ${user?.email}`);
        navigate("/");
      })
      .catch((error) => {
        setAuthLoading(false);
        setAuthError(error.message);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="space-y-3 max-w-md mx-auto">
        <div className="">
          <input
            className="border border-primary rounded p-3 w-full focus:outline-none focus:ring-2 ring-primary"
            type="text"
            name="name"
            placeholder="Enter name"
            required
          />
        </div>
        <div className="">
          <input
            className="border border-primary rounded p-3 w-full focus:outline-none focus:ring-2 ring-primary"
            type="url"
            name="photoURL"
            placeholder="Enter image url"
            required
          />
        </div>
        <div className="">
          <input
            className="border border-primary rounded p-3 w-full focus:outline-none focus:ring-2 ring-primary"
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="relative">
          <input
            className="border border-primary rounded p-3 w-full focus:outline-none focus:ring-2 ring-primary"
            type={showPassword ? "text" : "password"}
            name="password"
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
            {authLoading ? "Loading.." : "Register"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
