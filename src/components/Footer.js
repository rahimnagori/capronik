import logo from "../img/logo.png";
import "./App.css";
import {
  PROJECT_NAME,
  PROJECT_CONTACT,
  PROJECT_EMAIL,
  PROJECT_WORKING_HOURS,
  SOCIAL_MEDIA_LINKS,
} from "../utils/constants";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_link">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={logo} alt="" />
              <p>
                For over 50 years Jennifer Furniture now owned by Jennifer Opco
                has been committed to offering consumers a wide-range of
                comfortable, stylish, quality merchandise at incredible values
                for every room in your home!
              </p>
            </div>
            <div className="col-md-3">
              <h4>Quick Links</h4>
              <ul className="ul_set">
                <li>
                  <a href="/">Home </a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Shop Now </a>
                </li>
                <li>
                  <a href="/">Contact Us </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Know Link</h4>
              <ul className="ul_set">
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Term & Conditions</a>
                </li>
                <li>
                  <a href="/">Return Exchange Policy</a>
                </li>
                <li>
                  <a href="/">Delivery</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Get In Touch</h4>
              <h5>Web Support / Websales</h5>
              <ul className="ul_set">
                <li>
                  <a href="/">
                    <i className="fa-solid fa-phone"></i> {PROJECT_CONTACT}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-regular fa-clock"></i>{" "}
                    {PROJECT_WORKING_HOURS}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-regular fa-envelope"></i>
                    {PROJECT_EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copy_1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>© 2025 {PROJECT_NAME}. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <ul className="ul_set">
                {SOCIAL_MEDIA_LINKS.map((item) => {
                  return (
                    <li>
                      <a href={item.url}>
                        <i className={item.class}></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
