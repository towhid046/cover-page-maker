import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "./../pages/HomePage/HomePage";
import SinglePage from "./../pages/SinglePage/SinglePage";
import GroupPage from "./../pages/GroupPage/GroupPage";
import TutorialsPage from "./../pages/TutorialsPage/TutorialsPage";
import LoginPage from "./../pages/LoginPage/LoginPage";
import RegistrationPage from "./../pages/RegistrationPage/RegistrationPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/single",
        element: <SinglePage />,
      },
      {
        path: "/group",
        element: <GroupPage />,
      },
      {
        path: "/tutorials",
        element: <TutorialsPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
]);

export default routes;
