import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { Routes, RoutesConfig } from "../utils/routes";
// import cart from "../img/cart.svg";
// import user from "../img/user.svg";
// import search from "../img/search.svg";

function Header() {
  return (
    <div className="main_header">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand" to={Routes.Home}>
            <img src={logo} alt="" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {RoutesConfig.map((route) => {
                return route.isHidden ? null : (
                  <li className="nav-item">
                    <Link className="nav-link" to={route.path}>
                      {route.name}
                    </Link>
                  </li>
                );
              })}

              {/* <li className="nav-item">
                <Link className="nav-link" to="/services">
                  T-Shirt
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/jeans">
                  Jeans
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/premium">
                  Premium Collection
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <div className="">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <img src={search} alt="" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link cart_cont" to="/cart">
                  <img src={cart} alt="" />
                  <span className="cart_number">2</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <img src={user} alt="image-logo" />
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Header;
