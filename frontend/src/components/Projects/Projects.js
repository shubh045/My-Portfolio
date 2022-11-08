import ProjectCard from "./ProjectCard";
import "./projects.css";
import PortfolioImg from "../../assets/img/Portfolio1.png";
import portfolioImg from "../../assets/img/Portfolio2.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      img: PortfolioImg,
      title: "My Portfolio Website",
      desc: "This is a portfolio website showing my skills, education etc. This website is developed using Reactjs, CSS and Nodejs.",
      github: "https://github.com/shubh045/My-Portfolio",
      live: "https://shubh045.github.io/My-Portfolio/",
    },
    {
      id: 2,
      img: portfolioImg,
      title: "My Portfolio Website",
      desc: "This is a portfolio website showing my skills, education etc. This website is developed using HTML, Bootstrap and Javascript.",
      github: "https://github.com/shubh045/Portfolio",
      live: "https://shubh045.github.io/Portfolio/MyPortfolio/",
    },
  ];

  return (
    <>
      <section className="project-section" id="projects">
        <h5>Some of my works</h5>
        <h5>My Projects</h5>
        <div className="projects">
          {projects.map(({ id, img, title, desc, github, live }) => (
            <ProjectCard
              key={id}
              img={img}
              title={title}
              desc={desc}
              github={github}
              live={live}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
