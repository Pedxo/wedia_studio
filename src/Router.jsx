import {createBrowserRouter} from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import RequestLayout from "./layout/RequestLayout";
import Home from "./page/Home";
import RequestForm from "./page/RequestForm";


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
    {
      path: "/request-form",
      element: <RequestLayout />,
      children: [
        {
          index: true,
          element: <RequestForm />
        }
      ]
    },
  ]);

export default router;