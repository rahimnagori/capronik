import img_7 from "../img/img_7.jpg";
import img_15 from "../img/img_15.jpg";
import img_16 from "../img/img_16.jpg";
import img_17 from "../img/img_17.jpg";
import img_19 from "../img/img_19.png";
import img_20 from "../img/img_20.png";
import img_21 from "../img/img_21.png";
import img_22 from "../img/img_22.png";
import img_23 from "../img/img_23.png";
import img_25 from "../img/img_25.jpg";
import img_26 from "../img/img_26.png";
import img_27 from "../img/img_27.png";
import img_28 from "../img/img_28.png";
import img_29 from "../img/img_29.png";
import img_30 from "../img/img_30.png";
// import cart_w from "../img/cart_w.svg";
import right from "../img/right.svg";
import user1 from "../img/user1.svg";
import date1 from "../img/date1.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { bestSelling, collections } from "../utils/products";

function App() {
  return (
    <div>
      <Header />
      <section className="banner_sec">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-6">
              <div className="heading">
                <h1>CAPRONIK JEANS Made Easy For Everyone</h1>
                <p>
                  Columbus Day Sale Alert! Up to 50% off on all furniture for a
                  limited time! Biggest doorbuster event featuring top brands!
                  Jennifer delivers nationwide with lowest price guaranteed!
                </p>
                <a href="/" className="btn btn_theme btn-lg btn_r">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img src={img_25} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="sec_pad sec_des1">
        <div className="container">
          <div className="heading text-center">
            <h1>Shop By Collections</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>
          <div className="row">
            {collections.map((item) => (
              <div className="col-md-2">
                <div className="box_1">
                  <img src={item.image} alt="" />
                  <h4>{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pad_b sec_des2">
        <div className="container">
          <div className="heading text-center">
            <h1>Best Selling Product</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>
          <div className="row">
            {bestSelling.map((item) => (
              <div className="col-md-3 mb_set1">
                <div className="box_2">
                  <img src={item.image} alt="" />
                  <div className="cont_card">
                    <div className="">
                      <h5>{item.name}</h5>
                      <h4>{item.price}</h4>
                    </div>
                    {/* <a href="/" className="add_cart btn btn_theme">
                      <img src={cart_w} alt="" />
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pad_b sec_des3">
        <div className="container">
          {/* <div className="heading text-center">
        <h1>Best Selling Product</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
has been the industry's standard dummy
        </p>
      </div> */}
          <div className="row">
            <div className="col-md-7">
              <div className="box_3">
                <img src={img_15} alt="" />
                <div className="cont_card">
                  <div className="">
                    <h4>Premium Denim Fabric</h4>
                    <p>When You Add To Cart Today!</p>
                  </div>
                  <a href="/" className="btn btn_theme btn_r btn-lg">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="box_3">
                <img src={img_16} alt="" />
                <div className="cont_card">
                  <div className="">
                    <h4>Man T-shirt</h4>
                  </div>
                  <a href="/" className="btn btn_theme btn_r">
                    <img src={right} alt="" />
                  </a>
                </div>
              </div>
              <div className="box_3">
                <img src={img_17} alt="" />
                <div className="cont_card">
                  <div className="">
                    <h4>Woman T-shirt</h4>
                  </div>
                  <a href="/" className="btn btn_theme btn_r">
                    <img src={right} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec_pad sec_des4">
        <div className="container">
          <div className="heading text-center">
            <h1>Modern Finishing</h1>
            <p>
              Clean, minimal design that never goes out of trend Clean, minimal
              design that never goes out of trend
            </p>
            <a href="/" className="btn btn_theme btn_r btn-lg">
              Shop Now
            </a>
          </div>
        </div>
      </section>

      <section className="sec_pad sec_des5">
        <div className="container">
          <div className="heading text-center">
            <h1>Famous Designer Brands</h1>
          </div>
          <ul className="ul_set">
            <li>
              <div className="box_4">
                <img src={img_19} alt="" />
              </div>
            </li>
            <li>
              <div className="box_4">
                <img src={img_20} alt="" />
              </div>
            </li>
            <li>
              <div className="box_4">
                <img src={img_21} alt="" />
              </div>
            </li>
            <li>
              <div className="box_4">
                <img src={img_22} alt="" />
              </div>
            </li>
            <li>
              <div className="box_4">
                <img src={img_23} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="sec_pad sec_des6">
        <div className="container">
          <div className="heading text-center">
            <h1>What Our Customers Say</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card_1 card_pad">
                <img src={img_27} alt="" />
                <p>
                  I've had a great experience with Jennifer Furniture. The
                  delivery team was polite and efficient, and my new furniture
                  looks great in my home.
                </p>
                <div className="user_p1 d-flex align-items-center mt-3">
                  <img src={img_26} alt="" />
                  <div className="">
                    <h4>Bob Schrover</h4>
                    <p>President, Werfpop</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card_1 card_pad">
                <img src={img_27} alt="" />
                <p>
                  I've had a great experience with Jennifer Furniture. The
                  delivery team was polite and efficient, and my new furniture
                  looks great in my home.
                </p>
                <div className="user_p1 d-flex align-items-center mt-3">
                  <img src={img_26} alt="" />
                  <div className="">
                    <h4>Bob Schrover</h4>
                    <p>President, Werfpop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec_pad sec_des7">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card_1 card_pad box_5">
                <div className="img_us1">
                  <img src={img_28} alt="" />
                </div>
                <h4>Track Order</h4>
                <p>
                  I've had a great experience with Jennifer Furniture. The
                  delivery team was polite and efficient, and my new furniture
                  looks great in my home.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card_1 card_pad box_5">
                <div className="img_us1">
                  <img src={img_29} alt="" />
                </div>
                <h4>Fast Delivery</h4>
                <p>
                  I've had a great experience with Jennifer Furniture. The
                  delivery team was polite and efficient, and my new furniture
                  looks great in my home.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card_1 card_pad box_5">
                <div className="img_us1">
                  <img src={img_30} alt="" />
                </div>
                <h4>Best Price</h4>
                <p>
                  I've had a great experience with Jennifer Furniture. The
                  delivery team was polite and efficient, and my new furniture
                  looks great in my home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pad_b sec_des8">
        <div className="container">
          <div className="heading text-center">
            <h1>Our Latest Posts</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>
          <div className="row">
            {[1, 2, 3].map(() => (
              <div className="col-md-4 mb_set1">
                <div className="card_2 card_pad box_6">
                  <div className="img2">
                    <img src={img_7} alt="" />
                  </div>
                  <div className="cont_card">
                    <ul className="ul_set">
                      <li>
                        <img src={user1} alt="" /> Admin
                      </li>
                      <li>
                        <img src={date1} alt="" /> 8 Fub 2022
                      </li>
                    </ul>
                    <h4>
                      The standard Lorem Ipsum passage, used since the 1500s
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
