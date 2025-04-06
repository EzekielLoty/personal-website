
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <h3>Ezekiel Loty</h3>
            </div>
            <div className="header-right">
                <p>About</p>
                <p>Contact</p>
                <FaGithub />
                <FaLinkedin />
            </div>
        </div>
    );
}

export default Header;