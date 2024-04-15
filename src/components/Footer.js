import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <section>
        <div className="container-footer">
          <div className="footer-card-items">
            <div className="footer-card">
              <div className="footer-card-header">
                <h2>Links</h2>
              </div>
              <div className="footer-card-body">
                <p><a href="./index.html">Home</a></p>
                <p><a href="./gallery.html">About Us</a></p>
                <p><a href="mailto:your@email.com">Contact Us</a></p> {/* Add email link */}
                <p><a href="./donate.html">Donate</a></p>
              </div>
            </div>
            <div className="footer-card">
              <div className="footer-card-header">
                <h2>Connect with Us</h2>
              </div>
              <div className="footer-card-body">
                <p><a href="https://twitter.com/your-twitter">Twitter</a></p> {/* Add your social media links */}
                <p><a href="https://facebook.com/your-facebook">Facebook</a></p>
                <p><a href="https://instagram.com/your-instagram">Instagram</a></p>
              </div>
            </div>
            <div className="footer-card">
              <div className="footer-card-header">
                <h2>Address</h2>
              </div>
              <div className="footer-card-body">
                <p>Your Address Here</p> {/* Add your address */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
