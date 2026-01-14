import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const stats = [
  { id: 1, count: 115, label: "Fair Participation", icon: "🏭" },
  { id: 2, count: 1350, label: "Machines Delivered", icon: "⚙️" },
  { id: 3, count: 815, label: "Reputed Happy Customers", icon: "🤝" },
  { id: 4, count: 16, label: "Indian States Covered", icon: "📍" },
  { id: 5, count: 6, label: "Countries Exports", icon: "🌍" },
];

const AboutSection = () => {
  const navigate = useNavigate();

  const formatCount = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const [hoveredButton, setHoveredButton] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setWidth(window.innerWidth);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isTablet = width >= 640 && width < 1024;

  // -----------------------------
  // News data (now connected to routes)
  // -----------------------------
  const numberedNews = [
   
    {
      img: "/images/news1.png",
      title: "ITMA ASIA + CITME 2025\nSINGAPORE",
      to: "/NewsandEvents/Event1",
    },
    {
      img: "/images/f0.webp",
      title: "FOUNDERS DAY 2025",
      to: "/NewsandEvents/Foundersday",
    },
 
    { img: "/images/news2.png", title: "TEXFAIR 2024", to: "/NewsandEvents/Event2" },
    { img: "/images/news3.png", title: "CONFERENCE AT BANGLADESH FEB2024", to: "/NewsandEvents/Event3" },
    { img: "/images/news6.webp", title: "ITME NOIDA 2023", to: "/NewsandEvents/Event6" },
    { img: "/images/news4.png", title: "TEXFAIR 2022", to: "/NewsandEvents/Event4" },
    { img: "/images/news5.png", title: "TEXFAIR 2019", to: "/NewsandEvents/Event5" },
    
     
    
    
  ];

  const newsCards = [
    {
      kind: "featured",
      img: "/images/news0.png",
      title: "News & Events",
      desc: "Industry events and company highlights.",
    },
    ...numberedNews.map((n) => ({ kind: "item", ...n })),
  ];

  const newsStyles = {
    container: { maxWidth: "1600px", margin: "0 auto" },

    grid: {
      display: "grid",
      gridAutoFlow: "row",
      gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
      gap: isMobile ? "24px" : "40px",
      alignItems: "stretch",
    },

    card: {
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      boxShadow: "0 18px 42px rgba(0,0,0,0.18)",
      transition: isMobile ? "none" : "transform 0.3s ease, box-shadow 0.3s ease",
      overflow: "hidden",
    },

    cardHover: !isMobile
      ? {
          transform: "translateY(-8px)",
          boxShadow: "0 26px 60px rgba(0,0,0,0.25)",
        }
      : {},

    image: {
      width: "100%",
      height: isMobile ? "200px" : isTablet ? "240px" : "260px",
      objectFit: "cover",
      flexShrink: 0,
    },

    body: {
      padding: isMobile ? "18px" : "26px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#ffffff",
    },

    featuredTitle: {
      fontSize: isMobile ? "22px" : "26px",
      fontWeight: "800",
      color: "#064e3b",
      marginBottom: "6px",
    },

    featuredDesc: {
      fontSize: isMobile ? "14px" : "16px",
      color: "#374151",
      lineHeight: 1.6,
    },

    itemTitle: {
      fontSize: isMobile ? "16px" : "18px",
      fontWeight: "700",
      color: "#0f9d58",
      whiteSpace: "pre-line",
    },

    bannerCard: {
      gridColumn: "1 / -1",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
      alignItems: "stretch",
    },

    bannerImage: {
      width: "100%",
      height: isMobile ? "220px" : "320px",
      objectFit: "cover",
    },

    bannerBody: {
      padding: isMobile ? "18px" : "28px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "10px",
      backgroundColor: "#ffffff",
    },
  };

  // ✅ IMPORTANT FIX: save scroll before navigating to event
  const goToEvent = (path) => {
    if (!path) return;

    sessionStorage.setItem("homeScrollY", String(window.scrollY)); // [web:171]
    navigate(path);
  };

  return (
    <section
      style={{
        position: "relative",
        padding: isMobile ? "60px 20px" : "100px 24px",
        backgroundColor: "#f9fafb",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Grid Pattern Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(30, 58, 138, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 58, 138, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? "30px 30px" : "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Geometric Accent */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "5%",
            width: "300px",
            height: "300px",
            border: "2px solid rgba(37, 99, 235, 0.1)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "200px",
              height: "200px",
              border: "2px solid rgba(37, 99, 235, 0.15)",
              borderRadius: "50%",
            }}
          />
        </div>
      )}

      <div
        style={{
          position: "relative",
          maxWidth: "1300px",
          margin: "0 auto",
          zIndex: 1,
        }}
      >
        {/* Two Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "40px" : "60px",
            marginBottom: isMobile ? "50px" : "80px",
            alignItems: "center",
          }}
        >
          {/* Left Column */}
          <div
            style={{
              animation: isMobile ? "fadeIn 1s ease-out forwards" : "slideInLeft 1s ease-out forwards",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                fontSize: isMobile ? "11px" : "13px",
                fontWeight: "700",
                color: "#1E3A8A",
                letterSpacing: isMobile ? "1.5px" : "2px",
                marginBottom: isMobile ? "20px" : "28px",
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  width: isMobile ? "30px" : "40px",
                  height: "2px",
                  backgroundColor: "#2563EB",
                }}
              />
              About Us
            </div>

            <h2
              style={{
                fontSize: isMobile ? "36px" : "clamp(2.75rem, 5vw, 4.5rem)",
                fontWeight: "900",
                color: "#0f172a",
                marginBottom: isMobile ? "20px" : "24px",
                lineHeight: "1.05",
                letterSpacing: "-0.03em",
              }}
            >
              About <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Super Group
              </span>
            </h2>

            <div
              style={{
                width: isMobile ? "60px" : "80px",
                height: isMobile ? "3px" : "4px",
                background: "linear-gradient(90deg, #1E3A8A 0%, #2563EB 100%)",
                marginBottom: isMobile ? "20px" : "28px",
                borderRadius: "2px",
              }}
            />

            <h3
              style={{
                fontSize: isMobile ? "20px" : "24px",
                fontWeight: "700",
                color: "#334155",
                marginBottom: isMobile ? "16px" : "20px",
                lineHeight: "1.3",
              }}
            >
              Building Excellence Since Day One
            </h3>

            <p
              style={{
                fontSize: isMobile ? "15px" : "17px",
                color: "#64748b",
                lineHeight: "1.8",
                marginBottom: isMobile ? "20px" : "24px",
                fontWeight: "400",
              }}
            >
              Pioneering innovation with quality infrastructure and proven technology solutions. We transform complex
              challenges into reliable results.
            </p>

            <p
              style={{
                fontSize: isMobile ? "14px" : "16px",
                color: "#64748b",
                lineHeight: "1.7",
                marginBottom: isMobile ? "28px" : "36px",
                fontWeight: "400",
              }}
            >
              Our motivated team and modern infrastructure deliver research and development solutions tailored for
              today's industries. We partner with clients nationwide to deliver reliable, standards-driven results.
            </p>

            {/* unchanged */}
            <a href="/about" style={{ textDecoration: "none" }}>
              <button
                style={{
                  padding: isMobile ? "14px 28px" : "16px 36px",
                  backgroundColor: hoveredButton ? "#1E3A8A" : "#2563EB",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: isMobile ? "14px" : "15px",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: hoveredButton ? "0 8px 24px rgba(37, 99, 235, 0.4)" : "0 4px 14px rgba(37, 99, 235, 0.3)",
                  transform: hoveredButton ? "translateY(-2px)" : "translateY(0)",
                  letterSpacing: "0.5px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  width: isMobile ? "100%" : "auto",
                  justifyContent: "center",
                }}
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
              >
                Discover Our Story
                <span
                  style={{
                    transform: hoveredButton ? "translateX(4px)" : "translateX(0)",
                    transition: "transform 0.3s ease",
                    display: "inline-block",
                  }}
                >
                  →
                </span>
              </button>
            </a>
          </div>

          {/* Right Column */}
          <div
            style={{
              animation: isMobile ? "fadeIn 1s ease-out 0.2s forwards" : "slideInRight 1s ease-out forwards",
            }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: isMobile ? "16px" : "20px",
                padding: isMobile ? "28px 24px" : "40px",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.02)",
                border: "1px solid #e2e8f0",
              }}
            >
              <h4
                style={{
                  fontSize: isMobile ? "21px" : "23px",
                  fontWeight: "700",
                  color: "#0f172a",
                  marginBottom: isMobile ? "24px" : "28px",
                  textTransform: "uppercase",
                  letterSpacing: isMobile ? "0.8px" : "1px",
                }}
              >
                Why Choose Us
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "16px" : "20px" }}>
                {[
                  { title: "Industry-Leading Expertise", desc: "Decades of manufacturing excellence" },
                  { title: "Advanced Infrastructure", desc: "State-of-the-art production facilities" },
                  { title: "Pan-India Network", desc: "Nationwide service and support" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: isMobile ? "12px" : "16px",
                      padding: isMobile ? "14px" : "16px",
                      backgroundColor: "#bbe0f7ff",
                      borderRadius: isMobile ? "10px" : "12px",
                      border: "1px solid #e2e8f0",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        minWidth: isMobile ? "32px" : "36px",
                        height: isMobile ? "32px" : "36px",
                        backgroundColor: "#2563EB",
                        borderRadius: isMobile ? "6px" : "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: isMobile ? "16px" : "18px",
                        fontWeight: "900",
                        color: "#ffffff",
                      }}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: isMobile ? "14px" : "15px",
                          fontWeight: "700",
                          color: "#0f172a",
                          marginBottom: "4px",
                        }}
                      >
                        {item.title}
                      </div>
                      <div style={{ fontSize: isMobile ? "12px" : "13px", color: "#64748b", lineHeight: "1.5" }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: isMobile ? "20px" : "24px",
            padding: isMobile ? "36px 24px" : "50px 40px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.03)",
            border: "2px solid #e2e8f0",
            position: "relative",
            overflow: "hidden",
            marginBottom: isMobile ? "50px" : "80px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: isMobile ? "4px" : "6px",
              background: "linear-gradient(90deg, #1E3A8A 0%, #2563EB 50%, #1E3A8A 100%)",
            }}
          />

          <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "40px" }}>
            <h3
              style={{
                fontSize: isMobile ? "24px" : "28px",
                fontWeight: "800",
                color: "#0f172a",
                marginBottom: "8px",
                letterSpacing: "-0.01em",
              }}
            >PERFORMANCE METRICS 
            </h3>
            <p style={{ fontSize: isMobile ? "14px" : "15px", color: "#64748b", fontWeight: "500" }}>
              Proven track record of excellence and reliability
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(auto-fit, minmax(140px, 1fr))" : "repeat(auto-fit, minmax(180px, 1fr))",
              gap: isMobile ? "16px" : "20px",
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                style={{
                  position: "relative",
                  textAlign: "center",
                  padding: isMobile ? "24px 16px" : "32px 24px",
                  borderRadius: isMobile ? "12px" : "14px",
                  backgroundColor: hoveredStat === stat.id ? "#f0f7ff" : "#f8fafc",
                  border: hoveredStat === stat.id ? "2px solid #2563EB" : "2px solid #e2e8f0",
                  boxShadow:
                    hoveredStat === stat.id ? "0 10px 28px rgba(37, 99, 235, 0.25)" : "0 2px 8px rgba(0, 0, 0, 0.04)",
                  transform:
                    hoveredStat === stat.id
                      ? isMobile
                        ? "scale(1.02)"
                        : "translateY(-4px) scale(1.02)"
                      : isMobile
                        ? "scale(1)"
                        : "translateY(0) scale(1)",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  cursor: "pointer",
                  animation: `scaleIn 0.6s ease-out ${index * 0.1}s backwards`,
                }}
                onMouseEnter={() => setHoveredStat(stat.id)}
                onMouseLeave={() => setHoveredStat(null)}
                onTouchStart={() => isMobile && setHoveredStat(stat.id)}
                onTouchEnd={() => isMobile && setTimeout(() => setHoveredStat(null), 300)}
              >
                <div
                  style={{
                    position: "absolute",
                    top: isMobile ? "10px" : "12px",
                    right: isMobile ? "10px" : "12px",
                    width: isMobile ? "5px" : "6px",
                    height: isMobile ? "5px" : "6px",
                    backgroundColor: hoveredStat === stat.id ? "#2563EB" : "#cbd5e1",
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
                  }}
                />

                <div
                  style={{
                    fontSize: isMobile ? "2rem" : "clamp(2.5rem, 5vw, 3.5rem)",
                    fontWeight: "900",
                    color: "#0f172a",
                    marginBottom: "8px",
                    letterSpacing: "-0.03em",
                    lineHeight: "1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                  }}
                >
                  {formatCount(stat.count)}
                  <span 
                    style={{ 
                      fontSize: "0.8em", 
                      fontWeight: "800", 
                      color: "#2563EB",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    +
                  </span>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#e2e8f0",
                    margin: isMobile ? "12px 0" : "16px 0",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      width: hoveredStat === stat.id ? "100%" : "0%",
                      backgroundColor: "#2563EB",
                      transition: "width 0.5s ease",
                    }}
                  />
                </div>

                <p
                  style={{
                    fontSize: isMobile ? "11px" : "13px",
                    color: "#475569",
                    fontWeight: "700",
                    margin: 0,
                    lineHeight: "1.4",
                    letterSpacing: isMobile ? "0.3px" : "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* News & Events */}
        <div style={newsStyles.container}>
          <div style={newsStyles.grid}>
            {newsCards.map((card) => {
              const isFeatured = card.kind === "featured";
              const isClickable = card.kind === "item" && Boolean(card.to);

              return (
                <div
                  key={isFeatured ? "featured" : card.title}
                  style={{
                    ...newsStyles.card,
                    ...(isFeatured ? newsStyles.bannerCard : {}),
                    cursor: isClickable ? "pointer" : "default",
                  }}
                  onClick={() => {
                    if (isClickable) goToEvent(card.to);
                  }}
                  onMouseEnter={(e) => !isMobile && Object.assign(e.currentTarget.style, newsStyles.cardHover)}
                  onMouseLeave={(e) =>
                    !isMobile &&
                    Object.assign(e.currentTarget.style, {
                      ...newsStyles.card,
                      ...(isFeatured ? newsStyles.bannerCard : {}),
                    })
                  }
                >
                  <img src={card.img} alt={card.title} style={isFeatured ? newsStyles.bannerImage : newsStyles.image} />

                  <div style={isFeatured ? newsStyles.bannerBody : newsStyles.body}>
                    {isFeatured ? (
                      <>
                        <div style={newsStyles.featuredTitle}>{card.title}</div>
                        <div style={newsStyles.featuredDesc}>{card.desc}</div>
                      </>
                    ) : (
                      <div style={newsStyles.itemTitle}>{card.title}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;