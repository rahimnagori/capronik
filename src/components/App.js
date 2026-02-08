import {
  img_7,
  img_15,
  img_16,
  img_17,
  img_19,
  img_20,
  img_21,
  img_22,
  img_23,
  img_25,
  img_26,
  img_27,
  img_28,
  img_29,
  img_30,
  right,
  user1,
  date1,
} from "../utils/images";
import { bestSelling, collections } from "../utils/products";
import { ratings } from "../utils/ratings";
import { posts } from "../utils/posts";
import "./App.css";

function App() {
  return (
    <div>
      <section className="banner_sec">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-6">
              <div className="heading">
                <h1>CAPRONIK JEANS Made Easy For Everyone</h1>
                <p>
                  Premium Denim Jeans Tailored in Indore. Experience the perfect
                  blend of style, durability, and fit—made for the modern Indian
                  lifestyle.
                </p>
                {/* <a href="/" className="btn btn_theme btn-lg btn_r">
                  Shop Now
                </a> */}
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
            <p>Find Your Fit, Define Your Style</p>
          </div>
          <div className="row">
            {collections.map((item) => (
              <div className="col-md-2" key={item.name}>
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
            <p>Our Most Loved Denim.</p>
            <p>
              Join thousands of customers who trust Capronik for durability,
              fit, and style.
            </p>
          </div>
          <div className="row">
            {bestSelling.map((item) => (
              <div className="col-md-3 mb_set1" key={item.name}>
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
                  {/* <a href="/" className="btn btn_theme btn_r btn-lg">
                    Shop Now
                  </a> */}
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
            {/* <a href="/" className="btn btn_theme btn_r btn-lg">
              Shop Now
            </a> */}
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
            <p>Styled & Loved Across India</p>
          </div>
          <div className="row">
            {ratings.map((rating) => {
              return (
                <div className="col-md-6" key={rating.name}>
                  <div className="card_1 card_pad">
                    <img src={img_27} alt="" />
                    <p>{rating.description}</p>
                    <div className="user_p1 d-flex align-items-center mt-3">
                      <img src={img_26} alt="" />
                      <div className="">
                        <h4>{rating.name}</h4>
                        <p>{rating.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
            <p>From Our Studio Journal</p>
          </div>
          <div className="row">
            {posts.map((post) => (
              <div className="col-md-4 mb_set1" key={post.title}>
                <div className="card_2 card_pad box_6">
                  <div className="img2">
                    <img src={img_7} alt="" />
                  </div>
                  <div className="cont_card">
                    <ul className="ul_set">
                      <li>
                        <img src={user1} alt="" /> {post.user}
                      </li>
                      <li>
                        <img src={date1} alt="" />{" "}
                        {post.date.toLocaleDateString()}
                      </li>
                    </ul>
                    <h4>{post.title}</h4>
                    <p>{post.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
