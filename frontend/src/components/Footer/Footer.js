import { SiCodechef, SiHackerrank, SiGithub } from "react-icons/si";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-section" id="footer">
        <h1>Shubham</h1>
        <div className="permalinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
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
