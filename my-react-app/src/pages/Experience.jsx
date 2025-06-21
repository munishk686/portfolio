function Experience() {
    return (
        <section id="experience" className="my-5 px-5">
            <h2 className="text-center mb-4">Experience</h2>
            <div className="row g-4">
                {/* Card 1 */}
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <h5 className="text-start">2003 - Present</h5>
                        <h5 className="text-start text-wrap" style={{ wordBreak: "break-word" }}>
                            <strong>Bus Driver</strong>
                        </h5>
                        <h6 className="text-start mb-1">Ritchies Transport Ltd.</h6>
                        <ul>
                            <li>Ensured safe and reliable transportation for
                                passengers while adhering to schedules.</li>
                            <li>Delivered excellent customer service and maintained
                                a high standard of communication.</li>
                        </ul>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <h5 className="text-start">2023 - 2024</h5>
                        <h5 className="text-start text-wrap" style={{ wordBreak: "break-word" }}>
                            <strong>Front End Developer</strong>
                        </h5>
                        <h6 className="text-start mb-1">Adroit R&D Collaboration</h6>
                        <ul>
                            <li>
                                Developed and optimized a web application for R&D,
                                to monitor the status and battery health of IoT devices.
                                <li>
                                    Utilized technologies such as React, Next.js,
                                    TypeScript, and AWS to enhance performance and
                                    scalability.
                                </li>
                                <li>
                                    Built a web app using React and AWS to monitor IoT
                                    devices.
                                </li>
                                <li>
                                    Used AWS Lambda, authentication, and Resend for
                                    email alerts.
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Experience;
