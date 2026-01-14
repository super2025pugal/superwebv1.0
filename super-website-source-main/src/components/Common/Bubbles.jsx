import { LuPhoneCall, LuHeadphones } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useState, useEffect } from "react";
import "../../css/bubble.css";

// Inline styles for icon transitions (add to your bubble.css)
const customerCareStyles = `
  .customer-care-icon {
    position: absolute;
    color: white;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }

  .customer-care-icon.hidden {
    opacity: 0;
    transform: rotate(90deg) scale(0);
  }

  .bubble-main-icon {
    opacity: 0;
    transform: rotate(-90deg) scale(0);
  }

  .bubble-main-icon.visible {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
`;

const Bubbles = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Delay initial appearance for smooth entry
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const bubbles = [
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      href: "https://wa.me/9942909629",
      label: "WhatsApp Us",
      color: "#25D366",
      gradient: "linear-gradient(135deg, #25D366 0%, #20BA5A 100%)",
    },
    {
      id: "call",
      icon: LuPhoneCall,
      href: "tel:+919942909629",
      label: "Call Now",
      color: "#0A84FF",
      gradient: "linear-gradient(135deg, #0A84FF 0%, #0066CC 100%)",
    },
    {
      id: "email",
      icon: HiOutlineMail,
      href: "mailto:info@supergroupscbe.com",
      label: "Email Us",
      color: "#FF9500",
      gradient: "linear-gradient(135deg, #FF9500 0%, #FF8000 100%)",
    },
  ];

  const handleMainButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`bubbles-container ${isVisible ? "visible" : ""}`}>
      {/* Background Overlay for Mobile */}
      {isExpanded && (
        <div 
          className="bubbles-overlay" 
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Action Bubbles */}
      <div className={`bubbles-list ${isExpanded ? "expanded" : ""}`}>
        {bubbles.map((bubble, index) => (
          <div
            key={bubble.id}
            className="bubble-item"
            style={{
              transitionDelay: isExpanded ? `${index * 50}ms` : `${(bubbles.length - index) * 30}ms`,
            }}
          >
            <a
              href={bubble.href}
              target={bubble.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="bubble-link"
              aria-label={bubble.label}
              onClick={() => setIsExpanded(false)}
            >
              {/* Tooltip */}
              <span className="bubble-label">{bubble.label}</span>

              {/* Bubble Button */}
              <div 
                className={`bubble ${bubble.id}-bubble`}
                style={{
                  '--bubble-color': bubble.color,
                  '--bubble-gradient': bubble.gradient,
                }}
              >
                <bubble.icon className="bubble-icon" />
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Main FAB Button with Customer Care Icon */}
      <button
        className={`bubble-main ${isExpanded ? "active" : ""}`}
        onClick={handleMainButtonClick}
        aria-label={isExpanded ? "Close menu" : "Open contact menu"}
        aria-expanded={isExpanded}
      >
        {/* Customer Care Headphones Icon */}
        <LuHeadphones 
          className={`customer-care-icon ${isExpanded ? "hidden" : ""}`}
          size={28}
        />
        
        {/* Close X Icon */}
        <div className={`bubble-main-icon ${isExpanded ? "visible" : ""}`}>
          <span className="icon-bar bar-1"></span>
          <span className="icon-bar bar-2"></span>
          <span className="icon-bar bar-3"></span>
        </div>

        {/* Need Help Badge */}
        <div className={`help-badge ${isExpanded ? "hidden" : ""}`}>
          Need Help?
        </div>
      </button>
    </div>
  );
};

export default Bubbles;