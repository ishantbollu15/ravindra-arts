function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div>
          <h2>Ravindra Arts</h2>

          <p>
            Creative printing and advertising solutions with 15+ years of
            experience in Flex Printing, Vinyl Graphics, Glow Sign Boards
            and Outdoor Advertising.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h3>Contact</h3>

          <p>+91 9970557501</p>
          <p>+91 8551918934</p>
          <p>ravindrapainters@gmail.com</p>
          <p>Bhiwandi, Maharashtra</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Ravindra Arts. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;