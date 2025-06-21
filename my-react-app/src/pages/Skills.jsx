function Skills() {
    return (
        <section id="skills" className="my-5 px-5">
            <h2 className="text-center mb-4">Skills</h2>
            <div className="row g-4">
                {/* Card 1 */}
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <h5 className="text-start"><strong>Programming Languages</strong></h5>
                        <p className="text-start">
                        <img src="/images/javascript.png" alt="JavaScript" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                        <strong>JavaScript</strong></p>
                        <p className="text-start">
                        <img src="/images/python.png" alt="Python" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                        <strong>Python</strong></p>
                        <p className="text-start">
                       <img src="/images/java.png" alt="Java" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                        <strong>Java</strong></p>
                        <p className="text-start">
                        <img src="/images/c.png" alt="C" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                        <strong>C</strong></p>
                        <p className="text-start">
                         <img src="/images/c-sharp.png" alt="C-sharp" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                        <strong>C#</strong></p>
                        <p className="text-start">
                        <img src="/images/sql.png" alt="Sql" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                        <strong>SQL</strong></p>
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
