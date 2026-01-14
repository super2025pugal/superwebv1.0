import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Groups = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = width < 768;
  const isTablet = width >= 768;
  const isDesktop = width >= 1024;

  /* ---------- LOGO ALIGNMENT SYSTEM ---------- */
  const LOGO_BOX_HEIGHT = isDesktop ? "130px" : isTablet ? "120px" : "105px";

  const companies = [
    {
      id: 1,
      title: "Super Textile Services",
      logo: "/images/stslogo.png",
      description:
        "Founded by Mr. A Thangavel, we provide genuine spares and service support for major textile spinning machinery manufacturers. We specialize in project consultancy and complete turnkey solutions.",
      linkTo: "/Super-textile-works",
      isExternal: false,
      features: ["Genuine Spares", "Service Support", "Turnkey Solutions"],
      boxColor: "#c1dbc4ff",
      accentColor: "#4f8f63",
      logoHeight: isDesktop ? "150px" : isTablet ? "150px" : "82px",
      logoMaxWidth: isDesktop ? "600px" : isTablet ? "620px" : "460px",
    },
    {
      id: 2,
      title: "Sudharsan Heavy Engineering Industry",
      logo: "/images/sheilogo.png",
      description:
        "SHEI supports diversified engineering solutions including High Pressure Die Casting, Sheet Metal Fabrication, CNC/VMC machining, tooling, and global product engineering.",
      linkTo: "https://shei.co.in/",
      isExternal: true,
      features: ["Die Casting", "CNC / VMC", "Global Solutions"],
      boxColor: "#bdcbe0ff",
      accentColor: "#3a59af",
      logoHeight: isDesktop ? "170px" : isTablet ? "178px" : "98px",
      logoMaxWidth: isDesktop ? "320px" : isTablet ? "310px" : "220px",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        fontFamily: "'Inter', system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid Pattern Background (same theme as AboutSection)
          Using multiple linear-gradient() layers is standard CSS behavior. [web:42] */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(30, 58, 138, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 58, 138, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? "30px 30px" : "40px 40px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Decorative Circle Accent (hidden on mobile) */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            top: "90px",
            right: "5%",
            width: "320px",
            height: "320px",
            border: "2px solid rgba(37, 99, 235, 0.10)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "220px",
              height: "220px",
              border: "2px solid rgba(37, 99, 235, 0.15)",
              borderRadius: "50%",
            }}
          />
        </div>
      )}

      {/* Content layer above background */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <style>
          {`
            @keyframes slideInDown {
              from {
                opacity: 0;
                transform: translateY(-30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes slideInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes expandWidth {
              from {
                width: 0;
                opacity: 0;
              }
              to {
                width: 70%;
                opacity: 1;
              }
            }

            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes pulse {
              0%, 100% {
                transform: scale(1);
                opacity: 0.7;
              }
              50% {
                transform: scale(1.3);
                opacity: 1;
              }
            }
          `}
        </style>

        {/* HERO */}
        <section
          style={{
            background: "linear-gradient(135deg,#3a59af,#2563EB)",
            padding: isDesktop ? "140px 40px 120px" : isTablet ? "100px 40px 80px" : "80px 20px 60px",
            textAlign: "center",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              left: "-50px",
              width: "200px",
              height: "200px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "50%",
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              right: "-80px",
              width: "300px",
              height: "300px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "50%",
              filter: "blur(80px)",
            }}
          />
          
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ position: "relative", display: "inline-block", marginBottom: "24px" }}>
              <h1
                style={{
                  margin: 0,
                  fontSize: isDesktop ? "78px" : isTablet ? "56px" : "40px",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.2,
                  letterSpacing: "-1px",
                  textShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  animation: "slideInDown 0.8s ease both",
                }}
              >
                OUR GROUP COMPANIES
              </h1>
              
              {/* Underline */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "70%",
                  height: "4px",
                  background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0.9) 80%, transparent 100%)",
                  borderRadius: "2px",
                  animation: "expandWidth 1s ease 0.3s both",
                  boxShadow: "0 2px 10px rgba(255,255,255,0.3)",
                }}
              />
            </div>

            {/* Decorative Dots */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginBottom: "24px",
                animation: "fadeIn 1s ease 1.3s both",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.7)",
                  animation: "pulse 2s ease-in-out 1.3s infinite",
                }}
              />
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#fff",
                  animation: "pulse 2s ease-in-out 1.5s infinite",
                }}
              />
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.7)",
                  animation: "pulse 2s ease-in-out 1.7s infinite",
                }}
              />
            </div>

            <p
              style={{
                margin: "0 auto",
                fontSize: isDesktop ? "20px" : isTablet ? "18px" : "16px",
                maxWidth: "800px",
                lineHeight: 1.8,
                color: "#fff",
                opacity: 0.95,
                fontWeight: 400,
                animation: "slideInUp 0.8s ease 0.2s both",
                marginBottom: "24px",
              }}
            >
              Driving innovation across textile machinery and advanced engineering
            </p>

            {/* Excellence Badge */}
            <div
              style={{
                display: "inline-block",
                padding: "8px 20px",
                background: "rgba(255,255,255,0.15)",
                borderRadius: "30px",
                fontSize: isTablet ? "14px" : "12px",
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                animation: "fadeIn 1s ease 0.6s both",
              }}
            >
              ✦ Excellence in Engineering ✦
            </div>
          </div>
        </section>

        {/* CARDS */}
        <section
          style={{
            padding: "44px 18px",
            maxWidth: isDesktop ? "1400px" : "100%",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "32px",
              ...(isDesktop && { gridTemplateColumns: "repeat(2, 1fr)" }),
            }}
          >
            {companies.map((company) => (
              <div
                key={company.id}
                onMouseEnter={() => isDesktop && setHoveredCard(company.id)}
                onMouseLeave={() => isDesktop && setHoveredCard(null)}
                style={{
                  background: company.boxColor,
                  borderRadius: "18px",
                  padding: isDesktop ? "32px" : "28px",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: isDesktop ? "520px" : "auto",
                  border: `2px solid ${
                    hoveredCard === company.id
                      ? company.accentColor
                      : "rgba(0,0,0,0.08)"
                  }`,
                  boxShadow:
                    hoveredCard === company.id
                      ? `0 16px 50px ${company.accentColor}50`
                      : "0 8px 25px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  transform:
                    hoveredCard === company.id ? "translateY(-8px)" : "none",
                }}
              >
                {/* LOGO — SAME BASELINE */}
                <div
                  style={{
                    height: LOGO_BOX_HEIGHT,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                  }}
                >
                  <img
                    src={company.logo}
                    alt={company.title}
                    style={{
                      height: company.logoHeight,
                      maxWidth: company.logoMaxWidth,
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontSize: isDesktop ? "26px" : "22px",
                    fontWeight: 800,
                    marginBottom: "14px",
                    color: "#0f172a",
                  }}
                >
                  {company.title}
                </h3>

                <p
                  style={{
                    fontSize: isDesktop ? "16px" : "14.5px",
                    lineHeight: 1.7,
                    color: "#334155",
                    marginBottom: "20px",
                    flex: 1,
                  }}
                >
                  {company.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "24px",
                  }}
                >
                  {company.features.map((feature, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: "#fff",
                        borderRadius: "8px",
                        padding: isDesktop ? "8px 14px" : "7px 12px",
                        fontSize: isDesktop ? "13px" : "12.5px",
                        fontWeight: 600,
                        border: `1px solid ${company.accentColor}40`,
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {company.isExternal ? (
                  <a
                    href={company.linkTo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      style={{
                        width: "100%",
                        padding: isDesktop ? "16px" : "15px",
                        borderRadius: "10px",
                        border: `2px solid ${company.accentColor}`,
                        background: "#fff",
                        color: company.accentColor,
                        fontWeight: 700,
                        fontSize: isDesktop ? "15px" : "14px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = company.accentColor;
                        e.target.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "#fff";
                        e.target.style.color = company.accentColor;
                      }}
                    >
                      Visit Official Site ↗
                    </button>
                  </a>
                ) : (
                  <Link to={company.linkTo} style={{ textDecoration: "none" }}>
                    <button
                      style={{
                        width: "100%",
                        padding: isDesktop ? "16px" : "15px",
                        borderRadius: "10px",
                        border: "none",
                        background: company.accentColor,
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: isDesktop ? "15px" : "14px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.02)";
                        e.target.style.boxShadow = `0 8px 20px ${company.accentColor}60`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      Learn More →
                    </button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Groups;