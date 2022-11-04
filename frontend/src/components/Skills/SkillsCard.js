import { BsCheckCircleFill } from "react-icons/bs";

const SkillsCard = (props) => {
  return (
    <>
      <article className="skills">
        <div>
          <BsCheckCircleFill className="icon" />
          <div className="skill__content">
            <h4 className="skill__font">{props.value}</h4>
            <small className="skill__font">{props.experience}</small>
          </div>
        </div>
      </article>
    </>
  );
};

export default SkillsCard;
