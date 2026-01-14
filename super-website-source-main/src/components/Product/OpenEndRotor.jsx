import "../../css/Autoleveller.css";
import Slider from "react-slick";

const OpenEndRotor = () => {

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
                    <h5 className="main_text">Our Products
                    </h5>
                </div>
            </section>
            {/* product slider and details */}
            <section className="container product__section mt-5 mb-5">
                <div className="mb-5 ">
                    <div className="container">
                        <div className="row product__head align-items-center">
                            <div className="product__head__div1 col-md-6">
                                <div>
                                    <Slider {...settings}>
                                        <div>
                                            <a href="../assets/super-os480i-catalogue.pdf" target="_blank"><img
                                                width="100%" className="img-fluid"
                                                src="../images/products/open-end-rotor-1.webp"
                                                alt="spares"
                                            /></a>
                                        </div>
                                        <div>
                                            <a href="../assets/super-os480i-catalogue.pdf" target="_blank"><img
                                                width="100%" className="img-fluid"
                                                src="../images/products/open-end-rotor-2.webp"
                                                alt="spares"
                                            /></a>
                                        </div>
                                        <div>
                                            <a href="../assets/super-os480i-catalogue.pdf" target="_blank"><img
                                                width="100%" className="img-fluid"
                                                src="../images/products/open-end-rotor-3.webp"
                                                alt="spares"
                                            /></a>
                                        </div>
                                        <div>
                                            <a href="../assets/super-os480i-catalogue.pdf" target="_blank"><img
                                                width="100%" className="img-fluid"
                                                src="../images/products/open-end-rotor-4.webp"
                                                alt="spares"
                                            /></a>
                                        </div>
                                        <div>
                                            <a href="../assets/super-os480i-catalogue.pdf" target="_blank"><img
                                                width="100%" className="img-fluid"
                                                src="../images/products/open-end-rotor-5.webp"
                                                alt="spares"
                                            /></a>
                                        </div>
                                        <div>
                                            <a href="../assets/super-os480i-catalogue.pdf" target="_blank"><img
                                                width="100%" className="img-fluid"
                                                src="../images/products/open-end-rotor-6.webp"
                                                alt="spares"
                                            /></a>
                                        </div>
                                    </Slider>
                                </div>
                            </div>

                            <div className="product__head__div2 col-md-6">
                                <div className="">
                                    <h2 className="main_text text_sec mb-4">
                                        Super Open-End Rotor <br />Spinning Machine

                                    </h2>
                                    <p className="para">
                                        Super Open End Rotor Spinning Machine is developed to enhance the Yarn Output in Quality & Productivity of waste and recycled material with superior cost benefit to the End Customers.
                                    </p>
                                    <p className="para">
                                        The Machine has a maximum no. of rotors per section upto 512 and can reach upto 1,10,000 rotor RPM
                                    </p>
                                    <p className="para">Both dual count and single count processing can be done in SUPER R32 and Super OS480i respectively.</p>
                                    <p className="para">E-cam and Joint spinning system, combined with continuous waste removal system makes those machines very efficient in operational performance.</p>
                                    <p className="para">Maximum No.of Rotors-480 Rotors (16 Rotors / Section) Maximum No. of the section up to 32.</p>
                                    <p className="para">Rotor Position Gauge – 210mm</p>
                                    <p className="para">Piecing parameters, Rotor Speed, Technological Air pressure setting, Take up speed, Winding parameters are all controlled by Touch Screen HMI</p>
                                    <p className="para">Central Conveyor belt are provided for removing packages.</p>
                                    <p className="para">Special diamond Coating and DN Coating and Chemical Treatment are available as options for Rotor cups and Opening Rollers wires</p>
                                    <p className="para">Special inserts with smooth, Spiral notched, ceramic navels are available for special application.</p>
                                    <a href="../assets/super-os480i-catalogue.pdf" target="_blank"><button className="btns">Download Product Sheet</button></a><br /><br />
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
      <div className="container">
        <p className="main_text text-center">Technical Specifications</p>
        <ul>
          <li className="para">
            Technology Air Suction chamber waste is Automatically cleared by a
            separate wiper.
          </li>
          <li className="para">
            Yarn Traverse Guide – Through Servo “E” cam Motion, infinitely
            variable offset up to 4mm
          </li>
          <li className="para">
            An Electrical Joint Spinning system is provided for controlling Yarn
            breakages during a Power failure (The Joint Spring system
            availability will be based on the Total No. of Rotors)
          </li>
          <li className="para">
            Technology Air Suction chamber waste is Automatically cleared by a
            separate wiper.
          </li>
          <li className="para">
            Two Colour LED light sensors for easier operator assistance
          </li>
        </ul>
      </div>
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
                  <td className="col-6">Yarn Count Range</td>
                  <td className="col-6">
                    a. 250Tex- 15 Tex <br />
                    b. 2.5 Ne to 40s Ne <br />
                    (Depending Upon Raw Material)
                  </td>
                </tr>
                <tr>
                  <td className="col-6">Sliver Feed</td>
                  <td className="col-6">
                    a. 7.0 K Tex- 2.5 KTex <br />
                    b. 0.08 Ne – 0.20 Ne
                  </td>
                </tr>
                <tr>
                  <td className="col-6">Fibre Length</td>
                  <td className="col-6">upto 45 mm</td>
                </tr>
                <tr>
                  <td className="col-6">Draft Range</td>
                  <td className="col-6">40-300</td>
                </tr>
                <tr>
                  <td className="col-6">Maximum Rotor RPM</td>
                  <td className="col-6">upto 1,00,000.00</td>
                </tr>
                <tr>
                  <td className="col-6">Rotor Diameter</td>
                  <td className="col-6">32 to 66 mm</td>
                </tr>
                <tr>
                  <td className="col-6">Feed Sliver Entry Speed</td>
                  <td className="col-6">Upto 12 m / Min</td>
                </tr>
                <tr>
                  <td className="col-6">
                    Fixing Arrangement of Opening Roller & Rotor
                  </td>
                  <td className="col-6">Direct Mounting Type</td>
                </tr>
                <tr>
                  <td className="col-6">Yarn Winding Take Up Speed</td>
                  <td className="col-6">Cheese Winding upto 180 M/Min</td>
                </tr>
                <tr>
                  <td className="col-6">Yarn Traverse Length</td>
                  <td className="col-6">150 mm</td>
                </tr>
                <tr>
                  <td className="col-6">Waxing Device</td>
                  <td className="col-6">
                    (Optional), But Motor Drive is Centralised
                  </td>
                </tr>
                <tr>
                  <td className="col-6">Winding Angle</td>
                  <td className="col-6">
                    30 – 40 Adjustable through the touch screen
                  </td>
                </tr>
                <tr>
                  <td className="col-6">Winding Package Size</td>
                  <td className="col-6">
                    Cheese Head Upto 4.0 kg and 300mm Diameter
                  </td>
                </tr>
                <tr>
                  <td className="col-6">Winding Tube Size</td>
                  <td className="col-6">
                    a. Diameter – 40,44,50,54. <br />
                    b. Length – 170 mm
                  </td>
                </tr>
                <tr>
                  <td className="col-6">Feed cans which can be accommodated</td>
                  <td className="col-6">
                    a. Dia – upto 16″ <br />
                    b. Height – Maximum 42″
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="product__specs_head_div2">
            <div className="product__specs_head_div2_child1">
              <table class="table table-bordered">
                <thead className="table-head">
                  <th colspan="2" class="table-head">
                    Production Data
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td className="col-6">
                      <img
                        className="img-fluid"
                        src="../images/products/production-data-1.png"
                        alt="Production Data"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="col-6">
                      <img
                        className="img-fluid"
                        src="../images/products/production-data-1.png"
                        alt="Production Data"
                      />
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
          <img
            className="img-fluid"
            src="../images/products/open-end-layout.png"
            alt="Layout"
          />
        </div>
      </section>
    </div>
  );
};

export default OpenEndRotor;
