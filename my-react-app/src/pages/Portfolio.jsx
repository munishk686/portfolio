function Portfolio() {
    return (
        <section id="portfolio" className="my-5 px-5">
            <h2 className="text-center mb-4">Portfolio</h2>
            <div className="row g-4">
                {/* Card 1 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img
                            src="/images/photo.jpg"
                            className="card-img-top hover-pop"
                            alt="Project One"
                            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                        />
                        <div className="card-body text-start">
                            <h5 className="card-title">Project One</h5>
                            <p className="card-text">Description of project one.</p>
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>


                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img
                            src="/images/photo.jpg"
                            className="card-img-top hover-pop"
                            alt="Project One"
                            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                        />
                        <div className="card-body text-start">
                            <h5 className="card-title">Project One</h5>
                            <p className="card-text">Description of project one.</p>
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img
                            src="/images/photo.jpg"
                            className="card-img-top hover-pop"
                            alt="Project One"
                            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                        />
                        <div className="card-body text-start">
                            <h5 className="card-title">Project One</h5>
                            <p className="card-text">Description of project one.</p>
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img
                            src="/images/photo.jpg"
                            className="card-img-top hover-pop"
                            alt="Project One"
                            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                        />
                        <div className="card-body text-start">
                            <h5 className="card-title">Project One</h5>
                            <p className="card-text">Description of project one.</p>
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
                {/* Card 5 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow">
                        <img
                            src="/images/photo.jpg"
                            className="card-img-top hover-pop"
                            alt="Project One"
                            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                        />
                        <div className="card-body text-start">
                            <h5 className="card-title">Project One</h5>
                            <p className="card-text">Description of project one.</p>
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Portfolio;