import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    serviceId: "service_chrhkgl",
    templateId: "template_zu12wkb",
    publicKey: "GJzZ6v9nyl5yYoW7W",
  };

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (formStatus.success || formStatus.error) {
      const timer = setTimeout(() => {
        setFormStatus({ submitting: false, success: false, error: null });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus.success, formStatus.error]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (formStatus.error) {
      setFormStatus({ ...formStatus, error: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate EmailJS configuration
    if (EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY_HERE") {
      setFormStatus({
        submitting: false,
        success: false,
        error: "EmailJS public key is not configured. Please add your public key.",
      });
      return;
    }

    setFormStatus({ submitting: true, success: false, error: null });

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject,
          message: formData.message,
          to_email: "supergroupscbe1@gmail.com",
          reply_to: formData.email,
        },
        EMAILJS_CONFIG.publicKey
      );

      if (result.status === 200) {
        setFormStatus({ submitting: false, success: true, error: null });
        
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus({
        submitting: false,
        success: false,
        error: error.text || "Failed to send message. Please try again or contact us directly.",
      });
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* Professional Toast Notification */}
      {(formStatus.success || formStatus.error) && (
        <div
          style={{
            position: "fixed",
            top: "24px",
            right: "24px",
            zIndex: 9999,
            animation: "slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)",
              padding: "20px 24px",
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              minWidth: "320px",
              maxWidth: "420px",
              backdropFilter: "blur(10px)",
              border: formStatus.success 
                ? "1px solid rgba(16, 185, 129, 0.2)" 
                : "1px solid rgba(239, 68, 68, 0.2)",
            }}
          >
            {/* Icon Container */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                backgroundColor: formStatus.success 
                  ? "rgba(16, 185, 129, 0.1)" 
                  : "rgba(239, 68, 68, 0.1)",
              }}
            >
              {formStatus.success ? (
                // Success checkmark icon
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    animation: "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards",
                  }}
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                // Error X icon
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    animation: "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards",
                  }}
                >
                  <path
                    d="M6 6L18 18M6 18L18 6"
                    stroke="#ef4444"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>

            {/* Content */}
            <div style={{ flex: 1, paddingTop: "2px" }}>
              <h3
                style={{
                  margin: "0 0 6px 0",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#111827",
                  lineHeight: "1.4",
                }}
              >
                {formStatus.success ? "Message Sent Successfully!" : "Failed to Send Message"}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "#6b7280",
                  lineHeight: "1.5",
                }}
              >
                {formStatus.success
                  ? "Thank you for reaching out. We'll get back to you within 24 hours."
                  : formStatus.error}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() =>
                setFormStatus({ submitting: false, success: false, error: null })
              }
              style={{
                background: "none",
                border: "none",
                color: "#9ca3af",
                fontSize: "20px",
                cursor: "pointer",
                padding: "4px",
                width: "28px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                transition: "all 0.2s ease",
                flexShrink: 0,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#f3f4f6";
                e.currentTarget.style.color = "#111827";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#9ca3af";
              }}
              aria-label="Close notification"
            >
              ×
            </button>

            {/* Progress Bar */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "3px",
                backgroundColor: "#f3f4f6",
                borderRadius: "0 0 16px 16px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  backgroundColor: formStatus.success ? "#10b981" : "#ef4444",
                  animation: "progressBar 5s linear",
                  transformOrigin: "left",
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Hero Banner */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)",
          color: "white",
          padding: "clamp(40px, 10vw, 80px) clamp(16px, 4vw, 20px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background Shapes */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.2,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <div
            className="float-orb-1"
            style={{
              position: "absolute",
              width: "clamp(200px, 30vw, 400px)",
              height: "clamp(200px, 30vw, 400px)",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
              top: "-100px",
              left: "-100px",
            }}
          />
          <div
            className="float-orb-2"
            style={{
              position: "absolute",
              width: "clamp(150px, 25vw, 300px)",
              height: "clamp(150px, 25vw, 300px)",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
              bottom: "-50px",
              right: "-50px",
            }}
          />
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h1
            className="hero-title"
            style={{
              fontSize: "clamp(36px, 7vw, 64px)",
              fontWeight: "700",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
              textShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            Contact Us
          </h1>

          <div
            className="hero-line"
            style={{
              width: "clamp(60px, 10vw, 80px)",
              height: "4px",
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.8) 80%, transparent 100%)",
              margin: "0 auto 20px",
              borderRadius: "2px",
              boxShadow: "0 2px 10px rgba(255, 255, 255, 0.3)",
            }}
          />

          <div
            className="hero-dots"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "24px",
            }}
          >
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,255,255,0.6)" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(255,255,255,1)" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,255,255,0.6)" }} />
          </div>

          <p
            className="hero-subtitle"
            style={{
              fontSize: "clamp(16px, 3vw, 20px)",
              color: "#e0f2fe",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>

        <style>{`
          @keyframes float1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(50px, -30px) scale(1.1); }
            66% { transform: translate(-30px, 50px) scale(0.9); }
          }
          @keyframes float2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-40px, 40px) scale(0.9); }
            66% { transform: translate(60px, -20px) scale(1.1); }
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes expandWidth {
            from { width: 0; opacity: 0; }
            to { width: clamp(60px, 10vw, 80px); opacity: 1; }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.3); opacity: 1; }
          }

          @keyframes slideInFromRight {
            from { 
              opacity: 0; 
              transform: translateX(100%) scale(0.95);
            }
            to { 
              opacity: 1; 
              transform: translateX(0) scale(1);
            }
          }

          @keyframes scaleIn {
            from { 
              transform: scale(0.5);
              opacity: 0;
            }
            to { 
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes progressBar {
            from { 
              transform: scaleX(1);
            }
            to { 
              transform: scaleX(0);
            }
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .float-orb-1 { animation: float1 20s ease-in-out infinite; }
          .float-orb-2 { animation: float2 15s ease-in-out infinite; }
          
          .hero-title { animation: slideInDown 0.8s ease-out; }
          .hero-subtitle { animation: fadeInUp 0.8s ease-out 0.2s backwards; }
          .hero-line { animation: expandWidth 1s ease-out 0.3s backwards; }
          .hero-dots { animation: fadeInUp 1s ease-out 0.4s backwards; }
          .hero-dots > div:nth-child(1) { animation: pulse 2s ease-in-out infinite; }
          .hero-dots > div:nth-child(2) { animation: pulse 2s ease-in-out 0.2s infinite; }
          .hero-dots > div:nth-child(3) { animation: pulse 2s ease-in-out 0.4s infinite; }

          @media (prefers-reduced-motion: reduce) {
            .float-orb-1, .float-orb-2, .hero-title, .hero-subtitle, .hero-line, .hero-dots {
              animation: none !important;
            }
          }

          @media (max-width: 768px) {
            @keyframes float1 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(20px, -15px) scale(1.05); }
            }
            @keyframes float2 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(-20px, 15px) scale(0.95); }
            }
          }

          @media (max-width: 480px) {
            div[style*="position: fixed"] {
              left: 16px !important;
              right: 16px !important;
              top: 16px !important;
            }
            div[style*="minWidth: 320px"] {
              min-width: auto !important;
            }
          }
        `}</style>
      </section>

      {/* Main Content */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "clamp(40px, 8vw, 80px) clamp(16px, 4vw, 20px)",
        }}
      >
        {/* Large Hero Image */}
        <div
          style={{
            width: "100%",
            marginBottom: "clamp(40px, 8vw, 60px)",
          }}
        >
          <img
            src="/images/Over.png"
            alt="Expanding Horizon"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "0",
              border: "2px solid #e5e7eb",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Contact Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "clamp(24px, 5vw, 40px)",
            alignItems: "start",
          }}
        >
          {/* Contact Info Card */}
          <div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "clamp(12px, 2vw, 16px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                padding: "clamp(24px, 5vw, 32px)",
                marginBottom: "clamp(20px, 4vw, 24px)",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(22px, 4.5vw, 28px)",
                  fontWeight: "700",
                  color: "#111827",
                  marginTop: 0,
                  marginBottom: "clamp(12px, 2vw, 16px)",
                  lineHeight: "1.3",
                }}
              >
                Let's get connected and grow together
              </h2>

              <p
                style={{
                  color: "#6b7280",
                  lineHeight: "1.7",
                  marginBottom: "clamp(24px, 5vw, 32px)",
                  fontSize: "clamp(14px, 2.5vw, 16px)",
                }}
              >
                For any information about our products or technical support, we're here to help you.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 3vw, 16px)" }}>
                {/* Location Card */}
                <div
                  style={{
                    backgroundColor: "#eff6ff",
                    borderRadius: "clamp(10px, 2vw, 12px)",
                    padding: "clamp(16px, 3.5vw, 20px)",
                    border: "2px solid transparent",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#dbeafe";
                    e.currentTarget.style.borderColor = "#3b82f6";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#eff6ff";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: "clamp(15px, 2.8vw, 16px)",
                          fontWeight: "600",
                          color: "#111827",
                          marginTop: 0,
                          marginBottom: "clamp(6px, 1.5vw, 8px)",
                        }}
                      >
                        Visit Our Office
                      </h3>
                      <p
                        style={{
                          color: "#4b5563",
                          fontSize: "clamp(13px, 2.3vw, 14px)",
                          margin: 0,
                          lineHeight: "1.6",
                        }}
                      >
                        100, Athipalayam Rd, Ramakrishnapuram,
                        <br />
                        Chinnavedampatti, Coimbatore,
                        <br />
                        Tamil Nadu 641049
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg
                        width="clamp(40px, 8vw, 48px)"
                        height="clamp(40px, 8vw, 48px)"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ flexShrink: 0 }}
                      >
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                          fill="#3b82f6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Sales Card */}
                <div
                  style={{
                    backgroundColor: "#eff6ff",
                    borderRadius: "clamp(10px, 2vw, 12px)",
                    padding: "clamp(16px, 3.5vw, 20px)",
                    border: "2px solid transparent",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#dbeafe";
                    e.currentTarget.style.borderColor = "#3b82f6";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#eff6ff";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: "clamp(15px, 2.8vw, 16px)",
                          fontWeight: "600",
                          color: "#111827",
                          marginTop: 0,
                          marginBottom: "clamp(6px, 1.5vw, 8px)",
                        }}
                      >
                        Sales Department
                      </h3>
                      <p
                        style={{
                          color: "#4b5563",
                          fontSize: "clamp(13px, 2.3vw, 14px)",
                          margin: 0,
                          lineHeight: "1.6",
                        }}
                      >
                        <a
                          href="tel:9942909629"
                          style={{
                            color: "#3b82f6",
                            textDecoration: "none",
                            fontWeight: "500",
                          }}
                        >
                          +91 99429 09629
                        </a>
                        <br />
                        <a
                          href="mailto:sales@supergroupcbe.com"
                          style={{
                            color: "#3b82f6",
                            textDecoration: "none",
                            fontWeight: "500",
                            wordBreak: "break-word",
                          }}
                        >
                          sales@supergroupcbe.com
                        </a>
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg
                        width="clamp(40px, 8vw, 48px)"
                        height="clamp(40px, 8vw, 48px)"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ flexShrink: 0 }}
                      >
                        <path
                          d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
                          fill="#3b82f6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Support Card */}
                <div
                  style={{
                    backgroundColor: "#eff6ff",
                    borderRadius: "clamp(10px, 2vw, 12px)",
                    padding: "clamp(16px, 3.5vw, 20px)",
                    border: "2px solid transparent",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#dbeafe";
                    e.currentTarget.style.borderColor = "#3b82f6";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#eff6ff";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: "clamp(15px, 2.8vw, 16px)",
                          fontWeight: "600",
                          color: "#111827",
                          marginTop: 0,
                          marginBottom: "clamp(6px, 1.5vw, 8px)",
                        }}
                      >
                        Service & Support
                      </h3>
                      <p
                        style={{
                          color: "#4b5563",
                          fontSize: "clamp(13px, 2.3vw, 14px)",
                          margin: 0,
                          lineHeight: "1.6",
                        }}
                      >
                        <a
                          href="tel:9942909628"
                          style={{
                            color: "#3b82f6",
                            textDecoration: "none",
                            fontWeight: "500",
                          }}
                        >
                          +91 99429 09628
                        </a>
                        <br />
                        <a
                          href="mailto:spares@supergroupscbe.com"
                          style={{
                            color: "#3b82f6",
                            textDecoration: "none",
                            fontWeight: "500",
                            wordBreak: "break-word",
                          }}
                        >
                          spares@supergroupscbe.com
                        </a>
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg
                        width="clamp(40px, 8vw, 48px)"
                        height="clamp(40px, 8vw, 48px)"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ flexShrink: 0 }}
                      >
                        <path
                          d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"
                          fill="#3b82f6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* General Inquiries Card */}
                <div
                  style={{
                    backgroundColor: "#eff6ff",
                    borderRadius: "clamp(10px, 2vw, 12px)",
                    padding: "clamp(16px, 3.5vw, 20px)",
                    border: "2px solid transparent",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#dbeafe";
                    e.currentTarget.style.borderColor = "#3b82f6";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#eff6ff";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: "clamp(15px, 2.8vw, 16px)",
                          fontWeight: "600",
                          color: "#111827",
                          marginTop: 0,
                          marginBottom: "clamp(6px, 1.5vw, 8px)",
                        }}
                      >
                        General Inquiries
                      </h3>
                      <p
                        style={{
                          color: "#4b5563",
                          fontSize: "clamp(13px, 2.3vw, 14px)",
                          margin: 0,
                          lineHeight: "1.6",
                        }}
                      >
                        <a
                          href="mailto:info@supergroupscbe.com"
                          style={{
                            color: "#3b82f6",
                            textDecoration: "none",
                            fontWeight: "500",
                            wordBreak: "break-word",
                          }}
                        >
                          info@supergroupscbe.com
                        </a>
                        <br />
                        We respond within 24 hours
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg
                        width="clamp(40px, 8vw, 48px)"
                        height="clamp(40px, 8vw, 48px)"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ flexShrink: 0 }}
                      >
                        <path
                          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                          fill="#3b82f6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Button */}
              <a
                href="https://maps.google.com/?q=11.056621,76.982782"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  padding: "clamp(12px, 2.5vw, 14px) clamp(20px, 4vw, 24px)",
                  borderRadius: "clamp(8px, 1.5vw, 10px)",
                  fontWeight: "600",
                  fontSize: "clamp(14px, 2.8vw, 16px)",
                  textDecoration: "none",
                  textAlign: "center",
                  marginTop: "clamp(20px, 4vw, 24px)",
                  boxShadow: "0 4px 12px rgba(59,130,246,0.3)",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#2563eb";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 16px rgba(59,130,246,0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#3b82f6";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(59,130,246,0.3)";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    fill="currentColor"
                  />
                </svg>
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Contact Form Card */}
          <div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "clamp(12px, 2vw, 16px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                padding: "clamp(24px, 5vw, 32px)",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(22px, 4.5vw, 28px)",
                  fontWeight: "700",
                  color: "#111827",
                  marginTop: 0,
                  marginBottom: "clamp(8px, 1.5vw, 12px)",
                }}
              >
                Send Us a Message
              </h2>

              <p
                style={{
                  color: "#6b7280",
                  marginBottom: "clamp(24px, 5vw, 32px)",
                  fontSize: "clamp(14px, 2.5vw, 16px)",
                  lineHeight: "1.6",
                }}
              >
                Fill out the form below and we'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div style={{ marginBottom: "clamp(16px, 3vw, 20px)" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "clamp(13px, 2.3vw, 14px)",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "clamp(6px, 1.5vw, 8px)",
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={formStatus.submitting}
                    style={{
                      width: "100%",
                      padding: "clamp(10px, 2.5vw, 12px) clamp(12px, 3vw, 16px)",
                      borderRadius: "clamp(6px, 1.5vw, 8px)",
                      border: "2px solid #e5e7eb",
                      fontSize: "clamp(14px, 2.8vw, 16px)",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                      boxSizing: "border-box",
                      fontFamily: "inherit",
                      opacity: formStatus.submitting ? 0.6 : 1,
                    }}
                    placeholder="John Doe"
                    onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                {/* Email Input */}
                <div style={{ marginBottom: "clamp(16px, 3vw, 20px)" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "clamp(13px, 2.3vw, 14px)",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "clamp(6px, 1.5vw, 8px)",
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={formStatus.submitting}
                    style={{
                      width: "100%",
                      padding: "clamp(10px, 2.5vw, 12px) clamp(12px, 3vw, 16px)",
                      borderRadius: "clamp(6px, 1.5vw, 8px)",
                      border: "2px solid #e5e7eb",
                      fontSize: "clamp(14px, 2.8vw, 16px)",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                      boxSizing: "border-box",
                      fontFamily: "inherit",
                      opacity: formStatus.submitting ? 0.6 : 1,
                    }}
                    placeholder="john@example.com"
                    onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                {/* Phone Input */}
                <div style={{ marginBottom: "clamp(16px, 3vw, 20px)" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "clamp(13px, 2.3vw, 14px)",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "clamp(6px, 1.5vw, 8px)",
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={formStatus.submitting}
                    style={{
                      width: "100%",
                      padding: "clamp(10px, 2.5vw, 12px) clamp(12px, 3vw, 16px)",
                      borderRadius: "clamp(6px, 1.5vw, 8px)",
                      border: "2px solid #e5e7eb",
                      fontSize: "clamp(14px, 2.8vw, 16px)",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                      boxSizing: "border-box",
                      fontFamily: "inherit",
                      opacity: formStatus.submitting ? 0.6 : 1,
                    }}
                    placeholder="+91 98765 43210"
                    onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                {/* Subject Input */}
                <div style={{ marginBottom: "clamp(16px, 3vw, 20px)" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "clamp(13px, 2.3vw, 14px)",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "clamp(6px, 1.5vw, 8px)",
                    }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={formStatus.submitting}
                    style={{
                      width: "100%",
                      padding: "clamp(10px, 2.5vw, 12px) clamp(12px, 3vw, 16px)",
                      borderRadius: "clamp(6px, 1.5vw, 8px)",
                      border: "2px solid #e5e7eb",
                      fontSize: "clamp(14px, 2.8vw, 16px)",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                      boxSizing: "border-box",
                      fontFamily: "inherit",
                      opacity: formStatus.submitting ? 0.6 : 1,
                    }}
                    placeholder="How can we help?"
                    onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                {/* Message Textarea */}
                <div style={{ marginBottom: "clamp(20px, 4vw, 24px)" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "clamp(13px, 2.3vw, 14px)",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "clamp(6px, 1.5vw, 8px)",
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={formStatus.submitting}
                    rows={5}
                    style={{
                      width: "100%",
                      padding: "clamp(10px, 2.5vw, 12px) clamp(12px, 3vw, 16px)",
                      borderRadius: "clamp(6px, 1.5vw, 8px)",
                      border: "2px solid #e5e7eb",
                      fontSize: "clamp(14px, 2.8vw, 16px)",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                      fontFamily: "inherit",
                      resize: "vertical",
                      boxSizing: "border-box",
                      minHeight: "clamp(100px, 20vw, 120px)",
                      opacity: formStatus.submitting ? 0.6 : 1,
                    }}
                    placeholder="Tell us about your project..."
                    onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  style={{
                    width: "100%",
                    backgroundColor: formStatus.submitting ? "#9ca3af" : "#3b82f6",
                    color: "white",
                    padding: "clamp(14px, 3vw, 16px) clamp(24px, 5vw, 32px)",
                    borderRadius: "clamp(8px, 1.5vw, 10px)",
                    fontWeight: "600",
                    fontSize: "clamp(15px, 3vw, 18px)",
                    border: "none",
                    cursor: formStatus.submitting ? "not-allowed" : "pointer",
                    boxShadow: formStatus.submitting
                      ? "none"
                      : "0 4px 12px rgba(59,130,246,0.3)",
                    transition: "all 0.3s ease",
                    fontFamily: "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                  onMouseOver={(e) => {
                    if (!formStatus.submitting) {
                      e.currentTarget.style.backgroundColor = "#2563eb";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 16px rgba(59,130,246,0.4)";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!formStatus.submitting) {
                      e.currentTarget.style.backgroundColor = "#3b82f6";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(59,130,246,0.3)";
                    }
                  }}
                >
                  {formStatus.submitting ? (
                    <>
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          border: "3px solid rgba(255,255,255,0.3)",
                          borderTopColor: "white",
                          borderRadius: "50%",
                          animation: "spin 0.8s linear infinite",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Security Message */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginTop: "clamp(12px, 2.5vw, 16px)",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
                      fill="#6b7280"
                    />
                  </svg>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "clamp(12px, 2.2vw, 14px)",
                      margin: 0,
                    }}
                  >
                    Your information is safe with us
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section
        style={{
          backgroundColor: "#111827",
          color: "white",
          textAlign: "center",
          padding: "clamp(30px, 6vw, 40px) clamp(16px, 4vw, 20px)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "clamp(13px, 2.5vw, 14px)",
            opacity: 0.8,
          }}
        >
          © 2025 Super Groups. All rights reserved.
        </p>
      </section>
    </div>
  );
};

export default ContactForm;