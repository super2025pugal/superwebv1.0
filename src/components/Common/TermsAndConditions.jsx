import React, { useEffect } from "react";

const Termsandconditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Terms & Conditions</h1>
        <p style={styles.updated}>Last updated: January 2026</p>

        <Section title="1. Introduction">
          <p style={styles.text}>
            These Terms and Conditions (“Terms”) govern your access to and use of
            the website <strong>https://www.supergroupscbe.com</strong> operated
            by Super Groups Company. By accessing this
            website, you agree to comply with these Terms.
          </p>
        </Section>

        <Section title="2. Acceptance of Terms">
          <p style={styles.text}>
            By using this website, you confirm that you have read, understood,
            and agree to be bound by these Terms. If you do not agree, you must
            discontinue use of the website immediately.
          </p>
        </Section>

        <Section title="3. Use of Website">
          <p style={styles.text}>
            You agree to use this website only for lawful purposes and in a
            manner that does not violate applicable laws, infringe the rights of
            others, or restrict the use and enjoyment of the website by any
            third party.
          </p>
        </Section>

        <Section title="4. Intellectual Property Rights">
          <p style={styles.text}>
            All content on this website, including but not limited to text,
            images, graphics, logos, icons, layouts, and software, is the
            intellectual property of Super Groups and is protected by applicable
            copyright and trademark laws.
          </p>
        </Section>

        <Section title="5. Accuracy of Information">
          <p style={styles.text}>
            While we endeavor to ensure that the information on this website is
            accurate and up to date, we do not warrant or guarantee the
            completeness, accuracy, or reliability of any information.
          </p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p style={styles.text}>
            Super Groups shall not be liable for any direct, indirect,
            incidental, special, or consequential damages arising out of or in
            connection with the use or inability to use this website.
          </p>
        </Section>

        <Section title="7. Third-Party Links">
          <p style={styles.text}>
            This website may contain links to third-party websites. These links
            are provided for convenience only. Super Groups has no control over
            the content or policies of such websites and assumes no
            responsibility for them.
          </p>
        </Section>

        <Section title="8. User Conduct">
          <p style={styles.text}>
            You agree not to engage in any activity that may interfere with or
            disrupt the functioning of the website, including attempting to
            gain unauthorized access to any portion of the site.
          </p>
        </Section>

        <Section title="9. Modifications to Terms">
          <p style={styles.text}>
            We reserve the right to modify or update these Terms at any time
            without prior notice. Continued use of the website following such
            changes constitutes acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="10. Termination">
          <p style={styles.text}>
            We reserve the right to suspend or terminate access to this website
            at our discretion, without notice, for conduct that violates these
            Terms or applicable laws.
          </p>
        </Section>

        <Section title="11. Governing Law & Jurisdiction">
          <p style={styles.text}>
            These Terms shall be governed by and interpreted in accordance with
            the laws of India. The courts located in Tamil Nadu shall have
            exclusive jurisdiction over any disputes arising under these Terms.
          </p>
        </Section>

        <Section title="12. Contact Information">
          <p style={styles.text}>
            <strong>Super Groups</strong>
            <br />
            Website:{" "}
            <a
              href="https://www.supergroupscbe.com"
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

/* ---------- SECTION COMPONENT ---------- */

const Section = ({ title, children }) => (
  <section style={styles.section}>
    <h2 style={styles.sectionHeading}>{title}</h2>
    {children}
  </section>
);

/* ---------- STYLES ---------- */

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
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "6px",
  },
  updated: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "30px",
  },
  section: {
    marginTop: "28px",
    paddingTop: "18px",
    borderTop: "1px solid #e5e7eb",
  },
  sectionHeading: {
    fontSize: "19px",
    fontWeight: "600",
    marginBottom: "12px",
  },
  text: {
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

export default Termsandconditions;
