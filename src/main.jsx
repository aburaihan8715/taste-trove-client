// import { RouterProvider } from "react-router-dom";
// import router from "./router/routes.jsx";
// import AuthProvider from "./contexts/AuthProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./contexts/AuthProvider";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
