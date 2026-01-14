import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Event configuration - matches your AboutSection numberedNews array
const EVENT_ROUTES = [
  { path: "/NewsandEvents/Event1", title: "ITMA ASIA + CITME 2025 SINGAPORE" },
  { path: "/NewsandEvents/Foundersday", title: "FOUNDERS DAY" },
  { path: "/NewsandEvents/Event2", title: "TEXFAIR 2024" },
  { path: "/NewsandEvents/Event3", title: "CONFERENCE AT BANGLADESH FEB2024" },
  { path: "/NewsandEvents/Event4", title: "TEXFAIR 2022" },
  { path: "/NewsandEvents/Event5", title: "TEXFAIR 2019" },
  { path: "/NewsandEvents/Event6", title: "ITME NOIDA" },
];

const EventPageTemplate = ({ children, currentPath }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Find current event index
  const currentIndex = EVENT_ROUTES.findIndex((event) => event.path === currentPath);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < EVENT_ROUTES.length - 1;

  const handleBack = () => {
    const savedScrollY = sessionStorage.getItem("homeScrollY");
    navigate("/");

    // Restore scroll position after navigation
    if (savedScrollY) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollY, 10));
        sessionStorage.removeItem("homeScrollY");
      }, 50);
    }
  };

  const handlePrevious = () => {
    if (hasPrevious) {
      window.scrollTo(0, 0);
      navigate(EVENT_ROUTES[currentIndex - 1].path);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      window.scrollTo(0, 0);
      navigate(EVENT_ROUTES[currentIndex + 1].path);
    }
  };

  const buttonStyles = (isDisabled, buttonId) => ({
    padding: isMobile ? "12px 16px" : isTablet ? "12px 20px" : "12px 24px",
    backgroundColor: "#ffffff",
    color: isDisabled ? "#9ca3af" : hoveredButton === buttonId ? "#1a1a1a" : "#4b5563",
    border: isDisabled ? "1px solid #e5e7eb" : "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: isMobile ? "14px" : "14px",
    fontWeight: "500",
    cursor: isDisabled ? "not-allowed" : "pointer",
    transition: "all 0.3s ease",
    letterSpacing: "0.01em",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    opacity: isDisabled ? 0.5 : 1,
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    boxShadow: hoveredButton === buttonId && !isDisabled
      ? "0 2px 8px rgba(0, 0, 0, 0.08)"
      : "none",
    WebkitTapHighlightColor: "transparent",
    touchAction: "manipulation",
    minHeight: isMobile ? "44px" : "auto", // Better touch target on mobile
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      {/* Navigation Header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: isMobile ? "12px 16px" : isTablet ? "16px 32px" : "20px 48px",
          }}
        >
          {/* Mobile Layout */}
          {isMobile ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {/* Back Button - Full Width on Mobile */}
              <button
                onClick={handleBack}
                onMouseEnter={() => setHoveredButton("back")}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  ...buttonStyles(false, "back"),
                  width: "100%",
                }}
              >
                <span style={{ fontSize: "16px" }}>←</span>
                Back to Home
              </button>

              {/* Previous/Next Buttons - Side by Side */}
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={handlePrevious}
                  onMouseEnter={() => setHoveredButton("prev")}
                  onMouseLeave={() => setHoveredButton(null)}
                  disabled={!hasPrevious}
                  style={{
                    ...buttonStyles(!hasPrevious, "prev"),
                    flex: 1,
                  }}
                >
                  <span style={{ fontSize: "16px" }}>←</span>
                  <span style={{ display: isMobile ? "none" : "inline" }}>Previous</span>
                  <span style={{ display: isMobile ? "inline" : "none" }}>Prev</span>
                </button>

                <button
                  onClick={handleNext}
                  onMouseEnter={() => setHoveredButton("next")}
                  onMouseLeave={() => setHoveredButton(null)}
                  disabled={!hasNext}
                  style={{
                    ...buttonStyles(!hasNext, "next"),
                    flex: 1,
                  }}
                >
                  <span style={{ display: isMobile ? "inline" : "none" }}>Next</span>
                  <span style={{ display: isMobile ? "none" : "inline" }}>Next Page</span>
                  <span style={{ fontSize: "16px" }}>→</span>
                </button>
              </div>
            </div>
          ) : (
            /* Desktop/Tablet Layout */
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {/* Back Button */}
              <button
                onClick={handleBack}
                onMouseEnter={() => setHoveredButton("back")}
                onMouseLeave={() => setHoveredButton(null)}
                style={buttonStyles(false, "back")}
              >
                <span style={{ fontSize: "16px" }}>←</span>
                Back to Home
              </button>

              {/* Navigation Controls */}
              <div style={{ display: "flex", gap: "12px" }}>
                <button
                  onClick={handlePrevious}
                  onMouseEnter={() => setHoveredButton("prev")}
                  onMouseLeave={() => setHoveredButton(null)}
                  disabled={!hasPrevious}
                  style={buttonStyles(!hasPrevious, "prev")}
                >
                  <span style={{ fontSize: "16px" }}>←</span>
                  Previous Page
                </button>

                <button
                  onClick={handleNext}
                  onMouseEnter={() => setHoveredButton("next")}
                  onMouseLeave={() => setHoveredButton(null)}
                  disabled={!hasNext}
                  style={buttonStyles(!hasNext, "next")}
                >
                  Next Page
                  <span style={{ fontSize: "16px" }}>→</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Event Content */}
      <div>{children}</div>

      {/* Bottom Navigation */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderTop: "1px solid #e5e7eb",
          marginTop: isMobile ? "40px" : isTablet ? "60px" : "80px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: isMobile ? "24px 16px" : isTablet ? "32px 32px" : "48px 48px",
          }}
        >
          {/* Mobile Layout - Stack vertically */}
          {isMobile ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Center Indicator - Top on Mobile */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                {EVENT_ROUTES.map((_, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: idx === currentIndex ? "28px" : "8px",
                      height: "8px",
                      backgroundColor: idx === currentIndex ? "#1a1a1a" : "#d1d5db",
                      borderRadius: "4px",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>

              {/* Previous Event Info */}
              {hasPrevious && (
                <div
                  style={{
                    padding: "16px",
                    backgroundColor: "#f9fafb",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#9ca3af",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1.2px",
                      marginBottom: "8px",
                    }}
                  >
                    ← Previous Event
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#1a1a1a",
                      fontWeight: "500",
                      lineHeight: "1.5",
                    }}
                  >
                    {EVENT_ROUTES[currentIndex - 1].title}
                  </div>
                </div>
              )}

              {/* Next Event Info */}
              {hasNext && (
                <div
                  style={{
                    padding: "16px",
                    backgroundColor: "#f9fafb",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#9ca3af",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1.2px",
                      marginBottom: "8px",
                    }}
                  >
                    Next Event →
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#1a1a1a",
                      fontWeight: "500",
                      lineHeight: "1.5",
                    }}
                  >
                    {EVENT_ROUTES[currentIndex + 1].title}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Desktop/Tablet Layout */
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "32px",
              }}
            >
              {/* Previous Event Info */}
              <div
                style={{
                  flex: "1",
                  minWidth: "200px",
                  opacity: hasPrevious ? 1 : 0.3,
                }}
              >
                {hasPrevious && (
                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#9ca3af",
                        fontWeight: "500",
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                        marginBottom: "8px",
                      }}
                    >
                      Previous Event
                    </div>
                    <div
                      style={{
                        fontSize: "15px",
                        color: "#1a1a1a",
                        fontWeight: "400",
                        lineHeight: "1.5",
                      }}
                    >
                      {EVENT_ROUTES[currentIndex - 1].title}
                    </div>
                  </div>
                )}
              </div>

              {/* Center Indicator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {EVENT_ROUTES.map((_, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: idx === currentIndex ? "24px" : "6px",
                      height: "6px",
                      backgroundColor: idx === currentIndex ? "#1a1a1a" : "#d1d5db",
                      borderRadius: "3px",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>

              {/* Next Event Info */}
              <div
                style={{
                  flex: "1",
                  minWidth: "200px",
                  textAlign: "right",
                  opacity: hasNext ? 1 : 0.3,
                }}
              >
                {hasNext && (
                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#9ca3af",
                        fontWeight: "500",
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                        marginBottom: "8px",
                      }}
                    >
                      Next Event
                    </div>
                    <div
                      style={{
                        fontSize: "15px",
                        color: "#1a1a1a",
                        fontWeight: "400",
                        lineHeight: "1.5",
                      }}
                    >
                      {EVENT_ROUTES[currentIndex + 1].title}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPageTemplate;