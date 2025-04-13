
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <h3>Ezekiel Loty</h3>
            </div>
            <div className="header-right">
                {/* <p>About</p>
                <p>Contact</p> */}
                <a href="https://github.com/EzekielLoty" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/ezekiel-loty/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
}

export default Header;
