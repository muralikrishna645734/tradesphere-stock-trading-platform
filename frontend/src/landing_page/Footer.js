import React from "react";

function Footer() {
  return (
    <footer
      className="text-light pt-5 pb-3 mt-5"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="container">
        <div className="row gy-5">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6">
            <h2 className="fw-bold mb-3 text-white">
              Zerodha<span className="text-primary">.</span>
            </h2>

            <p className="text-light-emphasis" style={{ lineHeight: "1.8" }}>
              India’s largest stock broker built for modern investors and
              traders. Experience powerful trading platforms, low brokerage,
              and seamless investing.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-4">
              <a
                href="#"
                className="text-white fs-4"
                style={{ transition: "0.3s" }}
              >
                <i className="fa fa-facebook"></i>
              </a>

              <a href="#" className="text-white fs-4">
                <i className="fa fa-twitter"></i>
              </a>

              <a href="#" className="text-white fs-4">
                <i className="fa fa-instagram"></i>
              </a>

              <a href="#" className="text-white fs-4">
                <i className="fa fa-linkedin"></i>
              </a>

              <a href="#" className="text-white fs-4">
                <i className="fa fa-youtube-play"></i>
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">Company</h5>

            <ul className="list-unstyled">
              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-light-emphasis"
                >
                  About
                </a>
              </li>

              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-light-emphasis"
                >
                  Products
                </a>
              </li>

              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-light-emphasis"
                >
                  Pricing
                </a>
              </li>

              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-light-emphasis"
                >
                  Careers
                </a>
              </li>

              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-light-emphasis"
                >
                  Press & Media
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4">Support</h5>

            <ul className="list-unstyled">
              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-light-emphasis"
                >
                  Contact Us
                </a>
              </li>

              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-light-emphasis"
                >
                  Support Portal
                </a>
              </li>

              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-light-emphasis"
                >
                  FAQs
                </a>
              </li>

              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-light-emphasis"
                >
                  Downloads
                </a>
              </li>

              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-light-emphasis"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4">Get In Touch</h5>

            <p className="text-light-emphasis mb-3">
              <i className="fa fa-map-marker me-2"></i>
              Bangalore, Karnataka, India
            </p>

            <p className="text-light-emphasis mb-3">
              <i className="fa fa-phone me-2"></i>
              +91 9876543210
            </p>

            <p className="text-light-emphasis mb-3">
              <i className="fa fa-envelope me-2"></i>
              support@zerodha.com
            </p>

            {/* Newsletter */}
            <div className="mt-4">
              <h6 className="fw-semibold mb-3">Subscribe</h6>

              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />

                <button className="btn btn-primary">
                  <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-secondary my-4" />

        {/* Bottom Footer */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-light-emphasis">
              © 2026 Zerodha Clone. All Rights Reserved.
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <a
              href="#"
              className="text-decoration-none text-light-emphasis me-4"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-decoration-none text-light-emphasis me-4"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="text-decoration-none text-light-emphasis"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;