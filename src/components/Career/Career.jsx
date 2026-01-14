// Career.jsx
import React, { useState, useEffect } from "react";
import "./Career.css";

const Career = () => {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", coverLetter: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [locationFilter, setLocationFilter] = useState("Coimbatore");

  const jobs = [
    {
      id: 1,
      title: "Mechanical Engineer",
      department: "Engineering",
      locations: ["Coimbatore"],
      type: "Full-time",
      experience: "3-5 years",
      description: "Join our engineering team with expertise in textile machinery design and development.",
      requirements: [
        "Bachelor's degree in Mechanical Engineering",
        "Knowledge of textile machinery components",
        "Excellent problem-solving skills",
        "Good communication and teamwork",
      ],
    },
    {
      id: 2,
      title: "Production Manager",
      department: "Manufacturing",
      locations: ["Coimbatore"],
      type: "Full-time",
      experience: "20+ years",
      description: "Lead large-scale manufacturing operations with leadership and safety expertise.",
      requirements: [
        "20+ years of production management experience",
        "Strong leadership and organizational skills",
        "Safety and quality compliance experience",
        "Excellent problem-solving abilities",
      ],
    },
    {
      id: 3,
      title: "Sales Executive / Marketing Manager",
      department: "Sales & Marketing",
      locations: ["Coimbatore", "Panipat"],
      type: "Full-time",
      experience: "1-5 years",
      description: "Dynamic sales and marketing professionals for domestic and international markets.",
      requirements: [
        "Bachelor's degree",
        "Industrial sales or marketing experience preferred",
        "Strong communication and negotiation skills",
        "Willingness to travel",
        "Technical knowledge of machinery preferred",
      ],
    },
    {
      id: 4,
      title: "CNC/VMC Operator",
      department: "Manufacturing",
      locations: ["Coimbatore"],
      type: "Full-time",
      experience: "Freshers or experienced",
      description: "Operate CNC/VMC machines with support and on-the-job training.",
      requirements: ["Willingness to learn", "Basic mechanical aptitude", "Prior experience beneficial but not required"],
    },
    
    {
      id: 6,
      title: "Machine Designer",
      department: "Engineering",
      locations: ["Coimbatore"],
      type: "Full-time",
      experience: "2-5 years",
      description: "Design and innovate textile machinery components with CAD expertise.",
      requirements: ["Bachelor's or Master's in Mechanical Engineering", "Expertise in CAD and design software", "Creative engineering problem solver", "Experience with textile machinery a plus"],
    },
  ];

  const internships = ["Mechanical Engineering", "Electrical Engineering", "Quality Testing"];

  const filteredJobs = jobs.filter((job) => job.locations.includes(locationFilter));

  const resetForm = () => setFormData({ name: "", email: "", phone: "", coverLetter: "" });

  const openModal = (type, data = null) => {
    setSelectedApplication({ type, data });
    resetForm();
    setShowModal(true);
  };

  const closeModal = () => {
    if (!isSubmitting) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [showModal]);

  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
    setSelectedApplication(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateMailtoLink = () => {
    let subject = "General Application";
    let position = "";
    if (selectedApplication) {
      if (selectedApplication.type === "job") {
        subject = `Job Application: ${selectedApplication.data.title} - ${formData.name}`;
        position = `Position Applied: ${selectedApplication.data.title}`;
      } else {
        subject = `Internship Application - ${formData.name}`;
        position = `Application for Internship`;
      }
    }
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${position}

Cover Letter:
${formData.coverLetter || "Not provided"}

Submitted on: ${new Date().toLocaleString()}

Please attach your resume before sending.
`.trim();
    return `mailto:info@supergroupscbe.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      window.location.href = generateMailtoLink();
      setIsSubmitting(false);
      setShowModal(false);
      setTimeout(() => alert("Application opened in your email client. Attach your resume before sending."), 1200);
    }, 1500);
  };

  return (
    <div className="career-page">
      {/* Hero Banner with Career Graphics */}
      <section className="career-hero">
        <div className="hero-pattern">
          <div className="pattern-circle pattern-circle-1"></div>
          <div className="pattern-circle pattern-circle-2"></div>
          <div className="pattern-circle pattern-circle-3"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-badge">Careers at Super Group</div>
          <h1 className="hero-title">Shape Your Future With Us</h1>
          <p className="hero-description">
            Join a team of dedicated professionals driving innovation in textile machinery manufacturing
          </p>
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">350+</div>
              <div className="stat-label">Professionals</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">40+</div>
              <div className="stat-label">Years Excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1300+</div>
              <div className="stat-label">Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Filter */}
      <section className="location-filter-section">
        <div className="container">
          <div className="filter-card">
            <label htmlFor="locationSelect" className="filter-label">
              Filter by Location
            </label>
            <select id="locationSelect" value={locationFilter} onChange={handleLocationChange} className="location-select">
              <option value="Coimbatore">Coimbatore</option>
              <option value="Panipat">Panipat</option>
            </select>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="jobs-section">
        <div className="container">
          <div className="section-header">
            <h2>Open Positions</h2>
            <p>Discover your next opportunity and join our team of dedicated professionals</p>
          </div>
          <div className="jobs-grid">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="job-card-header">
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-badges">
                      <span className="badge badge-department">{job.department}</span>
                      <span className="badge badge-type">{job.type}</span>
                    </div>
                  </div>
                  <div className="job-meta-info">
                    <div className="meta-item">
                      <span className="meta-label">Location:</span>
                      <span>{locationFilter}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Experience:</span>
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <div className="requirements">
                    <h4>Key Requirements</h4>
                    <ul>
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="apply-btn" onClick={() => openModal("job", job)}>
                    Apply Now
                  </button>
                </div>
              ))
            ) : (
              <div className="no-jobs">
                <h3>No Open Positions in {locationFilter}</h3>
                <p>Check back soon for new opportunities or try another location.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="internship-section">
        <div className="container">
          <div className="internship-content">
            <h2>Internship Programs</h2>
            <p>Gain practical experience and develop your skills with our comprehensive training programs</p>
            <div className="internship-fields">
              {internships.map((field, idx) => (
                <div key={idx} className="field-item">
                  {field}
                </div>
              ))}
            </div>
            <button className="apply-btn-secondary" onClick={() => openModal("internship")}>
              Apply for Internship
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedApplication?.type === "job" ? `Apply for ${selectedApplication.data.title}` : "Apply for Internship"}</h2>
              <button onClick={closeModal} className="close-btn" disabled={isSubmitting} aria-label="Close">
                ×
              </button>
            </div>
            <div className="modal-body">
              {isSubmitting ? (
                <div className="loading-state">
                  <div className="spinner"></div>
                  <h3>Preparing your application</h3>
                  <p>Please wait while we open your email client</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="application-form">
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" required />
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="coverLetter">Cover Letter (Optional)</label>
                      <textarea id="coverLetter" name="coverLetter" rows="4" value={formData.coverLetter} onChange={handleInputChange} placeholder="Tell us why you're interested in this position" />
                    </div>
                  </div>
                  <div className="form-note">
                    <p><strong>Note:</strong> Your application will open in your default email client. Please attach your resume before sending.</p>
                  </div>
                  <div className="form-actions">
                    <button type="button" className="btn-secondary" onClick={closeModal} disabled={isSubmitting}>
                      Cancel
                    </button>
                    <button type="submit" className="btn-primary" disabled={isSubmitting}>
                      Continue to Email
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;