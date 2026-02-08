import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AppLayout from "./components/AppLayout";
import App from "./components/App";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import { Routes } from "./utils/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: Routes.Home,
    element: <AppLayout />,
    children: [
      {
        path: Routes.Home,
        element: <App />,
      },
      {
        path: Routes.About,
        element: <About />,
      },
      {
        path: Routes.Contact,
        element: <Contact />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
