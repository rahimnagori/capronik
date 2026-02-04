import logo from "../img/logo.png";
import cart from "../img/cart.svg";
import user from "../img/user.svg";
import search from "../img/search.svg";
import "./App.css";

function Header() {
  return (
    <div className="main_header">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" />
          </a>

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
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/services">
                  T-Shirt
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Jeans
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <img src={search} alt="" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link cart_cont" href="/">
                  <img src={cart} alt="" />
                  <span className="cart_number">2</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <img src={user} alt="image-logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
