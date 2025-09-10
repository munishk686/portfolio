function Portfolio() {
    return (
        <section id="portfolio" className="my-5 px-5">
            <h2 className="text-center mb-4">Portfolio</h2>
            <div className="row g-4">
                {/* Card 1 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img
                            src="/images/adroit2.png"
                            className="card-img-top hover-pop"
                            alt="Project One"
                            style={{ width: "100%", height: "250px", objectFit: "cover" }}
                        />
                        <div className="card-body text-start">
                            <h5 className="card-title">IoT Adroit Frontend Manager</h5>
                            <p className="card-text font-colour">
                                React, Next JS, AWS, GitHub
                            </p>
                            <p className="card-text">
                                Developed and optimized a web application for R&D, to monitor
                                the status and battery health of IoT devices.
                            </p>
                            <a
                                href="https://github.com/munishk686/Adroit-Frontend-Manager"
                                className="btn btn-primary btn-custom"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img
                            src="/images/CISA.jpg"
                            className="card-img-top hover-pop"
                            alt="Project One"
                            style={{ width: "100%", height: "250px", objectFit: "cover" }}
                        />
                        <div className="card-body text-start">
                            <h5 className="card-title">CISE React Book List App</h5>
                            <p className="card-text font-colour">
                                MongoDB, Express.js, React, Node.js.
                            </p>
                            <p className="card-text">
                                Developed MERN app with secure user login where Users could add,
                                sort, and fetch book data.
                            </p>
                            <a
                                href="https://github.com/munishk686/CISE_React_book"
                                className="btn btn-primary btn-custom"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img
                            src="/images/unity.png"
                            className="card-img-top hover-pop"
                            alt="Project One"
                            style={{ width: "100%", height: "250px", objectFit: "cover" }}
                        />
                        <div className="card-body text-start">
                            <h5 className="card-title">Multiplayer Online Shooting Game</h5>
                            <p className="card-text font-colour">
                                {" "}
                                Unity engine, C#, Firebase
                            </p>
                            <p className="card-text">
                                Created custom game assets and real-time scoreboard.
                            </p>
                            <a
                                href="https://github.com/munishk686/COMP602_1_OrangeKoch"
                                className="btn btn-primary btn-custom"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Card 4 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img
                            src="/images/javaProject.png"
                            className="card-img-top hover-pop"
                            alt="Project One"
                            style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "contain",
                                background: "#f8f9fa",
                            }}
                        />

                        <div className="card-body text-start">
                            <h5 className="card-title">Online Shooping System</h5>
                            <p className="card-text font-colour">
                                Java, Apache Derby (embedded database), and Apache Ant
                            </p>
                            <p className="card-text">
                                Developed an online shopping software that stores items in a cart and processes payments with a responsive UI.
                            </p>
                            <a
                                href="https://github.com/munishk686/JavaFinalProject"
                                className="btn btn-primary btn-custom"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card 5 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img
                            src="/images/cabsOnline.png"
                            className="card-img-top hover-pop"
                            alt="Project One"
                            style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "contain",
                                background: "#f8f9fa",
                            }}
                        />

                        <div className="card-body text-start">
                            <h5 className="card-title">Cabs Online Booking</h5>
                            <p className="card-text font-colour">
                                PHP, MySQL, JavaScript, CSS, Ajax
                            </p>
                            <p className="card-text">
                                Developed a web-based real-time taxi booking system with
                                responsive UI.
                            </p>
                            <a
                                href="https://github.com/munishk686/cabsOnlineBooking"
                                className="btn btn-primary btn-custom"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img
                            src="/images/socialDiary.png"
                            className="card-img-top hover-pop"
                            alt="Project One"
                            style={{
                                width: "100%",
                                height: "250px",                                
                            }} />
                        <div className="card-body text-start">
                            <h5 className="card-title">Social Diary System</h5>
                            <p className="card-text font-colour">HTML, PHP, MySQL, CSS</p>
                            <p className="card-text">
                                Created a status posting and retrieval system for a social
                                networking site.
                            </p>
                            <a href="https://github.com/munishk686/socialDiarySystem" className="btn btn-primary btn-custom">
                                View Project
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 7 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img
                            src="/images/document.png"
                            className="card-img-top hover-pop"
                            alt="Java Shopping Project"
                            style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "contain",
                                background: "#f8f9fa",
                            }}
                        />
                        <div className="card-body text-start">
                            <h5 className="card-title">Documentation Website For IoT Project</h5>
                            <p className="card-text font-colour">
                                VitePress
                            </p>
                            <p className="card-text">
                                A documentation site built with VitePress for the Adroit Manager Frontend dashboard 
                            </p>
                            <a
                                href="https://github.com/munishk686/Document-Website-for-IoT"
                                className="btn btn-primary btn-custom"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Portfolio;