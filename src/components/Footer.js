import React from "react";

function Footer() {
  return (
    <nav className="bg-body-tertiary text-white" data-bs-theme="dark">
      <div className="footer-copyright text-center py-3">
        &copy; {new Date().getFullYear()} Copyright: newsapp.com
      </div>
    </nav>
  );
}

export default Footer;
