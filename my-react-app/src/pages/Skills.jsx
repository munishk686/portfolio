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
                        <p className="text-start">
                            <img src="/images/php.png" alt="Php" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <strong>PHP</strong></p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <h5 className="text-start"><strong>Web Development</strong></h5>
                        <p className="text-start">
                            <img src="/images/html.png" alt="Html" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <strong>HTML</strong></p>
                        <p className="text-start">
                            <img src="/images/css.png" alt="Css" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <strong>CSS</strong></p>
                        <p className="text-start">
                            <img src="/images/react.png" alt="React" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <strong>React</strong></p>
                        <p className="text-start">
                            <img src="/images/node.png" alt="Node" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <strong>Node.js</strong></p>
                        <p className="text-start">
                            <img src="/images/express.png" alt="Express" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <strong>Express.js</strong></p>
                        <p className="text-start">
                            <img src="/images/nextjs.png" alt="Nextjs" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <strong>Next.js</strong></p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <h5 className="text-start"><strong>Databases</strong></h5>
                        <p className="text-start">
                            <img src="/images/mysql.png" alt="Mysql" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <strong>MySQL</strong></p>
                        <p className="text-start">
                            <img src="/images/mongo.png" alt="Mongo" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <strong>MongoDB</strong></p>
                        <p className="text-start">
                            <img src="/images/oracle.png" alt="Oracle" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <strong>Oracle</strong></p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <h5 className="text-start"><strong>Tools & Technologies</strong></h5>
                        <p className="text-start">
                            <img src="/images/git.png" alt="Git" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <strong>Git</strong></p>
                        <p className="text-start">
                            <img src="/images/figma.png" alt="Figma" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <strong>Figma</strong></p>
                        <p className="text-start">
                            <img src="/images/aws.png" alt="Aws" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <strong>AWS</strong></p>
                        <p className="text-start">
                            <img src="/images/restfull.png" alt="Restfull" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <strong>RESTful API</strong></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;
