function Skills() {
    return (
        <section id="skills" className="my-5 px-5">
            <h2 className="text-center mb-4">Skills</h2>
            <div className="row g-4">
                {/* Card 1 */}
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <h5 className="text-start">Programming Languages</h5>
                        <p className="text-start">JavaScript, Python, Java, C++, C#, SQL</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <h5 className="text-start">Web Development</h5>
                        <p className="text-start">HTML, CSS, React, Node.js, Express.js</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <h5 className="text-start">Databases</h5>
                        <p className="text-start">MySQL, MongoDB, PostgreSQL</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <h5 className="text-start">Tools & Technologies</h5>
                        <p className="text-start">Git, Docker, AWS, Firebase</p>
                    </div>
                </div>
            </div>
        </section>
    );
}   
export default Skills;
