import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { setUser, authenticationUsingGoogle, authenticationUsingGithub } = useContext(AuthContext);

  const navigate = useNavigate();

  const googleAuthenticationHandler = () => {
    authenticationUsingGoogle()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        alert("User created successfully!");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const githubAuthenticationHandler = () => {
    authenticationUsingGithub()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        alert("User created successfully!");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="container mx-auto">
      {/* google login */}
      <div className="text-center mt-4 flex justify-center">
        <div className="w-full">
          <button onClick={googleAuthenticationHandler} className="btn btn-primary btn-block rounded flex gap-5 px-10">
            <span>
              <img loading="lazy" src="https://i.ibb.co/72bXZqD/google.png" width="24px" height="24px" alt="google" />
            </span>
            <span>google</span>
          </button>
        </div>
      </div>

      {/* github login */}
      <div className="text-center mt-4  flex justify-center">
        <div className="w-full">
          <button onClick={githubAuthenticationHandler} className="btn btn-primary btn-block rounded flex gap-5 px-10">
            <span>
              <img loading="lazy" src="https://i.ibb.co/JHJ7PMt/github.png" width="24px" height="24px" alt="google" />
            </span>
            <span>github</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
