import { useState } from "react";
import { FaImage, FaMapMarkerAlt } from "react-icons/fa";

const projects = [
  { title: "LED Glow Sign Board", category: "sign" },
  { title: "Flex Printing Banner", category: "flex" },
  { title: "One Way Vision Glass", category: "vinyl" },
  { title: "Outdoor Hoarding", category: "outdoor" },
  { title: "Custom Vinyl Branding", category: "vinyl" },
];

function Gallery() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">

        <div className="section-title">
          <span>OUR PORTFOLIO</span>
          <h2>Recent Printing & Signage Projects</h2>
          <p>
            A showcase of our premium printing and advertising work across
            Bhiwandi.
          </p>
        </div>

        <div className="gallery-filter">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={filter === "sign" ? "active" : ""}
            onClick={() => setFilter("sign")}
          >
            Sign Boards
          </button>

          <button
            className={filter === "flex" ? "active" : ""}
            onClick={() => setFilter("flex")}
          >
            Flex
          </button>

          <button
            className={filter === "vinyl" ? "active" : ""}
            onClick={() => setFilter("vinyl")}
          >
            Vinyl
          </button>

          <button
            className={filter === "outdoor" ? "active" : ""}
            onClick={() => setFilter("outdoor")}
          >
            Outdoor
          </button>
        </div>

        <div className="gallery-grid">
          {filtered.map((item) => (
            <div className="gallery-card" key={item.title}>

              <div className="gallery-image">
                <FaImage />

                <span>Project Image</span>
              </div>

              <div className="gallery-content">
                <h3>{item.title}</h3>

                <p>Premium commercial branding solution with professional finishing.</p>

                <div className="gallery-location">
                  <FaMapMarkerAlt />
                  Bhiwandi, Maharashtra
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;