import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "X",
    business: "Y",
    text: "Z",
  },
  {
    name: "A",
    business: "B",
    text: "C",
  },
  {
    name: "I",
    business: "S",
    text: "H",
  },
];

function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="container">

        <div className="section-title">
          <span>CLIENT REVIEWS</span>
          <h2>What Our Customers Say</h2>
          <p>
            Trusted by businesses across Bhiwandi.
          </p>
        </div>

        <div className="testimonial-grid">
          {reviews.map((item) => (
            <div className="testimonial-card" key={item.name}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="review-text">“{item.text}”</p>

              <h4>{item.name}</h4>

              <span>{item.business}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;