import Card from "../../components/Card";

function Home() {
    return (
        <div>
            <section id="home">Your experience content here
            <div className="row align-items-center secound">
                <div className="col-md-4">
                    <img src="/photo.jpg" alt="photo" className='img-fluid circle-image' />
                </div>
                <div className="col-md-8 font ">
                    <h1>Munish Kumar</h1>
                    <h3>Software Developer</h3>
                    <p>Proficient in modern web development using React, Next.js, Node.js, and AWS.</p>
                    <p>Experienced in building scalable applications, improving performance, and solving</p>
                    <p>complex technical problems with clean, efficient code.</p>
                    <a
                    href="/CV.pdf"
                    download
                    className="btn btn-primary"
                    style={{ fontSize: '0.9rem' }}
                    >
                    <img
                        src="https://cdn-icons-png.flaticon.com/16/724/724933.png"
                        alt="Download Arrow"
                        width="14"
                        height="14"
                    />
                    Download CV
                    </a>
               </div>
                
            </div>
            <div className="wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svg-wave">
                    <path fill="#ced1ba" fillOpacity="1" d="M0,288L60,266.7C120,245,240,203,360,181.3C480,160,600,160,720,186.7C840,213,960,267,1080,266.7C1200,267,1320,213,1380,186.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>
            </div>
            <div>
                <section id="portfolio">Your portfolio content here
                <h1 className="text-center">Projects</h1>
                <div className="row">
                    <Card
                        title="Project 1"
                        description="This is a project 1"
                        link="https://www.google.com"
                        git="https://www.github.com"
                    />
                    <Card
                        title="Project 2"
                        description="This is a project 2"
                        link="https://www.google.com"
                        git="https://www.github.com"
                    />
                </div>
                </section>
            </div>
         </section>
            <section id="experience">Your experience content here</section>
            <section id="skills">Your skills content here</section>
            <section id="about">Your about content here</section>
            <section id="contact">Your contact content here</section>
        </div>

        
    );
    
}

export default Home;