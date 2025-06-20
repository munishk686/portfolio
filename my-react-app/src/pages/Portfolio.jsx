function Portfolio() {
    return (
        <section id="portfolio" className="my-5 px-5">
            <h2 className="text-center mb-4">Portfolio</h2>
            <div className="row g-4">
                {/* Card 1 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img src="/images/project1.png" className="card-img-top" alt="Project 1" />
                        <div className="card-body">
                            <h5 className="card-title">Project One</h5>
                            <p className="card-text">Description of project one.</p>
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img src="/images/project2.png" className="card-img-top" alt="Project 2" />
                        <div className="card-body">
                            <h5 className="card-title">Project Two</h5>
                            <p className="card-text">Description of project two.</p>
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img src="/images/project3.png" className="card-img-top" alt="Project 3" />
                        <div className="card-body">
                            <h5 className="card-title">Project Three</h5>
                            <p className="card-text">Description of project three.</p>
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Portfolio;