import {createBrowserRouter} from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import RequestLayout from "./layout/RequestLayout";
import BookDemoPage from "./page/BookDemoPage";
import ErrorPage from "./page/ErrorPage";
import Home from "./page/Home";
import RequestForm from "./page/RequestForm";
import SuccessPage from "./page/SuccessPage";
import WarningPage from "./page/WarningPage";


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
      path: "/",
      element: <RequestLayout />,
      children: [
        {
          path: "request-form",
          element: <RequestForm />
        },
        {
          path: "success-page",
          element: <SuccessPage />
        },
        {
          path: "error-page",
          element: <ErrorPage />
        },
        {
          path: "warning",
          element: <WarningPage />
        },
        {
          path: "/book-demo",
          element: <BookDemoPage />
        }
      ]
    },
  ]);

export default router;