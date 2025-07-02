
function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Name & Title */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Munish Kumar</h4>
            <p>Software Developer</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-start">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#education" className="text-white text-decoration-none">Education</a></li>
              <li><a href="#experience" className="text-white text-decoration-none">Experience</a></li>
              <li><a href="#skills" className="text-white text-decoration-none">Skills</a></li>
              <li><a href="#portfolio" className="text-white text-decoration-none">Portfolio</a></li>
              <li><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-4 mb-4 text-start">
            <h5 className="fw-bold">Contact</h5>
            <p><i className="bi bi-telephone-fill me-2"></i>+64 27 255 3457</p>
            <p><i className="bi bi-envelope-fill me-2"></i>munishk686@gmail.com</p>
            <p><i className="bi bi-geo-alt-fill me-2"></i>Bayview, NZ</p>

            <h5 className="fw-bold mt-3">Connect</h5>
            <a href="https://github.com/munishk686" target="_blank" rel="noreferrer" className="text-white me-3 fs-4">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://linkedin.com/in/munishk686" target="_blank" rel="noreferrer" className="text-white fs-4">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <hr className="border-top border-light" />
        <p className="text-center mb-0">&copy; 2025 Munish Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
