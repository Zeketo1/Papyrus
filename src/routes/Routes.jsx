import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NavBar from "../common/NavBar";
import NotFound from "../pages/NotFound";
import Footer from "../common/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shop from "../pages/Shop";
import PrivateRoutes from "./PrivateRoutes";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import About from "../pages/About";

const PageRoutes = () => (
  <BrowserRouter>
    <NavBar />
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Shop />} />
      <Route path="/shop/:id" element={<PrivateRoutes />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default PageRoutes;
