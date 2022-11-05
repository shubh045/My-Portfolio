import PortfolioImg from "../../assets/img/Portfolio1.png";

const ProjectCard = (props) => {
  return (
    <article className="project" key={props.key}>
      <div className="project-img">
        <img src={props.img} alt="" />
      </div>
      <div>
        <div className="project-content">
          <h4>{props.title}</h4>
          <p>{props.desc}</p>
        </div>
        <div className="project-links">
          <a href={props.github}>Github</a>
          <a href={props.live}>Live Demo</a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
