import React from 'react';
import './Contact.css'; // Make sure to import the CSS file

function Contact() {
    return (
        <div className="container">
            <h1 className="contact-title">Contact Me</h1> 

            <div className="contact-info">
                <p>Email: <a href="mailto:munishk686@gmail.com">munishk686@gmail.com</a></p>
                <p>Phone: 0272553457</p>
            </div>

            <h2 className="follow-title">Follow Me</h2>
            <ul className="social-links">
                <li><a href="https://www.linkedin.com/in/munishk686" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/munishk686/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
        </div>
    );
}

export default Contact;
