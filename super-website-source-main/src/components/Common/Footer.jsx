import React from "react";
import { Link } from "react-router-dom";
import { 
  FaLocationDot, 
  FaEnvelope, 
  FaPhone, 
  FaArrowRight
} from "react-icons/fa6";
import Logo from "../../images/logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      {/* Main Footer Content */}
      <div style={styles.mainSection}>
        <div style={styles.container}>
          <div style={styles.grid}>
            
            {/* Company Info Section */}
            <div style={styles.companySection}>
              <div style={styles.logoWrapper}>
                <img src={Logo} alt="Super Group" style={styles.logo} />
              </div>
              <p style={styles.description}>
                A trusted leader in infrastructure and technology solutions, 
                delivering excellence through innovation and quality service 
                since our inception.
              </p>
              
              {/* Social Media Links */}
              <div style={styles.socialSection}>
                <p style={styles.socialLabel}>Connect With Us</p>
                <div style={styles.socialIcons}>
                  {/* Facebook */}
                  <SocialLink 
                    href="https://www.facebook.com/profile.php?id=61576595240990" 
                    label="Facebook"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                    </svg>
                  </SocialLink>

                  {/* Instagram */}
                  <SocialLink 
                    href="https://www.instagram.com/super_group_of_companies/" 
                    label="Instagram"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <radialGradient id="instagramGradient" cx="30%" cy="107%" r="150%">
                          <stop offset="0%" stopColor="#FDF497" />
                          <stop offset="5%" stopColor="#FDF497" />
                          <stop offset="45%" stopColor="#FD5949" />
                          <stop offset="60%" stopColor="#D6249F" />
                          <stop offset="90%" stopColor="#285AEB" />
                        </radialGradient>
                      </defs>
                      <rect width="24" height="24" rx="5.4" fill="url(#instagramGradient)"/>
                      <path d="M12 7.2c-2.649 0-4.8 2.151-4.8 4.8 0 2.649 2.151 4.8 4.8 4.8 2.649 0 4.8-2.151 4.8-4.8 0-2.649-2.151-4.8-4.8-4.8zm0 7.92c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12zM17.28 5.76c-.619 0-1.12.501-1.12 1.12s.501 1.12 1.12 1.12 1.12-.501 1.12-1.12-.501-1.12-1.12-1.12zM12 3.36c-2.392 0-7.2-.192-9.36 1.968C.48 7.488.672 10.608.672 12s-.192 4.512 1.968 6.672C4.8 20.832 7.92 20.64 12 20.64s7.2.192 9.36-1.968c2.16-2.16 1.968-5.28 1.968-6.672s.192-4.512-1.968-6.672C19.2 3.168 16.08 3.36 12 3.36zm7.2 14.304c-1.44 1.44-3.84 1.32-7.2 1.32s-5.76.12-7.2-1.32c-1.44-1.44-1.32-3.84-1.32-7.2s-.12-5.76 1.32-7.2C6.24 1.824 8.64 1.944 12 1.944s5.76-.12 7.2 1.32c1.44 1.44 1.32 3.84 1.32 7.2s.12 5.76-1.32 7.2z" fill="white"/>
                    </svg>
                  </SocialLink>

                  {/* LinkedIn */}
                  <SocialLink 
                    href="https://www.linkedin.com/in/super-group-9bb6b3365/" 
                    label="LinkedIn"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
                    </svg>
                  </SocialLink>

                  {/* Twitter/X */}
                  <SocialLink 
                    href="https://x.com/SuperG54515" 
                    label="Twitter"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#000000"/>
                    </svg>
                  </SocialLink>

                  {/* YouTube */}
                  <SocialLink 
                    href="https://youtube.com/@supergroupscbe?si=BASsa9UI9pbw7QrH" 
                    label="YouTube"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FF0000"/>
                    </svg>
                  </SocialLink>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div style={styles.linksColumn}>
              <h3 style={styles.columnTitle}>Quick Links</h3>
              <div style={styles.divider}></div>
              <nav style={styles.navList}>
                <NavLink to="/" label="Home" />
                <NavLink to="/about" label="About Us" />
                <NavLink to="/contact" label="Contact Support" />
                <NavLink to="/career" label="Career Opportunities" />
              </nav>
            </div>

            {/* Our Divisions */}
            <div style={styles.linksColumn}>
              <h3 style={styles.columnTitle}>Our Divisions</h3>
              <div style={styles.divider}></div>
              <nav style={styles.navList}>
                <NavLink to="/Super-textile-works" label="Super Textile Services" />
                <NavLink 
                  to="https://shei.co.in/" 
                  label="Sudharsan Heavy Engineering" 
                  isExternal 
                />
              </nav>
            </div>

            {/* Contact Information */}
            <div style={styles.contactColumn}>
              <h3 style={styles.columnTitle}>Contact Information</h3>
              <div style={styles.divider}></div>
              
              <div style={styles.contactList}>
                {/* Address */}
                <div style={styles.contactItem}>
                  <div style={styles.iconBox}>
                    <FaLocationDot style={styles.contactIcon} />
                  </div>
                  <div style={styles.contactText}>
                    <p style={styles.contactLabel}>Office Address</p>
                    <p style={styles.contactValue}>
                      <strong>100, Athipalayam Road</strong><br />
                      <strong>Chinnavedampatti</strong><br />
                      <strong>Coimbatore, Tamil Nadu 641049</strong>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div style={styles.contactItem}>
                  <div style={styles.iconBox}>
                    <FaEnvelope style={styles.contactIcon} />
                  </div>
                  <div style={styles.contactText}>
                    <p style={styles.contactLabel}>Email Address</p>
                    <a 
                      href="mailto:info@supergroupscbe.com" 
                      style={styles.contactLink}
                      onMouseEnter={(e) => e.target.style.color = '#0891b2'}
                      onMouseLeave={(e) => e.target.style.color = '#4b5563'}
                    >
                      info@supergroupscbe.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div style={styles.contactItem}>
                  <div style={styles.iconBox}>
                    <FaPhone style={styles.contactIcon} />
                  </div>
                  <div style={styles.contactText}>
                    <p style={styles.contactLabel}>Phone Numbers</p>
                    <div style={styles.phoneList}>
                      <a 
                        href="tel:9942909629" 
                        style={styles.contactLink}
                        onMouseEnter={(e) => e.target.style.color = '#0891b2'}
                        onMouseLeave={(e) => e.target.style.color = '#4b5563'}
                      >
                        +91 99429 09629
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Button */}
              <a 
                href="https://maps.google.com/?q=11.056621,76.982782" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.mapButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0891b2';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(8, 145, 178, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#0891b2';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                View Location on Map
                <FaArrowRight style={styles.mapButtonIcon} />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <div style={styles.container}>
          <div style={styles.bottomContent}>
            <p style={styles.copyright}>
              © {currentYear} Super Group. All Rights Reserved.
            </p>
            <div style={styles.legalLinks}>
              <Link
                to="/privacy-policy"
                style={styles.legalLink}
                onMouseEnter={(e) => (e.target.style.color = "#0891b2")}
                onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
              >
                Privacy Policy
              </Link>
              <span style={styles.separator}>•</span>
              <Link 
                to="/terms" 
                style={styles.legalLink}
                onMouseEnter={(e) => e.target.style.color = '#0891b2'}
                onMouseLeave={(e) => e.target.style.color = '#6b7280'}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Navigation Link Component
const NavLink = ({ to, label, isExternal }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const linkStyle = {
    ...styles.navLink,
    ...(isHovered && styles.navLinkHover)
  };

  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span style={styles.linkArrow}>›</span>
        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link
      to={to}
      style={linkStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={styles.linkArrow}>›</span>
      <span>{label}</span>
    </Link>
  );
};

// Social Link Component with SVG Icons
const SocialLink = ({ href, label, children }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '42px',
    height: '42px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid #e5e7eb',
    cursor: 'pointer',
    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
    boxShadow: isHovered ? '0 6px 12px rgba(0, 0, 0, 0.15)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={linkStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  );
};

// Responsive Professional Styles
const styles = {
  footer: {
    backgroundColor: '#e0f2fe',
    borderTop: '1px solid #bae6fd',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    width: '100%',
    boxSizing: 'border-box',
  },

  mainSection: {
    padding: '60px 0 40px',
    backgroundColor: '#e0f2fe',
  },

  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 20px',
    boxSizing: 'border-box',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '40px',
    '@media (maxWidth: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '32px',
    },
  },

  // Company Section
  companySection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    minWidth: '260px',
  },

  logoWrapper: {
    marginBottom: '8px',
  },

  logo: {
    width: '160px',
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
  },

  description: {
    fontSize: '14px',
    lineHeight: '1.7',
    color: '#000000',
    fontWeight: '700',
    margin: 0,
    maxWidth: '340px',
  },

  socialSection: {
    marginTop: '8px',
  },

  socialLabel: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '14px',
    margin: '0 0 14px 0',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  socialIcons: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },

  // Links Column
  linksColumn: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '200px',
  },

  columnTitle: {
    fontSize: '17px',
    fontWeight: '700',
    color: '#111827',
    margin: '0 0 10px 0',
    letterSpacing: '0.2px',
  },

  divider: {
    width: '36px',
    height: '3px',
    backgroundColor: '#0891b2',
    marginBottom: '20px',
    borderRadius: '2px',
  },

  navList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },

  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#6b7280',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'all 0.2s ease',
    padding: '4px 0',
    cursor: 'pointer',
  },

  navLinkHover: {
    color: '#0891b2',
    paddingLeft: '6px',
  },

  linkArrow: {
    fontSize: '16px',
    fontWeight: '600',
    transition: 'transform 0.2s ease',
    display: 'inline-block',
    minWidth: '12px',
  },

  // Contact Column
  contactColumn: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '280px',
  },

  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '20px',
  },

  contactItem: {
    display: 'flex',
    gap: '14px',
    alignItems: 'flex-start',
  },

  iconBox: {
    width: '42px',
    height: '42px',
    minWidth: '42px',
    borderRadius: '8px',
    backgroundColor: '#eff6ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    border: '1px solid #dbeafe',
  },

  contactIcon: {
    fontSize: '17px',
    color: '#0891b2',
  },

  contactText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    flex: 1,
    minWidth: 0,
  },

  contactLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#374151',
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  contactValue: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#000000',
    fontWeight: '700',
    margin: 0,
    wordWrap: 'break-word',
  },

  contactLink: {
    fontSize: '14px',
    color: '#4b5563',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    wordWrap: 'break-word',
    display: 'block',
  },

  phoneList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },

  mapButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '12px 22px',
    backgroundColor: 'transparent',
    color: '#0891b2',
    border: '2px solid #0891b2',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    width: 'fit-content',
    boxSizing: 'border-box',
  },

  mapButtonIcon: {
    fontSize: '13px',
  },

  // Bottom Bar
  bottomBar: {
    backgroundColor: '#f9fafb',
    borderTop: '1px solid #e5e7eb',
    padding: '24px 0',
  },

  bottomContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
    rowGap: '12px',
  },

  copyright: {
    fontSize: '14px',
    color: '#6b7280',
    margin: 0,
  },

  legalLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    flexWrap: 'wrap',
  },

  legalLink: {
    fontSize: '14px',
    color: '#6b7280',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
  },

  separator: {
    color: '#cbd5db',
    fontSize: '16px',
    fontWeight: '600',
  },
};

export default Footer;