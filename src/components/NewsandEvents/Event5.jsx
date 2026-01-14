import React, { useState, useEffect, useLayoutEffect } from "react";
import EventPageTemplate from "./Eventpagetemplate";

const Event5 = () => {
  const images = [
    { id: 1, img: "/images/news5.png" },
     { id: 2, img: "/images/Texfair19/tex1.png" },
    { id: 3,img: "/images/Texfair19/tex2.png" },
    { id: 4, img: "/images/Texfair19/tex3.png" },
  ];

  const [hovered, setHovered] = useState(null);
  const [buttonHover, setButtonHover] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [currentIndex, setCurrentIndex] = useState(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;
  const isTouch = isMobile || isTablet;

  const getGridColumns = () => {
    if (isMobile) return "repeat(1, 1fr)";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(3, 1fr)";
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const openModal = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      padding: isMobile ? "24px 16px" : isTablet ? "40px 32px" : "64px 48px",
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      position: "relative",
    },

    container: {
      maxWidth: "1280px",
      margin: "0 auto",
      width: "100%",
    },

    header: {
      marginBottom: isMobile ? "48px" : isTablet ? "64px" : "80px",
      textAlign: "center",
      position: "relative",
    },

    titleWrapper: {
      position: "relative",
      display: "inline-block",
      marginBottom: "24px",
    },

    title: {
      margin: 0,
      fontSize: isMobile ? "36px" : isTablet ? "48px" : "64px",
      fontWeight: 700,
      background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      position: "relative",
      animation: "slideInDown 0.8s ease both",
    },

    titleUnderline: {
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

    decorativeDots: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      marginBottom: "20px",
      animation: "fadeIn 1s ease 0.5s both",
    },

    dot: (index) => ({
      width: index === 1 ? "10px" : "6px",
      height: index === 1 ? "10px" : "6px",
      borderRadius: "50%",
      background: index === 1 
        ? "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)"
        : "#93c5fd",
      animation: `pulse 2s ease-in-out ${index * 0.2}s infinite`,
    }),

    subtitle: {
      margin: "0 auto",
      fontSize: isMobile ? "13px" : "15px",
      color: "#64748b",
      lineHeight: 1.8,
      fontWeight: 500,
      letterSpacing: "2px",
      textTransform: "uppercase",
      maxWidth: "600px",
      animation: "slideInUp 0.8s ease 0.2s both",
      position: "relative",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: getGridColumns(),
      gap: isMobile ? "20px" : isTablet ? "24px" : "32px",
      width: "100%",
    },

    card: (hover) => ({
      position: "relative",
      overflow: "hidden",
      background: "#ffffff",
      cursor: "pointer",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      borderRadius: "12px",
      boxShadow: hover 
        ? "0 12px 32px rgba(0, 0, 0, 0.12)"
        : "0 4px 16px rgba(0, 0, 0, 0.06)",
    }),

    imageWrap: {
      width: "100%",
      aspectRatio: "4 / 3",
      background: "#f9fafb",
      position: "relative",
      overflow: "hidden",
      borderRadius: "12px",
    },

    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease",
      filter: "grayscale(0.1)",
    },

    imgHover: {
      transform: "scale(1.05)",
      filter: "grayscale(0)",
    },

    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(255, 255, 255, 0.98)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      padding: isMobile ? "16px" : "40px",
      animation: "fadeIn 0.3s ease",
    },

    modal: {
      width: "100%",
      height: "100%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    zoomImg: {
      maxWidth: isMobile ? "100%" : "85%",
      maxHeight: isMobile ? "70%" : "80%",
      objectFit: "contain",
      userSelect: "none",
      animation: "zoomIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
    },

    closeBtn: (hover) => ({
      position: "absolute",
      top: isMobile ? "16px" : "32px",
      right: isMobile ? "16px" : "32px",
      border: "1px solid #e5e7eb",
      background: "#ffffff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#1a1a1a",
      width: isMobile ? "40px" : "48px",
      height: isMobile ? "40px" : "48px",
      borderRadius: "50%",
      transition: "all 0.3s ease",
      transform: hover ? "scale(1.1)" : "scale(1)",
      boxShadow: hover
        ? "0 8px 24px rgba(0, 0, 0, 0.12)"
        : "0 2px 8px rgba(0, 0, 0, 0.08)",
      zIndex: 10,
    }),

    closeIcon: {
      fontSize: isMobile ? "18px" : "20px",
      fontWeight: 300,
      lineHeight: 1,
    },

    navButton: (position, hover) => ({
      position: "absolute",
      top: "50%",
      [position]: isMobile ? "16px" : "32px",
      transform: `translateY(-50%) ${hover ? "scale(1.1)" : "scale(1)"}`,
      border: "1px solid #e5e7eb",
      background: "#ffffff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#1a1a1a",
      width: isMobile ? "40px" : "48px",
      height: isMobile ? "40px" : "48px",
      borderRadius: "50%",
      transition: "all 0.3s ease",
      boxShadow: hover
        ? "0 8px 24px rgba(0, 0, 0, 0.12)"
        : "0 2px 8px rgba(0, 0, 0, 0.08)",
      zIndex: 10,
    }),

    arrowIcon: {
      fontSize: isMobile ? "20px" : "24px",
      fontWeight: 300,
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    imageCounter: {
      position: "absolute",
      bottom: isMobile ? "16px" : "32px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#1a1a1a",
      padding: isMobile ? "8px 16px" : "10px 20px",
      borderRadius: "24px",
      fontSize: isMobile ? "12px" : "14px",
      fontWeight: 400,
      color: "#ffffff",
      letterSpacing: "0.5px",
      zIndex: 10,
    },
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        handlePrevious(e);
      } else if (e.key === "ArrowRight") {
        handleNext(e);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [currentIndex]);

  return (
    <EventPageTemplate currentPath="/NewsandEvents/Event5">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes zoomIn {
            from { 
              opacity: 0;
              transform: scale(0.95);
            }
            to { 
              opacity: 1;
              transform: scale(1);
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
        `}
      </style>

      <div style={styles.page}>
        <div style={styles.container}>
          <header style={styles.header}>
            <div style={styles.titleWrapper}>
              <h1 style={styles.title}>TEXFAIR 2019</h1>
              <div style={styles.titleUnderline} />
            </div>

            {/* Decorative Dots */}
            <div style={styles.decorativeDots}>
              <div style={styles.dot(0)} />
              <div style={styles.dot(1)} />
              <div style={styles.dot(2)} />
            </div>

            <p style={styles.subtitle}>
              TEXFAIR 2019 – Event Gallery
            </p>
          </header>

          <div style={styles.grid}>
            {images.map((item, index) => {
              const hover = !isTouch && hovered === item.id;
              return (
                <article
                  key={item.id}
                  style={styles.card(hover)}
                  onMouseEnter={() => !isTouch && setHovered(item.id)}
                  onMouseLeave={() => !isTouch && setHovered(null)}
                  onClick={() => openModal(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openModal(index);
                    }
                  }}
                  aria-label={`View image ${item.id}`}
                >
                  <div style={styles.imageWrap}>
                    <img
                      src={item.img}
                      alt={`TEXFAIR 2019 ${item.id}`}
                      style={{
                        ...styles.img,
                        ...(hover ? styles.imgHover : {}),
                      }}
                      loading="lazy"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {currentIndex !== null && (
        <div
          style={styles.overlay}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              style={styles.closeBtn(buttonHover === "close")}
              onClick={closeModal}
              onMouseEnter={() => setButtonHover("close")}
              onMouseLeave={() => setButtonHover(null)}
              aria-label="Close preview"
            >
              <span style={styles.closeIcon}>✕</span>
            </button>

            {/* Previous Button */}
            <button
              style={styles.navButton("left", buttonHover === "prev")}
              onClick={handlePrevious}
              onMouseEnter={() => setButtonHover("prev")}
              onMouseLeave={() => setButtonHover(null)}
              aria-label="Previous image"
            >
              <span style={styles.arrowIcon}>‹</span>
            </button>

            {/* Next Button */}
            <button
              style={styles.navButton("right", buttonHover === "next")}
              onClick={handleNext}
              onMouseEnter={() => setButtonHover("next")}
              onMouseLeave={() => setButtonHover(null)}
              aria-label="Next image"
            >
              <span style={styles.arrowIcon}>›</span>
            </button>

            {/* Image */}
            <img
              src={images[currentIndex].img}
              alt={`TEXFAIR 2019 ${images[currentIndex].id}`}
              style={styles.zoomImg}
            />

            {/* Image Counter */}
            <div style={styles.imageCounter}>
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </EventPageTemplate>
  );
};

export default Event5;