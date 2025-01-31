import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
