import { useState } from "react";

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(true);

  const toggleNavbar = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          <a
            className="navbar-brand fw-bold text-primary"
            href="#home"
            onClick={handleNavCollapse}
          >
            Munish Kumar
          </a>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active fw-bold"
                href="#home"
                onClick={handleNavCollapse}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active fw-bold"
                href="#education"
                onClick={handleNavCollapse}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active fw-bold"
                href="#experience"
                onClick={handleNavCollapse}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active fw-bold"
                href="#skills"
                onClick={handleNavCollapse}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active fw-bold"
                href="#portfolio"
                onClick={handleNavCollapse}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active fw-bold"
                href="#about"
                onClick={handleNavCollapse}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active fw-bold"
                href="#contact"
                onClick={handleNavCollapse}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active fw-bold"
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavCollapse}
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
