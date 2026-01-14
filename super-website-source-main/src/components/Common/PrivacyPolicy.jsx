import React, { useEffect } from "react";

const Privacyandpolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Privacy Policy</h1>
        <p style={styles.updated}>Last updated: January 2026</p>

        <p style={styles.text}>
          Super Groups we operates the website{" "}
          <a
            href="https://www.supergroupscbe.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            https://www.supergroupscbe.com
          </a>
          . This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website.
        </p>

        <Section title="1. Information We Collect">
          <h4 style={styles.subHeading}>Personal Information</h4>
          <p style={styles.text}>
            We may collect personal information such as name, email address,
            phone number, company name, or other details when you voluntarily
            submit them through contact forms or inquiries.
          </p>

          <h4 style={styles.subHeading}>Automatically Collected Information</h4>
          <p style={styles.text}>
            When you access the website, we may automatically collect
            information such as IP address, browser type, device information,
            pages visited, and time spent on the website.
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul style={styles.list}>
            <li>Respond to inquiries and communication requests</li>
            <li>Provide information about our products and services</li>
            <li>Improve website performance and user experience</li>
            <li>Ensure security and prevent unauthorized access</li>
            <li>Comply with legal obligations</li>
          </ul>
        </Section>

        <Section title="3. Cookies and Tracking Technologies">
          <p style={styles.text}>
            We may use cookies and similar technologies to enhance user
            experience and analyze website traffic. You can disable cookies in
            your browser settings, though some features may not function
            properly.
          </p>
        </Section>

        <Section title="4. Disclosure of Information">
          <p style={styles.text}>
            We do not sell or rent your personal information. Information may be
            shared only with trusted service providers, legal authorities, or
            when required to protect our rights and users.
          </p>
        </Section>

        <Section title="5. Data Security">
          <p style={styles.text}>
            We implement reasonable technical and organizational security
            measures. However, no online transmission method is completely
            secure.
          </p>
        </Section>

        <Section title="6. Third-Party Links">
          <p style={styles.text}>
            Our website may contain links to third-party websites. We are not
            responsible for their privacy practices or content.
          </p>
        </Section>

        <Section title="7. Data Retention">
          <p style={styles.text}>
            Personal information is retained only for as long as necessary to
            fulfill the purposes outlined in this policy or as required by law.
          </p>
        </Section>

        <Section title="8. Children’s Privacy">
          <p style={styles.text}>
            This website is not intended for individuals under 18 years of age.
            We do not knowingly collect data from children.
          </p>
        </Section>

        <Section title="9. Your Rights">
          <p style={styles.text}>
            You may request access, correction, or deletion of your personal
            information by contacting us.
          </p>
        </Section>

        <Section title="10. Compliance with Indian Laws">
          <p style={styles.text}>
            This policy complies with the Information Technology Act, 2000, and
            applicable Indian data protection rules.
          </p>
        </Section>

        <Section title="11. Policy Updates">
          <p style={styles.text}>
            We may update this Privacy Policy periodically. Updates will be
            posted on this page.
          </p>
        </Section>

        <Section title="12. Contact Information">
          <p style={styles.text}>
            <strong>Super Groups</strong>
            <br />
            Website:{" "}
            <a
              href="https://www.supergroupscbe.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              https://www.supergroupscbe.com
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section style={styles.section}>
    <h2 style={styles.sectionHeading}>{title}</h2>
    {children}
  </section>
);

const styles = {
  page: {
    backgroundColor: "#f9fafb",
    padding: "60px 20px",
  },
  card: {
    maxWidth: "1000px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "50px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
    color: "#1f2937",
  },
  heading: {
    fontSize: "34px",
    fontWeight: "700",
    marginBottom: "8px",
  },
  updated: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "30px",
  },
  section: {
    marginTop: "32px",
    paddingTop: "20px",
    borderTop: "1px solid #e5e7eb",
  },
  sectionHeading: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "14px",
  },
  subHeading: {
    fontSize: "16px",
    fontWeight: "600",
    marginTop: "12px",
  },
  text: {
    fontSize: "15px",
    lineHeight: "1.8",
    color: "#374151",
    marginBottom: "12px",
  },
  list: {
    paddingLeft: "20px",
    fontSize: "15px",
    lineHeight: "1.8",
    color: "#374151",
  },
  link: {
    color: "#0891b2",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Privacyandpolicy;
