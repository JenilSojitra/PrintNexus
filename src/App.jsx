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
        <Route path="PrintNexus/home" element={<Home />} />
        <Route path="PrintNexus/collection" element={<Collections />} />
        <Route path="PrintNexus/about" element={<About />} />
        <Route path="PrintNexus/contact" element={<Contact />} />
        <Route path="PrintNexus/product/:id" element={<Product />} />

        <Route path="*" element={<Navigate to={"PrintNexus/home"} />} />
        <Route path="/" element={<Navigate to={"PrintNexus/home"} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
