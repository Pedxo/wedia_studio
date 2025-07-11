import {createBrowserRouter} from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./page/Home";


const router = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

export default router;