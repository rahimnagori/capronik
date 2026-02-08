const Routes = {
  Home: "/",
  About: "/about",
  Products: "/products",
  Contact: "/contact",
  Privacy: "/privacy",
  Blogs: "/blogs/",
  BlogDetails: "/blogs/:id",
};

const RoutesConfig = [
  {
    name: "Home",
    path: Routes.Home,
  },
  {
    name: "About",
    path: Routes.About,
  },
  {
    name: "Blogs",
    path: Routes.Blogs,
  },
  {
    name: "Products",
    path: Routes.Products,
    isHidden: true,
  },
  {
    name: "Contact Us",
    path: Routes.Contact,
  },
];

export { Routes, RoutesConfig };
