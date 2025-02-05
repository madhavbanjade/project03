import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Market from "./pages/Market.jsx";
import Product from "./pages/product/Product.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about-us" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="market" element={<Market />} />
      <Route path="product" element={<Product />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(<App />);
