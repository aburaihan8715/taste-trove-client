import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  // create or register user using email and password
  const createUserUsingEmailAndPassword = (email, password) => {
    setAuthLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login using email and password
  const authenticateUsingEmailAndPassword = (email, password) => {
    setAuthLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login using google
  const authenticationUsingGoogle = () => {
    setAuthLoading(false);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // login using github
  const authenticationUsingGithub = () => {
    setAuthLoading(false);
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };

  // log out
  const logOut = () => {
    setAuthLoading(false);
    return signOut(auth);
  };

  // set observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setAuthLoading(false);
        setAuthError("");
        // console.log(user);
      } else {
        setAuthLoading(false);
        setUser(null);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    authenticationUsingGoogle,
    authenticationUsingGithub,
    logOut,
    user,
    setUser,
    authError,
    setAuthError,
    authLoading,
    setAuthLoading,
    createUserUsingEmailAndPassword,
    authenticateUsingEmailAndPassword,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
