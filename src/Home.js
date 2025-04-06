import { 
    JavaWordmark, Javascript, Html5, Css3, Python, NodejsWordmark, React, C, Azuresqldatabase,
    Intellij, FileTypeVscode, Linux, MysqlWordmark, Git, Spring, FileTypeFirebase, Aws, AzureWordmark, MicrosoftIcon,
    JupyterWordmark
} from "./assets/Icons";

function Home() {
    return (
        <div className="home-page">
            <div className="home-intro">
                <h2>Ezekiel Loty: Software Engineer | Data Scientist</h2>
                <p>
                    Computer Science Co-op student at Dalhousie University with a strong academic record (3.97/4.30 GPA) 
                    seeking a Summer 2025 internship. Passionate about creating impactful software and leveraging data science 
                    for real-world solutions.
                </p>
            </div>
            
            <div className="home-about">
                <h2>About Me</h2>
                <p>
                    I'm a second-year Computer Science student at Dalhousie University with a passion for problem-solving 
                    through code. My technical interests span both software engineering and data science, with experience 
                    in full-stack development, database management, and data analysis.
                </p>
                <p>
                    As a Sexton Scholar maintaining a 3.97/4.30 GPA, I balance academic excellence with hands-on project work. 
                    Currently seeking a co-op/internship position for Summer 2025 to apply my skills in a professional environment.
                </p>
            </div>
            
            <div className="home-projects">
                <h2>Featured Projects</h2>
                <div className="project-card">
                    <h3>Tree Software</h3>
                    <p className="project-date">January 2025 - Present</p>
                    <p>
                        Building a web platform for a tree and lumber company client that enables customer interaction, 
                        document sharing, and product purchases using React.js, Node.js, Express, and Firebase.
                    </p>
                    <div className="project-tech">
                        <Javascript />
                        <React />
                        <NodejsWordmark />
                        <FileTypeFirebase />
                    </div>
                </div>
                
                <div className="project-card">
                    <h3>Premier League Analytics API</h3>
                    <p className="project-date">December 2024 - Present</p>
                    <p>
                        Developed a REST API backend service that provides access to Tottenham Hotspur soccer analytics 
                        data stored in MySQL, built with Spring Boot and Java.
                    </p>
                    <div className="project-tech">
                        <JavaWordmark />
                        <Spring />
                        <MysqlWordmark />
                    </div>
                </div>
                
                <div className="project-card">
                    <h3>Soccer Data Scraper</h3>
                    <p className="project-date">December 2024 - January 2025</p>
                    <p>
                        Created a Python-based web scraper to extract Premier League soccer data from FBref using 
                        Pandas, NumPy, and BeautifulSoup, processing the data for use in my analytics API.
                    </p>
                    <div className="project-tech">
                        <Python />
                        <JupyterWordmark />
                    </div>
                </div>
            </div>
            
            <div className="home-skills">
                <h2>Technical Skills</h2>
                <div className="skills-section">
                    <h3>Programming Languages</h3>
                    <div className="skills-languages">
                        <JavaWordmark />
                        <Javascript />
                        <Python />
                        <Html5 />
                        <Css3 />
                        <C />
                    </div>
                </div>
                
                <div className="skills-section">
                    <h3>Frameworks & Libraries</h3>
                    <div className="skills-frameworks">
                        <React />
                        <NodejsWordmark />
                        <Spring />
                    </div>
                </div>
                
                <div className="skills-section">
                    <h3>Tools & Technologies</h3>
                    <div className="skills-technologies">
                        <Git />
                        <Intellij />
                        <FileTypeVscode />
                        <MysqlWordmark />
                        <Azuresqldatabase />
                        <JupyterWordmark />
                        <FileTypeFirebase />
                        <Aws />
                        <AzureWordmark />
                        <Linux />
                        <MicrosoftIcon />
                    </div>
                </div>
            </div>
            
            <div className="home-education">
                <h2>Education</h2>
                <div className="education-card">
                    <h3>Dalhousie University</h3>
                    <p className="degree">Bachelor of Computer Science Co-op Program</p>
                    <p className="education-info">Expected Graduation: May 2027 | GPA: 3.97/4.30 | Sexton Scholar</p>
                    <p>Relevant Coursework: Data Structures & Algorithms, Software Project, Database Management Systems</p>
                </div>
            </div>
            
            <div className="home-contact">
                <h2>Get In Touch</h2>
                <p>Looking for a collaborative and dedicated team member for your Summer 2025 internship? Let's connect!</p>
                <p>Email: ez276182@dal.ca | Phone: (902)-333-3513</p>
            </div>
        </div>
    );
}

export default Home;