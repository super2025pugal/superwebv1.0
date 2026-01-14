import { useEffect } from "react";
import Banner from "./Home/banner";
import Manufacture from "./Home/Manufacture";
import Spares from "./Home/Spares";
import About from "./Home/About";
import Groups from "./Home/Groups";
import Form from "./Common/Form";
import Newsletter from "./Home/Newsletter";

const Home = () => {
  useEffect(() => {
    const y = sessionStorage.getItem("homeScrollY"); // [web:168]
    if (!y) return;

    // restore after render
    requestAnimationFrame(() => {
      window.scrollTo(0, parseInt(y, 10));
    });
  }, []);

  return (
    <>
      <Banner />
      <About />
      <Groups />

      <div className="container">
        <Form contact={true} />
      </div>
    </>
  );
};

export default Home;
