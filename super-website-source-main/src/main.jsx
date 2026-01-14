import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/common.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./components/Common/Loading";
import Gotop from "./components/Common/Gotop";

import Bubbles from "./components/Common/Bubbles";
import Home from "./components/Home";


import About from "./components/About";
import Career from "./components/Career/Career";
import Contact from "./components/Contact";
import Stw from "./components/Stw";
import Shei from "./components/Shei";
import Header from "./components/Common/Header";
import Privacyandpolicy from "./components/Common/PrivacyPolicy";
import TermsAndConditions from "./components/Common/TermsAndConditions";
import Footer from "./components/Common/Footer";
import PageNotFound from "./components/Common/404";
import AutoLeveller from "./components/Product/AutoLeveller";
import NonAutoLeveller from "./components/Product/NonAutoLeveller";
import OpenEndRotor from "./components/Product/OpenEndRotor";
import SuperCardsc1 from "./components/Product/SuperCardsc1";
import Triplelickerin from "./components/Product/Triplelickerin";
import Superprima1 from "./components/Product/Superprima1";
import Card from "./components/Product/Carding";
import Drawframe from "./components/Product/Drawframe";
import OE from "./components/Product/OE";
import D1 from "./components/Product/D1";
import Superprima2 from "./components/Product/Superprima2";
import D2plus from "./components/Product/D2plus";
import Rs1 from "./components/Product/Rs1";
import Rs2 from "./components/Product/Rs2";
import D2 from "./components/Product/D2";
import Cmpltrecyle from "./components/Product/Cmpltrecyle";
import Event1 from "./components/NewsandEvents/Event1";
import Foundersday from "./components/NewsandEvents/Foundersday";
import Eventpagetemplate from "./components/NewsandEvents/Eventpagetemplate";
import Event2 from "./components/NewsandEvents/Event2";
import Event3 from "./components/NewsandEvents/Event3";
import Event4 from "./components/NewsandEvents/Event4";
import Event5 from "./components/NewsandEvents/Event5";
import Event6 from "./components/NewsandEvents/Event6";

// import Blogs from "./components/Blogs";

const App = () => {
  useEffect(() => {
    AOS.init();
  });

  const spares = useRef(null);

  return (
    <BrowserRouter>
      <Loading />
      <Header spares={spares} />
      <Gotop />
      <Bubbles />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* <Route path="/blogs" element={<Blogs />} /> */}

        <Route path="/Super-textile-works" element={<Stw spares={spares} />} />
        <Route path="/Sudharshan-heavy-engineering" element={<Shei />} />

        <Route path="/products/auto-leveller-draw-frame" element={<AutoLeveller />} />
        <Route path="/products/braker-non-auto-leveller-draw-frame" element={<NonAutoLeveller />} />
        <Route path="/products/open-end-rotor-spinning-machine" element={<OpenEndRotor />} />
        <Route path="/products/supercard-sc1" element={<SuperCardsc1 />} />

        <Route path="/products/Card" element={<Card />} />
        <Route path="/products/Drawframe" element={<Drawframe />} />
        <Route path="/products/OE" element={<OE />} />

        <Route path="/NewsandEvents/Eventpagetemplate" element={<Eventpagetemplate />} />
        <Route path="/NewsandEvents/Event1" element={<Event1 />} />
        <Route path="/NewsandEvents/Foundersday" element={<Foundersday/>} />
        <Route path="/NewsandEvents/Event2" element={<Event2 />} />
        <Route path="/NewsandEvents/Event3" element={<Event3 />} />
        <Route path="/NewsandEvents/Event4" element={<Event4 />} />
        <Route path="/NewsandEvents/Event5" element={<Event5 />} />
        <Route path="/NewsandEvents/Event6" element={<Event6 />} />

        {/* ✅ REMOVED (wrong): <Route path="./components/Common/Gotop" element={<Gotop/>} /> */}

        <Route path="/products/Triplelickerin" element={<Triplelickerin />} />
        <Route path="/products/super-prima1" element={<Superprima1 />} />
        <Route path="/products/super-d1" element={<D1 />} />
        <Route path="/products/super-d2" element={<D2 />} />
        <Route path="/products/super-prima2" element={<Superprima2 />} />
        <Route path="/products/super-d2-plus" element={<D2plus />} />
        <Route path="/products/super-rs1" element={<Rs1 />} />
        <Route path="/products/super-rs2" element={<Rs2 />} />
        <Route path="/products/complete-recycle-process-line" element={<Cmpltrecyle />} />
          <Route path="/privacy-policy" element={<Privacyandpolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />

        

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
