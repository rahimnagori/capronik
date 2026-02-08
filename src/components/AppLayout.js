import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
