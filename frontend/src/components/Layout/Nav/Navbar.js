import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineExperiment } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          isDynamic
          duration={500}
          offset={-300}
        >
          <AiOutlineHome />
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-300}
        >
          <AiOutlineUser />
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          offset={-300}
        >
          <BiBook />
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          duration={500}
          offset={-300}
        >
          <AiOutlineExperiment />
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={-300}
        >
          <AiOutlineProject />
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-300}
        >
          <AiOutlineContacts />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
