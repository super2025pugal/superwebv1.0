
import React, { useRef, useEffect, useState } from "react";

const OpenEnd = () => {
  const [isVisible, setIsVisible] = useState({});
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

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

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

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

  const keyframes = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideInDown {
      from { opacity: 0; transform: translateY(-30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes expandWidth {
      from { width: 0; opacity: 0; }
      to { width: 70%; opacity: 1; }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.7; }
      50% { transform: scale(1.3); opacity: 1; }
    }
  `;

  const styles = {
    titleWrapper: {
      position: "relative",
      display: "inline-block",
      marginBottom: "24px",
    },
    bannerTitle: {
      margin: 0,
      fontSize: isMobile ? "32px" : isTablet ? "44px" : "56px",
      fontWeight: 700,
      color: "#ffffff",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      animation: "slideInDown 0.8s ease both",
      textShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
    },
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
    bannerDecorativeDots: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      marginBottom: "20px",
      animation: "fadeIn 1s ease 0.5s both",
    },
    bannerDot: (index) => ({
      width: index === 1 ? "10px" : "6px",
      height: index === 1 ? "10px" : "6px",
      borderRadius: "50%",
      background: index === 1 ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.6)",
      animation: `pulse 2s ease-in-out ${index * 0.2}s infinite`,
    }),
    bannerSubtitle: {
      margin: "0 auto",
      fontSize: isMobile ? "14px" : isTablet ? "16px" : "18px",
      color: "#e0f2fe",
      lineHeight: 1.8,
      fontWeight: 400,
      maxWidth: "900px",
      animation: "slideInUp 0.8s ease 0.4s both",
    },
  };

  const models = [
    {
      name: "Super RS1",
      subtitle: "Rotor Spinning Machine",
      badge: "Rotor Spinning Technology",
      image: "../images/products/open-end-rotor-2.webp",
      route: "/products/super-rs1",
      scale: 1,
      maxWidth: "100%",
      highlights: [
        "High-speed rotor spinning",
        "Stable yarn formation",
        "Proven industrial reliability",
      ],
    },
    {
      name: "Super RS2",
      subtitle: "Rotor Spinning Machine with DSDC",
      badge: "DSDC Technology",
      image: "/images/manufacture/super_rs2.png",
      route: "/products/super-rs2",
      scale: 1.32,
      maxWidth: "112%",
      highlights: [
        "Dual Side Dual Count processing",
        "Independent side controls",
        "Maximum production flexibility",
      ],
    },
  ];

  return (
    <>
      <style>{keyframes}</style>
      <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
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
            <source src="/images/videos/Super-rs2.mp4" type="video/mp4" />
          </video>
        </section>

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

            <div style={styles.titleWrapper}>
              <h1 style={styles.bannerTitle}>Open End Rotor Spinning Machines</h1>
              <div style={styles.titleUnderline} />
            </div>

            <div style={styles.bannerDecorativeDots}>
              <div style={styles.bannerDot(0)} />
              <div style={styles.bannerDot(1)} />
              <div style={styles.bannerDot(2)} />
            </div>

            <p
              style={{
                ...styles.bannerSubtitle,
                padding: "0 clamp(16px, 4vw, 20px)",
              }}
            >
              High-performance rotor spinning solutions engineered for productivity,
              flexibility, and consistent yarn quality across modern spinning mills.
            </p>
          </div>
        </section>

        <section
          id="models-section"
          data-animate
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(40px, 8vw, 60px) clamp(16px, 4vw, 20px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: "clamp(20px, 4vw, 28px)",
            }}
          >
            {models.map((m, index) => (
              <div
                key={m.name}
                id={`card-${m.name.replace(/\s/g, "-")}`}
                data-animate
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "18px",
                  boxShadow: "0 12px 34px rgba(0,0,0,0.12)",
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
                  e.currentTarget.style.boxShadow = "0 12px 34px rgba(0,0,0,0.12)";
                }}
              >
                <div
                  style={{
                    height: "340px",
                    background: "linear-gradient(180deg, #f9fafb 0%, #eef2ff 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "22px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    style={{
                      maxWidth: m.maxWidth,
                      maxHeight: "100%",
                      objectFit: "contain",
                      transform: `scale(${m.scale})`,
                      transition: "transform 0.35s ease",
                    }}
                    onMouseEnter={(e) => {
                      const currentScale = m.scale || 1;
                      e.currentTarget.style.transform = `scale(${currentScale * 1.05})`;
                    }}
                    onMouseLeave={(e) => {
                      const currentScale = m.scale || 1;
                      e.currentTarget.style.transform = `scale(${currentScale})`;
                    }}
                  />
                </div>

                <div style={{ padding: "clamp(20px, 4vw, 26px)" }}>
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

                  <p
                    style={{
                      color: "#6b7280",
                      margin: "0 0 14px",
                      fontSize: "clamp(14px, 2vw, 16px)",
                    }}
                  >
                    {m.subtitle}
                  </p>

                  <ul
                    style={{
                      margin: "0 0 22px",
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
                    onClick={() => {
                      window.location.href = m.route;
                    }}
                    style={{
                      width: "100%",
                      backgroundColor: "#2563eb",
                      color: "white",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      fontWeight: "700",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 6px 16px rgba(37,99,235,0.35)",
                      transition: "all 0.3s ease",
                      fontSize: "clamp(14px, 2vw, 16px)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#1d4ed8";
                      e.currentTarget.style.transform = "scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#2563eb";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    More about {m.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ROTOR SPINNING TECHNOLOGY SECTION */}
        <section
          id="technology-section"
          data-animate
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "clamp(60px, 10vw, 100px) clamp(16px, 4vw, 20px)",
            backgroundColor: "#ffffff",
          }}
        >
          <div
            style={{
              opacity: isVisible["technology-section"] ? 1 : 0,
              animation: isVisible["technology-section"]
                ? "fadeInUp 0.8s ease-out forwards"
                : "none",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "clamp(40px, 8vw, 60px)" }}>
              <h2
                style={{
                  fontSize: isMobile ? "28px" : isTablet ? "36px" : "42px",
                  fontWeight: "bold",
                  color: "#111827",
                  marginBottom: "16px",
                  lineHeight: 1.2,
                }}
              >
                Rotor Spinning Technology
              </h2>
              <div
                style={{
                  width: "80px",
                  height: "4px",
                  background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
                  margin: "0 auto 24px",
                  borderRadius: "2px",
                }}
              />
              <p
                style={{
                  fontSize: "clamp(15px, 2.5vw, 18px)",
                  color: "#6b7280",
                  maxWidth: "800px",
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                Advanced rotor spinning systems delivering exceptional yarn quality with
                superior efficiency and reliability for modern textile production.
              </p>
            </div>

            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                marginBottom: "clamp(40px, 8vw, 60px)",
              }}
            >
              <img
                src="/images/rs2center.png"
                alt="Rotor Spinning Technology Center"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)",
                gap: "clamp(24px, 5vw, 32px)",
                marginTop: "clamp(40px, 8vw, 60px)",
              }}
            >
              <div
                style={{
                  padding: "clamp(24px, 4vw, 32px)",
                  background: "#f8fafc",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "#3b82f6",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(18px, 3vw, 22px)",
                    fontWeight: 700,
                    color: "#1e293b",
                    marginBottom: "12px",
                  }}
                >
                  High-Speed Production
                </h3>
                <p
                  style={{
                    fontSize: "clamp(14px, 2vw, 16px)",
                    color: "#475569",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Advanced rotor technology enables high-speed yarn production with
                  consistent quality, maximizing output and mill efficiency.
                </p>
              </div>

              <div
                style={{
                  padding: "clamp(24px, 4vw, 32px)",
                  background: "#f8fafc",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "#10b981",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(18px, 3vw, 22px)",
                    fontWeight: 700,
                    color: "#1e293b",
                    marginBottom: "12px",
                  }}
                >
                  Versatile Yarn Range
                </h3>
                <p
                  style={{
                    fontSize: "clamp(14px, 2vw, 16px)",
                    color: "#475569",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Process a wide range of fiber types and counts with flexibility to
                  adapt to changing market demands and customer requirements.
                </p>
              </div>

              <div
                style={{
                  padding: "clamp(24px, 4vw, 32px)",
                  background: "#f8fafc",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "#f59e0b",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(18px, 3vw, 22px)",
                    fontWeight: 700,
                    color: "#1e293b",
                    marginBottom: "12px",
                  }}
                >
                  Proven Reliability
                </h3>
                <p
                  style={{
                    fontSize: "clamp(14px, 2vw, 16px)",
                    color: "#475569",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Robust engineering and quality components ensure minimal downtime,
                  reduced maintenance costs, and long-term operational reliability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OpenEnd;