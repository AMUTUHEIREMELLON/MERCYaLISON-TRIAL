import React from 'react';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header className="header">
      {/* Header content */}
      <div className="menubar">
          <div className="menubar-logo">
              {/* <img src="./assets/img/ind/orphanage-logo.PNG" alt="" width="300" height="100"> */}
              <a className="logo" href="./index.html">
                  <h1>MERCYALISONFOUNDATION</h1>
              </a>
          </div>
          <div className="nav-links">
              <nav className="nav">
                  <ul>
                      <li><a href="index.html">Home</a></li>
                      <li><a href="blog.html">Stories</a></li>
                      <li><a href="gallery.html">About Us</a></li>
                      <li><a href="donate.html">Donate</a></li> {/* Add donation page link */}
                  </ul>
              </nav>
          </div>
          <div className="menu-donate">
              <a className="button button-orange" href="donate.html">Donate</a>
          </div>
      </div>
      {/* Mobile Menu */}
      <div className="mobile-menubar">
          <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="blog.html">Stories</a></li>
              <li><a href="gallery.html">About Us</a></li>
              <li><a href="donate.html">Donate</a></li>
          </ul>
      </div>
    </header>
  );
}

export default Header;
