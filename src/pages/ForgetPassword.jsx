import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";
import ErrorMessage from "../ui/ErrorMessage";
const auth = getAuth(app);

const ForgetPassword = () => {
  const { authError } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="py-5">
      <div className="w-full sm:max-w-md mx-auto border sm:py-20 p-2 sm:p-5">
        <h1 className="text-3xl text-gray-600 uppercase text-center mb-4">Forget Password</h1>
        <div className="">
          <div className="">
            {/* error message */}
            {authError && <ErrorMessage error={authError} />}

            {/* form */}
            <ForgetPasswordForm />

            {/* go back */}
            <div className="">
              <small onClick={() => navigate(-1)} className="text-blue-700 cursor-pointer">
                Go back
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

// ========= forget password form component =========
const ForgetPasswordForm = () => {
  const { setAuthError } = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;

    // password reset email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your mail!!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      });
    form.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="space-y-3 w-full sm:max-w-md mx-auto">
        <div className="w-full">
          <input
            className="border border-primary rounded p-3 w-full focus:outline-none focus:ring-2 ring-primary"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="text-right">
          <button className="btn btn-primary rounded w-full" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
