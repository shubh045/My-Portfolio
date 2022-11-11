import { SiCodechef, SiHackerrank, SiGithub } from "react-icons/si";
import { Link } from "react-scroll";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-section" id="footer">
        <h1>Shubham</h1>
        <div className="permalinks">
          <Link to="home" className="footer-nav">
            Home
          </Link>
          <Link to="about" className="footer-nav">
            About
          </Link>
          <Link to="skills" className="footer-nav">
            Skills
          </Link>
          <Link to="experience" className="footer-nav">
            Experience
          </Link>
          <Link to="projects" className="footer-nav">
            Projects
          </Link>
          <Link to="contact" className="footer-nav">
            Contact
          </Link>
        </div>
        <div className="social-icons">
          <a href="https://www.codechef.com/users/zer_0o" target="_blank">
            <SiCodechef />
          </a>
          <a href="https://www.hackerrank.com/famousks232" target="_blank">
            <SiHackerrank />
          </a>
          <a href="https://github.com/shubh045" target="_blank">
            <SiGithub />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
