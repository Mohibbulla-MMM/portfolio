import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Layout from "../Layout/Layout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default Router;
