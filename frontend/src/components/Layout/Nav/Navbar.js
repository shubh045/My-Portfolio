import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineExperiment } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("");

  return (
    <>
      <nav>
        <a
          href={activeNav}
          onClick={() => setActiveNav("#home")}
          className={activeNav === "#home" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href={activeNav}
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#skills"
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#skills" ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <AiOutlineExperiment />
        </a>
        <a
          href="#projects"
          onClick={() => setActiveNav("#projects")}
          className={activeNav === "#projects" ? "active" : ""}
        >
          <AiOutlineProject />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <AiOutlineContacts />
        </a>
      </nav>
    </>
  );
};

export default Navbar;
