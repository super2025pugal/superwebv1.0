import { useState, useRef, useEffect } from "react";

const SuperCardsc1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

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

    setTimeout(playVideo, 100);
  }, []);

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

  const images = [
    "/images/manufacture/super_card_sc1.webp",
    "/images/manufacture/super_card_sc1_internal.webp",
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

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
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
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
      fontSize: isMobile ? "36px" : isTablet ? "48px" : "64px",
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
            <source src="/images/videos/Super-sc1.mp4" type="video/mp4" />
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
              Premium Carding Solution
            </span>

            <div style={styles.titleWrapper}>
              <h1 style={styles.bannerTitle}>Super Card SC1</h1>
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
              With Auto Leveller - Engineered around globally proven carding concepts,
              delivering superior fibre control and consistent sliver quality.
            </p>
          </div>
        </section>

        <section
          id="overview-section"
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
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)",
              gap: "clamp(28px, 6vw, 40px)",
              alignItems: "center",
            }}
          >
            <div
              id="slider-animate"
              data-animate
              style={{
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                overflow: "hidden",
                opacity: isVisible["slider-animate"] ? 1 : 0,
                animation: isVisible["slider-animate"]
                  ? "slideInLeft 0.6s ease-out forwards"
                  : "none",
              }}
            >
              <div
                style={{
                  position: "relative",
                  paddingBottom: isMobile ? "75%" : "100%",
                }}
              >
                <img
                  src={images[currentSlide]}
                  alt="Super Card SC1"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "opacity 0.3s ease",
                  }}
                />

                <button
                  onClick={prevSlide}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "14px",
                    transform: "translateY(-50%)",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "rgba(255,255,255,0.9)",
                    fontSize: "20px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                  }}
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "14px",
                    transform: "translateY(-50%)",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: "rgba(255,255,255,0.9)",
                    fontSize: "20px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(-50%) scale(1)";
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
                  padding: "14px",
                  background: "#f9fafb",
                }}
              >
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    style={{
                      width: i === currentSlide ? "32px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer",
                      background: i === currentSlide ? "#3b82f6" : "#d1d5db",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>
            </div>

            <div
              id="details-animate"
              data-animate
              style={{
                opacity: isVisible["details-animate"] ? 1 : 0,
                animation: isVisible["details-animate"]
                  ? "slideInRight 0.6s ease-out forwards"
                  : "none",
              }}
            >
              <h2
                style={{
                  fontSize: isMobile ? "26px" : isTablet ? "32px" : "36px",
                  fontWeight: "bold",
                  margin: "0 0 12px",
                  color: "#111827",
                }}
              >
                Product Details
              </h2>

              <p
                style={{
                  color: "#4b5563",
                  lineHeight: 1.7,
                  fontSize: "clamp(14px, 2vw, 16px)",
                  marginBottom: "clamp(24px, 4vw, 32px)",
                }}
              >
                SUPER CARD is engineered around globally proven carding concepts,
                delivering superior fibre control, cleaning efficiency and
                consistent sliver quality.
              </p>

              <div>
                <h3
                  style={{
                    fontWeight: 700,
                    marginBottom: "20px",
                    fontSize: "clamp(18px, 3vw, 22px)",
                    color: "#111827",
                  }}
                >
                  Choose Configuration
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      border: "2px solid #3b82f6",
                      borderRadius: "14px",
                      padding: "clamp(16px, 3vw, 20px)",
                      cursor: "pointer",
                      backgroundColor: "#dbeafe",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 16px rgba(59, 130, 246, 0.1)",
                    }}
                    onClick={() => {
                      // When integrated with your router, this will navigate to the single licker-in page
                      window.location.href = "/products/supercard-sc1";
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(59, 130, 246, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 16px rgba(59, 130, 246, 0.1)";
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "clamp(16px, 2.5vw, 18px)",
                        fontWeight: 600,
                        marginBottom: "8px",
                        color: "#1e40af",
                      }}
                    >
                      Single Licker-in
                    </h4>
                    <p
                      style={{
                        color: "#1e3a8a",
                        fontSize: "clamp(13px, 2vw, 14px)",
                        lineHeight: 1.5,
                        margin: "0 0 12px",
                      }}
                    >
                      Optimised for standard fibre processing with high efficiency
                      and reduced power consumption.
                    </p>
                    <span
                      style={{
                        display: "inline-block",
                        color: "#2563eb",
                        fontWeight: 600,
                        fontSize: "clamp(13px, 2vw, 14px)",
                      }}
                    >
                      View Details →
                    </span>
                  </div>

                  <div
                    style={{
                      border: "2px solid #059669",
                      borderRadius: "14px",
                      padding: "clamp(16px, 3vw, 20px)",
                      cursor: "pointer",
                      backgroundColor: "#d1fae5",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 16px rgba(5, 150, 105, 0.1)",
                    }}
                    onClick={() => {
                      // When integrated with your router, this will navigate to the triple licker-in page
                      window.location.href = "/products/Triplelickerin";
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(5, 150, 105, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 16px rgba(5, 150, 105, 0.1)";
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "clamp(16px, 2.5vw, 18px)",
                        fontWeight: 600,
                        marginBottom: "8px",
                        color: "#065f46",
                      }}
                    >
                      Triple Licker-in
                    </h4>
                    <p
                      style={{
                        color: "#047857",
                        fontSize: "clamp(13px, 2vw, 14px)",
                        lineHeight: 1.5,
                        margin: "0 0 12px",
                      }}
                    >
                      Advanced pre-opening and cleaning for superior trash
                      extraction at higher production rates.
                    </p>
                    <span
                      style={{
                        display: "inline-block",
                        color: "#10b981",
                        fontWeight: 600,
                        fontSize: "clamp(13px, 2vw, 14px)",
                      }}
                    >
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ADVANCED CARDING TECHNOLOGY */}
          <div
            id="card-center-section"
            data-animate
            style={{
              marginTop: "clamp(60px, 10vw, 80px)",
              opacity: isVisible["card-center-section"] ? 1 : 0,
              animation: isVisible["card-center-section"]
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
                Advanced Carding Technology
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
                Experience precision engineering with our state-of-the-art carding system,
                designed for optimal fiber processing and unmatched quality output.
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
                src="/images/cardcenterpage.png"
                alt="Super Card SC1 Carding Center"
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
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6m8.66-7.66l-5.2 3M8.54 14.66l-5.2 3M3.34 8.34l5.2 3m7.32 0l5.2-3"/>
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
                  Superior Fiber Control
                </h3>
                <p
                  style={{
                    fontSize: "clamp(14px, 2vw, 16px)",
                    color: "#475569",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Precision-engineered cylinders and flats ensure optimal fiber opening
                  and individualization for consistent sliver quality.
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
                    <path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6"/>
                    <path d="M14 3v5h5M18 21v-6m-3 3h6"/>
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
                  Enhanced Cleaning
                </h3>
                <p
                  style={{
                    fontSize: "clamp(14px, 2vw, 16px)",
                    color: "#475569",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Advanced trash extraction system removes impurities efficiently,
                  delivering cleaner output with minimal fiber loss.
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
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
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
                  Energy Efficient
                </h3>
                <p
                  style={{
                    fontSize: "clamp(14px, 2vw, 16px)",
                    color: "#475569",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Optimized drive systems and aerodynamic design reduce power
                  consumption while maintaining high productivity levels.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SuperCardsc1;