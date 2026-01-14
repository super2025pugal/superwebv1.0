import React, { useState, useEffect } from "react";

const NewsEvents = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;

  const styles = {
    section: {
      backgroundColor: "#f9fafb",
      padding: isMobile ? "48px 16px" : isTablet ? "72px 32px" : "96px 48px",
      fontFamily: "Segoe UI, Roboto, sans-serif",
    },

    container: {
      maxWidth: "1600px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: isDesktop ? "1.4fr 2.6fr" : "1fr",
      gap: isMobile ? "28px" : "48px",
      alignItems: "stretch",
    },

    /* FEATURED – FIXED STRUCTURE */
    featuredCard: {
      backgroundColor: "#ffffff",
      boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
      display: "flex",
      flexDirection: "column",
      height: isDesktop ? "420px" : "100%",
    },

    featuredImageWrap: {
      position: "relative",
      height: isMobile ? "220px" : isTablet ? "320px" : "240px",
      overflow: "hidden",
    },

    featuredImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    featuredContent: {
      padding: isMobile ? "18px" : "28px",
      backgroundColor: "#ffffff",
      borderTop: "4px solid #0f9d58",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    featuredTitle: {
      fontSize: isMobile ? "22px" : "28px",
      fontWeight: "800",
      color: "#064e3b",
      marginBottom: "8px",
    },

    featuredText: {
      fontSize: isMobile ? "14px" : "16px",
      color: "#374151",
      lineHeight: 1.6,
    },

    /* GRID */
    grid: {
      display: "grid",
      gridTemplateColumns:
        isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(2, 1fr)",
      gap: isMobile ? "24px" : "40px",
    },

    card: {
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 18px 42px rgba(0,0,0,0.18)",
      transition: isMobile
        ? "none"
        : "transform 0.3s ease, box-shadow 0.3s ease",
    },

    cardHover: !isMobile
      ? {
          transform: "translateY(-8px)",
          boxShadow: "0 26px 60px rgba(0,0,0,0.25)",
        }
      : {},

    cardImage: {
      width: "100%",
      height: isMobile ? "200px" : isTablet ? "260px" : "300px",
      objectFit: "cover",
    },

    cardBody: {
      padding: isMobile ? "18px" : "26px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },

    cardTitle: {
      fontSize: isMobile ? "16px" : "18px",
      fontWeight: "700",
      color: "#0f9d58",
    },

    cardText: {
      fontSize: isMobile ? "14px" : "16px",
      color: "#1f2937",
      lineHeight: 1.6,
    },
    
  };

  const items = [
    { img: "/images/news1.png", title: "ITMA ASIA + CITME 2025", text: "Hi" },
    { img: "/images/news2.png", title: "Texfair 2024", text: "Hello" },
    { img: "/images/news3.png", title: "Conference at Banglades Feb2024", text: "Bye" },
    { img: "/images/news4.png", title: "Codissia 2022", text: "CU" },
    { img: "/images/news5.png", title: "Codissia 2019", text: "CU" },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* FEATURED */}
        <div style={styles.featuredCard}>
          <div style={styles.featuredImageWrap}>
            <img
              src="/images/news0.png"
              alt="News & Events"
              style={styles.featuredImage}
            />
          </div>
          <div style={styles.featuredContent}>
            <div style={styles.featuredTitle}>News & Events</div>
            <div style={styles.featuredText}>
              Latest exhibitions, industry events, and company highlights.
            </div>
          </div>
        </div>

        {/* GRID */}
        <div style={styles.grid}>
          {items.map((item, i) => (
            <div
              key={i}
              style={styles.card}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, styles.cardHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, styles.card)
              }
            >
              <img src={item.img} alt={item.title} style={styles.cardImage} />
              <div style={styles.cardBody}>
                <p style={styles.cardText}>{item.text}</p>
                <div style={styles.cardTitle}>{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
