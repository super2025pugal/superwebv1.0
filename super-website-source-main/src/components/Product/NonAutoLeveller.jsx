import "../../css/Autoleveller.css";
import Slider from "react-slick";

const NonAutoLeveller = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
  };
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
            <div className="row product__head">
              <div className="product__head__div1 col-md-6">
                <div>
                  <Slider {...settings}>
                    <div>
                      <img
                        width="100%"
                        src="../images/products/nonauto1.webp"
                        alt="spares"
                      />
                    </div>
                    <div>
                      <img
                        width="100%"
                        src="../images/products/nonauto2.webp"
                        alt="spares"
                      />
                    </div>
                    <div>
                      <img
                        width="100%"
                        src="../images/products/nonauto3.webp"
                        alt="spares"
                      />
                    </div>
                    <div>
                      <img
                        width="100%"
                        src="../images/products/nonauto4.webp"
                        alt="spares"
                      />
                    </div>
                    <div>
                      <img
                        width="100%"
                        src="../images/products/nonauto5.webp"
                        alt="spares"
                      />
                    </div>
                  </Slider>
                </div>
              </div>

              <div className="product__head__div2 col-md-6">
                <div className="">
                  <h2 className="main_text text_sec mb-4">
                    Breaker Non-Auto Leveller
                  </h2>
                  <p className="para">
                    Main Drive Control through VFD inverter for improved
                    operational performance.
                  </p>
                  <p className="para">
                    Automatic sliver insertion to improve the material handling
                    resulting in better machine efficiency.
                  </p>
                  <p className="para">
                    Positive Drive for Creel.Easy access to all parts of a
                    machine and very much user-friendly.
                  </p>
                  <p className="para">
                    Automatic can change comes as a standard fitment in all
                    machines. (Except SDL1000).
                  </p>
                  <p className="para">
                    Cost-effective compared to imported machines. Can also
                    process very short fibers including comber noils and highly
                    suitable for both Open End Spinning & Ring Spinning Mills
                  </p>
                  <button className="btns">Download Product Sheet</button>
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
      <p className="main_text text-center">Specifications</p>
      <section className="container product__spec__section mt-5 mb-5">
        <div className="product__specs__head">
          <div>
            <table class="table table-bordered table-striped">
              <thead className="table-head">
                <th colspan="2" class="table-head">
                  Technical Data
                </th>
              </thead>
              <tbody>
                <tr>
                  <td className="col-6">No Of Delivery / Machine</td>
                  <td className="col-6">1</td>
                </tr>
                <tr>
                  <td className="col-6">Maximum Delivery Speed (Mechanical)</td>
                  <td className="col-6">Up to 1000 Mts/min</td>
                </tr>
                <tr>
                  <td className="col-6">Draft Range From</td>
                  <td className="col-6">5 to 10</td>
                </tr>
                <tr>
                  <td className="col-6">Range of Staple Length</td>
                  <td className="col-6">Up to 75 mm</td>
                </tr>
                <tr>
                  <td className="col-6">Delivery Hank</td>
                  <td className="col-6">Up to 0.250</td>
                </tr>
                <tr>
                  <td className="col-6">Drafting Arrangement</td>
                  <td className="col-6">4 over 3</td>
                </tr>
                <tr>
                  <td className="col-6">Delivery Can Dimensions</td>
                  <td className="col-6">Height: 36" to 48"</td>
                </tr>
                <tr>
                  <td className="col-6">SD 1000</td>
                  <td className="col-6">12", 14", 16", 18", 20", 22", 24"</td>
                </tr>
                <tr>
                  <td className="col-6">SDL 1000</td>
                  <td className="col-6">36", 40"</td>
                </tr>
                <tr>
                  <td className="col-6">Feed Can Dimension</td>
                  <td className="col-6">
                    Diameter: Up to 40"
                    <br />
                    Height: Up to 60"
                  </td>
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
                      Sliver Hank <br />
                    </td>
                    <td className="col-6">
                      550 RPM = 3730 kg/day <br /> 650 RPM = 4400 kg/day
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
                      Normal Rating of Main Drivers Motors <br /> a) Main Motor{" "}
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
                      Normal Rating of Auxiliary Motors <br /> a) Suction Motor{" "}
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
      <section>
        <h2 className="text-center">Layout</h2>
        <div className="product__layout">
          <img src="https://supergroupscbe.com/wp-content/uploads/2016/07/autoleveler-layout.png" />
        </div>
      </section>
    </div>
  );
};

export default NonAutoLeveller;
