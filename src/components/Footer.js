import { Link } from "react-router-dom";
import { logo } from "../utils/images";
import {
  PROJECT_NAME,
  PROJECT_CONTACT,
  PROJECT_EMAIL,
  PROJECT_WORKING_HOURS,
  SOCIAL_MEDIA_LINKS,
} from "../utils/constants";
import { Routes, RoutesConfig } from "../utils/routes";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_link">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={logo} alt="" />
              <p>Proudly crafted in the heart of Indore</p>
            </div>
            <div className="col-md-3">
              <h4>Quick Links</h4>
              <ul className="ul_set">
                {RoutesConfig.map((route) => {
                  return (
                    <li>
                      <Link to={route.path}>{route.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Know Link</h4>
              <ul className="ul_set">
                <li>
                  <Link to={Routes.Privacy}>Privacy Policy</Link>
                </li>
                {/* <li>
                  <a href="/">Term & Conditions</a>
                </li>
                <li>
                  <a href="/">Return Exchange Policy</a>
                </li>
                <li>
                  <a href="/">Delivery</a>
                </li> */}
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Get In Touch</h4>
              <h5>Sales & Support</h5>
              <ul className="ul_set">
                <li>
                  <a href="/">
                    <i className="fa-solid fa-phone"></i> {PROJECT_CONTACT}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-regular fa-clock"></i>
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
              <p>Powered by PixelPerfect.</p>
              {/* color being used #0e0f38 & #ed1c24 */}
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
