


import { useState } from "react";
import "../../css/Autoleveller.css";
import Slider from "react-slick";

const  Cmpltrecyle = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
  };

  const [checked, setChecked] = useState("superd1");
  return (
    <div>
      {/* product banner */}
      <section>
        <div className="banner_sec_bx">
          <h5 className="main_text">Our Products</h5>
        </div>
      </section>
      {/* product slider and details */}
      <section className="container product__section mt-5 mb-5">
        <div className="mb-5 ">
          <div className="container">
            <div className="row product__head  align-items-center">
              <div className="product__head__div1 col-md-6">
                <div>
                  <Slider {...settings}>
                    <div>
                      <a
                        href="../assets/super-machine-D1-catalogue.pdf"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src="../images/manufacture/process_os480.webp"
                          alt="spares"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href="../assets/super-machine-D1-catalogue.pdf"
                        target="_blank"
                      >
                        <img
                          className="img-fluid"
                          src="../images/manufacture/process_line.webp"

                          alt="spares"
                        />
                      </a>
                    </div>
                  </Slider>
                </div>
              </div>

              <div className="product__head__div2 col-md-6">
                <div className="">
                  <h2 className="main_text text_sec mb-4">
                    Complete Recycle Process Line
                  </h2>
                  <p className="para mb-4">
                    Auto-Leveller Draw frames have become an integral part of a
                    modern textile mill producing High Quality Yarns.
                  </p>
                  <p className="para mb-4">
                    To bring the Auto-Leveller Draw frame withing the reach of
                    all the textile mills, we at Super Machine Works (P) Ltd
                    have developed an Auto-Leveller Draw frame at par with
                    international standards and operating performance.
                  </p>
                  <p className="para mb-4">
                    The Auto-Leveller System is built around latest High
                    Technology Data Acquisition System, Hi-Tech Sensors, Highly
                    accurate AC Servo Motors and High Speed Industrial Plcs.
                  </p>
                  <a
                    href="../assets/super-machine-D1-catalogue.pdf"
                    target="_blank"
                  >
                    <button className="btns">Download Product Sheet</button>
                  </a>
                  <br />
                  <br />
                  <a href="" className="video_link">
                    To see our videos – Click here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* product specfication */}
      <section className="container product__spec__section mt-5 mb-5">
        {/* <div className="slide-controls container">
          <input
            type="radio"
            name="slide"
            id="login"
            onClick={() => setChecked("superd1")}
            checked={checked === "superd1" ? true : false}
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            onClick={() => setChecked("superd2")}
            checked={checked === "superd2" ? true : false}
          />
          <label for="login" className="slide login">
            Super-D1
          </label>
          <label for="signup" className="slide signup">
            Super-D2
          </label>
          <div className="slider-tab"></div>
        </div> */}

        <h2 className="text-center mt-4 mb-4">Specification</h2>
        <div className="product__specs__head">
          <div className="product__specs_head_div1">
            <table class="table table-bordered table-striped">
              <thead className="table-head">
                <th colspan="2" class="table-head">
                  Technical Data
                </th>
              </thead>
              <tbody>
                <tr>
                  <td className="col-6">No of Delivery / Machine</td>
                  <td className="col-6">1</td>
                </tr>
                <tr>
                  <td className="col-6">Maximum Delivery Speed(Mechnical)</td>
                  <td className="col-6">upto 1000 Mts/min</td>
                </tr>
                <tr>
                  <td className="col-6">Draft Range From</td>
                  <td className="col-6">4.5 to 10</td>
                </tr>
                <tr>
                  <td className="col-6">Range of Staple Length</td>
                  <td className="col-6">up to 0.3</td>
                </tr>
                <tr>
                  <td className="col-6">Drafting Arrangement</td>
                  <td className="col-6">4 over 3</td>
                </tr>
                <tr>
                  <td className="col-6">Can Dimensions at Delivery</td>
                  <td className="col-6">
                    Dia 12 ” to 24″ (300-600mm) Height 36″ to 45″ (910-1150mm)
                  </td>
                </tr>
                <tr>
                  <td className="col-6">Package Counter Weight System</td>
                  <td className="col-6">Manual Spring Type</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="product__specs_head_div2">
            <div className="product__specs_head_div2_child1">
              <table class="table table-bordered table-striped">
                <thead className="table-head">
                  <th colspan="2" class="table-head">
                    Production Data
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td className="col-6">
                      Production @ 90% Efficiency in Ring Spinning Counts at
                      0.10 Sliver Hank
                    </td>
                    <td className="col-6">
                      600RPM = 4580 kg/day <br />
                      650 RPM = 4400 kg/day
                    </td>
                  </tr>
                  <tr>
                    <td className="col-6">
                      Production @ 80% Efficiency in Open End Counts at 0.10
                      Sliver Hank
                    </td>
                    <td className="col-6">
                      550 RPM = 3730 kg/day
                      <br /> 650 RPM = 4400 kg/day
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="product__specs_head_div2_child2">
              <table class="table table-bordered table-striped">
                <thead className="table-head">
                  <th colspan="2" class="table-head">
                    Power Installation Data
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td className="col-6">
                      Normal Rating of Main Drivers Motors
                      <br /> a) Main Motor
                      <br /> b) Servo Motor
                    </td>
                    <td className="col-6">
                      <br />
                      5.5 K.W
                      <br />
                      3.0 K.W
                    </td>
                  </tr>
                  <tr>
                    <td className="col-6">
                      Normal Rating of Auxiliary Motors <br /> a) Suction Motor
                      <br /> b) Can Change Motor
                    </td>
                    <td className="col-6">
                      <br />
                      1.5 K.W
                      <br />
                      0.37 K.W
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* product layout */}
      <section className="product__layout__section">
        <h2 className="text-center">Layout</h2>
        <div className="product__layout">
          <img
            className="img-fluid"
            src="../images/products/sc1_layout.webp"
          />
        </div>
      </section>
    </div>
  );
};

export default Cmpltrecyle;
