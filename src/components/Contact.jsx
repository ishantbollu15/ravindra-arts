import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Flex Printing",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const text = `Hello Ravindra Arts,

*Name:* ${form.name}
*Phone:* ${form.phone}
*Email:* ${form.email}
*Service:* ${form.service}

*Requirement:*
${form.message}`;

    window.open(
      `https://wa.me/918551918934?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="section-title">
          <span>GET IN TOUCH</span>
          <h2>Let's Discuss Your Project</h2>
          <p>
            Contact us for Flex Printing, Glow Sign Boards, Vinyl Printing
            and Outdoor Advertising.
          </p>
        </div>

        <div className="contact-grid">

          {/* Left */}
          <div className="contact-info">

            <h3>Contact Information</h3>

            <div className="info-item">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>Bhiwandi, Maharashtra</p>
              </div>
            </div>

            <div className="info-item">
              <FaPhoneAlt />
              <div>
                <h4>Phone</h4>
                <p>+91 9970557501</p>
                <p>+91 8551918934</p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>ravindrapainters@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <FaInstagram />
              <div>
                <h4>Instagram</h4>
                <a
                  href="https://www.instagram.com/ravindra__arts/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @ravindra__arts
                </a>
              </div>
            </div>

            <a
              className="maps-btn"
              href="https://maps.app.goo.gl/nNoMaq3NnPWwr5j6A"
              target="_blank"
              rel="noreferrer"
            >
              📍 Open Google Maps
            </a>

            <div className="map-box">
              <iframe
                title="Ravindra Arts"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d470.69845056257725!2d73.0576777!3d19.3002921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd9aa25c21dd%3A0xb2a0c1ee56432917!2sRAVINDRA%20PAINTERS!5e0!3m2!1sen!2sin!4v1786461255177!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

          </div>

          {/* Right */}
          <form className="contact-form" onSubmit={sendWhatsApp}>

            <h3>Request a Quote</h3>

            <input
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
            />

            <select name="service" onChange={handleChange}>
              <option>Flex Printing</option>
              <option>Vinyl Printing</option>
              <option>Glow Sign Board</option>
              <option>One Way Vision</option>
              <option>Outdoor Advertising</option>
            </select>

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project..."
              required
              onChange={handleChange}
            />

            <button type="submit">
              <FaWhatsapp /> Send Enquiry
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;