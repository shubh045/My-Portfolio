import "./About.css";
import MyImg from "../../assets/img/My-img.jpg";
import AboutCard from "./AboutCard";
import { AiOutlineExperiment } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { Link } from "react-scroll";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h5>Get to know</h5>
        <h5>About me</h5>
        <div className="abt-me">
          <div className="about-me">
            <div className="abt-img">
              <img src={MyImg} alt="me" />
            </div>
          </div>

          <div className="abt-right">
            <div className="abt__card">
              <AboutCard
                icon={AiOutlineExperiment}
                value="Experience"
                time="Fresher"
              />
              <AboutCard
                icon={AiOutlineProject}
                value="Projects"
                time="2 completed"
              />
            </div>
            <p>
              I am an Engineering student pursuing mine under graduation degree
              in the Computer science branch. I am always ready to learn new
              things and technologies. I know C/C++ and I have basic
              understanding of Data Structures & Algorithm. I am also good in
              Frontend development and have a good knowledge of Backend
              development also. I have one month internship experience with
              Block8, in MERN stack technology.
            </p>

            <Link to="contact">Let's Talk</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
