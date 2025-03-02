import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="printnexus/home" element={<Home />} />
        <Route path="printnexus/collection" element={<Collections />} />
        <Route path="printnexus/about" element={<About />} />
        <Route path="printnexus/contact" element={<Contact />} />
        <Route path="printnexus/product/:id" element={<Product />} />

        <Route path="*" element={<Navigate to={"printnexus/home"} />} />
        <Route path="/" element={<Navigate to={"printnexus/home"} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
