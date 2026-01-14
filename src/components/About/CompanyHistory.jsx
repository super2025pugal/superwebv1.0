import { useEffect, useState, useRef } from "react";

const CompanyHistory = () => {
  const [activeHash, setActiveHash] = useState(window.location.hash || "#1984");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [hoveredCard, setHoveredCard] = useState(null);
  const timelineRef = useRef(null);
  const scrollNodeRef = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#1984");
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      setTimelineHeight(timelineRef.current.offsetHeight);
    }

    const handleScroll = () => {
      // Page scroll progress for top indicator
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);

      if (timelineRef.current && scrollNodeRef.current) {
        const timelineTop = timelineRef.current.offsetTop;
        const timelineHeight = timelineRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollPosition = scrollTop;

        // Calculate when timeline enters viewport (starts filling)
        const startFilling = timelineTop - windowHeight + 200; // Start when 200px from entering view
        const endFilling = timelineTop + timelineHeight - 200; // End when 200px before leaving view

        // Calculate progress percentage
        if (scrollPosition < startFilling) {
          // Before timeline is in view
          setTimelineProgress(0);
          scrollNodeRef.current.style.opacity = "0";
        } else if (scrollPosition > endFilling) {
          // After scrolling past timeline
          setTimelineProgress(100);
          scrollNodeRef.current.style.top = timelineHeight + "px";
          scrollNodeRef.current.style.opacity = "0.3";
        } else {
          // Currently scrolling through timeline
          const scrollRange = endFilling - startFilling;
          const currentProgress = scrollPosition - startFilling;
          const progressPercent = (currentProgress / scrollRange) * 100;
          
          setTimelineProgress(Math.min(Math.max(progressPercent, 0), 100));

          // Position scroll node based on progress
          const nodePosition = (progressPercent / 100) * timelineHeight;
          scrollNodeRef.current.style.top = nodePosition + "px";
          scrollNodeRef.current.style.opacity = "1";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [timelineHeight]);

  const timelineData = [
    {
      hash: "1984",
      year: "1984",
      title: "Foundation",
      tagline: "The Beginning",
      image: "./images/history/timeline1.webp",
      description: "Established in 1984, Super Machine Works initially focused on spare parts manufacturing.",
    },
    {
      hash: "1990",
      year: "1990",
      title: "Drawframe",
      tagline: "Innovation Begins",
      image: "./images/history/timeline2.webp",
      description: "Super SD400 introduced - a dual-delivery machine capable of 400 MPM.",
    },
    {
      hash: "1992",
      year: "1992",
      title: "Comber & Lap Former",
      tagline: "Market Impact",
      image: "./images/history/timeline3.webp",
      description: "SUPER COMBER SC 250 created waves in Indian Textile Industry.",
    },
    {
      hash: "1996",
      year: "1996",
      title: "Ring Frame Revolution",
      tagline: "Scaling Up",
      image: "./images/history/timeline4.webp",
      description: "SUPER RING SPINNING MACHINE SR20/1 with 20000 spindle rpm.",
    },
    {
      hash: "2005",
      year: "2005",
      title: "Auto Leveler Era",
      tagline: "Smart Technology",
      image: "./images/history/timeline5.webp",
      description: "First Auto Leveler Drawframe SUPER ASD 600 with 600 MPM.",
    },
    {
      hash: "2016to2021",
      year: "2016-2021",
      title: "SUPER ASD 1000Z",
      tagline: "Next Generation",
      image: "./images/history/timeline6.png",
      description: "Fully modified version with 1000 MPM mechanical speed.",
    },
    {
      hash: "2017to2021",
      year: "2017-2021",
      title: "Open End Spinning",
      tagline: "Spinning Technology",
      image: "./images/history/os480.webp",
      description: "SUPER OS 480 with 105,000 rotor RPM capacity.",
    },
    {
      hash: "2021to2024",
      year: "2021-2024",
      title: "SUPER D1",
      tagline: "Advanced Design",
      image: "./images/history/timeline9.webp",
      description: "A simple step Ahead.",
    },
    {
      hash: "2022topresent",
      year: "2022-present",
      title: "SUPER RS 1",
      tagline: "Enhanced Efficiency",
      image: "./images/history/timeline8.png",
      description: "Latest advancement with 105,000 rotor RPM capacity.",
    },
    {
      hash: "2024",
      year: "2024-present",
      title: "Super RS 2",
      tagline: "DSDC Technology",
      image: "./images/history/timeline10.png",
      description: "Semi-Automatic Rotor Spinning Machine with advanced tech.",
    },
    {
      hash: "present",
      year: "2024-present",
      title: "Super Card SC1",
      tagline: "Carding Excellence",
      image: "./images/manufacture/super_card_sc1.webp",
      description: "Superior carding with 37 working rotary flats.",
    },
    {
      hash: "present1",
      year: "2024-present",
      title: "Super D1 NXT",
      tagline: "Enhanced capabilities",
      image: "./images/history/D1NXT.png",
      description: "Fully upgraded Auto Leveler Drawframe with 1000 MPM.",
    },
    {
      hash: "present2",
      year: "2024-present",
      title: "Super D2",
      tagline: "Spinning success",
      image: "./images/history/Superd2.png",
      description: "Superior Quality with Productivity.",
    },
    {
      hash: "present3",
      year: "2024-present",
      title: "Super D2 Duos",
      tagline: "Precision Technology",
      image: "./images/manufacture/d2_plus.webp",
      description: "Compact and Space saving independent Duos.",
    },
  ];

  const styles = {
    wrapper: {
      position: "relative",
      minHeight: "100vh",
      background: "#f9fafb",
      paddingTop: isMobile ? "60px" : "100px",
      paddingBottom: isMobile ? "60px" : "100px",
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      overflow: "hidden",
    },
    container: {
      position: "relative",
      maxWidth: "1400px",
      margin: "0 auto",
      padding: isMobile ? "0 20px" : "0 40px",
      zIndex: 1,
    },
    header: {
      textAlign: "center",
      marginBottom: isMobile ? "50px" : "80px",
      animation: "fadeIn 1s ease-out forwards",
    },
    headerBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      fontSize: isMobile ? "11px" : "13px",
      fontWeight: "700",
      color: "#1E3A8A",
      letterSpacing: isMobile ? "1.5px" : "2px",
      marginBottom: isMobile ? "20px" : "28px",
      textTransform: "uppercase",
    },
    badgeLine: {
      width: isMobile ? "30px" : "40px",
      height: "2px",
      backgroundColor: "#2563EB",
    },
    title: {
      fontSize: isMobile ? "36px" : "clamp(2.75rem, 5vw, 4.5rem)",
      fontWeight: "900",
      color: "#0f172a",
      marginBottom: isMobile ? "16px" : "24px",
      lineHeight: "1.05",
      letterSpacing: "-0.03em",
    },
    titleGradient: {
      background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    titleDivider: {
      width: isMobile ? "60px" : "80px",
      height: isMobile ? "3px" : "4px",
      background: "linear-gradient(90deg, #1E3A8A 0%, #2563EB 100%)",
      margin: isMobile ? "20px auto" : "28px auto",
      borderRadius: "2px",
    },
    subtitle: {
      fontSize: isMobile ? "15px" : "17px",
      color: "#64748b",
      fontWeight: "500",
      lineHeight: "1.6",
    },
    timeline: {
      position: "relative",
      marginBottom: "50px",
    },
    centerLineContainer: {
      position: "absolute",
      left: isMobile ? "30px" : "50%",
      transform: isMobile ? "none" : "translateX(-50%)",
      top: "0",
      bottom: "0",
      width: isMobile ? "3px" : "3px",
      background: "#e2e8f0",
      zIndex: "1",
      borderRadius: "2px",
    },
    centerLineFill: {
      position: "absolute",
      left: "0",
      top: "0",
      width: "100%",
      background: "linear-gradient(180deg, #1E3A8A 0%, #2563EB 50%, #1E3A8A 100%)",
      transition: "height 0.1s linear",
      zIndex: "2",
      borderRadius: "2px",
      boxShadow: isMobile 
        ? "0 0 15px rgba(37, 99, 235, 0.5)" 
        : "0 0 20px rgba(37, 99, 235, 0.4)",
    },
    scrollNode: {
      position: "absolute",
      left: isMobile ? "30px" : "50%",
      transform: "translateX(-50%)",
      width: isMobile ? "22px" : "26px",
      height: isMobile ? "22px" : "26px",
      background: "white",
      border: isMobile ? "4px solid #2563EB" : "5px solid #2563EB",
      borderRadius: "50%",
      boxShadow: "0 0 0 12px rgba(37, 99, 235, 0.15), 0 8px 16px rgba(37, 99, 235, 0.3)",
      zIndex: "15",
      transition: "opacity 0.3s ease",
      opacity: "0",
      top: "0",
      animation: "nodePulse 2.5s ease-in-out infinite",
    },
    mobileItem: {
      marginBottom: isMobile ? "50px" : "60px",
      position: "relative",
      paddingLeft: "80px",
      display: "flex",
      flexDirection: "column",
      gap: "0",
      animation: `fadeInUp 0.6s ease-out backwards`,
    },
    mobileCard: {
      background: "white",
      borderRadius: isMobile ? "16px" : "20px",
      overflow: "hidden",
      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.02)",
      border: "2px solid #e2e8f0",
      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
    mobileImageContainer: {
      width: "100%",
      height: isMobile ? "200px" : "260px",
      overflow: "hidden",
      position: "relative",
      background: "#f8fafc",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    mobileImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
    mobileContent: {
      padding: isMobile ? "24px" : "32px",
    },
    mobileNode: {
      position: "absolute",
      left: "30px",
      top: "120px",
      transform: "translateX(-50%)",
      width: "18px",
      height: "18px",
      background: "white",
      border: "4px solid #2563EB",
      borderRadius: "50%",
      boxShadow: "0 0 0 10px rgba(37,99,235,0.12), 0 4px 12px rgba(37,99,235,0.2)",
      zIndex: "10",
    },
    item: {
      marginBottom: isMobile ? "60px" : "80px",
      display: "flex",
      gap: isMobile ? "30px" : "50px",
      alignItems: "stretch",
      position: "relative",
      zIndex: "3",
      flexDirection: "row",
    },
    itemOdd: {
      flexDirection: "row-reverse",
    },
    content: {
      flex: "1",
      background: "white",
      padding: isMobile ? "30px" : "40px",
      borderRadius: isMobile ? "16px" : "20px",
      border: "2px solid #e2e8f0",
      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.02)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
    },
    contentHover: {
      boxShadow: "0 10px 40px rgba(37, 99, 235, 0.15)",
      borderColor: "#2563EB",
      transform: "translateY(-4px)",
    },
    image: {
      flex: "1",
      borderRadius: isMobile ? "16px" : "20px",
      overflow: "hidden",
      background: "#f1f5f9",
      position: "relative",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
      border: "2px solid #e2e8f0",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
    overlay: {
      position: "absolute",
      inset: "0",
      background: "linear-gradient(135deg, rgba(30, 58, 138, 0) 0%, rgba(37, 99, 235, 0.08) 100%)",
      pointerEvents: "none",
    },
    node: {
      position: "absolute",
      left: "50%",
      top: isMobile ? "40px" : "50px",
      transform: "translateX(-50%)",
      width: "18px",
      height: "18px",
      background: "white",
      border: "3px solid #2563EB",
      borderRadius: "50%",
      boxShadow: "0 0 0 8px rgba(37,99,235,0.1), 0 4px 12px rgba(37,99,235,0.15)",
      zIndex: "10",
    },
    yearBadge: {
      fontSize: isMobile ? "11px" : "13px",
      fontWeight: "800",
      color: "#1E3A8A",
      background: "#dbeafe",
      padding: isMobile ? "6px 14px" : "8px 16px",
      borderRadius: "6px",
      width: "fit-content",
      marginBottom: isMobile ? "14px" : "16px",
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      border: "1px solid #bfdbfe",
    },
    itemTitle: {
      fontSize: isMobile ? "24px" : "28px",
      fontWeight: "900",
      color: "#0f172a",
      marginBottom: "8px",
      marginTop: "0",
      lineHeight: "1.2",
      letterSpacing: "-0.02em",
    },
    itemTagline: {
      fontSize: isMobile ? "13px" : "15px",
      color: "#2563EB",
      fontWeight: "700",
      marginBottom: isMobile ? "16px" : "20px",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
    divider: {
      width: isMobile ? "50px" : "60px",
      height: isMobile ? "3px" : "4px",
      background: "linear-gradient(90deg, #1E3A8A 0%, #2563EB 100%)",
      marginBottom: isMobile ? "16px" : "20px",
      borderRadius: "2px",
    },
    itemDesc: {
      fontSize: isMobile ? "15px" : "17px",
      color: "#64748b",
      lineHeight: "1.8",
      margin: "0",
      fontWeight: "400",
    },
    scrollIndicator: {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      height: isMobile ? "3px" : "4px",
      background: "linear-gradient(90deg, #1E3A8A 0%, #2563EB 50%, #1E3A8A 100%)",
      width: `${scrollProgress}%`,
      zIndex: "100",
      transition: "width 0.1s linear",
      boxShadow: "0 2px 8px rgba(37, 99, 235, 0.4)",
    },
  };

  return (
    <div style={styles.wrapper}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #f9fafb;
        }

        a {
          text-decoration: none;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #1E3A8A 0%, #2563EB 100%);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #1E3A8A 50%, #2563EB 100%);
        }

        ::selection {
          background: #2563EB;
          color: white;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes nodePulse {
          0%, 100% {
            box-shadow: 0 0 0 12px rgba(37, 99, 235, 0.15), 0 8px 16px rgba(37, 99, 235, 0.3);
            transform: translate(-50%, 0) scale(1);
          }
          50% {
            box-shadow: 0 0 0 16px rgba(37, 99, 235, 0.2), 0 10px 20px rgba(37, 99, 235, 0.35);
            transform: translate(-50%, 0) scale(1.1);
          }
        }
      `}</style>

      {/* Scroll Progress Indicator */}
      <div style={styles.scrollIndicator}></div>

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
            top: "120px",
            right: "5%",
            width: "250px",
            height: "250px",
            border: "2px solid rgba(37, 99, 235, 0.1)",
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
              width: "170px",
              height: "170px",
              border: "2px solid rgba(37, 99, 235, 0.15)",
              borderRadius: "50%",
            }}
          />
        </div>
      )}

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerBadge}>
            <div style={styles.badgeLine} />
            Our Journey
          </div>
          <h1 style={styles.title}>
            Company <span style={styles.titleGradient}>Timeline</span>
          </h1>
          <div style={styles.titleDivider}></div>
          <p style={styles.subtitle}>
            Four decades of pioneering innovation and manufacturing excellence
          </p>
        </div>

        {/* Timeline */}
        <div style={styles.timeline} ref={timelineRef}>
          <div style={styles.centerLineContainer}>
            <div style={{ ...styles.centerLineFill, height: `${timelineProgress}%` }}></div>
          </div>

          {/* Scroll Following Node */}
          <div ref={scrollNodeRef} style={styles.scrollNode}></div>

          {isMobile ? (
            // Mobile Layout - Card Style
            timelineData.map((item, idx) => (
              <div
                key={item.hash + idx}
                style={{
                  ...styles.mobileItem,
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <div style={styles.mobileNode}></div>

                <a href={`#${item.hash}`} style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      ...styles.mobileCard,
                      ...(activeHash === `#${item.hash}`
                        ? {
                            boxShadow: "0 10px 40px rgba(37, 99, 235, 0.2)",
                            borderColor: "#2563EB",
                            transform: "scale(1.02)",
                          }
                        : {}),
                    }}
                    onTouchStart={(e) => {
                      e.currentTarget.style.transform = "scale(0.98)";
                    }}
                    onTouchEnd={(e) => {
                      e.currentTarget.style.transform =
                        activeHash === `#${item.hash}` ? "scale(1.02)" : "scale(1)";
                    }}
                  >
                    {/* Image */}
                    <div style={styles.mobileImageContainer}>
                      <img src={item.image} alt={item.title} style={styles.mobileImage} />
                      <div style={styles.overlay}></div>
                    </div>

                    {/* Content */}
                    <div style={styles.mobileContent}>
                      <div style={styles.yearBadge}>{item.year}</div>
                      <h3 style={styles.itemTitle}>{item.title}</h3>
                      <p style={styles.itemTagline}>{item.tagline}</p>
                      <div style={styles.divider}></div>
                      <p style={styles.itemDesc}>{item.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))
          ) : (
            // Desktop Layout - Zigzag
            timelineData.map((item, idx) => (
              <div key={item.hash + idx} style={{ ...styles.item, ...(idx % 2 === 1 ? styles.itemOdd : {}) }}>
                {/* Content */}
                <a href={`#${item.hash}`} style={{ flex: "1", textDecoration: "none" }}>
                  <div
                    style={{
                      ...styles.content,
                      ...(activeHash === `#${item.hash}` ? styles.contentHover : {}),
                      ...(hoveredCard === idx ? styles.contentHover : {}),
                    }}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Subtle glow effect on hover */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-50%",
                        right: "-50%",
                        width: "200%",
                        height: "200%",
                        background: "radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)",
                        opacity: hoveredCard === idx ? 1 : 0,
                        transition: "opacity 0.5s ease",
                        pointerEvents: "none",
                      }}
                    />

                    <div style={styles.yearBadge}>{item.year}</div>
                    <h3 style={styles.itemTitle}>{item.title}</h3>
                    <p style={styles.itemTagline}>{item.tagline}</p>
                    <div style={styles.divider}></div>
                    <p style={styles.itemDesc}>{item.description}</p>
                  </div>
                </a>

                {/* Image */}
                <div style={styles.image}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      ...styles.img,
                      transform: hoveredCard === idx ? "scale(1.08)" : "scale(1)",
                    }}
                  />
                  <div style={styles.overlay}></div>
                </div>

                {/* Static Node */}
                <div style={styles.node}></div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;