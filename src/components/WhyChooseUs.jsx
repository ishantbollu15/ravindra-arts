import {
  FaMedal,
  FaClock,
  FaTools,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMedal />,
    title: "Premium Quality",
    text: "We use high-quality materials and advanced printing technology for long-lasting results.",
  },
  {
    icon: <FaClock />,
    title: "Fast Service",
    text: "Quick turnaround without compromising quality for urgent business requirements.",
  },
  {
    icon: <FaTools />,
    title: "Expert Installation",
    text: "Professional fabrication and on-site installation by experienced technicians.",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Since 2010",
    text: "15+ years of experience serving shops, businesses and commercial projects across Mumbai.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section" id="why">
      <div className="container">
        <div className="section-title">
          <span>WHY CHOOSE US</span>
          <h2>Trusted Printing Partner for Every Business</h2>
          <p>
            We combine quality craftsmanship, modern equipment and reliable
            customer service to deliver outstanding branding solutions.
          </p>
        </div>

        <div className="why-grid">
          {features.map((item) => (
            <div className="why-card" key={item.title}>
              <div className="why-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;