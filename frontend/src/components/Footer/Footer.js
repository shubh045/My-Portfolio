import { SiCodechef, SiHackerrank, SiGithub } from "react-icons/si";
import { Link } from "react-scroll";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-section" id="footer">
        <h1>Shubham</h1>
        <div className="permalinks">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            isDynamic
            duration={500}
            offset={-500}
            className="footer-nav"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            isDynamic
            duration={500}
            offset={-500}
            className="footer-nav"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            isDynamic
            duration={500}
            offset={-500}
            className="footer-nav"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="Experience"
            spy={true}
            smooth={true}
            isDynamic
            duration={500}
            offset={-500}
            className="footer-nav"
          >
            Experience
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            isDynamic
            duration={500}
            offset={-500}
            className="footer-nav"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            isDynamic
            duration={500}
            offset={-500}
            className="footer-nav"
          >
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
