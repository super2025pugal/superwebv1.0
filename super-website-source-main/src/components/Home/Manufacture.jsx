import React, { useState, useEffect } from "react";

const Manufacture = () => {
  const primaryBlue = "#2563EB";
  const darkBlue = "#1E3A8A";
  const [activeGroup, setActiveGroup] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlides, setCurrentSlides] = useState({});

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // SVG Icons
  const ChevronRight = () => (
    <svg
      width={isMobile ? "14" : "16"}
      height={isMobile ? "14" : "16"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );

  const ChevronLeft = () => (
    <svg
      width={isMobile ? "14" : "16"}
      height={isMobile ? "14" : "16"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );

  const ArrowRight = () => (
    <svg
      width={isMobile ? "16" : "18"}
      height={isMobile ? "16" : "18"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  const products = [
    {
      group: "SUPER CARD SC1",
      tagline: "Revolutionary Carding Technology",
      items: [
        {
          images: ["super_card_sc1.webp", "super_card_sc1_internal.webp"],
          title: "Super Card SC1",
          subtitle: "with auto leveller",
          desc: "SUPER CARD has evolved around the best and most successful carding concepts in the world. Wide Active Carding Zone with very efficient Pre Carding and Post Carding Segments ensure perfect Cleaning and Fibre Control at higher Production rates.",
          features: [
            "Auto Leveller",
            "Dual Configuration",
            "Wide Active Zone",
            "Perfect Cleaning",
            "High Efficiency",
            "High Production",
          ],
          link: "products/supercard-sc1",
        },
      ],
    },
    {
      group: "SUPER PRIMA 1",
      tagline: "First Passage Excellence",
      items: [
        {
          images: ["sd1000e.webp", "sdl1000e.webp"],
          title: "SD1000e / SDL1000e",
          subtitle: "Non AutoLeveller Drawframes",
          desc: "SUPER PRIMA Series 1st Passage Breaker Drawframe ensures a smooth transition of Carding Sliver to the Finisher Auto Leveller Drawframes with Superior Quality and Productivity. 'L' variant denotes Large Delivery CANS which Benefits with Higher Production Efficiency.",
          features: [
            "1st Passage",
            "Superior Quality",
            "Large Delivery Option",
            "Enhanced Efficiency",
            "High Productivity",
            "Optimal Output",
          ],
          link: "products/super-prima1",
        },
      ],
    },
    {
      group: "SUPER D1 / D2",
      tagline: "Auto-Leveller Innovation",
      items: [
        {
          images: ["d1.webp"],
          title: "SUPER D1",
          subtitle: "auto leveller drawframes",
          desc: "Auto-Leveller Draw frames have become an integral part of a modern textile mill producing High Quality Yarns.",
          features: ["Auto-Leveller", "High Quality", "Modern Design"],
          link: "products/super-d1",
        },
        {
          images: ["d2.webp"],
          title: "SUPER D2",
          subtitle: "auto leveller drawframes",
          desc: "Advanced technology and enhanced features with high production output with continuous waste removal system.",
          features: ["Advanced Tech", "Waste Removal", "High Output"],
          link: "products/super-d2",
        },
      ],
    },
    {
      group: "SUPER PRIMA 2",
      tagline: "Space Optimization Masters",
      items: [
        {
          images: ["super_prima2.webp", "super_prima2_inner.webp"],
          title: "Super Prima - II",
          subtitle: "non auto leveller drawframes",
          desc: "SUPER PRIMA II provides improved space utilization with compact layout and greatly reduces operator movement. Improves lesser downtime and higher production efficiency. Dual delivery option greatly helps in lesser Capital investment and provides a quicker payback.",
          features: [
            "Compact Layout",
            "Dual Delivery",
            "Reduced Downtime",
            "Space Efficient",
            "Cost Effective",
            "Quick ROI",
          ],
          link: "products/super-prima2",
        },
      ],
    },
    {
      group: "SUPER D2 PLUS",
      tagline: "Twin Technology Leaders",
      items: [
        {
          images: ["d2_plus.webp", "d2_plus_inner.webp"],
          title: "Super D2 Plus",
          subtitle: "auto leveller drawframes",
          desc: "Independent Twins – Two different materials with different process parameters can be handled independently side by side. Better space utilization with lesser operator movement. Plus - Indicates Additional Delivery and Additional Production with Additional Savings.",
          features: [
            "Independent Twins",
            "Dual Processing",
            "Additional Output",
            "Space Optimized",
            "Extra Savings",
            "Enhanced Production",
          ],
          link: "products/super-d2-plus",
        },
      ],
    },
    {
      group: "SUPER RS1 / RS2",
      tagline: "Rotor Spinning Revolution",
      items: [
        {
          images: ["super_rs1.webp"],
          title: "RS1",
          subtitle: "Semi Automatic Rotor Spinning Machine",
          desc: "High-performance rotor spinning with advanced technology for superior yarn quality.",
          specs: [
            "Max No. of Rotors - 480",
            "Max Rotor Speed 1,10,000 Rpm",
            "E-com and Joint Spring Technology",
            "Highly Energy Efficient",
          ],
          link: "products/super-rs1",
        },
        {
          images: ["super_rs2.webp"],
          title: "RS2",
          subtitle: "Semi Automatic Rotor Spinning Machine",
          desc: "Next-generation rotor spinning with DSDC Technology for maximum flexibility.",
          specs: [
            "With DSDC Technology (Dual Side, Dual Count)",
            "Maximum number of rotors - 512",
            "Max Rotor Speed 1,05,000 Rpm",
          ],
          link: "products/super-rs2",
        },
      ],
    },
  ];

  const nextSlide = (groupIdx, itemIdx) => {
    const key = `${groupIdx}-${itemIdx}`;
    const totalImages = products[groupIdx].items[itemIdx].images.length;
    setCurrentSlides((prev) => ({
      ...prev,
      [key]: ((prev[key] || 0) + 1) % totalImages,
    }));
  };

  const prevSlide = (groupIdx, itemIdx) => {
    const key = `${groupIdx}-${itemIdx}`;
    const totalImages = products[groupIdx].items[itemIdx].images.length;
    setCurrentSlides((prev) => ({
      ...prev,
      [key]: ((prev[key] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const goToSlide = (groupIdx, itemIdx, slideIdx) => {
    const key = `${groupIdx}-${itemIdx}`;
    setCurrentSlides((prev) => ({
      ...prev,
      [key]: slideIdx,
    }));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Hero Header with Radial Gradients */}
      <div
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
          // SHRUNK HERO PADDING
          padding: isMobile ? "40px 16px 50px" : "100px 24px 70px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Abstract Radial Gradient Shapes */}
        <div
          style={{
            position: "absolute",
            top: isMobile ? "-100px" : "-150px",
            right: isMobile ? "-50px" : "-100px",
            width: isMobile ? "260px" : "420px",
            height: isMobile ? "260px" : "420px",
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(30, 58, 138, 0.06) 40%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
            animation: "pulse 8s ease-in-out infinite",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            bottom: isMobile ? "-60px" : "-10px",
            left: isMobile ? "-40px" : "-80px",
            width: isMobile ? "220px" : "340px",
            height: isMobile ? "220px" : "340px",
            background:
              "radial-gradient(circle, rgba(30, 58, 138, 0.08) 0%, transparent 60%)",
            borderRadius: "50%",
            pointerEvents: "none",
            animation: "pulse 10s ease-in-out infinite",
          }}
        ></div>

        {/* Grid Pattern Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(37, 99, 235, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37, 99, 235, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: isMobile ? "28px 28px" : "44px 44px",
            pointerEvents: "none",
          }}
        ></div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ marginBottom: isMobile ? "16px" : "20px" }}>
              <span
                style={{
                  display: "inline-block",
                  padding: isMobile ? "8px 16px" : "10px 22px",
                  background: "rgba(37, 99, 235, 0.08)",
                  backdropFilter: "blur(10px)",
                  color: primaryBlue,
                  borderRadius: "30px",
                  fontSize: isMobile ? "10px" : "11px",
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  border: "2px solid rgba(37, 99, 235, 0.2)",
                }}
              >
                Our Products
              </span>
            </div>

            <h1
              style={{
                // SHRUNK HERO TITLE
                fontSize: isMobile ? "30px" : "56px",
                fontWeight: 900,
                color: "#0f172a",
                marginBottom: isMobile ? "14px" : "18px",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              We Manufacture{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${darkBlue} 0%, ${primaryBlue} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Excellence
              </span>
            </h1>

            <p
              style={{
                // SHRUNK HERO DESC
                fontSize: isMobile ? "13px" : "16px",
                color: "#64748b",
                maxWidth: isMobile ? "100%" : "760px",
                margin: "0 auto",
                lineHeight: 1.75,
                fontWeight: 400,
                padding: isMobile ? "0 6px" : "0",
              }}
            >
              Super Group as it stands today, was started way back in 1984 with a vision to
              become one of the most advanced machinery manufacturers in the field of Textile
              and General Engineering
            </p>
          </div>
        </div>
      </div>

      {/* Product Navigation - Pill Buttons Style */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "2px solid #e2e8f0",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "0 12px" : "0 20px" }}>
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: isMobile ? "8px" : "10px",
              // SHRUNK NAV PADDING
              padding: isMobile ? "12px 0" : "16px 0",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              justifyContent: isMobile ? "flex-start" : "center",
            }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>

            {products.map((group, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGroup(idx)}
                style={{
                  // SHRUNK BUTTONS
                  padding: isMobile ? "10px 16px" : "12px 22px",
                  borderRadius: isMobile ? "8px" : "10px",
                  whiteSpace: "nowrap",
                  fontWeight: 700,
                  fontSize: isMobile ? "11px" : "13px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  flexShrink: 0,
                  border: activeGroup === idx ? `2px solid ${primaryBlue}` : "2px solid #e2e8f0",
                  cursor: "pointer",
                  background: activeGroup === idx ? primaryBlue : "#ffffff",
                  color: activeGroup === idx ? "#ffffff" : "#475569",
                  boxShadow: activeGroup === idx ? `0 8px 24px ${primaryBlue}40` : "none",
                  transform: activeGroup === idx ? "translateY(-2px)" : "translateY(0)",
                  letterSpacing: "0.03em",
                }}
              >
                {group.group}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          // SHRUNK SECTION PADDING
          padding: isMobile ? "40px 16px" : "70px 24px",
          position: "relative",
        }}
      >
        {/* Subtle Background Accent */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              top: "180px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "520px",
              height: "520px",
              background: "radial-gradient(circle, rgba(37, 99, 235, 0.03) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
              zIndex: 0,
            }}
          ></div>
        )}

        {products.map((group, groupIdx) => (
          <div
            key={groupIdx}
            style={{
              display: activeGroup === groupIdx ? "block" : "none",
              animation: activeGroup === groupIdx ? "fadeIn 0.6s ease-out" : "none",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Section Header */}
            <div style={{ textAlign: "center", marginBottom: isMobile ? "28px" : "50px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: isMobile ? "10px" : "16px",
                  marginBottom: isMobile ? "14px" : "18px",
                }}
              >
                <div
                  style={{
                    height: "2px",
                    width: isMobile ? "34px" : "50px",
                    background: `linear-gradient(to right, transparent, ${primaryBlue})`,
                    borderRadius: "2px",
                  }}
                ></div>
                <span
                  style={{
                    fontSize: isMobile ? "10px" : "12px",
                    fontWeight: 800,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: primaryBlue,
                  }}
                >
                  {group.group}
                </span>
                <div
                  style={{
                    height: "2px",
                    width: isMobile ? "34px" : "50px",
                    background: `linear-gradient(to left, transparent, ${primaryBlue})`,
                    borderRadius: "2px",
                  }}
                ></div>
              </div>

              <h2
                style={{
                  // SHRUNK SECTION TITLE
                  fontSize: isMobile ? "26px" : "44px",
                  fontWeight: 900,
                  color: "#0f172a",
                  marginBottom: "0",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  padding: isMobile ? "0 6px" : "0",
                }}
              >
                {group.tagline}
              </h2>
            </div>

            {/* Product Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : group.items.length === 1
                  ? "1fr"
                  : "repeat(auto-fit, minmax(460px, 1fr))",
                gap: isMobile ? "22px" : "34px",
                justifyContent: "center",
              }}
            >
              {group.items.map((item, itemIdx) => {
                const key = `${groupIdx}-${itemIdx}`;
                const currentSlide = currentSlides[key] || 0;
                const hasMultipleImages = item.images.length > 1;

                return (
                  <div
                    key={itemIdx}
                    style={{
                      background: "#ffffff",
                      borderRadius: isMobile ? "14px" : "18px",
                      overflow: "hidden",
                      border: "2px solid #e2e8f0",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      maxWidth: group.items.length === 1 ? "820px" : "none",
                      margin: group.items.length === 1 ? "0 auto" : "0",
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.boxShadow = `0 16px 48px ${primaryBlue}25`;
                        e.currentTarget.style.transform = "translateY(-8px)";
                        e.currentTarget.style.borderColor = primaryBlue;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.06)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.borderColor = "#e2e8f0";
                      }
                    }}
                  >
                    {/* Top Accent Bar */}
                    <div
                      style={{
                        height: isMobile ? "3px" : "4px",
                        background: `linear-gradient(90deg, ${darkBlue} 0%, ${primaryBlue} 100%)`,
                      }}
                    ></div>

                    {/* Image Slider (SHRUNK HEIGHT + PADDING) */}
                    <div
                      style={{
                        position: "relative",
                        height: isMobile ? "200px" : "300px",
                        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          height: "100%",
                          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                          transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                      >
                        {item.images.map((image, imgIdx) => (
                          <div
                            key={imgIdx}
                            style={{
                              minWidth: "100%",
                              height: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: isMobile ? "24px 18px" : "32px",
                            }}
                          >
                            <img
                              src={`./images/manufacture/${image}`}
                              alt={`${item.title} - View ${imgIdx + 1}`}
                              style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                                filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1))",
                              }}
                            />
                          </div>
                        ))}
                      </div>

                      {hasMultipleImages && (
                        <>
                          <button
                            onClick={() => prevSlide(groupIdx, itemIdx)}
                            style={{
                              position: "absolute",
                              left: isMobile ? "10px" : "16px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              background: "rgba(255, 255, 255, 0.98)",
                              border: "2px solid #e2e8f0",
                              borderRadius: "50%",
                              width: isMobile ? "36px" : "44px",
                              height: isMobile ? "36px" : "44px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
                              transition: "all 0.3s",
                              color: "#475569",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = primaryBlue;
                              e.currentTarget.style.color = "#ffffff";
                              e.currentTarget.style.borderColor = primaryBlue;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "rgba(255, 255, 255, 0.98)";
                              e.currentTarget.style.color = "#475569";
                              e.currentTarget.style.borderColor = "#e2e8f0";
                            }}
                          >
                            <ChevronLeft />
                          </button>

                          <button
                            onClick={() => nextSlide(groupIdx, itemIdx)}
                            style={{
                              position: "absolute",
                              right: isMobile ? "10px" : "16px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              background: "rgba(255, 255, 255, 0.98)",
                              border: "2px solid #e2e8f0",
                              borderRadius: "50%",
                              width: isMobile ? "36px" : "44px",
                              height: isMobile ? "36px" : "44px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
                              transition: "all 0.3s",
                              color: "#475569",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = primaryBlue;
                              e.currentTarget.style.color = "#ffffff";
                              e.currentTarget.style.borderColor = primaryBlue;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "rgba(255, 255, 255, 0.98)";
                              e.currentTarget.style.color = "#475569";
                              e.currentTarget.style.borderColor = "#e2e8f0";
                            }}
                          >
                            <ChevronRight />
                          </button>

                          <div
                            style={{
                              position: "absolute",
                              bottom: isMobile ? "12px" : "16px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              display: "flex",
                              gap: isMobile ? "8px" : "10px",
                              padding: isMobile ? "8px 12px" : "10px 16px",
                              background: "rgba(255, 255, 255, 0.95)",
                              backdropFilter: "blur(10px)",
                              borderRadius: "24px",
                              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                              border: "1px solid rgba(226, 232, 240, 0.8)",
                            }}
                          >
                            {item.images.map((_, dotIdx) => (
                              <button
                                key={dotIdx}
                                onClick={() => goToSlide(groupIdx, itemIdx, dotIdx)}
                                style={{
                                  width:
                                    currentSlide === dotIdx
                                      ? isMobile
                                        ? "20px"
                                        : "28px"
                                      : isMobile
                                      ? "7px"
                                      : "9px",
                                  height: isMobile ? "7px" : "9px",
                                  borderRadius: "6px",
                                  border: "none",
                                  background: currentSlide === dotIdx ? primaryBlue : "#cbd5e1",
                                  cursor: "pointer",
                                  transition: "all 0.3s",
                                  boxShadow:
                                    currentSlide === dotIdx ? `0 2px 8px ${primaryBlue}60` : "none",
                                }}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Card Content (SHRUNK PADDING + TEXT) */}
                    <div style={{ padding: isMobile ? "22px 18px" : "32px" }}>
                      <div
                        style={{
                          marginBottom: isMobile ? "16px" : "18px",
                          paddingBottom: isMobile ? "16px" : "18px",
                          borderBottom: "2px solid #f1f5f9",
                          textAlign: "center",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: isMobile ? "20px" : "26px",
                            fontWeight: 800,
                            color: "#0f172a",
                            marginBottom: isMobile ? "8px" : "10px",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.2,
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            fontSize: isMobile ? "11px" : "12px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: primaryBlue,
                          }}
                        >
                          {item.subtitle}
                        </p>
                      </div>

                      <p
                        style={{
                          color: "#64748b",
                          lineHeight: 1.75,
                          marginBottom: isMobile ? "18px" : "22px",
                          fontSize: isMobile ? "13px" : "14px",
                          textAlign: "center",
                          fontWeight: 400,
                        }}
                      >
                        {item.desc}
                      </p>

                      {/* Feature Tags */}
                      {item.features && (
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: isMobile ? "8px" : "10px",
                            marginBottom: isMobile ? "18px" : "22px",
                            justifyContent: "center",
                          }}
                        >
                          {item.features.map((feature, fIdx) => (
                            <span
                              key={fIdx}
                              style={{
                                padding: isMobile ? "7px 12px" : "9px 16px",
                                background: "#f8fafc",
                                color: "#334155",
                                borderRadius: isMobile ? "8px" : "10px",
                                fontSize: isMobile ? "11px" : "12px",
                                fontWeight: 700,
                                border: "2px solid #e2e8f0",
                                transition: "all 0.3s",
                                cursor: "default",
                              }}
                              onMouseEnter={(e) => {
                                if (!isMobile) {
                                  e.currentTarget.style.background = primaryBlue;
                                  e.currentTarget.style.color = "#ffffff";
                                  e.currentTarget.style.borderColor = primaryBlue;
                                  e.currentTarget.style.transform = "translateY(-2px)";
                                  e.currentTarget.style.boxShadow = `0 4px 12px ${primaryBlue}40`;
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isMobile) {
                                  e.currentTarget.style.background = "#f8fafc";
                                  e.currentTarget.style.color = "#334155";
                                  e.currentTarget.style.borderColor = "#e2e8f0";
                                  e.currentTarget.style.transform = "translateY(0)";
                                  e.currentTarget.style.boxShadow = "none";
                                }
                              }}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Specifications Box */}
                      {item.specs && (
                        <div
                          style={{
                            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                            borderRadius: isMobile ? "12px" : "14px",
                            padding: isMobile ? "16px" : "20px",
                            marginBottom: isMobile ? "18px" : "22px",
                            border: "2px solid #e2e8f0",
                          }}
                        >
                          <div
                            style={{
                              fontSize: isMobile ? "10px" : "11px",
                              fontWeight: 800,
                              color: primaryBlue,
                              textTransform: "uppercase",
                              letterSpacing: "0.12em",
                              marginBottom: isMobile ? "12px" : "14px",
                              textAlign: "center",
                            }}
                          >
                            Technical Specifications
                          </div>

                          {item.specs.map((spec, sIdx) => (
                            <div
                              key={sIdx}
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: isMobile ? "10px" : "12px",
                                fontSize: isMobile ? "12px" : "13px",
                                color: "#475569",
                                marginBottom: sIdx < item.specs.length - 1 ? (isMobile ? "10px" : "12px") : 0,
                                lineHeight: 1.6,
                                fontWeight: 600,
                              }}
                            >
                              <div style={{ color: primaryBlue, marginTop: "3px", flexShrink: 0 }}>
                                <ChevronRight />
                              </div>
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CTA Button */}
                      <a
                        href={item.link}
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = item.link;
                        }}
                        style={{
                          width: "100%",
                          padding: isMobile ? "14px" : "16px",
                          borderRadius: isMobile ? "10px" : "12px",
                          fontWeight: 800,
                          color: "#ffffff",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: isMobile ? "10px" : "12px",
                          background: `linear-gradient(135deg, ${darkBlue} 0%, ${primaryBlue} 100%)`,
                          fontSize: isMobile ? "13px" : "14px",
                          textDecoration: "none",
                          boxSizing: "border-box",
                          boxShadow: `0 8px 24px ${primaryBlue}40`,
                          letterSpacing: "0.03em",
                        }}
                        onMouseEnter={(e) => {
                          if (!isMobile) {
                            e.currentTarget.style.transform = "translateY(-3px)";
                            e.currentTarget.style.boxShadow = `0 12px 32px ${primaryBlue}50`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isMobile) {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = `0 8px 24px ${primaryBlue}40`;
                          }
                        }}
                      >
                        Explore Product Details
                        <ArrowRight />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manufacture;
