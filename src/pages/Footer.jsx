import React from "react";
import "../style/style.css"; // Import a separate CSS file for styling

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Abu Sufian. All Rights Reserved.
        </p>
        <p className="disclaimer">
          Disclaimer: This website is for demonstration purposes only.
        </p>
      </div>
    </div>
  );
};

export default Footer;
