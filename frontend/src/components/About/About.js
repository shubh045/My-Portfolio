import "./About.css";
import MyImg from "../../assets/img/My-img.jpg";
import AboutCard from "./AboutCard";
import { AiOutlineExperiment } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";

const About = () => {
  return (
    <>
      <section className="about">
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
                time="3+ completed"
              />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              reiciendis quod, commodi aliquam, ratione suscipit numquam eveniet
              sunt fugiat veritatis unde obcaecati in dolor eligendi voluptatem
              nulla. Deserunt, repellat ratione!
            </p>
            <a href="#">Let's talk</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
