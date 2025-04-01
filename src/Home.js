import { 
    JavaWordmark, Javascript, Html5, Css3, Python, NodejsWordmark, React, C, Azuresqldatabase,
    Intellij, FileTypeVscode, Linux, MysqlWordmark, PostgresqlWordmark, Git, Spring, FileTypeFirebase, Aws, AzureWordmark, MicrosoftIcon,
    JupyterWordmark
} from "./assets/Icons";

function Home(){

    return(
        <div className="home-page">
            <div className="home-intro">
                <h2>Ezekiel Loty: Software Engineer | Data Scientist</h2>
                <p>Hi! My name is Ezekiel Loty and I'm a second-year co-op Computer Science student passionate about software engineering and data science.
                    I enjoy creating software in areas I am interested in and using my coding skills to analyze different data sets.
                </p>
            </div>
            <div className="home-about">
                <h2>About me</h2>
                <p>
                    Ever since I was little, I've loved math and solving logic puzzles. 
                    In high school, I got into coding and realized I could use my problem-solving skills to build software, which sparked my interest in computer science.
                </p>
                <p>
                    Now at Dalhousie University, I've been learning more about software engineering and data science. 
                    I've explored both backend and frontend development using Java and React and worked with Python data libraries in my data science projects. 
                    Through my personal projects, I've picked up new skills and tried out different technologies, you can check out some of my work here.  
                </p>
                <p>
                    When I'm not coding, I enjoy playing sports, especially soccer and basketball. I also enjoy traveling and seeing new places. 
                    Recently, I've been getting more into machine learning and reinforcment learning, and I'm excited to see where it takes me!
                </p>
            </div>
            <div className="home-skills">
                <div className="skills-languages">
                    <Html5></Html5>
                    <Css3></Css3>
                    <Javascript></Javascript>
                    <React></React>
                    <NodejsWordmark></NodejsWordmark>
                    <JavaWordmark></JavaWordmark>
                    <Python></Python>
                    <C></C>
                    <Azuresqldatabase></Azuresqldatabase>
                </div>
                <div className="skills-technologies">
                    <Intellij></Intellij>
                    <FileTypeVscode></FileTypeVscode>
                    <MysqlWordmark></MysqlWordmark>
                    <JupyterWordmark></JupyterWordmark>
                    <Git></Git>
                    <Spring></Spring>
                    <Aws></Aws>
                    <AzureWordmark></AzureWordmark>
                    <FileTypeFirebase></FileTypeFirebase>
                    <MicrosoftIcon></MicrosoftIcon>
                    <Linux></Linux>
                </div>
            </div>
            <div className="home-projects">
                <p>In progress</p>
            </div>
        </div>
    );
}

export default Home;