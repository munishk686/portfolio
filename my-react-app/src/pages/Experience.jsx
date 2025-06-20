function Experience() {
    return (
        <section id="experience" className="my-5 px-5">
            <h2 className="text-center mb-4">Experience</h2>
            <div className="row g-4">
                {/* Card 1 */}
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <h5 className="text-start">2023 - Present</h5>
                        <h5 className="text-start text-wrap" style={{ wordBreak: "break-word" }}>
                            Software Developer Intern
                        </h5>
                        <h6 className="text-start mb-1">Tech Solutions Ltd.</h6>
                        <p className="text-start">
                            Developed and maintained web applications using React and Node.js.
                            Collaborated with cross-functional teams to deliver high-quality software solutions.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-6">
                    <div className="card h-100 w-100 p-3 shadow">
                        <h5 className="text-start">2022 - 2023</h5>
                        <h5 className="text-start text-wrap" style={{ wordBreak: "break-word" }}>
                            Junior Web Developer
                        </h5>
                        <h6 className="text-start mb-1">Web Innovations Inc.</h6>
                        <p className="text-start">
                            Assisted in the development of responsive websites and web applications.
                            Gained experience in HTML, CSS, JavaScript, and version control systems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}     
export default Experience;
