import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ contact = true }) => {
  const [values, setValues] = useState({
    name: "",
    company: "",
    phone: "",
    city: "",
    productname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("danger");
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    serviceId: "service_chrhkgl",
    templateId: "template_zu12wkb",
    publicKey: "GJzZ6v9nyl5yYoW7W",
  };

  // For same background theme (grid pattern + circle accent)
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const isMobile = width < 768;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = "Name is required";
    if (!values.company.trim()) newErrors.company = "Company name is required";

    if (!values.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^[\d\s\-\+\(\)]+$/.test(values.phone) ||
      values.phone.replace(/\D/g, "").length < 10
    ) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!values.message.trim()) {
      newErrors.message = "Message is required";
    } else if (values.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setAlertType("danger");
      setAlertMessage("Please fill in all required fields correctly");
      setShowAlert(true);
      return;
    }

    setIsLoading(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: values.name,
          from_email: values.email,
          phone: values.phone,
          company: values.company,
          city: values.city || "Not provided",
          product: values.productname || "General Inquiry",
          subject: values.productname || "New Contact Form Submission",
          message: values.message,
          to_email: "supergroupscbe1@gmail.com",
          reply_to: values.email,
        },
        EMAILJS_CONFIG.publicKey
      );

      if (result.status === 200) {
        setAlertMessage("Thank you! We'll contact you soon.");
        setAlertType("success");
        setShowAlert(true);

        // Reset form
        setValues({
          name: "",
          company: "",
          phone: "",
          city: "",
          productname: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setAlertType("danger");
      setAlertMessage(
        error.text || "Failed to send message. Please try again or contact us directly."
      );
      setShowAlert(true);
    } finally {
      setIsLoading(false);
    }
  };

  const productOptions = [
    { value: "offer requested for super card sc1", label: "Super Card SC1" },
    { value: "offer requested for super prima sd1000e", label: "Super Prima SD1000e" },
    { value: "offer requested for super prima sdl1000e", label: "Super Prima SDL1000e" },
    { value: "offer requested for super prima2", label: "Super Prima 2" },
    { value: "offer requested for super d1", label: "Super D1 NXT" },
    { value: "offer requested for super d2", label: "Super D2" },
    { value: "offer requested for super d2 plus", label: "Super D2 Duos" },
    { value: "offer requested for super rs1", label: "Super RS1" },
    { value: "offer requested for super rs2", label: "Super RS2" },
    {
      value: "offer requested for complete recycle process line",
      label: "Complete Recycle Process Line",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#f9fafb",
        padding: "clamp(20px, 4vw, 40px) 0",
        margin: 0,
        fontFamily: "system-ui, -apple-system, sans-serif",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      {/* Professional Toast Notification */}
      {showAlert && (
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
              minWidth: isMobile ? "auto" : "320px",
              maxWidth: "420px",
              backdropFilter: "blur(10px)",
              border:
                alertType === "success"
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
                backgroundColor:
                  alertType === "success"
                    ? "rgba(16, 185, 129, 0.1)"
                    : "rgba(239, 68, 68, 0.1)",
              }}
            >
              {alertType === "success" ? (
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
                {alertType === "success"
                  ? "Message Sent Successfully!"
                  : "Validation Error"}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "#6b7280",
                  lineHeight: "1.5",
                }}
              >
                {alertType === "success"
                  ? "Thank you for reaching out. We'll get back to you within 24 hours."
                  : alertMessage}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowAlert(false)}
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
                  backgroundColor: alertType === "success" ? "#10b981" : "#ef4444",
                  animation: "progressBar 5s linear",
                  transformOrigin: "left",
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Same BG UI: Grid Pattern (2 linear-gradient layers) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(30, 58, 138, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 58, 138, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? "30px 30px" : "40px 40px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Same BG UI: Circle Accent (hide on mobile) */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            top: "90px",
            right: "5%",
            width: "320px",
            height: "320px",
            border: "2px solid rgba(37, 99, 235, 0.10)",
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
              width: "220px",
              height: "220px",
              border: "2px solid rgba(37, 99, 235, 0.15)",
              borderRadius: "50%",
            }}
          />
        </div>
      )}

      {/* Content layer */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "100%",
          padding: "0 clamp(16px, 5vw, 5%)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(20px, 4vw, 32px)",
        }}
      >
        <style>
          {`
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

            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
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

            @media (max-width: 480px) {
              div[style*="position: fixed"] {
                left: 16px !important;
                right: 16px !important;
                top: 16px !important;
              }
            }
          `}
        </style>

        {contact && (
          <div
            style={{
              textAlign: "center",
              paddingBottom: "clamp(8px, 2vw, 16px)",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "inline-block",
                marginBottom: "clamp(16px, 3vw, 24px)",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
                  fontWeight: "900",
                  color: "#1f2937",
                  lineHeight: "1.2",
                  letterSpacing: "-0.02em",
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  animation: "slideInDown 0.8s ease both",
                }}
              >
                Let's Get Connected and Grow Together
              </h1>

              {/* Underline */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "70%",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, transparent 0%, #3b82f6 20%, #3b82f6 80%, transparent 100%)",
                  borderRadius: "2px",
                  animation: "expandWidth 1s ease 0.3s both",
                  boxShadow: "0 2px 10px rgba(59, 130, 246, 0.4)",
                }}
              />
            </div>

            {/* Decorative Dots */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginBottom: "clamp(16px, 3vw, 24px)",
                animation: "fadeIn 1s ease 1.3s both",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#93c5fd",
                  animation: "pulse 2s ease-in-out 1.3s infinite",
                }}
              />
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
                  animation: "pulse 2s ease-in-out 1.5s infinite",
                }}
              />
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#93c5fd",
                  animation: "pulse 2s ease-in-out 1.7s infinite",
                }}
              />
            </div>

            <p
              style={{
                fontSize: "clamp(14px, 1.8vw, 20px)",
                color: "#6b7280",
                lineHeight: "1.6",
                margin: 0,
                animation: "slideInUp 0.8s ease 0.2s both",
              }}
            >
              Fill in a few details and we'll get in touch as soon as possible.
            </p>
          </div>
        )}

        <div
          style={{
            width: "100%",
            background: "#ffffff",
            borderRadius: "clamp(12px, 2vw, 20px)",
            padding: "clamp(20px, 4vw, 48px)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(16px, 3vw, 24px)",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
              gap: "clamp(16px, 3vw, 24px)",
            }}
          >
            {/* Name */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "clamp(13px, 1.5vw, 15px)",
                  fontWeight: "600",
                  color: "#374151",
                  paddingBottom: "clamp(4px, 1vw, 8px)",
                }}
              >
                Name <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleInput}
                disabled={isLoading}
                placeholder="Your full name"
                style={{
                  width: "100%",
                  padding: "clamp(10px, 2vw, 14px)",
                  border: errors.name ? "2px solid #ef4444" : "1px solid #d1d5db",
                  borderRadius: "clamp(6px, 1.5vw, 10px)",
                  fontSize: "clamp(14px, 1.5vw, 15px)",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                  opacity: isLoading ? 0.6 : 1,
                }}
                onFocus={(e) => {
                  if (!errors.name) e.target.style.borderColor = "#6366f1";
                }}
                onBlur={(e) => {
                  if (!errors.name) e.target.style.borderColor = "#d1d5db";
                }}
              />
              {errors.name && (
                <span
                  style={{
                    fontSize: "clamp(11px, 1.3vw, 13px)",
                    color: "#ef4444",
                    display: "block",
                    paddingTop: "clamp(3px, 0.8vw, 6px)",
                  }}
                >
                  {errors.name}
                </span>
              )}
            </div>

            {/* Company */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "clamp(13px, 1.5vw, 15px)",
                  fontWeight: "600",
                  color: "#374151",
                  paddingBottom: "clamp(4px, 1vw, 8px)",
                }}
              >
                Company <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="text"
                name="company"
                value={values.company}
                onChange={handleInput}
                disabled={isLoading}
                placeholder="Your company name"
                style={{
                  width: "100%",
                  padding: "clamp(10px, 2vw, 14px)",
                  border: errors.company
                    ? "2px solid #ef4444"
                    : "1px solid #d1d5db",
                  borderRadius: "clamp(6px, 1.5vw, 10px)",
                  fontSize: "clamp(14px, 1.5vw, 15px)",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                  opacity: isLoading ? 0.6 : 1,
                }}
                onFocus={(e) => {
                  if (!errors.company) e.target.style.borderColor = "#6366f1";
                }}
                onBlur={(e) => {
                  if (!errors.company) e.target.style.borderColor = "#d1d5db";
                }}
              />
              {errors.company && (
                <span
                  style={{
                    fontSize: "clamp(11px, 1.3vw, 13px)",
                    color: "#ef4444",
                    display: "block",
                    paddingTop: "clamp(3px, 0.8vw, 6px)",
                  }}
                >
                  {errors.company}
                </span>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "clamp(13px, 1.5vw, 15px)",
                  fontWeight: "600",
                  color: "#374151",
                  paddingBottom: "clamp(4px, 1vw, 8px)",
                }}
              >
                Phone Number <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleInput}
                disabled={isLoading}
                placeholder="+91 XXXXX XXXXX"
                style={{
                  width: "100%",
                  padding: "clamp(10px, 2vw, 14px)",
                  border: errors.phone ? "2px solid #ef4444" : "1px solid #d1d5db",
                  borderRadius: "clamp(6px, 1.5vw, 10px)",
                  fontSize: "clamp(14px, 1.5vw, 15px)",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                  opacity: isLoading ? 0.6 : 1,
                }}
                onFocus={(e) => {
                  if (!errors.phone) e.target.style.borderColor = "#6366f1";
                }}
                onBlur={(e) => {
                  if (!errors.phone) e.target.style.borderColor = "#d1d5db";
                }}
              />
              {errors.phone && (
                <span
                  style={{
                    fontSize: "clamp(11px, 1.3vw, 13px)",
                    color: "#ef4444",
                    display: "block",
                    paddingTop: "clamp(3px, 0.8vw, 6px)",
                  }}
                >
                  {errors.phone}
                </span>
              )}
            </div>

            {/* City */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "clamp(13px, 1.5vw, 15px)",
                  fontWeight: "600",
                  color: "#374151",
                  paddingBottom: "clamp(4px, 1vw, 8px)",
                }}
              >
                City
              </label>
              <input
                type="text"
                name="city"
                value={values.city}
                onChange={handleInput}
                disabled={isLoading}
                placeholder="Your city"
                style={{
                  width: "100%",
                  padding: "clamp(10px, 2vw, 14px)",
                  border: "1px solid #d1d5db",
                  borderRadius: "clamp(6px, 1.5vw, 10px)",
                  fontSize: "clamp(14px, 1.5vw, 15px)",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                  opacity: isLoading ? 0.6 : 1,
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              />
            </div>

            {/* Product */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "clamp(13px, 1.5vw, 15px)",
                  fontWeight: "600",
                  color: "#374151",
                  paddingBottom: "clamp(4px, 1vw, 8px)",
                }}
              >
                Product Enquiry
              </label>
              <select
                name="productname"
                value={values.productname}
                onChange={handleInput}
                disabled={isLoading}
                style={{
                  width: "100%",
                  padding: "clamp(10px, 2vw, 14px)",
                  border: "1px solid #d1d5db",
                  borderRadius: "clamp(6px, 1.5vw, 10px)",
                  fontSize: "clamp(14px, 1.5vw, 15px)",
                  outline: "none",
                  cursor: "pointer",
                  boxSizing: "border-box",
                  backgroundColor: "#ffffff",
                  transition: "border-color 0.2s",
                  opacity: isLoading ? 0.6 : 1,
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              >
                <option value="">Choose Product</option>
                {productOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Email */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "clamp(13px, 1.5vw, 15px)",
                  fontWeight: "600",
                  color: "#374151",
                  paddingBottom: "clamp(4px, 1vw, 8px)",
                }}
              >
                Email <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleInput}
                disabled={isLoading}
                placeholder="your@email.com"
                style={{
                  width: "100%",
                  padding: "clamp(10px, 2vw, 14px)",
                  border: errors.email ? "2px solid #ef4444" : "1px solid #d1d5db",
                  borderRadius: "clamp(6px, 1.5vw, 10px)",
                  fontSize: "clamp(14px, 1.5vw, 15px)",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                  opacity: isLoading ? 0.6 : 1,
                }}
                onFocus={(e) => {
                  if (!errors.email) e.target.style.borderColor = "#6366f1";
                }}
                onBlur={(e) => {
                  if (!errors.email) e.target.style.borderColor = "#d1d5db";
                }}
              />
              {errors.email && (
                <span
                  style={{
                    fontSize: "clamp(11px, 1.3vw, 13px)",
                    color: "#ef4444",
                    display: "block",
                    paddingTop: "clamp(3px, 0.8vw, 6px)",
                  }}
                >
                  {errors.email}
                </span>
              )}
            </div>

            {/* Message */}
            <div style={{ gridColumn: "1 / -1" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "clamp(13px, 1.5vw, 15px)",
                  fontWeight: "600",
                  color: "#374151",
                  paddingBottom: "clamp(4px, 1vw, 8px)",
                }}
              >
                Message <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <textarea
                name="message"
                value={values.message}
                onChange={handleInput}
                disabled={isLoading}
                placeholder="Tell us more about your enquiry..."
                rows="5"
                style={{
                  width: "100%",
                  padding: "clamp(10px, 2vw, 14px)",
                  border: errors.message ? "2px solid #ef4444" : "1px solid #d1d5db",
                  borderRadius: "clamp(6px, 1.5vw, 10px)",
                  fontSize: "clamp(14px, 1.5vw, 15px)",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                  minHeight: "100px",
                  opacity: isLoading ? 0.6 : 1,
                }}
                onFocus={(e) => {
                  if (!errors.message) e.target.style.borderColor = "#6366f1";
                }}
                onBlur={(e) => {
                  if (!errors.message) e.target.style.borderColor = "#d1d5db";
                }}
              />
              {errors.message && (
                <span
                  style={{
                    fontSize: "clamp(11px, 1.3vw, 13px)",
                    color: "#ef4444",
                    display: "block",
                    paddingTop: "clamp(3px, 0.8vw, 6px)",
                  }}
                >
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div style={{ gridColumn: "1 / -1" }}>
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  width: "100%",
                  padding: "clamp(12px, 2vw, 16px)",
                  background: isLoading ? "#9ca3af" : "#6366f1",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "clamp(6px, 1.5vw, 10px)",
                  fontSize: "clamp(15px, 1.8vw, 17px)",
                  fontWeight: "600",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  transition: "all 0.3s",
                  boxShadow: isLoading
                    ? "none"
                    : "0 4px 12px rgba(99, 102, 241, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.target.style.background = "#4f46e5";
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 6px 16px rgba(99, 102, 241, 0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    e.target.style.background = "#6366f1";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 12px rgba(99, 102, 241, 0.3)";
                  }
                }}
              >
                {isLoading ? (
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
                  "Send Request"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default ContactForm;