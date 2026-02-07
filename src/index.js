import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import AppLayout from "./components/AppLayout";
import App from "./components/App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
