import {
  FaPrint,
  FaLayerGroup,
  FaEye,
  FaLightbulb,
  FaBullhorn,
  FaPaintBrush,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPrint />,
    title: "Flex Printing",
    text: "High-quality banners, promotional flex and outdoor branding with vibrant colors.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Vinyl Printing",
    text: "Premium vinyl graphics for shops, offices, vehicles and branding applications.",
  },
  {
    icon: <FaEye />,
    title: "One Way Vision",
    text: "Professional perforated glass graphics for storefronts and commercial buildings.",
  },
  {
    icon: <FaLightbulb />,
    title: "Glow Sign Boards",
    text: "LED acrylic sign boards with premium finishing.",
  },
  {
    icon: <FaBullhorn />,
    title: "Outdoor Advertising",
    text: "Hoardings, billboards and large-format advertising solutions across Mumbai.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Custom Printing",
    text: "Tailor-made printing and signage solutions designed for every business need.",
  },
];

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-title">
          <span>WHAT WE DO</span>
          <h2>Professional Printing Services</h2>
          <p>
            Complete branding, signage and printing solutions delivered with
            quality craftsmanship and reliable service.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <button className="service-link">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;