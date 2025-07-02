//import React from "react";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <a className="navbar-brand fw-bold text-primary" to="/">Munish Kumar</a>

                    <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                        <li className="nav-item">
                            <a className="nav-link active fw-bold" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active fw-bold" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active fw-bold" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active fw-bold" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active fw-bold" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active fw-bold" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active fw-bold" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active fw-bold" href="/CV.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
