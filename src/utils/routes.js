const Routes = {
  Home: "/",
  About: "/about",
  Products: "/products",
  Contact: "/contact",
  Privacy: "/privacy",
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
