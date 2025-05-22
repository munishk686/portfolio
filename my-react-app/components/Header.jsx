//import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <Link className="navbar-brand fw-bold text-primary" to="/">Munish Kumar</Link>

                    <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold" to="/about">Experence</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold" to="/about">Skills</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold" to="/about">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold" to="/contact">Contact</Link>
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
