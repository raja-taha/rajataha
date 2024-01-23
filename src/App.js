import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return ratio < 2.11 ? (
    <Router>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path={"/"} element={<Home ratio={ratio} />} />
        <Route path={"/work"} element={<Work />} />
        <Route path={"/timeline"} element={<Timeline />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/testimonial"} element={<Testimonial />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  ) : (
    <em id="customMessage">Please Change the ratio to View!</em>
  );
}

export default App;
