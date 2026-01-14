const Superprima1 = () => {
  // Single image only (first image removed)
  const image = "../images/manufacture/sdl1000e.png";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* Product Overview */}
      <section
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Single Image (No slider) */}
          <div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", paddingBottom: "100%" }}>
                <img
                  src={image}
                  alt="Super Prima"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <span
              style={{
                display: "inline-block",
                padding: "6px 16px",
                backgroundColor: "#dbeafe",
                color: "#2563eb",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              Advanced Drafting System
            </span>

            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#111827",
                margin: "0 0 8px 0",
              }}
            >
              SUPER PRIMA
            </h2>

            <p style={{ fontSize: "20px", color: "#6b7280", marginBottom: "24px" }}>
              Non Auto Leveller Drawframes
            </p>

            <p
              style={{
                color: "#4b5563",
                lineHeight: "1.6",
                marginBottom: "16px",
                fontWeight: "600",
              }}
            >
              SD1000e and SDL1000e - Advanced Drafting Systems
            </p>

            <p style={{ color: "#4b5563", lineHeight: "1.6", marginBottom: "16px" }}>
             
             SD1000e - Upto 24" Non Auto Leveller Drawframes.
            </p>
            <p style={{ color: "#4b5563", lineHeight: "1.6", marginBottom: "16px" }}>
              SDL1000e - Upto 40" Non Auto Leveller Drawframes.</p>

            <p style={{ color: "#4b5563", lineHeight: "1.6", marginBottom: "24px" }}>
              Both models are equipped with advanced technologies to meet the
              demands of modern spinning processes.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <a
                href="../assets/superprima1.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(59,130,246,0.3)",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
              >
                Download Product Sheet
              </a>

              <a
                href="https://youtu.be/BTlrlCQ4wIc?si=USHmXoWTnbE1688M"
                style={{
                  display: "inline-block",
                  backgroundColor: "white",
                  color: "#3b82f6",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textDecoration: "none",
                  border: "2px solid #3b82f6",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
              >
                Watch Video
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section style={{ backgroundColor: "#f9fafb", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#111827",
                margin: "0 0 16px 0",
              }}
            >
              Specifications
            </h2>
            <p style={{ color: "#6b7280", fontSize: "18px", margin: 0 }}>
              Comprehensive technical and performance data
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Technical Data */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                  padding: "16px 24px",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                Technical Data
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {[
                    ["Draft range from", "4 to 10"],
                    ["Range of staple length", "upto 75mm"],
                    ["Delivery hank", "upto 0.200"],
                    ["Main motor", "5.5Kw"],
                    ["Suction motor", "1.5Kw"],
                    ["Can change motor", "0.37Kw"],
                    ["Delivery hank", "upto 6100Kgs/day"],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor: index % 2 === 0 ? "#f9fafb" : "white",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      <td
                        style={{
                          padding: "16px 24px",
                          fontWeight: "500",
                          color: "#111827",
                          width: "50%",
                        }}
                      >
                        {row[0]}
                      </td>
                      <td
                        style={{
                          padding: "16px 24px",
                          color: "#4b5563",
                          width: "50%",
                        }}
                      >
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Production Data */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                  padding: "16px 24px",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                Production Data
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  <tr
                    style={{
                      backgroundColor: "#f9fafb",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <td
                      style={{
                        padding: "16px 24px",
                        fontWeight: "500",
                        color: "#111827",
                        width: "60%",
                      }}
                    >
                      Production @ 90% Efficiency in Ring Spinning Counts at 0.10
                      Sliver Hank
                    </td>
                    <td
                      style={{
                        padding: "16px 24px",
                        color: "#4b5563",
                        width: "40%",
                      }}
                    >
                      600 RPM = 4580 kg/day
                      <br />
                      650 RPM = 4970 kg/day
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <td
                      style={{
                        padding: "16px 24px",
                        fontWeight: "500",
                        color: "#111827",
                        width: "60%",
                      }}
                    >
                      Production @ 80% Efficiency in Open End Counts at 0.10
                      Sliver Hank
                    </td>
                    <td
                      style={{
                        padding: "16px 24px",
                        color: "#4b5563",
                        width: "40%",
                      }}
                    >
                      550 RPM = 3735 kg/day
                      <br />
                      650 RPM = 4415 kg/day
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Power Installation Data */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                  padding: "16px 24px",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                Power Installation Data
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  <tr
                    style={{
                      backgroundColor: "#f9fafb",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <td
                      style={{
                        padding: "16px 24px",
                        fontWeight: "500",
                        color: "#111827",
                        width: "60%",
                      }}
                    >
                      Normal Rating of Main Drivers Motors
                      <br />
                      a) Main Motor
                      <br />
                      b) Servo Motor
                    </td>
                    <td
                      style={{
                        padding: "16px 24px",
                        color: "#4b5563",
                        width: "40%",
                      }}
                    >
                      <br />
                      <br />
                      5.5 kW
                      <br />
                      3.0 kW
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <td
                      style={{
                        padding: "16px 24px",
                        fontWeight: "500",
                        color: "#111827",
                        width: "60%",
                      }}
                    >
                      Normal Rating of Auxiliary Motors
                      <br />
                      a) Suction Motor
                      <br />
                      b) Can Change Motor
                    </td>
                    <td
                      style={{
                        padding: "16px 24px",
                        color: "#4b5563",
                        width: "40%",
                      }}
                    >
                      <br />
                        <br />
                      1.5 kW
                      <br />
                      0.37 kW
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Layout Section */}
      <section style={{ backgroundColor: "white", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#111827",
                margin: "0 0 16px 0",
              }}
            >
              Machine Layout
            </h2>
            <p style={{ color: "#6b7280", fontSize: "18px", margin: 0 }}>
              Detailed floor plan and dimensions
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#eff6ff",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              padding: "32px",
            }}
          >
            <img
              src="../images/products/superprima-1-layout.png"
              alt="Super Prima Layout"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "white",
              margin: "0 0 16px 0",
            }}
          >
            Ready to Upgrade Your Production?
          </h2>
          <p style={{ color: "#dbeafe", fontSize: "18px", marginBottom: "32px" }}>
            Contact our team to learn more about the Super Prima and how it can
            optimize your operations.
          </p>

          <a href="/contact">
            <button
              style={{
                backgroundColor: "white",
                color: "#3b82f6",
                padding: "16px 32px",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "18px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#f9fafb")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
            >
              Get in Touch
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Superprima1;
