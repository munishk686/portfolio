import React from 'react';

function Education() {
    return (
        <section id="education" className="my-5 px-5">
            <h2 className="text-center mb-4">Education</h2>
            <div className="row g-4">
                {/* Card 1 */}
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">

                        <h5 className="text-start">
                            <span className="text-white px-3 py-1 rounded-pill d-inline-block"
                                style={{ backgroundColor: "#007BFF" }}>
                                2025
                            </span>
                        </h5> 
                        <h5 className="text-start text-wrap" style={{ wordBreak: "break-word" }}>
                            Bachelor of Computer and Information Sciences
                        </h5>
                        <p className="text-start mb-1 fst-italic">Software Development Major</p>
                        <h6 className="text-start mb-1">Auckland University of Technology (AUT)</h6>
                        <p className="text-start">
                            Design and develop secure software using modern programming languages,
                            operating systems, networks, and databases.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <h5 className="text-start">
                            <span className="text-white px-3 py-1 rounded-pill d-inline-block"
                                style={{ backgroundColor: "#007BFF" }}>
                                2005
                            </span>
                        </h5>  
                        <h5 className="text-start text-wrap" style={{ wordBreak: "break-word" }}>
                            Certificate in Computing
                        </h5>
                        <h6 className="text-start mb-1">Te Wananga o Aotearoa</h6>
                        <p className="text-start">
                            Introduction to computing, and microsoft office to prepare for
                            further study at the bachelor's level.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Education;
