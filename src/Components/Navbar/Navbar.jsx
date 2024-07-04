import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Responsive Navbar

  const [isActive, setIsActive] = React.useState(false);
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  // Reload Page

  const handleLinkClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
    window.scrollTo(0, 0);
  };
  return (
    <>
      <header className={`header ${isActive ? "active" : ""}`}>
        <div className="navbar-overlay"></div>
        <div className="logo">
          <div className="mobile-navbar-btn" onClick={toggleNavbar}>
            <i name="ham" className="fa-solid fa-bars mobile-nav-icon"></i>
            <i name="cross" className="fa-solid fa-xmark mobile-nav-icon"></i>
          </div>
          <Link className="logo-name" to={"/"} onClick={handleLinkClick("/")}>
            <h2>तन्नों रुद्र: प्रचोदयात्</h2>
          </Link>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <Link className="navlink" to={"/"} onClick={handleLinkClick("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className="navlink"
                to={"/about"}
                onClick={handleLinkClick("/about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="navlink"
                to={"/priest"}
                onClick={handleLinkClick("/priest")}
              >
                Priest
              </Link>
            </li>
            <li>
              <Link
                className="navlink"
                to={"/reach"}
                onClick={handleLinkClick("/reach")}
              >
                How To Reach
              </Link>
            </li>
            <li>
              <Link
                className="navlink"
                to={"/gallery"}
                onClick={handleLinkClick("/gallery")}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="navlink"
                to={"/contact"}
                onClick={handleLinkClick("/contact")}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="navlink live-link"
                to={"/live"}
                onClick={handleLinkClick("/live")}
              >
                Live
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
