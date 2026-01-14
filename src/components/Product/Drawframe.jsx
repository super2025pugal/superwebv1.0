import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DrawFrame = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({});
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  /* ---------- VIDEO AUTOPLAY ---------- */
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const playVideo = async () => {
      try {
        videoRef.current.muted = true;
        videoRef.current.playsInline = true;
        await videoRef.current.play();
      } catch {
        const retry = () => videoRef.current?.play();
        document.addEventListener("click", retry, { once: true });
        document.addEventListener("touchstart", retry, { once: true });
      }
    };

    const t = setTimeout(playVideo, 100);
    return () => clearTimeout(t);
  }, []);

  /* ---------- WINDOW RESIZE ---------- */
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  /* ---------- INTERSECTION OBSERVER FOR ANIMATIONS ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Keyframes for animations
  const keyframes = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

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

    @keyframes bounceIn {
      0% {
        transform: scale(0);
        opacity: 0;
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  `;

  // Enhanced styles
  const styles = {
    // Title wrapper for the blue banner
    titleWrapper: {
      position: "relative",
      display: "inline-block",
      marginBottom: "24px",
    },

    // Main title with white color
    bannerTitle: {
      margin: 0,
      fontSize: isMobile ? "36px" : isTablet ? "48px" : "64px",
      fontWeight: 700,
      color: "#ffffff",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      animation: "slideInDown 0.8s ease both",
      textShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
    },

    // Title underline with white gradient and glow
    titleUnderline: {
      position: "absolute",
      bottom: "-12px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "70%",
      height: "4px",
      background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.8) 80%, transparent 100%)",
      borderRadius: "2px",
      animation: "expandWidth 1s ease 0.3s both",
      boxShadow: "0 2px 10px rgba(255, 255, 255, 0.3)",
    },

    // Section title underline
    sectionTitleUnderline: {
      position: "absolute",
      bottom: "-12px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "70%",
      height: "4px",
      background: "linear-gradient(90deg, transparent 0%, #3b82f6 20%, #3b82f6 80%, transparent 100%)",
      borderRadius: "2px",
      animation: "expandWidth 1s ease 0.3s both",
      boxShadow: "0 2px 10px rgba(59, 130, 246, 0.4)",
    },

    // Decorative dots container for banner (white)
    bannerDecorativeDots: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      marginBottom: "20px",
      animation: "fadeIn 1s ease 0.5s both",
    },

    // White dots for banner
    bannerDot: (index) => ({
      width: index === 1 ? "10px" : "6px",
      height: index === 1 ? "10px" : "6px",
      borderRadius: "50%",
      background: index === 1 
        ? "rgba(255, 255, 255, 1)"
        : "rgba(255, 255, 255, 0.6)",
      animation: `pulse 2s ease-in-out ${index * 0.2}s infinite`,
    }),

    // Decorative dots container for sections (blue)
    decorativeDots: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      marginBottom: "20px",
      animation: "fadeIn 1s ease 0.5s both",
    },

    // Blue dots for sections
    dot: (index) => ({
      width: index === 1 ? "10px" : "6px",
      height: index === 1 ? "10px" : "6px",
      borderRadius: "50%",
      background: index === 1 
        ? "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)"
        : "#93c5fd",
      animation: `pulse 2s ease-in-out ${index * 0.2}s infinite`,
    }),

    // Banner subtitle
    bannerSubtitle: {
      margin: "0 auto",
      fontSize: isMobile ? "14px" : isTablet ? "16px" : "18px",
      color: "#e0f2fe",
      lineHeight: 1.8,
      fontWeight: 400,
      maxWidth: "900px",
      animation: "slideInUp 0.8s ease 0.4s both",
    },

    // Section title wrapper
    sectionTitleWrapper: {
      position: "relative",
      display: "inline-block",
      marginBottom: "24px",
    },

    // Section heading with gradient
    sectionTitle: {
      fontSize: isMobile ? "28px" : isTablet ? "32px" : "40px",
      fontWeight: 700,
      background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      margin: "0 0 8px",
      animation: "fadeInUp 0.6s ease-out",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },

    // Section description
    sectionDescription: {
      color: "#64748b",
      margin: "20px auto 0",
      fontSize: isMobile ? "14px" : "16px",
      lineHeight: 1.8,
      fontWeight: 500,
      maxWidth: "700px",
      padding: "0 16px",
    },
  };

  // Auto-Leveller Draw Frames
  const autoLevellerModels = [
    {
      name: "Super D1 NXT",
      subtitle: "Auto-Leveller Draw Frame",
      badge: "Auto-Leveller Technology",
      image: "/images/history/D1NXT.png",
      route: "/products/super-d1",
      highlights: [
        "High quality yarn preparation",
        "Auto-levelling control",
        "Modern PLC/servo system",
      ],
    },
    {
      name: "Super D2",
      subtitle: "Auto-Leveller Draw Frame",
      badge: "Performance Series",
      image: "../images/manufacture/fa.png",
      route: "/products/super-d2",
      highlights: ["Stable drafting", "Mill-friendly operation", "Built for productivity"],
    },
    {
      name: "Super D2 Duos",
      subtitle: "Auto-LevellerDraw Frame",
      badge: "Advanced Series",
      image: "../images/manufacture/d2_plus.webp",
      route: "/products/super-d2-plus",
      highlights: ["Enhanced control options", "Higher efficiency focus", "Premium build"],
    },
  ];

  // Non Auto-Leveller Draw Frames
  const nonAutoLevellerModels = [
    {
      name: "Super Prima 1",
      subtitle: "Non Auto-Leveller Draw Frame",
      badge: "Non Auto-Leveller",
      image: "../images/manufacture/sdl1000e.png",
      route: "/products/super-prima1",
      highlights: ["Simple operation", "Reliable drafting", "Easy maintenance"],
    },
    {
      name: "Super Prima 2",
      subtitle: "Non Auto-Leveller Draw Frame",
      badge: "Non Auto-Leveller",
      image: "../images/manufacture/super_prima2.webp",
      route: "/products/super-prima2",
      highlights: ["Space saving", "Independent twin delivery", "Strong build quality"],
    },
  ];

  const CARD_IMAGE_ASPECT = "4 / 3";

  const renderCards = (models) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
        gap: "clamp(16px, 3vw, 24px)",
      }}
    >
      {models.map((m, index) => (
        <div
          key={m.name}
          id={`card-${m.name.replace(/\s/g, "-")}`}
          data-animate
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            opacity: isVisible[`card-${m.name.replace(/\s/g, "-")}`] ? 1 : 0,
            animation: isVisible[`card-${m.name.replace(/\s/g, "-")}`]
              ? `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
              : "none",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
          }}
        >
          {/* Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: CARD_IMAGE_ASPECT,
              backgroundColor: "#ffffff",
              overflow: "hidden",
            }}
          >
            <img
              src={m.image}
              alt={m.name}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>

          {/* Content */}
          <div style={{ padding: "clamp(16px, 3vw, 22px)" }}>
            <span
              style={{
                display: "inline-block",
                padding: "6px 14px",
                backgroundColor: "#eef2ff",
                color: "#4338ca",
                borderRadius: "999px",
                fontSize: "clamp(12px, 2vw, 13px)",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              {m.badge}
            </span>

            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 24px)",
                fontWeight: "800",
                color: "#111827",
                margin: "0 0 6px",
              }}
            >
              {m.name}
            </h2>

            <p style={{ color: "#6b7280", margin: "0 0 14px", fontSize: "clamp(14px, 2vw, 16px)" }}>
              {m.subtitle}
            </p>

            <ul
              style={{
                margin: "0 0 18px",
                paddingLeft: "18px",
                color: "#4b5563",
                lineHeight: 1.7,
                fontSize: "clamp(13px, 2vw, 15px)",
              }}
            >
              {m.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => navigate(m.route)}
              style={{
                width: "100%",
                backgroundColor: "#3b82f6",
                color: "white",
                padding: "12px 16px",
                borderRadius: "10px",
                fontWeight: "700",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(59,130,246,0.3)",
                transition: "all 0.3s ease",
                fontSize: "clamp(14px, 2vw, 16px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#3b82f6";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              More about {m.name}
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <style>{keyframes}</style>
      <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
        {/* VIDEO BANNER */}
        <section style={{ width: "100%", background: "#fff" }}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{ width: "100%", maxHeight: "100vh", objectFit: "contain" }}
          >
            <source src="/images/videos/Super-d2.mp4" type="video/mp4" />
          </video>
        </section>

        {/* Intro - Blue Banner with White Title */}
        <section
          style={{
            background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)",
            padding: "clamp(50px, 10vw, 80px) clamp(16px, 4vw, 20px)",
            animation: "fadeIn 0.8s ease-out",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Product Category Badge */}
            <span
              style={{
                display: "inline-block",
                padding: "8px 20px",
                backgroundColor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                color: "#ffffff",
                borderRadius: "50px",
                fontSize: "clamp(11px, 2vw, 13px)",
                fontWeight: "600",
                marginBottom: "clamp(24px, 5vw, 32px)",
                animation: "fadeInUp 0.6s ease-out 0.1s backwards",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Product Category
            </span>

            {/* Main Title with Underline */}
            <div style={styles.titleWrapper}>
              <h1 style={styles.bannerTitle}>Draw Frames</h1>
              <div style={styles.titleUnderline} />
            </div>

            {/* Decorative Dots - White */}
            <div style={styles.bannerDecorativeDots}>
              <div style={styles.bannerDot(0)} />
              <div style={styles.bannerDot(1)} />
              <div style={styles.bannerDot(2)} />
            </div>

            {/* Description */}
            <p
              style={{
                ...styles.bannerSubtitle,
                padding: "0 clamp(16px, 4vw, 20px)",
              }}
            >
              Explore our draw frame models built for consistent sliver quality, productivity and modern
              mill requirements.
            </p>
          </div>
        </section>

        {/* Non Auto-Leveller Section with Enhanced Styling */}
        <section
          id="non-auto-section"
          data-animate
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(40px, 8vw, 60px) clamp(16px, 4vw, 20px) clamp(30px, 6vw, 40px)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "clamp(32px, 6vw, 48px)" }}>
            <div style={styles.sectionTitleWrapper}>
              <h2 style={styles.sectionTitle}>
                Non Auto-Leveller Draw Frames
              </h2>
              <div style={styles.sectionTitleUnderline} />
            </div>

            {/* Decorative Dots - Blue */}
            <div style={styles.decorativeDots}>
              <div style={styles.dot(0)} />
              <div style={styles.dot(1)} />
              <div style={styles.dot(2)} />
            </div>

            <p style={styles.sectionDescription}>
              Robust and simple machines for stable drafting with easy operation.
            </p>
          </div>

          {renderCards(nonAutoLevellerModels)}
        </section>

        {/* Auto-Leveller Section with Enhanced Styling */}
        <section
          id="auto-section"
          data-animate
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(30px, 6vw, 40px) clamp(16px, 4vw, 20px) clamp(50px, 10vw, 80px)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "clamp(32px, 6vw, 48px)" }}>
            <div style={styles.sectionTitleWrapper}>
              <h2 style={styles.sectionTitle}>
                Auto-Leveller Draw Frames
              </h2>
              <div style={styles.sectionTitleUnderline} />
            </div>

            {/* Decorative Dots - Blue */}
            <div style={styles.decorativeDots}>
              <div style={styles.dot(0)} />
              <div style={styles.dot(1)} />
              <div style={styles.dot(2)} />
            </div>

            <p style={styles.sectionDescription}>
              Advanced levelling control for consistent sliver and quality-focused mills.
            </p>
          </div>

          {renderCards(autoLevellerModels)}
        </section>

        {/* ROI Section - Investment Value Proposition */}
        <section
          id="roi-section"
          data-animate
          style={{
            background: "linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)",
            padding: "clamp(50px, 10vw, 80px) clamp(16px, 4vw, 20px)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {/* ROI Badge - Separated at top */}
            <div style={{ textAlign: "center", marginBottom: "clamp(24px, 5vw, 32px)" }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "8px 20px",
                  backgroundColor: "#dbeafe",
                  color: "#1e40af",
                  borderRadius: "50px",
                  fontSize: "clamp(11px, 2vw, 13px)",
                  fontWeight: "600",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  border: "1px solid #bfdbfe",
                  animation: "fadeInUp 0.6s ease-out 0.1s backwards",
                }}
              >
                Return on Investment
              </span>
            </div>

            {/* Section Title - Centered */}
            <div style={{ textAlign: "center", marginBottom: "clamp(48px, 10vw, 64px)" }}>
              <div style={styles.sectionTitleWrapper}>
                <h2 style={styles.sectionTitle}>
                  Superior Value with Faster Returns
                </h2>
                <div style={styles.sectionTitleUnderline} />
              </div>

              {/* Decorative Dots - Blue */}
              <div style={styles.decorativeDots}>
                <div style={styles.dot(0)} />
                <div style={styles.dot(1)} />
                <div style={styles.dot(2)} />
              </div>

              <p style={{
                ...styles.sectionDescription,
                maxWidth: "800px",
              }}>
                Super Draw Frames deliver industry-leading payback periods of 12 to 18 months,
                combining lower initial investment with higher productivity gains.
              </p>
            </div>

            {/* ROI Comparison Chart */}
            <div
              data-animate
              id="roi-chart"
              style={{
                backgroundColor: "white",
                padding: "clamp(20px, 4vw, 32px)",
                borderRadius: "20px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                border: "1px solid #e5e7eb",
                opacity: isVisible["roi-chart"] ? 1 : 0,
                animation: isVisible["roi-chart"]
                  ? "fadeInUp 0.8s ease-out 0.2s forwards"
                  : "none",
                marginBottom: "clamp(40px, 8vw, 60px)",
              }}
            >
              <img
                src="/images/roi.png"
                alt="ROI Comparison: Super Drawframe vs Competitors"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "12px",
                }}
              />
              <p
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  color: "#6b7280",
                  fontSize: "clamp(13px, 2vw, 14px)",
                  fontStyle: "italic",
                }}
              >
                *Comparative analysis based on typical mill operating conditions and productivity metrics
              </p>
            </div>

            {/* Value Propositions with Icons */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
                gap: "clamp(20px, 4vw, 32px)",
                marginBottom: "clamp(40px, 8vw, 60px)",
              }}
            >
              {/* Lower Investment */}
              <div
                data-animate
                id="roi-card-1"
                style={{
                  backgroundColor: "white",
                  padding: "clamp(24px, 5vw, 32px)",
                  borderRadius: "16px",
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  border: "1px solid #e5e7eb",
                  opacity: isVisible["roi-card-1"] ? 1 : 0,
                  animation: isVisible["roi-card-1"]
                    ? "bounceIn 0.8s ease-out 0.3s forwards"
                    : "none",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    margin: "0 auto 20px",
                    background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(18px, 3vw, 20px)",
                    fontWeight: "700",
                    color: "#111827",
                    marginBottom: "12px",
                  }}
                >
                  Lower Initial Investment
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "clamp(14px, 2vw, 15px)",
                    lineHeight: 1.6,
                  }}
                >
                  Competitive pricing without compromising on quality and performance
                </p>
              </div>

              {/* Faster Payback */}
              <div
                data-animate
                id="roi-card-2"
                style={{
                  backgroundColor: "white",
                  padding: "clamp(24px, 5vw, 32px)",
                  borderRadius: "16px",
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  border: "1px solid #e5e7eb",
                  opacity: isVisible["roi-card-2"] ? 1 : 0,
                  animation: isVisible["roi-card-2"]
                    ? "bounceIn 0.8s ease-out 0.4s forwards"
                    : "none",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    margin: "0 auto 20px",
                    background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline>
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(18px, 3vw, 20px)",
                    fontWeight: "700",
                    color: "#111827",
                    marginBottom: "12px",
                  }}
                >
                  Faster Payback Period
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "clamp(14px, 2vw, 15px)",
                    lineHeight: 1.6,
                  }}
                >
                  Recover your investment in just 12 to 18 months with optimal efficiency
                </p>
              </div>

              {/* Higher Returns */}
              <div
                data-animate
                id="roi-card-3"
                style={{
                  backgroundColor: "white",
                  padding: "clamp(24px, 5vw, 32px)",
                  borderRadius: "16px",
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  border: "1px solid #e5e7eb",
                  opacity: isVisible["roi-card-3"] ? 1 : 0,
                  animation: isVisible["roi-card-3"]
                    ? "bounceIn 0.8s ease-out 0.5s forwards"
                    : "none",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    margin: "0 auto 20px",
                    background: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(18px, 3vw, 20px)",
                    fontWeight: "700",
                    color: "#111827",
                    marginBottom: "12px",
                  }}
                >
                  Superior Long-Term Gains
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "clamp(14px, 2vw, 15px)",
                    lineHeight: 1.6,
                  }}
                >
                  Higher productivity and lower operating costs for sustained profitability
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div
              style={{
                marginTop: "clamp(40px, 8vw, 60px)",
                textAlign: "center",
                padding: "clamp(32px, 6vw, 48px)",
                background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
                borderRadius: "20px",
                boxShadow: "0 10px 40px rgba(59,130,246,0.3)",
              }}
            >
              <h3
                style={{
                  fontSize: "clamp(22px, 4vw, 28px)",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "16px",
                }}
              >
                Ready to Maximize Your Returns?
              </h3>
              <p
                style={{
                  color: "#e0f2fe",
                  fontSize: "clamp(14px, 2vw, 16px)",
                  marginBottom: "24px",
                  maxWidth: "600px",
                  margin: "0 auto 24px",
                }}
              >
                Contact our team to discuss how Super Draw Frames can deliver
                exceptional value for your mill operations.
              </p>
              <button
                type="button"
                onClick={() => navigate("/contact")}
                style={{
                  backgroundColor: "white",
                  color: "#1e40af",
                  padding: "14px 32px",
                  borderRadius: "12px",
                  fontWeight: "700",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "clamp(14px, 2vw, 16px)",
                  boxShadow: "0 4px 20px rgba(255,255,255,0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 6px 30px rgba(255,255,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(255,255,255,0.3)";
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DrawFrame;