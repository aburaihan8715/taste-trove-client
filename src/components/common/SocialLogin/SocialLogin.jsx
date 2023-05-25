import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const SocialLogin = () => {
  const { authenticationUsingGoogle, authenticationUsingGithub } = useContext(AuthContext);

  const googleAuthenticationHandler = () => {
    authenticationUsingGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("User created successfully!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const githubAuthenticationHandler = () => {
    authenticationUsingGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("User created successfully!");
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
        <div className="w-48">
          <button onClick={googleAuthenticationHandler} className="btn btn-primary w-full flex justify-between px-10">
            <span>
              <img src="https://i.ibb.co/72bXZqD/google.png" width="24px" height="24px" alt="google" />
            </span>
            <span>google</span>
          </button>
        </div>
      </div>

      {/* github login */}
      <div className="text-center mt-4  flex justify-center">
        <div className="w-48">
          <button onClick={githubAuthenticationHandler} className="btn btn-primary w-full flex justify-between px-10">
            <span>
              <img src="https://i.ibb.co/JHJ7PMt/github.png" width="24px" height="24px" alt="google" />
            </span>
            <span>github</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
