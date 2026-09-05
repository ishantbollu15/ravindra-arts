import { FaAward, FaUsers, FaBuilding, FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">

        {/* Left Content */}
        <div className="about-content">
          <span className="section-tag">ABOUT RAVINDRA ARTS</span>

          <h2>15+ Years of Excellence in Printing & Signage</h2>

          <p className="about-text">
            Ravindra Arts is a trusted printing and advertising company based in
            Bhiwandi, Maharashtra. We specialize in Flex Printing, Vinyl
            Graphics, Glow Sign Boards, One Way Vision and Outdoor Advertising
            with premium quality and professional finishing.
          </p>

          <div className="about-list">
            <div><FaCheckCircle /> Premium Printing Quality</div>
            <div><FaCheckCircle /> LED Sign Board Experts</div>
            <div><FaCheckCircle /> Fast Service & Installation</div>
            <div><FaCheckCircle /> Trusted Across Bhiwandi</div>
          </div>
        </div>

        {/* Right Statistics */}
        <div className="about-stats">

          <div className="stat-card">
            <FaAward className="stat-icon" />
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <FaUsers className="stat-icon" />
            <h3>1200+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="stat-card">
            <FaBuilding className="stat-icon" />
            <h3>5000+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="stat-card">
            <FaCheckCircle className="stat-icon" />
            <h3>100%</h3>
            <p>Quality Commitment</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;