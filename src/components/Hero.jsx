import {
  FaCheckCircle,
  FaPrint,
  FaLightbulb,
  FaBullhorn,
} from "react-icons/fa";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <div className="hero-left">

          <span className="hero-badge">
            15+ YEARS OF PRINTING EXCELLENCE
          </span>

          <h1>
            Professional Printing
            <br />
            <span>Solutions For Every Business</span>
          </h1>

          <p>
            Ravindra Arts delivers premium Flex Printing, Vinyl Graphics,
            LED Glow Sign Boards, One Way Vision and Outdoor Advertising
            across Maharashtra.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => scrollTo("contact")}
            >
              Get Free Quote
            </button>

            <button
              className="btn-secondary"
              onClick={() => scrollTo("gallery")}
            >
              View Portfolio
            </button>
          </div>

          <div className="hero-features">
            <span><FaCheckCircle /> Quality Printing</span>
            <span><FaCheckCircle /> Fast Service</span>
            <span><FaCheckCircle /> Professional Installation</span>
          </div>

        </div>

        <div className="hero-right">

          <div className="glass-card">

            <div className="service-box">
              <FaLightbulb />
              <div>
                <h4>Glow Sign Boards</h4>
                <p>LED • Acrylic • ACP</p>
              </div>
            </div>

            <div className="service-box">
              <FaPrint />
              <div>
                <h4>Flex Printing</h4>
                <p>High Resolution Banners</p>
              </div>
            </div>

            <div className="service-box">
              <FaBullhorn />
              <div>
                <h4>Outdoor Advertising</h4>
                <p>Hoardings & Branding</p>
              </div>
            </div>

          </div>

          <div className="stats-card">
            <div>
              <h2>15+</h2>
              <p>Years</p>
            </div>

            <div>
              <h2>5000+</h2>
              <p>Projects</p>
            </div>

            <div>
              <h2>1200+</h2>
              <p>Clients</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;