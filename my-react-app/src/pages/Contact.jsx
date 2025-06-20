function Contact() {
    return (
        <section id="contact" className="my-5 px-5">
            <h2 className="text-center mb-4">Contact</h2>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <h5 className="text-start">Email</h5>
                        <p className="text-start">
                            <a href="mailto:your.email@example.com">your.email@example.com</a>
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <h5 className="text-start">LinkedIn</h5>
                        <p className="text-start">
                            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/yourprofile
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;                  