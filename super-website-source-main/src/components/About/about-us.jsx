import React, { useEffect, useState } from "react";

const Aboutus = () => {
  // for responsive bg density
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = width < 768;

  // Professional background: micro-grid + soft vignette using multiple backgrounds [web:63]
  const professionalBg = {
    backgroundColor: "#f9fafb",
    backgroundImage: `
      radial-gradient(1200px 600px at 20% 0%, rgba(37,99,235,0.08), transparent 60%),
      linear-gradient(rgba(30, 58, 138, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(30, 58, 138, 0.035) 1px, transparent 1px)
    `,
    backgroundSize: `
      auto,
      ${isMobile ? "28px 28px" : "36px 36px"},
      ${isMobile ? "28px 28px" : "36px 36px"}
    `,
  };

  return (
    <div
      style={{
        ...professionalBg,
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          width: "100%",
          height: isMobile ? "350px" : "600px",
          backgroundImage: "url('/images/super-groups-about.jpg')",
          backgroundPosition: isMobile ? "center center" : "center",
          backgroundSize: "cover",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Light overlay only for text readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: isMobile 
              ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.45) 100%)"
              : "linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: isMobile ? "70px" : "120px", // Increased padding to move content higher
          }}
        >
          {/* Content */}
          <div style={{ 
            textAlign: "center", 
            color: "white", 
            padding: isMobile ? "0 16px" : "0 20px", 
            maxWidth: "1000px", 
            position: "relative", 
            zIndex: 1 
          }}>
            {/* Small Badge */}
            <div
              style={{
                display: "inline-block",
                padding: isMobile ? "6px 16px" : "10px 24px",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderRadius: "30px",
                fontSize: isMobile ? "11px" : "14px",
                fontWeight: "600",
                letterSpacing: isMobile ? "1px" : "1.5px",
                textTransform: "uppercase",
                marginBottom: isMobile ? "16px" : "30px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#2563eb",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              ✦ Since 1984 ✦
            </div>

            <h1
              style={{
                fontSize: isMobile ? "32px" : "clamp(48px, 7vw, 72px)",
                fontWeight: "900",
                marginBottom: isMobile ? "12px" : "24px",
                letterSpacing: isMobile ? "-1px" : "-2px",
                lineHeight: "1.1",
                textShadow: isMobile 
                  ? "0 2px 8px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.5)"
                  : "0 2px 4px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3)",
              }}
            >
              About Super Group
            </h1>

            {/* Decorative Line */}
            <div
              style={{
                width: isMobile ? "60px" : "120px",
                height: isMobile ? "3px" : "4px",
                background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 1) 50%, transparent 100%)",
                margin: "0 auto",
                marginBottom: isMobile ? "16px" : "30px",
                borderRadius: "2px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
              }}
            />

            <p
              style={{
                fontSize: isMobile ? "15px" : "clamp(20px, 3vw, 28px)",
                fontWeight: "600",
                lineHeight: "1.5",
                maxWidth: isMobile ? "100%" : "800px",
                margin: "0 auto",
                textShadow: isMobile 
                  ? "0 2px 8px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.5)"
                  : "0 2px 4px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.5)",
                padding: isMobile ? "0 8px" : "0",
              }}
            >
              40+ Years of Excellence in Textile Engineering
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "60px 24px" }}>
        {/* Company Story */}
        <div style={{ marginBottom: "80px" }}>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "700",
              color: "#1a1a1a",
              marginBottom: "40px",
              textAlign: "center",
              borderBottom: "3px solid #2563eb",
              paddingBottom: "10px",
              display: "inline-block",
              width: "100%",
            }}
          >
            Our Story
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "18px",
                  color: "#333",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                }}
              >
                Super Group as it stands today, was started way back in 1984 with a vision
                to become one of the most advanced machinery manufacturer in the field of
                Textile and General Engineering. The seeds of development for the group
                were planted by Mr. A. Thankavel, a natural Technocrat and inventor, who
                started his career as a simple service engineer to become one of the
                most successful industrialist in the field of textile engineering.
              </p>
            </div>

            <div>
              <p
                style={{
                  fontSize: "18px",
                  color: "#333",
                  lineHeight: "1.8",
                }}
              >
                The company's successful technological advancement in the manufacturing of
                Sliver and Apparel yarn making machines for more than four decades, has
                promoted it towards the development and manufacture of highly advanced 
                textile machineries to target the global markets.
                The company has an extremely motivated team with top quality infrastructure
                to meeting all the requirements from Research and Development through the
                customer service.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "60px 40px",
            marginBottom: "80px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "60px",
              textAlign: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "56px",
                  fontWeight: "700",
                  color: "#2563eb",
                  marginBottom: "10px",
                }}
              >
                40+
              </div>
              <div style={{ fontSize: "18px", color: "#666", fontWeight: "500" }}>
                Years Active
              </div>
              <div style={{ fontSize: "14px", color: "#999", marginTop: "8px" }}>
                Industry Leadership
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "56px",
                  fontWeight: "700",
                  color: "#2563eb",
                  marginBottom: "10px",
                }}
              >
                1000+
              </div>
              <div style={{ fontSize: "18px", color: "#666", fontWeight: "500" }}>
                Global Clients
              </div>
              <div style={{ fontSize: "14px", color: "#999", marginTop: "8px" }}>
                Worldwide Presence
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "56px",
                  fontWeight: "700",
                  color: "#2563eb",
                  marginBottom: "10px",
                }}
              >
                50+
              </div>
              <div style={{ fontSize: "18px", color: "#666", fontWeight: "500" }}>
                Products
              </div>
              <div style={{ fontSize: "14px", color: "#999", marginTop: "8px" }}>
                Advanced Engineering
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy & Mission */}
        <div style={{ marginBottom: "80px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "60px",
            }}
          >
            {/* Philosophy */}
            <div>
              <h3
                style={{
                  fontSize: "clamp(24px, 4vw, 32px)",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  marginBottom: "20px",
                  borderBottom: "3px solid #2563eb",
                  paddingBottom: "10px",
                  display: "inline-block",
                }}
              >
                Our Philosophy
              </h3>

              <div
                style={{
                  backgroundColor: "#eff6ff",
                  padding: "30px",
                  marginTop: "30px",
                  borderRadius: "4px",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#1e40af",
                    marginBottom: "20px",
                  }}
                >
                  Serving Society through Industry
                </p>

                <ul
                  style={{
                    fontSize: "16px",
                    color: "#555",
                    lineHeight: "1.8",
                    paddingLeft: "20px",
                  }}
                >
                  <li style={{ marginBottom: "10px" }}>
                    The white Dove represents for peace and harmony
                  </li>
                  <li>The green background symbolizes a clean environment</li>
                </ul>
              </div>
            </div>

            {/* Mission */}
            <div>
              <h3
                style={{
                  fontSize: "clamp(24px, 4vw, 32px)",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  marginBottom: "20px",
                  borderBottom: "3px solid #2563eb",
                  paddingBottom: "10px",
                  display: "inline-block",
                }}
              >
                Our Mission
              </h3>

              <div style={{ marginTop: "30px" }}>
                <p
                  style={{
                    fontSize: "18px",
                    color: "#333",
                    lineHeight: "1.8",
                    marginBottom: "25px",
                  }}
                >
                  We aim to deliver machinery that offers precision, durability and
                  cost-effectiveness.
                </p>

                <div style={{ paddingLeft: "20px", borderLeft: "4px solid #2563eb" }}>
                  <p style={{ fontSize: "16px", color: "#555", marginBottom: "12px" }}>
                    → Advanced innovation
                  </p>
                  <p style={{ fontSize: "16px", color: "#555", marginBottom: "12px" }}>
                    → Cost-effective engineering
                  </p>
                  <p style={{ fontSize: "16px", color: "#555" }}>→ Sustainable practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "700",
              color: "#1a1a1a",
              marginBottom: "50px",
            }}
          >
            Core Values
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
            }}
          >
            {/* Innovation - light dull blue */}
            <div
              style={{
                padding: "30px",
                backgroundColor: "#A7C7E7",
                borderRadius: "6px",
              }}
            >
              <h4
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#1a1a1a",
                  marginBottom: "15px",
                }}
              >
                Innovation
              </h4>
              <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.7" }}>
                Continuous research and development to stay at the forefront of textile
                engineering technology.
              </p>
            </div>

            {/* Sustainability - light dull green */}
            <div
              style={{
                padding: "30px",
                backgroundColor: "#C1E1C1",
                borderRadius: "6px",
              }}
            >
              <h4
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#1a1a1a",
                  marginBottom: "15px",
                }}
              >
                Sustainability
              </h4>
              <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.7" }}>
                Eco-friendly engineering solutions that minimize environmental impact
                while maximizing efficiency.
              </p>
            </div>

            {/* Excellence - light dull grey */}
            <div
              style={{
                padding: "30px",
                backgroundColor: "#d2d8e5ff",
                borderRadius: "6px",
              }}
            >
              <h4
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#1a1a1a",
                  marginBottom: "15px",
                }}
              >
                Excellence
              </h4>
              <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.7" }}>
                Superior performance and quality in every machine we manufacture and every
                service we provide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;