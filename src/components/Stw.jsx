import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Stw = () => {
  const location = useLocation();
  const sparesRef = useRef(null);

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(5);

  const sparesList = [
    { img: "./images/spares/spare1.webp", title: "Rotor cup with bearing" },
    { img: "./images/spares/spare2.webp", title: "Opening Roller" },
    { img: "./images/spares/yarn_sensor.webp", title: "Yarn Sensor" },
    { img: "./images/spares/motor.webp", title: "Feed stepper motor" },
    { img: "./images/spares/spare7.webp", title: "Top roller" },
    { img: "./images/spares/spare8.webp", title: "Top roller for simplex" },
    { img: "./images/spares/spare9.webp", title: "Sliver delivery parts" },
    { img: "./images/spares/winding.webp", title: "Winding Drums" },
    { img: "./images/spares/navels.webp", title: "High Performance Navels" },
    { img: "./images/spares/opening_rolls.webp", title: "Opening Rollers" },
    { img: "./images/spares/rotor_cup.webp", title: "Rotor Cup with Bearings" },
  ];

  const showcaseImages = [
    "./images/spares/winding.webp",
    "./images/spares/die_casting3.webp",
    "./images/spares/navels.webp",
    "./images/spares/die_casting1.webp",
    "./images/spares/opening_rolls.webp",
    "./images/spares/rotor_cup.webp",
    "./images/spares/die_casting2.webp",
    "./images/spares/spare9.webp",
  ];

  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width <= 500) setSlidesPerView(1);
    else if (width <= 700) setSlidesPerView(2);
    else if (width <= 900) setSlidesPerView(3);
    else if (width <= 1200) setSlidesPerView(4);
    else setSlidesPerView(5);
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const scrollTo = searchParams.get("scrollTo");

    if (scrollTo === "sparesandaccessories" && sparesRef.current) {
      sparesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const maxIndex = Math.ceil(sparesList.length / slidesPerView) - 1;
  const totalDots = Math.ceil(sparesList.length / slidesPerView);

  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const nextCarouselSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevCarouselSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToCarouselSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(id);
  }, [maxIndex]);

  // Responsive styles
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
    },
    heroSection: {
      background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
      color: "white",
      padding: "clamp(40px, 8vw, 80px) 20px",
      textAlign: "center",
    },
    heroTitle: {
      fontSize: "clamp(28px, 5vw, 48px)",
      fontWeight: "bold",
      margin: 0,
      lineHeight: "1.2",
    },
    contentSection: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "clamp(30px, 6vw, 60px) clamp(16px, 4vw, 20px)",
    },
    gridContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
      gap: "clamp(20px, 4vw, 40px)",
      alignItems: "center",
    },
    imageCard: {
      backgroundColor: "white",
      borderRadius: "clamp(12px, 2vw, 16px)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      overflow: "hidden",
      padding: "clamp(16px, 2.5vw, 20px)",
    },
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "clamp(8px, 1.5vw, 12px)",
    },
    badge: {
      display: "inline-block",
      padding: "6px 16px",
      backgroundColor: "#dbeafe",
      color: "#2563eb",
      borderRadius: "20px",
      fontSize: "clamp(12px, 2vw, 14px)",
      fontWeight: "600",
      marginBottom: "16px",
    },
    sectionTitle: {
      fontSize: "clamp(24px, 4vw, 36px)",
      fontWeight: "bold",
      color: "#111827",
      margin: "0 0 clamp(12px, 2vw, 16px) 0",
      lineHeight: "1.2",
    },
    bodyText: {
      color: "#4b5563",
      lineHeight: "1.6",
      marginBottom: "16px",
      fontSize: "clamp(14px, 2vw, 16px)",
    },
    infoBox: {
      backgroundColor: "#eff6ff",
      borderRadius: "clamp(8px, 1.5vw, 12px)",
      padding: "clamp(16px, 3vw, 24px)",
      marginTop: "clamp(16px, 3vw, 24px)",
    },
    highlightText: {
      color: "#1e40af",
      fontSize: "clamp(16px, 2.5vw, 18px)",
      fontWeight: "600",
      margin: 0,
      fontStyle: "italic",
    },
    sparesSection: {
      backgroundColor: "#f9fafb",
      padding: "clamp(30px, 6vw, 60px) clamp(16px, 4vw, 20px)",
    },
    serviceItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
    },
    serviceBullet: {
      width: "8px",
      height: "8px",
      backgroundColor: "#3b82f6",
      borderRadius: "50%",
      marginTop: "6px",
      flexShrink: 0,
    },
    showcaseImage: {
      width: "100%",
      height: "clamp(200px, 40vw, 320px)",
      objectFit: "cover",
      borderRadius: "clamp(8px, 1.5vw, 12px)",
      marginBottom: "clamp(8px, 1.5vw, 12px)",
    },
    thumbnailGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))",
      gap: "clamp(6px, 1.5vw, 10px)",
    },
    thumbnail: {
      width: "100%",
      height: "clamp(50px, 10vw, 70px)",
      objectFit: "cover",
      borderRadius: "clamp(6px, 1.5vw, 10px)",
    },
    carouselSection: {
      background: "linear-gradient(to bottom, #f8fafc, #e2e8f0)",
      padding: "clamp(40px, 8vw, 80px) 0",
      position: "relative",
    },
    carouselHeader: {
      textAlign: "center",
      marginBottom: "clamp(30px, 5vw, 50px)",
      color: "#1e293b",
      padding: "0 clamp(16px, 4vw, 20px)",
    },
    carouselTitle: {
      color: "#0f172a",
      fontSize: "clamp(20px, 4vw, 40px)",
      fontWeight: "700",
      marginBottom: "10px",
      lineHeight: "1.3",
    },
    carouselSubtitle: {
      color: "#475569",
      fontSize: "clamp(14px, 2.5vw, 18px)",
      lineHeight: "1.5",
    },
    carouselMain: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 clamp(12px, 3vw, 20px)",
    },
    slideCard: {
      background: "#ffffff",
      borderRadius: "clamp(8px, 1.5vw, 12px)",
      padding: "clamp(12px, 2.5vw, 20px)",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
      height: "100%",
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    slideImage: {
      width: "100%",
      height: "clamp(150px, 30vw, 220px)",
      objectFit: "cover",
      borderRadius: "clamp(6px, 1.5vw, 8px)",
      marginBottom: "clamp(10px, 2vw, 15px)",
    },
    slideTitle: {
      color: "#1e293b",
      fontSize: "clamp(14px, 2vw, 16px)",
      fontWeight: "600",
      margin: 0,
      textAlign: "center",
    },
    controlsContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "clamp(12px, 3vw, 20px)",
      marginTop: "clamp(20px, 4vw, 30px)",
      flexWrap: "wrap",
    },
    navButton: (disabled) => ({
      background: disabled ? "#94a3b8" : "#3b82f6",
      color: "white",
      border: "none",
      width: "clamp(35px, 6vw, 45px)",
      height: "clamp(35px, 6vw, 45px)",
      borderRadius: "50%",
      cursor: disabled ? "not-allowed" : "pointer",
      fontSize: "clamp(16px, 3vw, 20px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
    }),
    dotButton: (isActive) => ({
      width: isActive ? "clamp(18px, 3vw, 24px)" : "clamp(8px, 1.5vw, 10px)",
      height: "clamp(8px, 1.5vw, 10px)",
      borderRadius: isActive ? "5px" : "50%",
      background: isActive ? "#3b82f6" : "#64748b",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
    }),
    ctaSection: {
      background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
      padding: "clamp(30px, 6vw, 60px) clamp(16px, 4vw, 20px)",
      textAlign: "center",
    },
    ctaContainer: {
      maxWidth: "800px",
      margin: "0 auto",
    },
    ctaTitle: {
      fontSize: "clamp(22px, 4vw, 32px)",
      fontWeight: "bold",
      color: "white",
      margin: "0 0 16px 0",
      lineHeight: "1.3",
    },
    ctaText: {
      color: "#dbeafe",
      fontSize: "clamp(14px, 2.5vw, 18px)",
      marginBottom: "clamp(24px, 4vw, 32px)",
      lineHeight: "1.5",
    },
    ctaButton: {
      backgroundColor: "white",
      color: "#3b82f6",
      padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)",
      borderRadius: "8px",
      fontWeight: "600",
      fontSize: "clamp(14px, 2.5vw, 18px)",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Banner */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Super Group Companies</h1>
      </section>

      {/* Super Textile Services Overview */}
      <section style={styles.contentSection}>
        <div style={styles.gridContainer}>
          {/* Image */}
          <div>
            <div style={styles.imageCard}>
              <img
                src="./images/spares/super-textile.webp"
                alt="Super Textile Services"
                style={styles.image}
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span style={styles.badge}>Established Excellence</span>

            <h2 style={styles.sectionTitle}>Super Textile Services</h2>

            <p style={styles.bodyText}>
              A company formed by the Founder Mr A Thangavel for the supply of genuine Spares and Service Support for
              major manufacturers of Textile Spinning Machinery including Project Consultancy Services and Complete
              Turnkey Solutions.
            </p>

            <div style={styles.infoBox}>
              <p style={styles.highlightText}>Textile spares across the globe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spares & Accessories Section */}
      <section ref={sparesRef} style={styles.sparesSection}>
        <div style={styles.contentSection}>
          <div style={styles.gridContainer}>
            {/* Content */}
            <div>
              <h2 style={styles.sectionTitle}>Spares & Accessories</h2>

              <p style={styles.bodyText}>
                The timely availability of Spares is very critical for successfully running a Textile mill, with proper
                Service backup to maintain productivity and profitability.
              </p>

              <p style={styles.bodyText}>
                Super Textile Services, as it stands today supports its customers with various spares and service
                activities, for many imported machines, with imported spares or indigenous substitutes.
              </p>

              <div style={styles.infoBox}>
                <h3
                  style={{
                    fontWeight: "600",
                    color: "#111827",
                    marginTop: 0,
                    marginBottom: "16px",
                    fontSize: "clamp(16px, 2.5vw, 18px)",
                  }}
                >
                  Our Services
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {["Genuine imported spares", "Quality indigenous substitutes", "Comprehensive service backup"].map(
                    (text) => (
                      <div key={text} style={styles.serviceItem}>
                        <div style={styles.serviceBullet} />
                        <span style={{ color: "#4b5563", fontSize: "clamp(14px, 2vw, 16px)" }}>{text}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Static visual gallery */}
            <div>
              <div style={styles.imageCard}>
                <img
                  src={showcaseImages[0]}
                  alt="Textile spares showcase"
                  style={styles.showcaseImage}
                />

                <div style={styles.thumbnailGrid}>
                  {showcaseImages.slice(1, 5).map((src, idx) => (
                    <img
                      key={src + idx}
                      src={src}
                      alt={`Showcase ${idx + 2}`}
                      style={styles.thumbnail}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Replaceable Spares Carousel */}
      <section style={styles.carouselSection}>
        <header style={styles.carouselHeader}>
          <h2 style={styles.carouselTitle}>Replaceable Spares for textile machineries</h2>
          <p style={styles.carouselSubtitle}>
            Seamless operations start with dependable spares for your textile machines!
          </p>
        </header>

        <main style={styles.carouselMain}>
          <div style={{ overflow: "hidden", position: "relative" }}>
            <div
              style={{
                display: "flex",
                transition: "transform 0.5s ease",
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {sparesList.map((spare, index) => (
                <div
                  key={index}
                  style={{
                    minWidth: `${100 / slidesPerView}%`,
                    padding: "clamp(10px, 2vw, 15px)",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={styles.slideCard}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)";
                    }}
                  >
                    <img src={spare.img} alt={spare.title} style={styles.slideImage} />
                    <div>
                      <h3 style={styles.slideTitle}>{spare.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.controlsContainer}>
            <button
              style={styles.navButton(currentIndex === 0)}
              onClick={prevCarouselSlide}
              disabled={currentIndex === 0}
              onMouseEnter={(e) => {
                if (currentIndex !== 0) {
                  e.currentTarget.style.transform = "scale(1.1)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ‹
            </button>

            <div style={{ display: "flex", gap: "clamp(6px, 1.5vw, 8px)", flexWrap: "wrap", justifyContent: "center" }}>
              {Array.from({ length: totalDots }).map((_, i) => (
                <button key={i} style={styles.dotButton(i === currentIndex)} onClick={() => goToCarouselSlide(i)} />
              ))}
            </div>

            <button
              style={styles.navButton(currentIndex >= maxIndex)}
              onClick={nextCarouselSlide}
              disabled={currentIndex >= maxIndex}
              onMouseEnter={(e) => {
                if (currentIndex < maxIndex) {
                  e.currentTarget.style.transform = "scale(1.1)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ›
            </button>
          </div>
        </main>
      </section>

      {/* Footer CTA */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>Need Quality Textile Spares?</h2>
          <p style={styles.ctaText}>
            Contact us today for genuine spares, service support, and complete turnkey solutions for your textile
            machinery.
          </p>

          <a href="/contact" style={{ textDecoration: "none" }}>
            <button
              style={styles.ctaButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
              }}
            >
              Get in Touch
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Stw;
