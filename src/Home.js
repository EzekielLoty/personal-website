import { 
    JavaWordmark, Javascript, Html5, Css3, Python, NodejsWordmark, React, C, Azuresqldatabase,
    Intellij, FileTypeVscode, Linux, MysqlWordmark, Git, Spring, FileTypeFirebase, Aws, AzureWordmark, MicrosoftIcon,
    JupyterWordmark
} from "./assets/Icons";
import { useState, useEffect } from 'react';

function Home() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const fullText = "Hello and Welcome to My Website!";
    
    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + fullText[index]);
                setIndex(index + 1);
            }, 50);
            
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <div className="home-page">
            <div className="home-intro">
                <h2>Ezekiel Loty: Data Scientist | Software Engineer</h2>
                <div className="typing-container">
                    {text}<span className="cursor"><p>|</p></span>
                </div>
            </div>
            
            <div className="home-about">
                <h2>About Me</h2>
                <p>
                Hey! I'm Ezekiel Loty, a second-year Computer Science student at Dalhousie University.
                </p>
                <p>
                I'm passionate about Software Engineering and Data Science, and I've recently started diving into Machine Learning as well.
                I love building projects inspired by my hobbies and try to work on them whenever I get the chance. This website is a place to showcase those projects and share any updates along my career journey. 
                </p>
            </div>
            
            <div className="home-projects">
                <h2>Featured Projects</h2>
                <div className="project-card">
                    <h3>Tree Software</h3>
                    <p>Junior Developer</p>
                    <p className="project-date">January 2025 - April 2025</p>
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
                    <p className="project-date">December 2024 - April 2025</p>
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
                        <Azuresqldatabase />
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
                    <p className="education-info">Expected Graduation: May 2027</p>
                </div>
            </div>
            
            <div className="home-contact">
                <h2>Get In Touch</h2>
                <p>I'm currently seeking a Summer 2025 internship as part of the Dalhousie Co-op Program, and I'm open to exploring new opportunities.
                </p>
                <p>The best way to reach me is via email. I'm usually quick to respond and will get back to you within 1-2 business days at most.</p>
                <p>
                    Email: <a href="mailto:ez276182@dal.ca">ez276182@dal.ca</a>
                </p>
            </div>
        </div>
    );
}

export default Home;