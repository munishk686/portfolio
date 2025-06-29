import HowCanIHelp from "./HowCanIHelp";

function Contact() {
    return (
        <section id="contact" className="my-5 px-5">
            <h2 className="text-center mb-4">Contact Me</h2>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <h5 className="text-start font-colour mx-3">Get in Touch</h5>
                        <div className="my-4 mx-3">
                            {/* Location */}
                            <div className="d-flex align-items-center mb-3">
                                <div className="rounded-circle d-flex justify-content-center align-items-center" style={{ backgroundColor: '#007BFF', width: '45px', height: '45px' }}>
                                    <i className="bi bi-geo-alt-fill text-white fs-4"></i>
                                </div>
                                <div className="ms-3 text-start">
                                    <h6 className="mb-0 fw-bold">Location</h6>
                                    <p className="mb-0">Bayview, New Zealand</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="d-flex align-items-center mb-3">
                                <div className="rounded-circle d-flex justify-content-center align-items-center" style={{ backgroundColor: '#007BFF', width: '45px', height: '45px' }}>
                                    <i className="bi bi-envelope-fill text-white fs-4"></i>
                                </div>
                                <div className="ms-3 text-start">
                                    <h6 className="mb-0 fw-bold">Email</h6>
                                    <p className="mb-0">munishk686@gmail.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="d-flex align-items-center mb-3">
                                <div className="rounded-circle d-flex justify-content-center align-items-center" style={{ backgroundColor: '#007BFF', width: '45px', height: '45px' }}>
                                    <i className="bi bi-telephone-fill text-white fs-4"></i>
                                </div>
                                <div className="ms-3 text-start">
                                    <h6 className="mb-0 fw-bold">Phone</h6>
                                    <p className="mb-0">+64-272553457</p>
                                </div>
                            </div>
                            <h5 className="text-start mt-5 my-3 fw-bold">Connect With Me</h5>
                            <div className="d-flex gap-3">
                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/munishk686/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none"
                                >
                                    <div
                                        className="rounded-circle d-flex justify-content-center align-items-center"
                                        style={{ backgroundColor: '#007BFF', width: '45px', height: '45px' }}
                                    >
                                        <i className="bi bi-linkedin text-white fs-4"></i>
                                    </div>
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/munishk686/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none"
                                >
                                    <div
                                        className="rounded-circle d-flex justify-content-center align-items-center"
                                        style={{ backgroundColor: '#007BFF', width: '45px', height: '45px' }}
                                    >
                                        <i className="bi bi-github text-white fs-4"></i>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <HowCanIHelp />
                    </div>
                </div>
            </div>
            <div className="my-4"></div>
        </section>
    );
}

export default Contact;
