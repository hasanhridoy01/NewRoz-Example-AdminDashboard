import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Dashboard from "../Pages/Dashboard/Dashboard";

//Create New Routes...............!
export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);
