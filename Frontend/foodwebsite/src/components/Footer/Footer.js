import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container1">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h3>Branch</h3>
            <Link class="footer-text" to="/sign-up">
              Lucknow{" "}
            </Link>
            <Link class="footer-text" to="/">
              Bhoothnath{" "}
            </Link>
            <Link class="footer-text" to="/">
              Alambagh{" "}
            </Link>
            <Link class="footer-text" to="/">
              Hazratganj{" "}
            </Link>
          </div>
          <div class="footer-link-items">
            <h3>Quick Links</h3>
            <Link class="footer-text" to="/sign-up">
              Home{" "}
            </Link>
            <Link class="footer-text" to="/">
              About{" "}
            </Link>
            <Link class="footer-text" to="/">
              Menu{" "}
            </Link>
            <Link class="footer-text" to="/">
              Order{" "}
            </Link>
          </div>
          <div class="footer-link-items">
            <h3>Contact Us</h3>
            <Link to="/">
              {" "}
              <i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;
              Mumbai,India 400104{" "}
            </Link>
            <Link to="/">
              <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;
              email@gmail.com
            </Link>
            <Link to="/">
              <i class="fa fa-phone" aria-hidden="true"></i>&nbsp; +123-456-7890
            </Link>
            <Link to="/">
              <i class="fa fa-phone" aria-hidden="true"></i>&nbsp; +111-222-333
            </Link>
          </div>
        </div>
      </div>
      <div class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              FoodBox
              <i class="fas fa-pizza-slice" style={{ paddingLeft: 10 }} />
            </Link>
          </div>
          <small class="website-rights">All Rights Reserved</small>
          <div class="social-icons">
            <a
              class="social-icon-link facebook"
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              class="social-icon-link instagram"
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              class="social-icon-link youtube"
              href="https://www.youtube.com"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              class="social-icon-link linkedin"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
