import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SuperCardsc1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const images = [
    "../images/manufacture/super_card_sc1.webp",
    "../images/manufacture/w3.png",
    "../images/manufacture/web1.png",
   
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* NAVIGATION BAR - RESPONSIVE */}
      <div
        style={{
          backgroundColor: "#fff",
          borderBottom: "2px solid #e5e7eb",
          padding: "16px 20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <button
          onClick={() => navigate("/products/Card")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f3f4f6",
            color: "#374151",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            transition: "all 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#e5e7eb";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#f3f4f6";
          }}
        >
          ← Back to Overview
        </button>

        <div 
          style={{ 
            display: "flex", 
            gap: "12px", 
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              color: "#6b7280",
              fontWeight: "500",
              display: "none",
            }}
            className="config-label"
          >
            Configuration:
          </span>
          <span
            style={{
              padding: "6px 16px",
              backgroundColor: "#dbeafe",
              color: "#2563eb",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Single Licker-in
          </span>
          <button
            onClick={() => navigate("/products/Triplelickerin")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#2563eb";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#3b82f6";
            }}
          >
            Triple Licker-in →
          </button>
        </div>
      </div>

      {/* Add responsive styles */}
      <style>{`
        @media (min-width: 640px) {
          .config-label {
            display: inline !important;
          }
        }
      `}</style>

      {/* PRODUCT OVERVIEW */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* IMAGE SLIDER */}
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
                  src={images[currentSlide]}
                  alt="Super Card SC1"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                     objectFit: currentSlide === 1 ? "contain" : "cover",
    backgroundColor: "#f9fafb",
                  }}
                />

                <button
                  onClick={prevSlide}
                  style={{
                    position: "absolute",
                    left: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                >
                  ‹
                </button>

                <button
                  onClick={nextSlide}
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                >
                  ›
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "16px",
                  backgroundColor: "#f9fafb",
                }}
              >
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    style={{
                      height: "8px",
                      width: currentSlide === index ? "32px" : "8px",
                      backgroundColor:
                        currentSlide === index ? "#3b82f6" : "#d1d5db",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* PRODUCT DETAILS */}
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
              Premium Carding Solution
            </span>

            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#111827",
              }}
            >
              Super Card SC1
            </h2>

            <p
              style={{
                fontSize: "20px",
                color: "#6b7280",
                marginBottom: "8px",
              }}
            >
              With Auto Leveller
            </p>

            {/* SINGLE LICKER-IN LINE ADDED */}
            <p
              style={{
                fontSize: "16px",
                color: "#2563eb",
                fontWeight: "600",
                marginBottom: "24px",
              }}
            >
              Single Licker-in Configuration
            </p>

            <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
              SUPER CARD has evolved around the best and most successful carding
              concepts in the world, engineered for high productivity and
              consistent sliver quality.
            </p>
             <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
              Unique larger diameter of licker-in is equipped with specialized mote knives and carding segments that 
              efficiently remove impurities,dirt and short staple fibres from the material for better 
              quality.
            </p>

            <p
              style={{
                color: "#4b5563",
                lineHeight: "1.6",
                margin: "24px 0",
              }}
            >
              Wider Active Carding Zone with efficient Pre and Post Carding ensures
              excellent cleaning efficiency and fibre control at higher
              production rates.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="../assets/supercard.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Download Product Sheet
              </a>

              <a
                href="https://youtu.be/2Wg_cYoOxrQ"
                style={{
                  backgroundColor: "white",
                  color: "#3b82f6",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  border: "2px solid #3b82f6",
                  fontWeight: "600",
                }}
              >
                Watch Video
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIAL PROCESSING SPECIFICATION (NEW TABLE) */}
      <section style={{ backgroundColor: "#f9fafb", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "32px" }}>
            Material Processing Specification
          </h2>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              overflowX: "auto",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#3b82f6", color: "white" }}>
                  <th style={{ padding: "16px", textAlign: "left" }}>
                    Raw Material Processing Specification
                  </th>
                  <th style={{ padding: "16px", textAlign: "left" }}>
                    Super Card SC 1/3 (Cotton)
                  </th>
                  <th style={{ padding: "16px", textAlign: "left" }}>
                    Super Card SC 1/1 (Cotton / Synthetic)
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Raw material (staple length)", "22-44 mm", "22-51 mm"],
                  ["Feed weight", "340-600 gm / mtr", "340-600 gm / mtr"],
                  ["Feed stock width", "905mm", "905mm"],
                  [
                    "Sliver weight",
                    "3.5-8.0 gm / mtr (0.17 to 0.075 Ne)",
                    "3.5-8.0 gm / mtr (0.17 to 0.075 Ne)",
                  ],
                  ["Production rate", "up to 200kg", "up to 200kg"],
                  ["Card type", "lap or chute feed configuration", "lap or chute feed configuration"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #e5e7eb" }}>
                    <td style={{ padding: "16px", fontWeight: "500" }}>
                      {row[0]}
                    </td>
                    <td style={{ padding: "16px" }}>{row[1]}</td>
                    <td style={{ padding: "16px" }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section style={{ backgroundColor: "#f9fafb", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "32px" }}>
            Technical Specifications
          </h2>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              overflowX: "auto",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#3b82f6", color: "white" }}>
                  <th style={{ padding: "16px" }}>Parameter</th>
                  <th style={{ padding: "16px" }}>Three Lickerin</th>
                  <th style={{ padding: "16px" }}>Single Lickerin</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Delivery Speed", "up to 380 mtr/min", "up to 380 mtr/min"],
                  ["Cylinder Speed", "up to 550 rpm", "up to 550 rpm"],
                  ["Cylinder Diameter", "1280 mm", "1280 mm"],
                  ["Doffer diameter", "680 mm", "680 mm"],
                  ["LICKER-IN DIA", "215 mm x 3", "250 mm"],
                  ["Licker-in speed", "660-1400 rpm", "650-1300 rpm"],
                  ["Flat speed", "130 mm to 400 mm/min", "130 mm to 400 mm/min"],
                  ["No of revolving Flats (working/total)", "37-104", "37-104"],
                  [
                    "No of Stationary Flats for cotton applications (Dependent on application)",
                    "12 front + 6 strips maximum",
                    "12 front + 6 strips maximum (Dependent on application)",
                  ],
                  [
                    "No of Stationary flats for synthetic applications (Dependent on application)",
                    "10 front + 8 strips maximum",
                    "16 front + 12 strips maximum (Dependent on application)",
                  ],
                  ["Auto Levelling Systems", "Short & Long term", "Short & Long term"],
                  [
                    "Coiler and Automatic can changer",
                    "Linear type with Automatic can changer 24 inch and 40 inch.",
                    "Linear type with Automatic can changer 24 inch and 40 inch.",
                  ],
                  ["Installed Electrical power", "10.42 kw", "12.72 kw"],
                  ["Extraction volume", "3,700 m3/h", "4,200 m3/h"],
                  ["Extraction pressure", "850 Pa", "850 Pa"],
                  ["Compressed air consumption", "0.12 m3/h", "0.12 m3/h"],
                  ["Compressed air pressure", "6 to 7 bar", "6 to 7 bar"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #e5e7eb" }}>
                    <td style={{ padding: "16px", fontWeight: "500" }}>
                      {row[0]}
                    </td>
                    <td style={{ padding: "16px" }}>{row[1]}</td>
                    <td style={{ padding: "16px" }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MACHINE LAYOUT */}
      <section style={{ padding: "60px 0", backgroundColor: "white" }}>
        <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
          Machine Layout
        </h2>
        <img
          src="../images/products/super-card-sc1-layout.png"
          alt="SC1 Layout"
          style={{ width: "100%", display: "block" }}
        />
      </section>

      {/* BOTTOM NAVIGATION - RESPONSIVE */}
      <section
        style={{
          backgroundColor: "#f9fafb",
          padding: "40px 20px",
          borderTop: "2px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <button
            onClick={() => navigate("/products/Card")}
            style={{
              padding: "14px 28px",
              backgroundColor: "#f3f4f6",
              color: "#374151",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s",
              flex: "1 1 auto",
              minWidth: "fit-content",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#e5e7eb";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#f3f4f6";
            }}
          >
            ← Back to Overview
          </button>

          <button
            onClick={() => navigate("/products/Triplelickerin")}
            style={{
              padding: "14px 28px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s",
              flex: "1 1 auto",
              minWidth: "fit-content",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#2563eb";
              e.target.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#3b82f6";
              e.target.style.transform = "translateX(0)";
            }}
          >
            Next: Triple Licker-in →
          </button>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "linear-gradient(135deg,#3b82f6,#6366f1)",
          padding: "60px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2>Ready to Transform Your Production?</h2>
        <p style={{ marginBottom: "24px" }}>
          Contact our team to learn more about Super Card SC1.
        </p>
        <a href="/contact">
          <button
            style={{
              padding: "16px 32px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Get in Touch
          </button>
        </a>
      </section>
    </div>
  );
};

export default SuperCardsc1;